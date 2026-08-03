#!/usr/bin/env python3
"""Kembalikan warna tab sheet setelah berkas dihitung ulang LibreOffice.

Kenapa perlu langkah tersendiri:

LibreOffice Calc membuang sebagian warna tab ketika berkas dibuka dan
disimpan ulang — pada percobaan terakhir hanya 4 dari 12 yang selamat.
Menyimpan ulang dengan openpyxl bukan jalan keluar, karena openpyxl menulis
rumus tanpa nilai hasilnya, sehingga hasil hitung-ulang tadi justru hilang.

Jadi berkasnya ditambal langsung pada XML-nya: hanya atribut tabColor yang
disentuh, sel dan nilai tersimpan tidak dibaca sama sekali. Setiap sheet yang
diubah diurai ulang sebagai XML sebelum berkas ditulis — bila ada satu saja
yang rusak, berkas aslinya dibiarkan utuh.

Jalankan setelah recalc.py:
    python3 poles_xlsx.py Aplikasi_Team_Pemenangan_v2.xlsx
"""

from __future__ import annotations

import pathlib
import re
import shutil
import sys
import xml.etree.ElementTree as ET
import zipfile

# warna tab tiap sheet — disalin dari build_workbook.TAB_WARNA
TAB_WARNA = {
    "MENU": "C00000", "DATABASE": "1F3864", "CARI": "2E75B6",
    "REKAP": "1F6F5C", "TARGET": "9C6A15", "VALIDASI": "A33A2A",
    "CETAK": "3F5A8A", "KARTU": "5B4B8A", "ABSENSI": "2E6B7A",
    "PROFIL": "7A2E4A", "SINKRON": "1F6F5C", "REFERENSI": "6B6B6B",
    "PETUNJUK": "444444",
}


def peta_sheet(z: zipfile.ZipFile) -> dict[str, str]:
    """Nama sheet -> nama berkas XML-nya di dalam paket."""
    wb = z.read("xl/workbook.xml").decode("utf-8")
    rels = z.read("xl/_rels/workbook.xml.rels").decode("utf-8")
    id_ke_target = dict(re.findall(r'Id="([^"]+)"[^>]*Target="([^"]+)"', rels))
    hasil = {}
    for nama, rid in re.findall(
            r'<sheet[^>]*name="([^"]+)"[^>]*r:id="([^"]+)"', wb):
        target = id_ke_target.get(rid, "")
        if target:
            hasil[nama] = "xl/" + target.lstrip("/")
    return hasil


def warnai(xml: str, rgb: str) -> str:
    """Pasang <tabColor> pada <sheetPr>, membuat elemennya bila belum ada.

    Tidak memakai regex untuk membedakan tag yang menutup sendiri: bentuk
    <sheetPr .../> dan <sheetPr ...> hanya berbeda satu garis miring, dan
    garis miring itu ikut tertangkap pola atribut mana pun yang wajar —
    persis itulah yang sempat merusak berkasnya. Batas tag dicari langsung.
    """
    tag = f'<tabColor rgb="FF{rgb}"/>'

    if "<tabColor" in xml:
        return re.sub(r"<tabColor[^>]*/>", tag, xml, count=1)

    i = xml.find("<sheetPr")
    if i >= 0:
        j = xml.find(">", i)
        if j < 0:
            return xml
        menutup_sendiri = xml[j - 1] == "/"
        if menutup_sendiri:
            atribut = xml[i + len("<sheetPr"):j - 1]
            return xml[:i] + f"<sheetPr{atribut}>{tag}</sheetPr>" + xml[j + 1:]
        # tabColor wajib menjadi anak pertama <sheetPr> menurut skema OOXML
        return xml[:j + 1] + tag + xml[j + 1:]

    # belum ada <sheetPr> sama sekali — harus disisipkan sebelum <dimension>,
    # dan bila itu pun tidak ada, tepat sesudah tag <worksheet ...> pembuka
    sisip = f"<sheetPr>{tag}</sheetPr>"
    d = xml.find("<dimension")
    if d >= 0:
        return xml[:d] + sisip + xml[d:]
    w = xml.find("<worksheet")
    if w < 0:
        return xml
    j = xml.find(">", w)
    return xml[:j + 1] + sisip + xml[j + 1:]


def periksa_nilai(z: zipfile.ZipFile) -> None:
    """Pastikan berkas sudah berisi hasil rumus, bukan hanya rumusnya.

    Sejak hitung-ulang saat dibuka dimatikan, berkas tanpa nilai tersimpan akan
    tampil kosong seluruhnya di Excel — dan itu baru ketahuan setelah sampai di
    tangan pemakai. Jadi diperiksa di sini: sheet MENU harus punya sel <v> pada
    rumusnya."""
    nama = [n for n in z.namelist() if n.startswith("xl/worksheets/sheet")]
    berumus = bernilai = 0
    for n in nama:
        x = z.read(n).decode("utf-8", "ignore")
        berumus += x.count("<f>")
        bernilai += x.count("</f><v>")
    if berumus and bernilai * 10 < berumus:
        raise SystemExit(
            f"GAGAL: {berumus} rumus tetapi hanya {bernilai} yang punya nilai "
            "tersimpan. Jalankan recalc.py lebih dulu — tanpa itu berkasnya "
            "akan tampil kosong di Excel.")


def poles(path: pathlib.Path) -> int:
    with zipfile.ZipFile(path) as z:
        periksa_nilai(z)
        peta = peta_sheet(z)
        urutan = z.namelist()
        isi = {n: z.read(n) for n in urutan}

    diubah = 0
    for nama, rgb in TAB_WARNA.items():
        berkas = peta.get(nama)
        if not berkas or berkas not in isi:
            print(f"  lewat: sheet {nama} tidak ditemukan di dalam berkas")
            continue
        xml = isi[berkas].decode("utf-8")
        baru = warnai(xml, rgb)
        if baru == xml:
            continue
        # jangan pernah menulis XML yang tidak bisa diurai — lebih baik gagal
        # sekarang daripada berkasnya rusak dan baru ketahuan saat dibuka
        try:
            ET.fromstring(baru)
        except ET.ParseError as e:
            raise SystemExit(f"GAGAL: XML sheet {nama} rusak setelah ditambal ({e})")
        isi[berkas] = baru.encode("utf-8")
        diubah += 1

    sementara = path.with_suffix(".poles.tmp")
    with zipfile.ZipFile(sementara, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        for n in urutan:
            z.writestr(n, isi[n])
    shutil.move(str(sementara), str(path))
    return diubah


if __name__ == "__main__":
    berkas = pathlib.Path(sys.argv[1] if len(sys.argv) > 1
                          else "Aplikasi_Team_Pemenangan_v2.xlsx")
    n = poles(berkas)
    print(f"warna tab dipasang ulang pada {n} sheet: {berkas} "
          f"({berkas.stat().st_size // 1024} KB)")
