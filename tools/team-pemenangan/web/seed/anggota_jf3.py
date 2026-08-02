#!/usr/bin/env python3
"""Data awal Team Pemenangan JF Jilid 3 — 52 nama.

Struktur alamat mengikuti keadaan desa:

    KADUS     Dusun 1 / Dusun 2 / Dusun 3 — tiga kadus yang memang ada
    KAMPUNG   Gamprit, Kuda Kuda, Wangkal, Tenjolaut, Putri Melintang
    RT / RW   nomor, dipakai untuk menyaring dan mencetak per RT
    ALAMAT    keterangan tambahan (patokan) — RT/RW sudah menyatu di alamat
    NAMA RT   nama ketua RT: Wandi, Basir, Onin, Ropik, Nemin, Engkus
    NAMA RK   nama ketua RK: Niman
    NAMA KADUS nama kadus: Markum

Baris asli tetap disimpan pada kolom CATATAN supaya tidak ada keterangan yang
hilang dan mudah diperiksa ulang.

Yang belum ada di sumber dibiarkan kosong — NIK, No. KK, no. HP, tanggal lahir,
jenis kelamin, TPS, dan pembagian kadus tidak ditebak.

Jalankan:  python3 anggota_jf3.py [keluaran.json]
"""

from __future__ import annotations

import json
import pathlib
import sys

