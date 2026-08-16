#!/usr/bin/env python3
"""Menyusun berkas yang perlu diunggah bila aplikasi diletakkan di alamat web.

Aplikasinya tetap satu berkas HTML yang sama. Yang ditambahkan di sini hanya
berkas pendamping yang cuma berguna di alamat http/https:

    index.html            aplikasi, persis berkas offline-nya
    manifest.webmanifest  supaya bisa dipasang ke layar utama HP
    sw.js                 supaya tetap terbuka walau sinyal hilang
    icon-192.png          ikon aplikasi saat terpasang
    icon-512.png          ikon besar untuk layar pembuka
    data/database.js      database bawaan, dimuat otomatis seperti versi ZIP
    vercel.json           kepala tanggapan; Vercel memakainya apa adanya

Hasilnya masuk ke folder online/. Isi folder itu bisa langsung ditarik ke
Vercel, Netlify, atau GitHub Pages tanpa perlu dibangun lagi di sana — tidak
ada langkah npm, tidak ada kerangka kerja.

Jalankan:  python3 build_online.py
"""

from __future__ import annotations

import io
import json
import pathlib
import shutil
import sys

import build_html

HERE = pathlib.Path(__file__).parent
KELUAR = HERE / "online"
ASSETS = HERE.parent / "assets"

# Dinaikkan setiap kali aplikasinya berubah. Service worker memakai nama
# simpanan yang mengandung versi ini, jadi versi baru membuang simpanan lama
# alih-alih menyajikan aplikasi kedaluwarsa dari cache.
VERSI = "3"

MANIFEST = {
    "name": "Team Pemenangan — Database Anggota",
    "short_name": "Team Pemenangan",
    "description": "Aplikasi database anggota team pemenangan tingkat desa.",
    "start_url": ".",
    "scope": ".",
    "display": "standalone",
    "orientation": "any",
    "background_color": "#0d1220",
    "theme_color": "#16294b",
    "lang": "id",
    "icons": [
        {"src": "icon-192.png", "sizes": "192x192", "type": "image/png",
         "purpose": "any"},
        {"src": "icon-512.png", "sizes": "512x512", "type": "image/png",
         "purpose": "any"},
        {"src": "icon-512.png", "sizes": "512x512", "type": "image/png",
         "purpose": "maskable"},
    ],
}

SW = """/* Service worker Aplikasi Team Pemenangan.

   Tujuannya satu: aplikasi yang dibuka lewat alamat web tetap terbuka ketika
   sinyal hilang — sama seperti versi yang dibuka dari berkas.

   Aturannya sengaja dibedakan menurut jenis permintaan:

     * Aplikasi (index.html) dan berkas pendampingnya diambil dari simpanan
       lebih dulu, jadi terbuka seketika dan tetap jalan tanpa jaringan.
     * Permintaan ke API database daring TIDAK PERNAH disimpan. Data anggota
       yang basah dari simpanan lebih berbahaya daripada pesan galat: orang
       bisa menghapus anggota yang sudah tidak ada, atau menghitung ulang
       target dari angka kemarin.
*/

const VERSI = '__VERSI__';
const SIMPANAN = 'team-pemenangan-v' + VERSI;
const BAWAAN = [
  '.', 'index.html', 'manifest.webmanifest',
  'icon-192.png', 'icon-512.png', 'data/database.js'
];

self.addEventListener('install', e => {
  // Berkas bawaan disimpan satu per satu: bila salah satu gagal diunduh,
  // sisanya tetap masuk. addAll() menggugurkan semuanya hanya karena satu.
  e.waitUntil((async () => {
    const c = await caches.open(SIMPANAN);
    await Promise.all(BAWAAN.map(u => c.add(u).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const nama = await caches.keys();
    await Promise.all(nama.filter(n => n !== SIMPANAN).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== location.origin) return;          // API luar: lewat saja
  if (url.pathname.includes('/rest/v1/')) return;      // data Supabase: jangan disimpan

  e.respondWith((async () => {
    const tersimpan = await caches.match(req);
    if (tersimpan) {
      // Sajikan yang tersimpan sekarang, perbarui diam-diam untuk kunjungan
      // berikutnya. Pengguna tidak pernah menunggu jaringan.
      e.waitUntil(perbarui(req));
      return tersimpan;
    }
    try {
      return await perbarui(req);
    } catch (err) {
      // Tanpa jaringan dan belum pernah tersimpan: kembalikan aplikasinya,
      // supaya menyegarkan halaman di tengah lapangan tidak berujung layar
      // galat peramban.
      const induk = await caches.match('index.html');
      if (induk) return induk;
      throw err;
    }
  })());
});

async function perbarui(req) {
  const res = await fetch(req);
  if (res && res.ok) {
    const c = await caches.open(SIMPANAN);
    c.put(req, res.clone());
  }
  return res;
}
"""

