/* ==========================================================================
   Contoh pemakaian database Supabase — sepadan satu lawan satu dengan
   fungsi pada aplikasi offline (web/src/app-core.js).

   Belum dipakai; ini bahan siap pasang bila kelak dibuat versi daring.

       offline (localStorage)        daring (Supabase)
       --------------------------    -------------------------
       tambah(rec)                   tambahAnggota(rec)
       ubah(id, rec)                 ubahAnggota(id, rec)
       hapus(id)                     hapusAnggota(id)
       saring(f, q)                  cariAnggota(f, q)
       ringkasan()                   rekapKampung() / rekapTps()
       masalah(m)                    kolom `masalah` pada v_anggota

   Pasang lebih dulu:  npm install @supabase/supabase-js
   ========================================================================== */

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

/** Kunci publik memang boleh terlihat di peramban — yang menjaga data adalah
 *  RLS di sisi database, bukan kerahasiaan kunci ini. Tanpa login, tidak ada
 *  satu baris pun yang terbaca. */
export async function masuk(email, sandi) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email, password: sandi
  });
  if (error) throw error;
  return data.user;
}

export async function keluar() {
  await supabase.auth.signOut();
}

/** Tim yang boleh diakses akun yang sedang masuk. */
export async function timSaya() {
  const { data, error } = await supabase
    .from('pengguna_tim')
    .select('peran, tim:tim_id (id, kode, calon, team, periode, desa, ketua, motto)');
  if (error) throw error;
  return data;
}

/* ------------------------------------------------------------ pengaturan */

/** Struktur pengurus lengkap — pengisi dropdown Nama RT dan Nama RW. */
export async function strukturPengurus(timId) {
  const [kadus, rw, rt, kampung] = await Promise.all([
    supabase.from('kadus').select('*').eq('tim_id', timId).order('urutan'),
    supabase.from('rw').select('*').eq('tim_id', timId).order('nomor'),
    supabase.from('rt').select('*, kadus:kadus_id (nama), kampung:kampung_id (nama), rw:rw_id (nomor, nama_ketua)')
      .eq('tim_id', timId).order('nomor'),
    supabase.from('kampung').select('*').eq('tim_id', timId).order('urutan')
  ]);
  for (const r of [kadus, rw, rt, kampung]) if (r.error) throw r.error;
  return {
    kadus: kadus.data, rw: rw.data, rt: rt.data, kampung: kampung.data
  };
}

/** Isi dropdown yang boleh disunting sendiri. */
export async function daftarPilihan(timId, jenis) {
  const { data, error } = await supabase
    .from('daftar_pilihan').select('nilai')
    .eq('tim_id', timId).eq('jenis', jenis).order('urutan');
  if (error) throw error;
  return data.map(x => x.nilai);
}

/* --------------------------------------------------------------- anggota */

/** Membaca lewat view: usia, kelompok usia, korwil, alamat lengkap, dan
 *  masalah sudah ikut terhitung — tidak perlu dihitung ulang di peramban. */
export async function cariAnggota(timId, f = {}, q = '', halaman = 1, perHal = 25) {
  let sql = supabase.from('v_anggota').select('*', { count: 'exact' })
    .eq('tim_id', timId);

  if (f.kampung) sql = sql.eq('kampung', f.kampung);
  if (f.kadus) sql = sql.eq('kadus', f.kadus);
  if (f.namaRt) sql = sql.eq('nama_rt', f.namaRt);
  if (f.namaRw) sql = sql.eq('nama_rw', f.namaRw);
  if (f.rt) sql = sql.eq('rt_nomor', f.rt);
  if (f.rw) sql = sql.eq('rw_nomor', f.rw);
  if (f.tps) sql = sql.eq('tps', f.tps);
  if (f.jabatan) sql = sql.eq('jabatan', f.jabatan);
  if (f.status) sql = sql.eq('status', f.status);
  if (q) {
    const t = '%' + q.replace(/[%_]/g, '') + '%';
    sql = sql.or(['nama.ilike.' + t, 'nik.ilike.' + t, 'hp.ilike.' + t,
      'alamat.ilike.' + t, 'catatan.ilike.' + t].join(','));
  }

  const dari = (halaman - 1) * perHal;
  const { data, error, count } = await sql
    .order('nama').range(dari, dari + perHal - 1);
  if (error) throw error;
  return { baris: data, jumlah: count };
}