# nama, kampung, rt, rw, (namaRt, namaRk, namaKadus), jabatan, baris asli
ANGGOTA = [
    ("GURU BADRI", "Kp. Tenjolaut", "001", "001", ("", "", ""), "", "Guru Badri Kp. Tenjolaut RT 001/001"),
    ("IDRUS KAMSENO", "Kp. Gamprit", "", "", ("", "", ""), "Ketua Team", "Idrus Kamseno Kp. Gamprit"),
    ("ALI IBRO MALISI", "Kp. Tenjolaut", "", "", ("", "", ""), "", "Ali Ibro Malisi Kp Tenjolaut"),
    ("MURDIN (BENGKUNG)", "Kp. Gamprit", "", "", ("", "", ""), "", "Murdin/bengkung gamprit"),
    ("RUSTADI", "Kp. Wangkal", "", "", ("", "", ""), "", "Rustadi kp wangkal"),
    ("ABDUL MANAN", "Kp. Kuda Kuda", "", "", ("", "", ""), "", "Abdul manan kuda kuda"),
    ("IJAH", "Kp. Putri Melintang", "", "", ("", "", ""), "", "Ijah mmh putri melintang"),
    ("JEBAG", "Kp. Kuda Kuda", "001", "003", ("", "", ""), "", "Jebag kuda kuda 01/03"),
    ("DONY", "Kp. Gamprit", "", "", ("", "", ""), "", "Dony gamprit"),
    ("WAWAN", "Kp. Kuda Kuda", "001", "004", ("", "", ""), "", "Wawan kuda kuda Rt 01/04"),
    ("MAS DENI", "", "001", "004", ("", "", ""), "", "Mas Deni RT 01/04"),
    ("HARIS", "Kp. Kuda Kuda", "003", "001", ("Basir", "", ""), "", "Haris kuda kuda Rt003/001 Rt basir"),
    ("NELIH", "Kp. Wangkal", "004", "006", ("", "", ""), "", "Nelih wangkal 04/06"),
    ("RUDI", "Kp. Gamprit", "", "", ("Wandi", "", ""), "", "Rudi kp gamprit RT wandi"),
    ("NIMAN", "Kp. Gamprit", "002", "005", ("", "Niman", ""), "Ketua RK", "RK NIMAN RT 002/ RW 005 kp gamprit"),
    ("RENALDI", "Kp. Gamprit", "", "", ("Wandi", "", ""), "", "Renaldi kp gamprit RT wandi"),
    ("JAYA", "Kp. Wangkal", "004", "006", ("", "", ""), "", "Jaya kp wangkal RT 04/06"),
    ("ADE RINO", "Kp. Gamprit", "", "", ("Wandi", "", ""), "", "Ade Rino kp gamprit RT wandi"),
    ("WINDA", "Kp. Kuda Kuda", "", "", ("Onin", "", ""), "", "Winda kp kuda kuda RT onin"),
    ("HERMAN BOLON", "Kp. Gamprit", "", "", ("Wandi", "", ""), "", "Herman Bolon kp gamprit RT wandi"),
    ("TASBIH (BODONG)", "Kp. Wangkal", "", "", ("Nemin", "", ""), "", "Tasbih/bodong kp wangkal RT nemin"),
    ("MARDI", "Kp. Wangkal", "005", "006", ("", "", ""), "", "Mardi kp wangkal RT 05/06"),
    ("OTIH (AAL)", "Kp. Gamprit", "", "", ("Wandi", "", ""), "", "Otih/aal kp gamprit RT wandi"),
    ("KANDI", "Kp. Gamprit", "", "", ("Wandi", "", ""), "", "Kandi gamprit RT wandi"),
    ("EMIN (KOJEK)", "Kp. Wangkal", "004", "006", ("", "", ""), "", "Emin/Kojek kp wangkal RT 04/06"),
    ("KET NALIH", "Kp. Wangkal", "004", "006", ("", "", ""), "", "Ket Nalih kp wangkal RT 04/06"),
    ("FEI", "", "004", "001", ("", "", ""), "", "Fei RT 004/001"),
    ("AAL", "", "004", "002", ("Onin", "", ""), "", "Aal rt. 04/02 rt. Onin"),
    ("OMAN", "", "003", "002", ("", "", ""), "", "Oman RT. 003/002"),
    ("WACEP ACENK", "", "003", "003", ("", "", ""), "", "Wacep Acenk RT. 003/003"),
    ("A. AZIZ MAULANA", "", "002", "002", ("", "", ""), "", "A. Aziz Maulana RT. 002/002"),
    ("MARKUM", "", "", "", ("", "", "Kadus 3"), "Kadus", "Kadus MARKUM Dusun 3"),
    ("ANAH", "", "004", "002", ("Onin", "", ""), "", "Anah RT.04/02 .RT onin"),
    ("SUGENG", "", "004", "002", ("Onin", "", ""), "", "Sugeng RT.04/02.rt onin"),
    ("YUSRON EFENDI", "Kp. Kuda Kuda", "003", "001", ("Basir", "", ""), "", "Yusron Efendi Kp Kuda2 003/001 Bpk RT. Basir"),
    ("SLAMET", "", "005", "002", ("", "", ""), "", "Slamet RT. 005/002 gy"),
    ("MUMUN MULYASAROH", "", "004", "002", ("", "", ""), "", "Mumun mulyasaroh rt04/02"),
    ("SUFI NURFAZRI (JAPUT)", "", "", "", ("", "", ""), "", "Sufi Nurfazri/Japut"),
    ("DEDE PARIDA", "", "", "", ("", "", ""), "", "Dede Parida"),
    ("HENDRA", "Kp. Gamprit", "004", "004", ("", "", ""), "", "Hendra gamprit Rt04/04"),
    ("NENDA (KHENZON)", "Kp. Wangkal", "", "", ("", "", ""), "", "Nenda/khenzon kp wangkal"),
    ("SAIH", "Kp. Wangkal", "005", "006", ("", "", ""), "", "Saih kp wangkal RT 05/06"),
    ("JEBING", "Kp. Kuda Kuda", "", "", ("Basir", "", ""), "", "jebing kuda kuda RT Basir"),
    ("IQWAL M.S", "Kp. Gamprit", "", "", ("Ropik", "", ""), "", "iqwal M.s kp.Gamprit RT ropik"),
    ("HERMAN", "Kp. Gamprit", "", "", ("", "", ""), "", "Herman Kp Gampri"),
    ("WAWAN", "Kp. Gamprit", "004", "002", ("", "", ""), "", "Wawan Gamprit rt04/02"),
    ("DETA NALA SRI M", "Kp. Kuda Kuda", "", "", ("Onin", "", ""), "", "Deta Nala sri M kuda kuda Rt Onin"),
    ("OPIC (ROPIK)", "", "001", "005", ("Opic/Ropik", "", ""), "Ketua RT", "RT Opic / Ropik Rt 001/005"),
    ("KOMARUDIN", "Kp. Wangkal", "", "", ("", "", ""), "", "Komarudin Kp Wangkal"),
    ("ROHADI (ADE)", "Kp. Gamprit", "", "", ("Engkus", "", ""), "", "Rohadi /ade kp gamprit RT engkus"),
    ("ADE PRABOWO", "Kp. Gamprit", "", "", ("Wandi", "", ""), "", "Ade prabowo kp gamprit RT wandi"),
    ("ALI NURDIN", "Kp. Gamprit", "", "", ("Wandi", "", ""), "", "Ali Nurdin kp gamprit RT wandi"),
]

