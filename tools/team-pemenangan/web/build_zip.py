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

  Aplikasi Team Pemenangan.html   <- cara 1: buka dengan Chrome (klik dua kali)
  Aplikasi Team Pemenangan.xlsx   <- cara 2: buka dengan Excel
  data/database.js                <- database, dimuat otomatis oleh versi HTML
  data/database.json              <- database yang sama, untuk cadangan
  data/untuk-excel.csv            <- database yang sama dalam bentuk CSV
  BACA-DULU.txt                   <- berkas ini

CARA PAKAI
----------
1. Ekstrak (unzip) seluruh isi paket ini ke satu folder.
   JANGAN membuka berkas HTML langsung dari dalam ZIP — folder data
   tidak ikut terbaca sehingga database tidak termuat.
2. Pilih salah satu cara:
   - HTML  : buka "Aplikasi Team Pemenangan.html" dengan Chrome.
             Database dari folder data dimuat otomatis.
   - EXCEL : buka "Aplikasi Team Pemenangan.xlsx" dengan Excel.
             Data 52 anggota sudah ada di dalamnya.
3. Buat shortcut ke desktop: klik kanan berkasnya > Send to > Desktop
   (Windows), atau seret ke desktop sambil menahan Alt.

MENYAMAKAN ISI HTML DAN EXCEL
-----------------------------
Keduanya berkas terpisah, jadi mengetik di satu sisi tidak langsung muncul
di sisi lain. Pindahkan lewat CSV:
  - Dari HTML ke Excel : menu Cadangan > Unduh CSV, lalu buka di Excel.
  - Dari Excel ke HTML : simpan sheet DATABASE sebagai CSV, lalu pakai
                         "Pulihkan dari berkas" di menu Cadangan.
Pilih satu sebagai induk data supaya tidak ada dua versi yang berbeda.

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
        excel = HERE.parent / "Aplikasi_Team_Pemenangan_v2.xlsx"
        if excel.exists():
            z.writestr("Aplikasi Team Pemenangan.xlsx", excel.read_bytes())
        csv = HERE / "seed" / "anggota-jf3.csv"
        if csv.exists():
            z.writestr("data/untuk-excel.csv", csv.read_text(encoding="utf-8"))
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
