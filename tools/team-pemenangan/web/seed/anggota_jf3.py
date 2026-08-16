#!/usr/bin/env python3
"""Data awal Team Pemenangan JF Jilid 3 — 52 nama.

Struktur alamat mengikuti keadaan desa:

    KADUS      Kadus 1 / Kadus 2 / Kadus 3 — tiga kadus yang memang ada
    KAMPUNG    Gamprit, Kuda Kuda, Wangkal, Tenjolaut, Putri Melintang
    RT / RW    nomor; menyatu di alamat tetapi tetap punya filter sendiri
    ALAMAT     keterangan tambahan (patokan)
    NAMA RT    nama ketua RT — 16 orang, lihat PENGURUS di bawah
    NAMA RW    nama ketua RW — 6 orang, RW 001 s/d RW 006
    NAMA KADUS wilayah kadusnya

Nomor RW berlaku satu desa (001-006, tidak mengulang per kadus), jadi nama
ketua RW bisa diisi otomatis dari nomor RW-nya.

Nomor RT berulang di tiap kadus dan Kampung Gamprit dipakai Kadus 2 maupun
Kadus 3, sehingga hanya nama pengurus yang benar-benar membedakan satu RT dari
RT lain. Struktur PENGURUS itulah yang melengkapi kadus, nomor RT, dan kampung
yang kosong pada daftar anggota.

Baris asli tetap disimpan pada kolom CATATAN supaya tidak ada keterangan yang
hilang dan mudah diperiksa ulang.

Yang belum ada di sumber dibiarkan kosong — NIK, No. KK, no. HP, tanggal lahir,
jenis kelamin, dan TPS tidak ditebak.

Jalankan:  python3 anggota_jf3.py [keluaran.json]
"""

from __future__ import annotations

import json
import pathlib
import sys

# nama, kampung, rt, rw, (namaRt, namaRw, namaKadus), jabatan, baris asli
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
    ("NIMAN", "Kp. Gamprit", "002", "005", ("", "Niman", ""), "Ketua RW", "RK NIMAN RT 002/ RW 005 kp gamprit"),
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

# Struktur pengurus desa: kadus -> RW dan RT, lengkap dengan kampungnya.
# Nomor RT berulang di tiap kadus (RT 001 ada di ketiganya) dan Kampung
# Gamprit dipakai oleh Kadus 2 maupun Kadus 3 — jadi hanya nama pengurusnya
# yang benar-benar membedakan satu RT dari RT lain. Nomor RW justru sebaliknya:
# 001 s/d 006 berlaku satu desa, jadi nomor RW cukup untuk menemukan ketuanya.
#
# Format RW: (nomor, nama ketua RW)
# Format RT: (nomor, nama ketua RT, kampung, nomor RW yang membawahi)
PENGURUS = [
    {"kadus": "Kadus 1", "nama": "",
     "rw": [("001", "Maska"), ("002", "Pasni")],
     "rt": [("001", "Ikin Lois", "Kp. Tenjolaut", ""),
            ("002", "Sarjan", "Kp. Tenjolaut", ""),
            ("003", "Basir", "Kp. Kuda Kuda", ""),
            ("004", "Onin", "Kp. Kuda Kuda", ""),
            ("005", "Tongket / Khidir", "Kp. Kuda Kuda", ""),
            ("006", "Saari", "Kp. Kuda Kuda", "")]},
    {"kadus": "Kadus 2", "nama": "",
     "rw": [("003", "Sutejo"), ("004", "Ilyas")],
     "rt": [("001", "Dedi", "Kp. Gamprit", ""),
            ("002", "Rimun", "Kp. Gamprit", ""),
            ("003", "Adi Ardiansyah", "Kp. Gamprit", ""),
            ("004", "Kusnadi", "Kp. Gamprit", "")]},
    {"kadus": "Kadus 3", "nama": "Markum",
     "rw": [("005", "Uding"), ("006", "Saiman")],
     "rt": [("001", "Ropic", "Kp. Gamprit", "005"),
            ("002", "", "Kp. Gamprit", "005"),
            ("003", "Wandy Suwandi", "Kp. Gamprit", "006"),
            ("004", "Nemin", "Kp. Wangkal", "006"),
            ("005", "Toyib", "Kp. Wangkal", "006"),
            ("006", "Sumintra", "Kp. Gamprit", "005")]},
]