# Struktur pengurus desa. Nomor RT berulang di tiap kadus (RT 01 ada di
# ketiganya), jadi nomor saja tidak cukup — nama pengurusnyalah pembedanya.
PENGURUS = [
    {"kadus": "Kadus 1", "nama": "",
     "rk": [("1", "Maska"), ("2", "Pasni")],
     "rt": [("001", "Ikin Lois"), ("002", "Sarjan"), ("003", "Basir"),
            ("004", "Onin"), ("005", "Tongkat / Kahidir"), ("006", "Sa ari")]},
    {"kadus": "Kadus 2", "nama": "",
     "rk": [("3", "Sutejo"), ("4", "Ilyas")],
     "rt": [("001", "Dedi"), ("002", "Rimun"), ("003", "Adi Ardiansyah"),
            ("004", "Kusnadi")]},
    {"kadus": "Kadus 3", "nama": "Markum",
     "rk": [("5", "Uding"), ("6", "Saiman")],
     "rt": [("001", "Ropic"), ("002", ""), ("003", "Wandy Suwandi"),
            ("004", "Toyib"), ("005", "Nemuin"), ("006", "Sumintra")]},
]

KADUS = [k["kadus"] for k in PENGURUS]
NAMA_RT = [n for k in PENGURUS for _, n in k["rt"] if n]
NAMA_RK = [n for k in PENGURUS for _, n in k["rk"] if n]
KAMPUNG = ["Kp. Gamprit", "Kp. Kuda Kuda", "Kp. Wangkal", "Kp. Tenjolaut",
           "Kp. Putri Melintang"]
JABATAN = ["Ketua Team", "Wakil Ketua", "Sekretaris", "Bendahara", "Kadus",
           "Ketua RK", "Ketua RT", "Koordinator Wilayah", "Koordinator Lapangan",
           "Anggota", "Relawan"]
RT = ["001", "002", "003", "004", "005", "006", "007", "008"]
RW = ["001", "002", "003", "004", "005", "006"]
TPS = [f"{i:02d}" for i in range(1, 21)]


def build():
    members = []
    for i, (nama, kampung, rt, rw, pengurus, jabatan, asli) in enumerate(ANGGOTA):
        nama_rt, nama_rk, nama_kadus = pengurus
        members.append({
            "id": f"jf3-{i + 1:03d}",
            "nama": nama,
            "nik": "",
            "kk": "",
            "jk": "",
            "kadus": nama_kadus,
            "namaRk": nama_rk,
            "namaRt": nama_rt,
            "kampung": kampung,
            "rt": rt,
            "rw": rw,
            "alamat": "",
            "tps": "",
            "jabatan": jabatan or "Anggota",
            "hp": "",
            "tglLahir": "",
            "status": "Aktif",
            "tglGabung": "",
            "perekrut": "",
            "catatan": "asli: " + asli,
            "dibuat": "2026-08-02T00:00:00.000Z",
            "diubah": "2026-08-02T00:00:00.000Z",
        })

    return {
        "aplikasi": "Aplikasi Team Pemenangan",
        "v": 2,
        "disimpan": "2026-08-02T00:00:00.000Z",
        "settings": {
            "identitas": {
                "calon": "JONI FAHAMSYAH",
                "team": "TEAM PEMENANGAN JF JILID 3",
                "periode": "PERIODE 2026 S/D 2034",
                "tahun": "2026",
                "desa": "SUKAKARYA",
                "kecamatan": "",
                "kabupaten": "",
                "ketua": "IDRUS KAMSENO",
                "jabatanTtd": "Ketua Team",
                "motto": "MELAYANI DENGAN HATI, MEMBANGUN DESA UNTUK NEGERI",
                "driveUrl": "https://drive.google.com/drive/folders/14LvBYSGaDkrgcI3R5iJ7mja2uyAj0rR8",
            },
            "kadus": KADUS,
            "pengurus": PENGURUS,
            "namaRk": NAMA_RK,
            "namaRt": NAMA_RT,
            "kampung": KAMPUNG,
            "rt": RT,
            "rw": RW,
            "tps": TPS,
            "jabatan": JABATAN,
            "status": ["Aktif", "Calon", "Nonaktif"],
            # target ditentukan tim, bukan tebakan — biar diisi sendiri
            "target": {k: 0 for k in KAMPUNG},
        },
        "members": members,
    }


if __name__ == "__main__":
    out = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "database.json")
    data = build()
    out.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    ms = data["members"]
    print(f"tersimpan: {out}  ({len(ms)} anggota)")
    print("  belum ada kampung :",
          sum(1 for m in ms if not m["kampung"]),
          "| belum ada kadus:", sum(1 for m in ms if not m["kadus"]))
