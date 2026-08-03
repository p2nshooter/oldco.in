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
  supabase/                       <- bahan pindah ke database daring (belum
                                     dipakai; hanya persiapan untuk nanti)
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
di sisi lain. Memindahkannya cukup lewat salin-tempel biasa:

  DARI EXCEL KE HTML
  1. Buka sheet SINKRON pada berkas Excel.
  2. Blok tabelnya mulai dari baris judul, tekan Ctrl+C.
  3. Di aplikasi HTML: menu "Cadangan & Drive" > kotak "Tempel dari Excel",
     tekan Ctrl+V lalu tombol "Proses tempelan".

  DARI HTML KE EXCEL
  1. Di aplikasi HTML: "Cadangan & Drive" > bagian "Salin untuk Excel".
  2. Ada tiga tombol salin. Tekan satu, lalu di sheet DATABASE klik sel yang
     disebut tombolnya dan tekan Ctrl+V.
  3. Ulangi untuk ketiganya: DATABASE!B4, DATABASE!N4, DATABASE!T4.
     Dipecah tiga karena kolom KORWIL, USIA, dan KELOMPOK USIA berisi rumus
     dan menyela di tengah - menempel satu blok panjang akan menimpanya.

Menempel dua kali tidak menggandakan data: NIK dipakai sebagai penanda baris.
Selama NIK belum diisi, isilah lebih dulu bila ingin sering menyinkronkan.

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

FOLDER SUPABASE
---------------
Belum dipakai, dan tidak perlu disentuh untuk pemakaian sehari-hari.
Isinya persiapan bila suatu saat tim ingin database bersama secara daring
(beberapa orang menginput dari HP masing-masing, data langsung menyatu).
Penjelasan lengkapnya ada di supabase/README.md.
"""

KOSONG = {
    "aplikasi": "Aplikasi Team Pemenangan",
    "v": 3,
    "disimpan": "1970-01-01T00:00:00.000Z",
    "settings": None,
    "members": []
}

# Database yang ikut dipaketkan bila tidak ditentukan lain. Tanpa bawaan ini
# paket ikut terkirim dalam keadaan kosong — kelihatan wajar dari luar, tetapi
# baru ketahuan setelah dibuka di perangkat tujuan.
DATA_BAWAAN = HERE / "seed" / "database.json"


# Judul kolom CSV memakai nama yang tampil di aplikasi; pembaca CSV pada
# aplikasi HTML sudah mengenali seluruhnya, dan urutannya sama dengan sheet
# DATABASE pada Excel sehingga bisa ditempel langsung.
CSV_JUDUL = [
    ("NAMA LENGKAP", "nama"), ("NIK KTP", "nik"), ("NO. KK", "kk"),
    ("L/P", "jk"), ("KAMPUNG", "kampung"), ("RT", "rt"), ("RW", "rw"),
    ("ALAMAT", "alamat"), ("NAMA RT", "namaRt"), ("NAMA RW", "namaRw"),
    ("NAMA KADUS", "kadus"), ("TPS", "tps"), ("JABATAN", "jabatan"),
    ("NO. HP", "hp"), ("TGL LAHIR", "tglLahir"), ("STATUS", "status"),
    ("TGL GABUNG", "tglGabung"), ("PEREKRUT", "perekrut"), ("CATATAN", "catatan"),
]


def csv_dari(data: dict) -> str:
    """CSV dibuat dari database yang sama, bukan berkas terpisah — supaya
    tidak bisa tertinggal versi lama tanpa ketahuan."""
    def sel(v):
        s = "" if v is None else str(v)
        return '"' + s.replace('"', '""') + '"' if any(c in s for c in ',";\n') else s

    baris = [",".join(j for j, _ in CSV_JUDUL)]
    for m in data.get("members") or []:
        baris.append(",".join(sel(m.get(k, "")) for _, k in CSV_JUDUL))
    return "﻿" + "\r\n".join(baris) + "\r\n"


def build(keluaran: pathlib.Path, data_path: pathlib.Path | None = None) -> pathlib.Path:
    html_path = HERE / "Aplikasi_Team_Pemenangan.html"
    build_html.build(html_path)              # selalu pakai aplikasi terbaru
    html = html_path.read_text(encoding="utf-8")

    if data_path is None:
        data_path = DATA_BAWAAN
    if data_path.exists():
        data = json.loads(data_path.read_text(encoding="utf-8"))
    else:
        print(f"PERINGATAN: {data_path} tidak ada — paket dibuat tanpa database.")
        data = KOSONG
    padat = json.dumps(data, ensure_ascii=False, indent=2)

    with zipfile.ZipFile(keluaran, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        z.writestr("Aplikasi Team Pemenangan.html", html)
        z.writestr("data/database.js", "window.TP_DATA = " + padat + ";\n")
        z.writestr("data/database.json", padat)
        excel = HERE.parent / "Aplikasi_Team_Pemenangan_v2.xlsx"
        if excel.exists():
            z.writestr("Aplikasi Team Pemenangan.xlsx", excel.read_bytes())
        csv = csv_dari(data)
        z.writestr("data/untuk-excel.csv", csv)
        (HERE / "seed" / "anggota-jf3.csv").write_text(csv, encoding="utf-8")
        # bahan pindah ke database daring — belum dipakai, disertakan supaya
        # tidak perlu dicari lagi bila suatu saat dibutuhkan
        sup = HERE.parent / "supabase"
        for nama in ("schema.sql", "seed.sql", "README.md", "klien-contoh.js",
                     "env.example"):
            berkas = sup / nama
            if berkas.exists():
                z.writestr("supabase/" + nama, berkas.read_text(encoding="utf-8"))
        z.writestr("BACA-DULU.txt", BACA_DULU)
    return keluaran


if __name__ == "__main__":
    # nilai di belakang --data adalah miliknya, bukan nama berkas keluaran
    argv, sumber, lepas = sys.argv[1:], None, []
    i = 0
    while i < len(argv):
        if argv[i] == "--data" and i + 1 < len(argv):
            sumber = pathlib.Path(argv[i + 1])
            i += 2
            continue
        if not argv[i].startswith("--"):
            lepas.append(argv[i])
        i += 1

    out = pathlib.Path(lepas[0] if lepas else "Aplikasi-Team-Pemenangan.zip")
    build(out, sumber)
    with zipfile.ZipFile(out) as z:
        isi = json.loads(z.read("data/database.json").decode("utf-8"))
    print(f"tersimpan: {out}  ({out.stat().st_size / 1024:.0f} KB, "
          f"{len(isi.get('members') or [])} anggota di dalamnya)")
