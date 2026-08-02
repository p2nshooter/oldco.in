#!/usr/bin/env python3
"""Ubah database.json (aplikasi offline) menjadi seed.sql untuk Supabase.

Keluarannya satu transaksi yang boleh dijalankan berulang kali: data lama
tidak digandakan, hanya diperbarui. Cocok dipakai sebagai "unggah pertama"
setelah schema.sql, maupun sebagai sinkronisasi berkala selama tim masih
bekerja memakai aplikasi offline.

Alur pemindahan anggota memakai tabel sementara: seluruh baris dimasukkan
apa adanya (kampung, RT, RW, kadus masih berupa teks), lalu satu perintah
INSERT ... SELECT menyambungkannya ke tabel wilayah. Dengan begitu nama yang
belum terdaftar di struktur pengurus tidak menggagalkan impor — kolom
penghubungnya dibiarkan kosong dan nomornya tetap tersimpan.

Jalankan:  python3 build_sql.py [database.json] [keluaran.sql]
"""

from __future__ import annotations

import json
import pathlib
import sys

# UUID tetap supaya menjalankan ulang berkas ini tidak membuat tim baru
TIM_ID = "8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21"
KODE_TIM = "jf3-sukakarya"


def q(v) -> str:
    """Teks menjadi literal SQL yang aman."""
    if v is None:
        return "null"
    if isinstance(v, bool):
        return "true" if v else "false"
    if isinstance(v, (int, float)):
        return str(v)
    return "'" + str(v).replace("'", "''") + "'"


def tgl(v) -> str:
    return q(v) + "::date" if v else "null"