/** Daftar baris yang perlu diperbaiki — sepadan dengan sheet VALIDASI. */
export async function anggotaBermasalah(timId) {
  const { data, error } = await supabase.from('v_anggota')
    .select('id, nama, masalah, alamat_lengkap')
    .eq('tim_id', timId).neq('masalah', '').order('nama');
  if (error) throw error;
  return data;
}

const KOLOM_TULIS = ['nama', 'nik', 'kk', 'jk', 'kampung_id', 'kadus_id',
  'rw_id', 'rt_id', 'rt_nomor', 'rw_nomor', 'alamat', 'tps', 'jabatan', 'hp',
  'tgl_lahir', 'status', 'tgl_gabung', 'perekrut', 'catatan'];

function bersihkan(rec) {
  const m = {};
  for (const k of KOLOM_TULIS) if (rec[k] !== undefined) m[k] = rec[k];
  if (m.nama) m.nama = String(m.nama).trim().toUpperCase();
  if (m.nik) m.nik = String(m.nik).replace(/\s+/g, '');
  // kolom tanggal kosong harus null, bukan '' — Postgres menolak '' sebagai date
  for (const k of ['tgl_lahir', 'tgl_gabung']) if (m[k] === '') m[k] = null;
  return m;
}

export async function tambahAnggota(timId, rec) {
  const { data, error } = await supabase.from('anggota')
    .insert({ tim_id: timId, ...bersihkan(rec) }).select().single();
  if (error) throw pesanRamah(error);
  return data;
}

export async function ubahAnggota(id, rec) {
  const { data, error } = await supabase.from('anggota')
    .update(bersihkan(rec)).eq('id', id).select().single();
  if (error) throw pesanRamah(error);
  return data;
}

export async function hapusAnggota(id) {
  const { error } = await supabase.from('anggota').delete().eq('id', id);
  if (error) throw error;
}

/** Galat database diterjemahkan menjadi kalimat yang dimengerti pengguna. */
function pesanRamah(error) {
  if (error.code === '23505' && /anggota_nik_unik/.test(error.message || '')) {
    return new Error('NIK KTP ini sudah dipakai anggota lain. '
      + 'NIK tidak boleh sama — periksa lagi angkanya.');
  }
  if (error.code === '23514' && /nik_check/.test(error.message || '')) {
    return new Error('NIK KTP harus tepat 16 angka.');
  }
  if (error.code === '23514' && /kk_check/.test(error.message || '')) {
    return new Error('No. KK harus tepat 16 angka.');
  }
  if (error.code === '42501') {
    return new Error('Akun ini hanya boleh melihat, tidak boleh mengubah data.');
  }
  return error;
}

/* ---------------------------------------------------------------- rekap */

export async function rekapKampung(timId) {
  const { data, error } = await supabase.from('v_rekap_kampung')
    .select('*').eq('tim_id', timId).order('kampung');
  if (error) throw error;
  return data;
}

export async function rekapTps(timId) {
  const { data, error } = await supabase.from('v_rekap_tps')
    .select('*').eq('tim_id', timId).order('tps');
  if (error) throw error;
  return data;
}

export async function rekapRt(timId) {
  const { data, error } = await supabase.from('v_rekap_rt')
    .select('*').eq('tim_id', timId).order('kadus').order('rt_nomor');
  if (error) throw error;
  return data;
}

/* ------------------------------------------------------ perubahan langsung

   Beberapa orang menginput bersamaan: perubahan orang lain langsung tampil
   tanpa perlu memuat ulang halaman. Nyalakan lebih dulu Realtime untuk tabel
   anggota di Supabase (Database -> Replication). */

export function pantauAnggota(timId, saatBerubah) {
  return supabase.channel('anggota-' + timId)
    .on('postgres_changes',
      { event: '*', schema: 'public', table: 'anggota', filter: 'tim_id=eq.' + timId },
      muatan => saatBerubah(muatan))
    .subscribe();
}
