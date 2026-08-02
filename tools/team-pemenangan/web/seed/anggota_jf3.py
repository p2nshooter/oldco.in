#!/usr/bin/env python3
"""Data awal Team Pemenangan JF Jilid 3 — 52 nama, alamat sudah dipisah.

Alamat aslinya ditulis bebas dalam satu baris, misalnya:

    "Haris kuda kuda Rt003/001 Rt basir"

Dipisah menjadi empat bagian: kampung (Kuda Kuda), RT (003), RW (001), dan
nama ketua RT (Basir). Baris aslinya tetap disimpan di kolom CATATAN supaya
tidak ada keterangan yang hilang dan mudah diperiksa ulang.

Yang belum ada di sumber dibiarkan kosong — NIK, no. HP, tanggal lahir, dan
jenis kelamin tidak ditebak. Sheet Validasi akan menampilkannya sebagai daftar
tugas pelengkapan.

Jalankan:  python3 anggota_jf3.py [keluaran.json]
"""

from __future__ import annotations

import json
import pathlib
import sys

# nama, kampung, rt, rw, ketua_rt, jabatan, baris asli
ANGGOTA = [
    ("GURU BADRI", "Kp. Tenjolaut", "001", "001", "", "", "Guru Badri Kp. Tenjolaut RT 001/001"),
    ("IDRUS KAMSENO", "Kp. Gamprit", "", "", "", "Ketua Team", "Idrus Kamseno Kp. Gamprit"),
    ("ALI IBRO MALISI", "Kp. Tenjolaut", "", "", "", "", "Ali Ibro Malisi Kp Tenjolaut"),
    ("MURDIN (BENGKUNG)", "Kp. Gamprit", "", "", "", "", "Murdin/bengkung gamprit"),
    ("RUSTADI", "Kp. Wangkal", "", "", "", "", "Rustadi kp wangkal"),
    ("ABDUL MANAN", "Kp. Kuda Kuda", "", "", "", "", "Abdul manan kuda kuda"),
    ("IJAH", "Kp. Putri Melintang", "", "", "", "", "Ijah mmh putri melintang"),
    ("JEBAG", "Kp. Kuda Kuda", "001", "003", "", "", "Jebag kuda kuda 01/03"),
    ("DONY", "Kp. Gamprit", "", "", "", "", "Dony gamprit"),
    ("WAWAN", "Kp. Kuda Kuda", "001", "004", "", "", "Wawan kuda kuda Rt 01/04"),
    ("MAS DENI", "", "001", "004", "", "", "Mas Deni RT 01/04"),
    ("HARIS", "Kp. Kuda Kuda", "003", "001", "Basir", "", "Haris kuda kuda Rt003/001 Rt basir"),
    ("NELIH", "Kp. Wangkal", "004", "006", "", "", "Nelih wangkal 04/06"),
    ("RUDI", "Kp. Gamprit", "", "", "Wandi", "", "Rudi kp gamprit RT wandi"),
    ("NIMAN", "Kp. Gamprit", "002", "005", "", "Ketua RK", "RK NIMAN RT 002/ RW 005 kp gamprit"),
    ("RENALDI", "Kp. Gamprit", "", "", "Wandi", "", "Renaldi kp gamprit RT wandi"),
    ("JAYA", "Kp. Wangkal", "004", "006", "", "", "Jaya kp wangkal RT 04/06"),
    ("ADE RINO", "Kp. Gamprit", "", "", "Wandi", "", "Ade Rino kp gamprit RT wandi"),
    ("WINDA", "Kp. Kuda Kuda", "", "", "Onin", "", "Winda kp kuda kuda RT onin"),
    ("HERMAN BOLON", "Kp. Gamprit", "", "", "Wandi", "", "Herman Bolon kp gamprit RT wandi"),
    ("TASBIH (BODONG)", "Kp. Wangkal", "", "", "Nemin", "", "Tasbih/bodong kp wangkal RT nemin"),
    ("MARDI", "Kp. Wangkal", "005", "006", "", "", "Mardi kp wangkal RT 05/06"),
    ("OTIH (AAL)", "Kp. Gamprit", "", "", "Wandi", "", "Otih/aal kp gamprit RT wandi"),
    ("KANDI", "Kp. Gamprit", "", "", "Wandi", "", "Kandi gamprit RT wandi"),
    ("EMIN (KOJEK)", "Kp. Wangkal", "004", "006", "", "", "Emin/Kojek kp wangkal RT 04/06"),
    ("KET NALIH", "Kp. Wangkal", "004", "006", "", "", "Ket Nalih kp wangkal RT 04/06"),
    ("FEI", "", "004", "001", "", "", "Fei RT 004/001"),
    ("AAL", "", "004", "002", "Onin", "", "Aal rt. 04/02 rt. Onin"),
    ("OMAN", "", "003", "002", "", "", "Oman RT. 003/002"),
    ("WACEP ACENK", "", "003", "003", "", "", "Wacep Acenk RT. 003/003"),
    ("A. AZIZ MAULANA", "", "002", "002", "", "", "A. Aziz Maulana RT. 002/002"),
    ("MARKUM", "Dusun 3", "", "", "", "Kadus", "Kadus MARKUM Dusun 3"),
    ("ANAH", "", "004", "002", "Onin", "", "Anah RT.04/02 .RT onin"),
    ("SUGENG", "", "004", "002", "Onin", "", "Sugeng RT.04/02.rt onin"),
    ("YUSRON EFENDI", "Kp. Kuda Kuda", "003", "001", "Basir", "", "Yusron Efendi Kp Kuda2 003/001 Bpk RT. Basir"),
    ("SLAMET", "", "005", "002", "", "", "Slamet RT. 005/002 gy"),
    ("MUMUN MULYASAROH", "", "004", "002", "", "", "Mumun mulyasaroh rt04/02"),
    ("SUFI NURFAZRI (JAPUT)", "", "", "", "", "", "Sufi Nurfazri/Japut"),
    ("DEDE PARIDA", "", "", "", "", "", "Dede Parida"),
    ("HENDRA", "Kp. Gamprit", "004", "004", "", "", "Hendra gamprit Rt04/04"),
    ("NENDA (KHENZON)", "Kp. Wangkal", "", "", "", "", "Nenda/khenzon kp wangkal"),
    ("SAIH", "Kp. Wangkal", "005", "006", "", "", "Saih kp wangkal RT 05/06"),
    ("JEBING", "Kp. Kuda Kuda", "", "", "Basir", "", "jebing kuda kuda RT Basir"),
    ("IQWAL M.S", "Kp. Gamprit", "", "", "Ropik", "", "iqwal M.s kp.Gamprit RT ropik"),
    ("HERMAN", "Kp. Gamprit", "", "", "", "", "Herman Kp Gampri"),
    ("WAWAN", "Kp. Gamprit", "004", "002", "", "", "Wawan Gamprit rt04/02"),
    ("DETA NALA SRI M", "Kp. Kuda Kuda", "", "", "Onin", "", "Deta Nala sri M kuda kuda Rt Onin"),
    ("OPIC (ROPIK)", "", "001", "005", "", "Ketua RT", "RT Opic / Ropik Rt 001/005"),
    ("KOMARUDIN", "Kp. Wangkal", "", "", "", "", "Komarudin Kp Wangkal"),
    ("ROHADI (ADE)", "Kp. Gamprit", "", "", "Engkus", "", "Rohadi /ade kp gamprit RT engkus"),
    ("ADE PRABOWO", "Kp. Gamprit", "", "", "Wandi", "", "Ade prabowo kp gamprit RT wandi"),
    ("ALI NURDIN", "Kp. Gamprit", "", "", "Wandi", "", "Ali Nurdin kp gamprit RT wandi"),
]

