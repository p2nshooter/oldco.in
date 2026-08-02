#!/usr/bin/env python3
"""Menyusun paket offline Aplikasi Team Pemenangan menjadi satu berkas ZIP.

Isi paket:

    Aplikasi Team Pemenangan.html   aplikasi lengkap, satu berkas
    data/database.js                database yang dimuat otomatis saat dibuka
    data/database.json              database yang sama, untuk cadangan/alat lain
    BACA-DULU.txt                   petunjuk singkat

Database disimpan sebagai berkas .js, bukan .json, karena peramban menolak
fetch() ke berkas tetangga ketika halaman dibuka lewat file:// — sedangkan
memuat berkas lewat tag <script> tetap diizinkan. Itulah satu-satunya jalur
yang bekerja tanpa server.

Pemakaian:
    python3 build_zip.py [keluaran.zip] [--data berkas.json]
"""

from __future__ import annotations

import json
import pathlib
import sys
import zipfile

import build_html

HERE = pathlib.Path(__file__).parent

BACA_DULU = """APLIKASI TEAM PEMENANGAN — PAKET OFFLINE
========================================

Isi paket ini:

  Aplikasi Team Pemenangan.html   <- buka berkas ini (klik dua kali)
  data/database.js                <- database Anda, dimuat otomatis
  data/database.json              <- database yang sama, untuk cadangan
  BACA-DULU.txt                   <- berkas ini

CARA PAKAI
----------
1. Ekstrak (unzip) seluruh isi paket ini ke satu folder.
   JANGAN membuka berkas HTML langsung dari dalam ZIP — folder data
   tidak ikut terbaca sehingga database tidak termuat.
2. Buka "Aplikasi Team Pemenangan.html" dengan Chrome.
3. Database dari folder data akan dimuat otomatis saat pertama dibuka.

DI HP
-----
Ekstrak ZIP memakai aplikasi pengelola berkas (misalnya Files atau ZArchiver),
lalu buka berkas HTML-nya dengan Chrome. Pastikan folder data ikut terekstrak
dan berada di sebelah berkas HTML.

MEMINDAHKAN DATA KE PERANGKAT LAIN
----------------------------------
Di aplikasi, buka menu "Cadangan & Drive" lalu tekan
"Unduh paket ZIP". Paket baru berisi aplikasi + seluruh data terbaru.
Kirim paket itu ke perangkat lain, ekstrak, buka.

PENTING
-------
Selama dipakai, data disimpan di penyimpanan peramban perangkat tersebut,
bukan di dalam berkas HTML. Membersihkan data peramban akan menghapusnya.
Biasakan menekan "Unduh paket ZIP" setiap selesai menginput banyak data.
"""

KOSONG = {
    "aplikasi": "Aplikasi Team Pemenangan",
    "v": 1,
    "disimpan": "1970-01-01T00:00:00.000Z",
    "settings": None,
    "members": []
}


def build(keluaran: pathlib.Path, data_path: pathlib.Path | None = None) -> pathlib.Path:
    html_path = HERE / "Aplikasi_Team_Pemenangan.html"
    build_html.build(html_path)              # selalu pakai aplikasi terbaru
    html = html_path.read_text(encoding="utf-8")

    if data_path and data_path.exists():
        data = json.loads(data_path.read_text(encoding="utf-8"))
    else:
        data = KOSONG
    padat = json.dumps(data, ensure_ascii=False, indent=2)

    with zipfile.ZipFile(keluaran, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        z.writestr("Aplikasi Team Pemenangan.html", html)
        z.writestr("data/database.js", "window.TP_DATA = " + padat + ";\n")
        z.writestr("data/database.json", padat)
        z.writestr("BACA-DULU.txt", BACA_DULU)
    return keluaran


if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    out = pathlib.Path(args[0] if args else "Aplikasi-Team-Pemenangan.zip")
    sumber = None
    if "--data" in sys.argv:
        sumber = pathlib.Path(sys.argv[sys.argv.index("--data") + 1])
    build(out, sumber)
    print(f"tersimpan: {out}  ({out.stat().st_size / 1024:.0f} KB)")