VERCEL = {
    "$schema": "https://openapi.vercel.sh/vercel.json",
    "headers": [
        {
            "source": "/sw.js",
            "headers": [
                # Service worker tidak boleh ikut tersimpan lama; kalau tidak,
                # aplikasi versi baru bisa tertahan berhari-hari di peramban.
                {"key": "Cache-Control", "value": "public, max-age=0, must-revalidate"},
            ],
        },
        {
            "source": "/(.*)",
            "headers": [
                {"key": "X-Content-Type-Options", "value": "nosniff"},
                {"key": "Referrer-Policy", "value": "same-origin"},
                {"key": "X-Frame-Options", "value": "SAMEORIGIN"},
            ],
        },
    ],
}


def ikon(sumber: pathlib.Path, tujuan: pathlib.Path, ukuran: int) -> bool:
    """Ikon persegi berlatar navy — emblem aslinya berlatar tembus pandang,
    dan di layar utama HP yang gelap ia akan hilang tanpa latar."""
    try:
        from PIL import Image
    except ImportError:
        print("  Pillow tidak ada — ikon dilewati", file=sys.stderr)
        return False
    if not sumber.exists():
        print(f"  {sumber} tidak ada — ikon dilewati", file=sys.stderr)
        return False
    im = Image.open(io.BytesIO(sumber.read_bytes())).convert("RGBA")
    sisi = int(ukuran * 0.78)                   # sisakan ruang di tepi
    im.thumbnail((sisi, sisi), Image.LANCZOS)
    kanvas = Image.new("RGBA", (ukuran, ukuran), (22, 41, 75, 255))
    kanvas.paste(im, ((ukuran - im.width) // 2, (ukuran - im.height) // 2), im)
    kanvas.save(tujuan, "PNG", optimize=True)
    return True


def build(data_path: pathlib.Path | None = None) -> pathlib.Path:
    KELUAR.mkdir(exist_ok=True)
    (KELUAR / "data").mkdir(exist_ok=True)

    build_html.build(KELUAR / "index.html")

    (KELUAR / "manifest.webmanifest").write_text(
        json.dumps(MANIFEST, ensure_ascii=False, indent=2), encoding="utf-8")
    (KELUAR / "sw.js").write_text(SW.replace("__VERSI__", VERSI), encoding="utf-8")
    (KELUAR / "vercel.json").write_text(
        json.dumps(VERCEL, ensure_ascii=False, indent=2), encoding="utf-8")

    ikon(ASSETS / "logo-emblem.png", KELUAR / "icon-192.png", 192)
    ikon(ASSETS / "logo-emblem.png", KELUAR / "icon-512.png", 512)

    sumber = data_path or (HERE / "seed" / "database.json")
    if sumber.exists():
        padat = sumber.read_text(encoding="utf-8")
        (KELUAR / "data" / "database.js").write_text(
            "window.TP_DATA = " + padat + ";\n", encoding="utf-8")
        (KELUAR / "data" / "database.json").write_text(padat, encoding="utf-8")
    else:
        print(f"  {sumber} tidak ada — folder data dikosongkan", file=sys.stderr)

    # supaya folder ini bisa langsung dipakai sebagai akar proyek Vercel
    shutil.copyfile(HERE.parent / "supabase" / "env.example",
                    KELUAR / ".env.example")
    return KELUAR


if __name__ == "__main__":
    out = build()
    total = sum(p.stat().st_size for p in out.rglob("*") if p.is_file())
    print(f"tersimpan: {out}/  ({total / 1024:.0f} KB, "
          f"{sum(1 for p in out.rglob('*') if p.is_file())} berkas)")
    for p in sorted(out.rglob("*")):
        if p.is_file():
            print(f"  {p.stat().st_size / 1024:8.1f} KB  {p.relative_to(out)}")