KAMPUNG = ["Kp. Gamprit", "Kp. Kuda Kuda", "Kp. Wangkal", "Kp. Tenjolaut",
           "Kp. Putri Melintang", "Dusun 3"]
KETUA_RT = ["Wandi", "Basir", "Onin", "Ropik", "Nemin", "Engkus"]
JABATAN = ["Ketua Team", "Wakil Ketua", "Sekretaris", "Bendahara", "Kadus",
           "Ketua RK", "Ketua RT", "Koordinator Wilayah", "Koordinator Lapangan",
           "Anggota", "Relawan"]


def build():
    members = []
    for i, (nama, kampung, rt, rw, ketua, jabatan, asli) in enumerate(ANGGOTA):
        members.append({
            "id": f"jf3-{i + 1:03d}",
            "nama": nama,
            "nik": "",
            "jk": "",
            "kadus": kampung,
            "rt": rt,
            "rw": rw,
            "ketuaRt": ketua,
            "tps": "",
            "jabatan": jabatan or "Anggota",
            "hp": "",
            "alamat": "",
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
        "v": 1,
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
            "kadus": KAMPUNG,
            "rt": ["001", "002", "003", "004", "005", "006", "007", "008"],
            "rw": ["001", "002", "003", "004", "005", "006"],
            "ketuaRt": KETUA_RT,
            "tps": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
            "jabatan": JABATAN,
            "status": ["Aktif", "Calon", "Nonaktif"],
            # target sengaja 0 — angka target adalah keputusan tim, bukan tebakan
            "target": {k: 0 for k in KAMPUNG},
        },
        "members": members,
    }


if __name__ == "__main__":
    out = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "database.json")
    data = build()
    out.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")

    tanpa_kampung = [m["nama"] for m in data["members"] if not m["kadus"]]
    tanpa_rt = [m["nama"] for m in data["members"] if not m["rt"] and not m["ketuaRt"]]
    print(f"tersimpan: {out}  ({len(data['members'])} anggota)")
    print(f"  belum ada kampung : {len(tanpa_kampung)} -> {', '.join(tanpa_kampung)}")
    print(f"  belum ada RT      : {len(tanpa_rt)} -> {', '.join(tanpa_rt)}")
