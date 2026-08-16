# Persiapan pindah ke database daring — Supabase + GitHub + Vercel

Folder ini **belum dipakai**. Aplikasi yang berjalan sekarang tetap yang
offline: `Aplikasi_Team_Pemenangan.html` dan `Aplikasi_Team_Pemenangan_v2.xlsx`,
keduanya bekerja penuh tanpa internet.

Isi folder ini adalah jalan keluarnya bila suatu saat tim membutuhkan hal yang
memang tidak bisa dikerjakan aplikasi offline:

| Kebutuhan | Offline | Daring |
| --- | --- | --- |
| Input dari beberapa HP sekaligus, data langsung menyatu | tidak bisa | bisa |
| Data aman walau HP hilang atau peramban dibersihkan | perlu cadangan manual | otomatis |
| Siapa mengubah apa dan kapan | tidak tercatat | tercatat |
| Tanpa internet | **bisa** | tidak bisa |
| Tanpa biaya | **bisa** | gratis sampai batas tertentu |

Selama tim masih nyaman offline, tidak ada yang perlu dikerjakan di sini.

---

## Isi folder

| Berkas | Gunanya |
| --- | --- |
| `schema.sql` | Struktur database: tabel, aturan, indeks, view, dan keamanan baris (RLS). Dijalankan **sekali**. |
| `seed.sql` | Seluruh data yang ada sekarang — 52 anggota, struktur pengurus, kampung, isi dropdown. Boleh dijalankan berulang kali. |
| `build_sql.py` | Pembuat `seed.sql` dari `web/seed/database.json`. |
| `klien-contoh.js` | Contoh kode CRUD memakai `supabase-js`, sepadan satu lawan satu dengan fungsi aplikasi offline. |
| `env.example` | Daftar variabel lingkungan yang dibutuhkan Vercel. |

Aplikasi offline juga bisa membuat berkas SQL yang sama sendiri:
buka **Data & Cadangan → Persiapan database daring → Unduh SQL (Supabase)**.
Keluarannya sudah diuji sama persis dengan `seed.sql`, jadi berapa bulan pun
tim bekerja offline lebih dulu, hasilnya tetap bisa diangkat utuh.

---

## Bentuk databasenya

```
tim ──┬── kampung   (nama + target)
      ├── kadus     (Kadus 1/2/3 + nama kadusnya)
      ├── rw        (001-006 + nama ketuanya, unik satu desa)
      ├── rt        (nomor + nama ketua + kampung + RW yang membawahi)
      ├── daftar_pilihan  (TPS, jabatan, status, nomor RT, nomor RW)
      ├── kelompok_usia
      └── anggota   ──> menunjuk ke kampung / kadus / rw / rt
```

Dua hal yang sengaja dibedakan, karena begitulah keadaan desanya:

- **Nomor RW unik satu desa.** RW 001 sampai RW 006 tidak mengulang per kadus,
  jadi nomornya saja sudah cukup untuk menemukan ketuanya.
- **Nomor RT berulang di tiap kadus.** RT 001 ada di ketiga kadus, dan Kampung
  Gamprit dipakai Kadus 2 maupun Kadus 3. Karena itu keunikan RT dihitung per
  kadus, dan yang benar-benar membedakan adalah nama ketuanya.

### Aturan yang dijaga database, bukan hanya aplikasi

| Aturan | Diterapkan sebagai |
| --- | --- |
| NIK KTP wajib 16 digit | `check (nik = '' or nik ~ '^\d{16}$')` |
| **NIK KTP tidak boleh sama** | `unique index anggota_nik_unik (tim_id, nik) where nik <> ''` |
| NIK yang belum diisi boleh berulang | bagian `where nik <> ''` pada indeks di atas |
| No. KK wajib 16 digit | `check` yang sama bentuknya |
| **No. KK boleh sama** | sengaja **tidak** ada indeks unik — satu keluarga satu KK |
| Nama tidak boleh kosong | `check (length(btrim(nama)) > 0)` |
| Kolom `diubah` selalu ikut | trigger `anggota_sentuh` |