# Ejaan pada daftar 52 nama berbeda dengan daftar pengurus resmi. Yang cocok
# kampung dan nomor RT-nya diselaraskan ke ejaan resmi; nama aslinya tetap
# tersimpan di kolom CATATAN.
SELARAS_RT = {
    "Wandi": "Wandy Suwandi",      # Kp. Gamprit, Kadus 3 RT 003
    "Ropik": "Ropic",              # Kp. Gamprit, Kadus 3 RT 001
    "Opic/Ropik": "Ropic",
}

KADUS = [k["kadus"] for k in PENGURUS]
NAMA_RT = [r[1] for k in PENGURUS for r in k["rt"] if r[1]]
NAMA_RW = [r[1] for k in PENGURUS for r in k["rw"] if r[1]]
KAMPUNG = ["Kp. Gamprit", "Kp. Kuda Kuda", "Kp. Wangkal", "Kp. Tenjolaut",
           "Kp. Putri Melintang"]
JABATAN = ["Ketua Team", "Wakil Ketua", "Sekretaris", "Bendahara", "Kadus",
           "Ketua RW", "Ketua RT", "Koordinator Wilayah", "Koordinator Lapangan",
           "Anggota", "Relawan"]
RT = ["001", "002", "003", "004", "005", "006", "007", "008"]
RW = ["001", "002", "003", "004", "005", "006"]
TPS = [f"{i:02d}" for i in range(1, 21)]
KELOMPOK_USIA = [
    {"label": "Di bawah 17 th", "min": 0},
    {"label": "Pemula 17-22 th", "min": 17},
    {"label": "Muda 23-35 th", "min": 23},
    {"label": "Dewasa 36-50 th", "min": 36},
    {"label": "Matang 51-65 th", "min": 51},
    {"label": "Senior 66 th +", "min": 66},
]


def cari_rt(nama_rt):
    """Kembalikan (kadus, nomor RT, kampung, nomor RW) dari struktur pengurus."""
    for k in PENGURUS:
        for no, nm, kp, rw in k["rt"]:
            if nm and nm == nama_rt:
                return k["kadus"], no, kp, rw
    return None


def rw_dari_nomor(no_rw):
    """Nama ketua RW menurut nomornya — nomor RW berlaku satu desa."""
    if not no_rw:
        return ""
    for k in PENGURUS:
        for no, nm in k["rw"]:
            if no == no_rw:
                return nm
    return ""


def kadus_dari_rw(no_rw):
    """Kadus yang membawahi satu nomor RW."""
    if not no_rw:
        return ""
    for k in PENGURUS:
        for no, _ in k["rw"]:
            if no == no_rw:
                return k["kadus"]
    return ""


def build():
    members = []
    for i, (nama, kampung, rt, rw, pengurus, jabatan, asli) in enumerate(ANGGOTA):
        nama_rt, nama_rw, nama_kadus = pengurus
        nama_rt = SELARAS_RT.get(nama_rt, nama_rt)
        # struktur pengurus melengkapi kadus, nomor RT, kampung, dan nomor RW
        info = cari_rt(nama_rt)
        if info:
            kadus_rt, no_rt, kampung_rt, rw_rt = info
            if not nama_kadus:
                nama_kadus = kadus_rt
            if not rt:
                rt = no_rt
            if not kampung:
                kampung = kampung_rt
            if not rw:
                rw = rw_rt
        # nomor RW berlaku satu desa, jadi nama ketua RW dan kadus bisa
        # diturunkan langsung dari nomornya bila belum diisi
        if not nama_rw:
            nama_rw = rw_dari_nomor(rw)
        if not nama_kadus:
            nama_kadus = kadus_dari_rw(rw)
        members.append({
            "id": f"jf3-{i + 1:03d}",
            "nama": nama,
            "nik": "",
            "kk": "",
            "jk": "",
            "kadus": nama_kadus,
            "namaRw": nama_rw,
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
        "v": 3,
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
            "namaRw": NAMA_RW,
            "namaRt": NAMA_RT,
            "kampung": KAMPUNG,
            "rt": RT,
            "rw": RW,
            "tps": TPS,
            "jabatan": JABATAN,
            "status": ["Aktif", "Calon", "Nonaktif"],
            "kelompokUsia": KELOMPOK_USIA,
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
    print("  belum ada kampung :", sum(1 for m in ms if not m["kampung"]),
          "| belum ada kadus:", sum(1 for m in ms if not m["kadus"]),
          "| belum ada nama RW:", sum(1 for m in ms if not m["namaRw"]))
