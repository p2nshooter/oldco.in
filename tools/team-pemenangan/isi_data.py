#!/usr/bin/env python3
"""Mengisi sheet DATABASE Excel dari berkas database.json versi web.

Kedua aplikasi memakai satu sumber data yang sama: web/seed/database.json.
Skrip ini menyalinnya ke workbook Excel sehingga isi keduanya identik.

Pemakaian:
    python3 isi_data.py workbook.xlsx web/seed/database.json
"""

from __future__ import annotations

import json
import pathlib
import sys
import warnings

import openpyxl

warnings.filterwarnings("ignore")

FIRST = 4

# kolom Excel -> kunci pada JSON
KOLOM = {
    "B": "nama", "C": "nik", "D": "kk", "E": "jk", "F": "kampung",
    "G": "rt", "H": "rw", "I": "alamat", "J": "namaRt", "K": "namaRk",
    "L": "kadus", "N": "jabatan", "O": "hp", "P": "tps", "Q": "tglLahir",
    "T": "status", "U": "tglGabung", "V": "perekrut", "W": "catatan",
}
# kolom M (KORWIL), R (USIA), S (KELOMPOK USIA) sengaja dilewati — berisi rumus
TANGGAL = {"Q", "U"}


def isi(xlsx: pathlib.Path, data_path: pathlib.Path) -> int:
    data = json.loads(data_path.read_text(encoding="utf-8"))
    anggota = data["members"]
    st = data.get("settings") or {}

    wb = openpyxl.load_workbook(xlsx)
    ws = wb["DATABASE"]
    for i, m in enumerate(anggota):
        row = FIRST + i
        for col, kunci in KOLOM.items():
            nilai = m.get(kunci, "")
            if not nilai:
                continue
            sel = ws[f"{col}{row}"]
            if col in TANGGAL:
                sel.value = nilai            # biarkan teks bila formatnya bebas
            else:
                sel.value = nilai

    # daftar pilihan REFERENSI mengikuti berkas yang sama
    ref = wb["REFERENSI"]

    def tulis(col: str, nilai: list, mulai: int = 6):
        for j in range(40):
            sel = ref[f"{col}{mulai + j}"]
            sel.value = nilai[j] if j < len(nilai) else None

    tulis("B", st.get("kampung", []))
    tulis("D", st.get("rt", []))
    tulis("E", st.get("rw", []))
    tulis("F", st.get("jabatan", []))
    tulis("H", st.get("tps", []))
    tulis("O", st.get("namaRt", []))
    tulis("P", st.get("namaRk", []))
    tulis("Q", st.get("kadus", []))
    target = st.get("target", {})
    for j, k in enumerate(st.get("kampung", [])):
        ref[f"C{6 + j}"].value = target.get(k, 0)

    ident = st.get("identitas", {})
    peta_id = [("C49", "calon"), ("C50", "team"), ("C51", "periode"),
               ("C52", "tahun"), ("C53", "desa"), ("C54", "kecamatan"),
               ("C55", "kabupaten"), ("C56", "ketua"), ("C57", "jabatanTtd")]
    for sel, kunci in peta_id:
        nilai = ident.get(kunci, "")
        ref[sel].value = nilai if nilai else "-"

    wb.save(xlsx)
    return len(anggota)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(__doc__, file=sys.stderr)
        raise SystemExit(1)
    n = isi(pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2]))
    print(f"terisi: {n} anggota ke {sys.argv[1]}")