Artinya, walaupun ada orang yang mengetik langsung ke database dan melewati
aplikasi, NIK ganda tetap ditolak.

### Kolom hitungan

Kolom rumus pada Excel (USIA, KELOMPOK USIA, KORWIL, MASALAH) tidak disimpan
sebagai kolom biasa — supaya tidak pernah basi, semuanya dihitung saat dibaca
lewat view `public.v_anggota`. Urutan prioritas `masalah` sama persis dengan
aplikasi offline, jadi hasil pengecekan kedua sisi bisa dibandingkan.

Tersedia juga `v_rekap_kampung`, `v_rekap_tps`, dan `v_rekap_rt` — sepadan
dengan sheet REKAP.

---

## Langkah pemasangan

### 1. Supabase

1. Buat akun di <https://supabase.com> lalu buat project baru (paket gratis cukup).
   Pilih region **Southeast Asia (Singapore)** supaya cepat dari Indonesia.
2. Buka **SQL Editor**, tempel seluruh isi `schema.sql`, tekan **Run**.
3. Tempel seluruh isi `seed.sql`, tekan **Run**. Data 52 anggota masuk.
4. Buka **Table Editor** untuk memastikan tabel `anggota` sudah terisi.

### 2. Akun untuk anggota tim

Data terkunci oleh RLS: tanpa akun yang terdaftar, tidak ada satu baris pun
yang bisa dibaca — termasuk oleh orang yang menemukan kunci publik aplikasi.

1. **Authentication → Users → Add user**, buat akun untuk tiap operator.
2. Di **SQL Editor**, hubungkan akun itu ke team:

   ```sql
   insert into public.pengguna_tim (user_id, tim_id, peran)
   select u.id, t.id, 'operator'
     from auth.users u, public.tim t
    where u.email = 'operator@contoh.com'
      and t.kode  = 'jf3-sukakarya';
   ```

   Perannya: `pemilik` dan `operator` boleh mengubah, `pembaca` hanya melihat.

3. Salin **Project URL** dan **anon public key** dari **Settings → API**.

### 3. GitHub

```bash
git init                       # bila belum
git add .
git commit -m "aplikasi team pemenangan"
git remote add origin https://github.com/NAMA-ANDA/team-pemenangan.git
git push -u origin main
```

### 4. Vercel

1. Masuk ke <https://vercel.com> dengan akun GitHub.
2. **Add New → Project**, pilih repositori tadi.
3. Isi Environment Variables sesuai `env.example`.
4. **Deploy**. Alamatnya berupa `nama-proyek.vercel.app`.

Bila kelak dibuat versi daring, `klien-contoh.js` sudah berisi seluruh
pemanggilan CRUD-nya — tambah, ubah, hapus, cari, dan rekap.

---

## Menjaga dua sisi tetap sama

Bila struktur pengurus berubah (ganti ketua RT, RW baru, kadus baru), sunting
**satu berkas saja**: `web/seed/anggota_jf3.py`. Sisanya mengikuti:

```bash
cd tools/team-pemenangan
python3 web/seed/anggota_jf3.py web/seed/database.json   # data awal
python3 build_workbook.py Aplikasi_Team_Pemenangan_v2.xlsx
python3 isi_data.py       Aplikasi_Team_Pemenangan_v2.xlsx web/seed/database.json
python3 ~/.claude/skills/xlsx/scripts/recalc.py Aplikasi_Team_Pemenangan_v2.xlsx
cd web && python3 build_html.py && python3 build_zip.py
cd ../supabase && python3 build_sql.py
```

Urutannya tidak boleh ditukar, dan `recalc.py` tidak boleh dilewati — tanpa
itu berkas Excel membengkak dari 1,2 MB menjadi 3,1 MB karena rumusnya belum
punya hasil tersimpan.

`build_workbook.py` membaca struktur pengurus langsung dari
`web/seed/anggota_jf3.py`, jadi aplikasi Excel dan HTML tidak mungkin berbeda.
