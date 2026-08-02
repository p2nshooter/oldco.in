#!/usr/bin/env python3
"""Menyiapkan aset gambar untuk Aplikasi Team Pemenangan.

Emblem asli berupa PNG persegi berlatar gelap. Bila disisipkan apa adanya ke
lembar kerja putih, yang tampak adalah kotak hitam. Skrip ini menghapus latar
belakang tersebut dan menyimpan versi transparan berukuran wajar.

Tersedia dua metode, dipilih per berkas:

"tepi"     Piksel gelap yang *terhubung ke tepi gambar* ditandai sebagai latar
           (flood fill dari empat sudut). Cincin emas menjadi dinding penahan
           sehingga bidang hitam di dalam emblem tetap utuh. Metode ini paling
           rapi, tetapi hanya bekerja bila cincin luar benar-benar tertutup.

"lingkaran" Untuk emblem yang cincin luarnya terputus — misalnya oleh mahkota —
           flood fill akan merembes ke dalam dan ikut menghapus panel hitamnya.
           Emblem seperti itu dipotong memakai batas lingkaran, lalu digabung
           dengan piksel terang pada pita nama di bawahnya supaya ujung pita
           yang menjorok keluar lingkaran tidak ikut terpotong.

Pemakaian:
    python3 prepare_logos.py            # membaca assets/sumber, menulis assets/
"""

from __future__ import annotations

import pathlib
import sys

from PIL import Image, ImageDraw, ImageFilter

HERE = pathlib.Path(__file__).parent
SRC = HERE / "assets" / "sumber"
OUT = HERE / "assets"

# ambang kegelapan latar; cincin emas emblem jauh di atas nilai ini
DARK = 110
# jari-jari batas pemangkas cahaya latar, sebagai rasio setengah lebar gambar
CLAMP = 0.995


def _cakram(ukuran: tuple[int, int], jari: float) -> Image.Image:
    w, h = ukuran
    m = Image.new("L", ukuran, 0)
    ImageDraw.Draw(m).ellipse(
        [w / 2 - jari, h / 2 - jari, w / 2 + jari, h / 2 + jari], fill=255)
    return m


def hapus_latar(path: pathlib.Path, metode: str = "tepi",
                jari: float = 0.489, pita: tuple[float, float] = (0.68, 0.96),
                clamp: float = CLAMP) -> Image.Image:
    """Kembalikan gambar RGBA dengan latar gelap di sekeliling emblem transparan.

    metode "tepi"      : flood fill dari sudut (butuh cincin luar yang utuh)
    metode "lingkaran" : potong lingkaran ber-jari `jari` (rasio lebar), lalu
                         tambahkan piksel terang pada pita `pita` (rasio tinggi)
    """
    im = Image.open(path).convert("RGB")
    w, h = im.size
    kosong = Image.new("L", (w, h), 0)
    terang = im.convert("L").point(lambda v: 0 if v < DARK else 255)

    if metode == "lingkaran":
        alpha = _cakram((w, h), min(w, h) * jari)
        # ujung pita nama menjorok keluar lingkaran — kembalikan bagian
        # terangnya saja, dibatasi agar cahaya latar di sisi lain tidak ikut
        band = Image.new("L", (w, h), 0)
        ImageDraw.Draw(band).rectangle(
            [0, h * pita[0], w, h * pita[1]], fill=255)
        tambahan = Image.composite(terang, kosong, band)
        tambahan = Image.composite(
            tambahan, kosong, _cakram((w, h), min(w, h) * jari * 1.15))
        alpha = Image.composite(alpha, tambahan, alpha)
    else:
        # peta biner lalu flood fill dari empat sudut: hanya latar yang
        # tersambung ke tepi yang terhapus, bukan bidang hitam di dalam emblem
        kerja = terang.copy()
        for titik in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
            if kerja.getpixel(titik) == 0:
                ImageDraw.floodfill(kerja, titik, 128, thresh=0)
        latar = kerja.point(lambda v: 0 if v == 128 else 255)
        # pangkas sisa cahaya latar di luar lingkaran pembatas
        alpha = Image.composite(latar, kosong, _cakram((w, h), min(w, h) / 2 * clamp))

    # haluskan tepi agar tidak bergerigi saat diperkecil
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.6))
    hasil = im.convert("RGBA")
    hasil.putalpha(alpha)
    return hasil


def potong_kosong(im: Image.Image) -> Image.Image:
    kotak = im.getchannel("A").getbbox()
    return im.crop(kotak) if kotak else im


def simpan(im: Image.Image, nama: str, sisi: int) -> None:
    im = potong_kosong(im)
    im.thumbnail((sisi, sisi), Image.LANCZOS)
    tujuan = OUT / nama
    im.save(tujuan, optimize=True)
    print(f"  {nama:24s} {im.size[0]}x{im.size[1]}  {tujuan.stat().st_size // 1024} KB")


def main() -> int:
    if not SRC.is_dir():
        print(f"folder sumber tidak ditemukan: {SRC}", file=sys.stderr)
        return 1
    OUT.mkdir(parents=True, exist_ok=True)

    # 300 px cukup untuk semua pemakaian: tampil terbesar 200 px pada sheet
    # PROFIL, dan tetap tajam saat dicetak sebagai segel 62 px di kartu.
    tugas = [
        # emblem + pita nama: cincin luarnya terputus mahkota -> metode lingkaran
        ("emblem-nama.png", "lingkaran", [("logo-emblem.png", 300)]),
        # emblem bertagline: cincin luar utuh -> flood fill dari tepi
        ("emblem-tagline.png", "tepi", [("logo-emblem-alt.png", 300)]),
    ]
    print("memproses emblem:")
    for asal, metode, keluaran in tugas:
        berkas = SRC / asal
        if not berkas.exists():
            print(f"  lewati (tidak ada): {asal}")
            continue
        bersih = hapus_latar(berkas, metode=metode)
        for nama, sisi in keluaran:
            simpan(bersih.copy(), nama, sisi)

    poster = SRC / "poster.jpg"
    if poster.exists():
        im = Image.open(poster).convert("RGB")
        im.thumbnail((1100, 1650), Image.LANCZOS)
        im.save(OUT / "poster.jpg", quality=84, optimize=True, progressive=True)
        print(f"  {'poster.jpg':24s} {im.size[0]}x{im.size[1]}  "
              f"{(OUT / 'poster.jpg').stat().st_size // 1024} KB")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