def build(data: dict) -> str:
    st = data.get("settings", {})
    ident = st.get("identitas", {})
    pengurus = st.get("pengurus", [])
    kampung = st.get("kampung", [])
    target = st.get("target", {})

    b: list[str] = []
    w = b.append

    w("-- ===================================================================")
    w("--  Data awal Team Pemenangan — dihasilkan dari database.json")
    w("--  Jalankan setelah schema.sql. Aman dijalankan berulang kali.")
    w("-- ===================================================================")
    w("")
    w("begin;")
    w("")

    # ------------------------------------------------------------- tim
    w("-- identitas team ---------------------------------------------------")
    kolom = ["id", "kode", "calon", "team", "periode", "tahun", "desa",
             "kecamatan", "kabupaten", "ketua", "jabatan_ttd", "motto",
             "drive_url"]
    nilai = [q(TIM_ID), q(KODE_TIM), q(ident.get("calon", "")),
             q(ident.get("team", "")), q(ident.get("periode", "")),
             q(ident.get("tahun", "")), q(ident.get("desa", "")),
             q(ident.get("kecamatan", "")), q(ident.get("kabupaten", "")),
             q(ident.get("ketua", "")), q(ident.get("jabatanTtd", "")),
             q(ident.get("motto", "")), q(ident.get("driveUrl", ""))]
    w(f"insert into public.tim ({', '.join(kolom)})")
    w(f"values ({', '.join(nilai)})")
    w("on conflict (id) do update set")
    w(",\n".join(f"  {k} = excluded.{k}" for k in kolom[1:]) + ";")
    w("")

    # --------------------------------------------------------- kampung
    w("-- kampung dan targetnya --------------------------------------------")
    w("insert into public.kampung (tim_id, nama, target, urutan) values")
    baris = [f"  ({q(TIM_ID)}, {q(k)}, {int(target.get(k, 0) or 0)}, {i})"
             for i, k in enumerate(kampung)]
    w(",\n".join(baris))
    w("on conflict (tim_id, nama) do update set")
    w("  target = excluded.target, urutan = excluded.urutan;")
    w("")

    # ----------------------------------------------------------- kadus
    w("-- kadus --------------------------------------------------------------")
    w("insert into public.kadus (tim_id, nama, nama_ketua, urutan) values")
    baris = [f"  ({q(TIM_ID)}, {q(k['kadus'])}, {q(k.get('nama', ''))}, {i})"
             for i, k in enumerate(pengurus)]
    w(",\n".join(baris))
    w("on conflict (tim_id, nama) do update set nama_ketua = excluded.nama_ketua;")
    w("")

    # -------------------------------------------------------------- rw
    w("-- ketua RW — nomor RW berlaku satu desa, jadi unik per tim ----------")
    baris = []
    for k in pengurus:
        for no, nama in k.get("rw", []):
            baris.append(
                f"  ({q(TIM_ID)}, {q(no)}, {q(nama)},"
                f" (select id from public.kadus where tim_id = {q(TIM_ID)}"
                f" and nama = {q(k['kadus'])}))")
    if baris:
        w("insert into public.rw (tim_id, nomor, nama_ketua, kadus_id) values")
        w(",\n".join(baris))
        w("on conflict (tim_id, nomor) do update set")
        w("  nama_ketua = excluded.nama_ketua, kadus_id = excluded.kadus_id;")
        w("")

    # -------------------------------------------------------------- rt
    w("-- ketua RT — nomor RT berulang per kadus, keunikannya per kadus -----")
    baris = []
    for k in pengurus:
        for r in k.get("rt", []):
            no, nama = r[0], r[1]
            kp, no_rw = (r[2] if len(r) > 2 else ""), (r[3] if len(r) > 3 else "")
            baris.append(
                f"  ({q(TIM_ID)},"
                f" (select id from public.kadus where tim_id = {q(TIM_ID)}"
                f" and nama = {q(k['kadus'])}),"
                f" {q(no)}, {q(nama)},"
                f" (select id from public.kampung where tim_id = {q(TIM_ID)}"
                f" and nama = {q(kp)}),"
                f" (select id from public.rw where tim_id = {q(TIM_ID)}"
                f" and nomor = {q(no_rw)}))")
    if baris:
        w("insert into public.rt (tim_id, kadus_id, nomor, nama_ketua,"
          " kampung_id, rw_id) values")
        w(",\n".join(baris))
        w("on conflict (tim_id, kadus_id, nomor) do update set")
        w("  nama_ketua = excluded.nama_ketua,")
        w("  kampung_id = excluded.kampung_id,")
        w("  rw_id      = excluded.rw_id;")
        w("")

    # -------------------------------------------------- daftar pilihan
    w("-- isi dropdown -------------------------------------------------------")
    baris = []
    for jenis in ("tps", "jabatan", "status", "rt", "rw"):
        for i, v in enumerate(st.get(jenis, [])):
            baris.append(f"  ({q(TIM_ID)}, {q(jenis)}, {q(v)}, {i})")
    if baris:
        w("insert into public.daftar_pilihan (tim_id, jenis, nilai, urutan) values")
        w(",\n".join(baris))
        w("on conflict (tim_id, jenis, nilai) do update set urutan = excluded.urutan;")
        w("")

    ku = st.get("kelompokUsia", [])
    if ku:
        w("insert into public.kelompok_usia (tim_id, label, usia_min) values")
        w(",\n".join(f"  ({q(TIM_ID)}, {q(g['label'])}, {int(g['min'])})"
                     for g in ku))
        w("on conflict (tim_id, label) do update set usia_min = excluded.usia_min;")
        w("")

    # --------------------------------------------------------- anggota
    w("-- anggota ------------------------------------------------------------")
    w("-- Tabel sementara menampung baris apa adanya; penyambungan ke tabel")
    w("-- wilayah dikerjakan sesudahnya supaya nama yang belum terdaftar di")
    w("-- struktur pengurus tidak menggagalkan impor.")
    w("create temporary table _impor (")
    w("  nama text, nik text, kk text, jk text, kampung text, kadus text,")
    w("  rt_nomor text, rw_nomor text, nama_rt text, nama_rw text,")
    w("  alamat text, tps text, jabatan text, hp text, tgl_lahir date,")
    w("  status text, tgl_gabung date, perekrut text, catatan text")
    w(") on commit drop;")
    w("")

    ms = data.get("members", [])
    if ms:
        w("insert into _impor values")
        baris = []
        for m in ms:
            baris.append("  (" + ", ".join([
                q(m.get("nama", "")), q(m.get("nik", "")), q(m.get("kk", "")),
                q(m.get("jk", "")), q(m.get("kampung", "")), q(m.get("kadus", "")),
                q(m.get("rt", "")), q(m.get("rw", "")),
                q(m.get("namaRt", "")), q(m.get("namaRw", "")),
                q(m.get("alamat", "")), q(m.get("tps", "")),
                q(m.get("jabatan", "") or "Anggota"), q(m.get("hp", "")),
                tgl(m.get("tglLahir", "")), q(m.get("status", "") or "Aktif"),
                tgl(m.get("tglGabung", "")), q(m.get("perekrut", "")),
                q(m.get("catatan", "")),
            ]) + ")")
        w(",\n".join(baris) + ";")
        w("")

    w("insert into public.anggota (")
    w("  tim_id, nama, nik, kk, jk, kampung_id, kadus_id, rw_id, rt_id,")
    w("  rt_nomor, rw_nomor, alamat, tps, jabatan, hp, tgl_lahir, status,")
    w("  tgl_gabung, perekrut, catatan)")
    w("select")
    w(f"  {q(TIM_ID)}, i.nama, i.nik, i.kk, i.jk,")
    w("  kp.id, kd.id, rw.id, rt.id,")
    w("  i.rt_nomor, i.rw_nomor, i.alamat, i.tps, i.jabatan, i.hp,")
    w("  i.tgl_lahir, i.status, i.tgl_gabung, i.perekrut, i.catatan")
    w("from _impor i")
    w(f"left join public.kampung kp on kp.tim_id = {q(TIM_ID)} and kp.nama = i.kampung")
    w(f"left join public.kadus   kd on kd.tim_id = {q(TIM_ID)} and kd.nama = i.kadus")
    w(f"left join public.rw      rw on rw.tim_id = {q(TIM_ID)} and rw.nomor = i.rw_nomor")
    w(f"left join public.rt      rt on rt.tim_id = {q(TIM_ID)}")
    w("                            and rt.kadus_id = kd.id and rt.nomor = i.rt_nomor")
    w("-- NIK adalah kunci sesungguhnya, tetapi sebagian anggota memang belum")
    w("-- punya NIK. Selama itu, pasangan nama + catatan asli dipakai sebagai")
    w("-- pengenal sementara supaya menjalankan ulang berkas ini tidak")
    w("-- menggandakan barisnya.")
    w("where not exists (")
    w("  select 1 from public.anggota a")
    w(f"   where a.tim_id = {q(TIM_ID)}")
    w("     and ((i.nik <> '' and a.nik = i.nik)")
    w("       or (i.nik  = '' and a.nik = '' and a.nama = i.nama")
    w("           and a.catatan = i.catatan)));")
    w("")
    w("-- baris yang sudah ada: diperbarui, bukan digandakan")
    w("update public.anggota a set")
    w("  nama = i.nama, kk = i.kk, jk = i.jk,")
    w("  rt_nomor = i.rt_nomor, rw_nomor = i.rw_nomor, alamat = i.alamat,")
    w("  tps = i.tps, jabatan = i.jabatan, hp = i.hp, tgl_lahir = i.tgl_lahir,")
    w("  status = i.status, tgl_gabung = i.tgl_gabung, perekrut = i.perekrut,")
    w("  catatan = i.catatan")
    w("from _impor i")
    w(f"where a.tim_id = {q(TIM_ID)} and i.nik <> '' and a.nik = i.nik;")
    w("")
    w("commit;")
    w("")
    w(f"-- ringkas: {len(ms)} anggota, {len(kampung)} kampung, "
      f"{len(pengurus)} kadus,")
    w(f"--          {sum(len(k.get('rw', [])) for k in pengurus)} RW, "
      f"{sum(len(k.get('rt', [])) for k in pengurus)} RT")
    return "\n".join(b) + "\n"


if __name__ == "__main__":
    di = pathlib.Path(sys.argv[1] if len(sys.argv) > 1
                      else pathlib.Path(__file__).parent.parent
                      / "web" / "seed" / "database.json")
    out = pathlib.Path(sys.argv[2] if len(sys.argv) > 2
                       else pathlib.Path(__file__).with_name("seed.sql"))
    data = json.loads(di.read_text(encoding="utf-8"))
    out.write_text(build(data), encoding="utf-8")
    print(f"tersimpan: {out}  ({len(data.get('members', []))} anggota, "
          f"{out.stat().st_size // 1024} KB)")
