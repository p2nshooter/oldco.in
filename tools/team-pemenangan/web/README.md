# Aplikasi Team Pemenangan — versi web offline

Klik ganda, langsung jalan — tanpa server, tanpa internet, tanpa pemasangan.
Data disimpan di `localStorage` peramban, dan dibawa antar perangkat lewat
paket ZIP.

| Berkas | Untuk apa |
|---|---|
| **`Aplikasi-Team-Pemenangan.zip`** (± 660 KB) | Paket lengkap: aplikasi + database. **Ini yang dibagikan.** |
| `Aplikasi_Team_Pemenangan.html` (± 950 KB) | Aplikasi saja, tanpa database bawaan |

## Paket ZIP — database yang ikut berpindah

Isi paket:

```
Aplikasi Team Pemenangan.html   aplikasi lengkap, satu berkas
data/database.js                database, dimuat otomatis saat aplikasi dibuka
data/database.json              database yang sama, untuk cadangan/alat lain
BACA-DULU.txt                   petunjuk singkat
```

Alur pemakaian:

1. Ekstrak paket ke satu folder, buka berkas HTML-nya. Database dari folder
   `data` termuat otomatis.
2. Input data seperti biasa — selama dipakai, data hidup di `localStorage`.
3. Selesai menginput, tekan **Cadangan & Drive → Unduh paket ZIP**. Paket baru
   berisi aplikasi + seluruh data terbaru.
4. Kirim paket itu ke HP/laptop lain (WhatsApp, USB, Drive — bebas), ekstrak,
   buka. Datanya sudah ada di sana.

**Harus diekstrak lebih dulu.** Membuka berkas HTML langsung dari dalam ZIP
membuat folder `data` tidak terbaca, sehingga database tidak termuat. Aplikasi
tetap jalan, hanya kosong. Peringatan ini ada di dalam aplikasi dan di
`BACA-DULU.txt`.

**Data perangkat tidak pernah tertimpa diam-diam.** Bila paket berisi database
yang lebih baru sedangkan perangkat sudah punya data sendiri, muncul dialog
berisi perbandingan jumlah dan tanggal keduanya, dengan tiga pilihan:
*Gunakan data paket*, *Gabungkan* (hanya NIK baru yang ditambah), atau
*Pertahankan data perangkat*. Tidak ada yang berubah sampai dipilih.

## Membangun ulang

```bash
pip install pillow                 # opsional, untuk memperkecil gambar
python3 ../prepare_logos.py        # sekali saja, menyiapkan aset logo
python3 build_html.py Aplikasi_Team_Pemenangan.html   # aplikasi saja
python3 build_zip.py Aplikasi-Team-Pemenangan.zip     # paket lengkap
```

`build_zip.py` selalu membangun ulang HTML-nya lebih dulu. Tambahkan
`--data berkas.json` untuk memaketkan database yang sudah terisi.

Sumbernya dipisah agar mudah disunting, lalu digabung jadi satu berkas:

| Berkas | Isi |
|---|---|
| `src/styles.css` | Sistem desain, tema terang & gelap, animasi, gaya cetak |
| `src/index.html` | Kerangka antarmuka |
| `src/app-core.js` | Data, penyimpanan, hitungan turunan, CRUD |
| `src/app-views.js` | Dasbor, tabel data, rekap, target, validasi |
| `src/app-print.js` | Dokumen cetak dan kartu anggota |
| `src/app-data.js` | Penulis ZIP, database bawaan paket, penyelesaian konflik |
| `src/app-main.js` | Pengaturan, cadangan, petunjuk, pengendali kejadian |
| `build_html.py` | Menggabungkan semuanya + menanam logo sebagai data URI |
| `build_zip.py` | Menyusun paket ZIP siap bagi |

## Isi aplikasi

- **Dasbor** — enam angka ringkasan dengan animasi hitung, sebaran per Kadus,
  komposisi gender, segmen usia, dan daftar anggota terbaru.
- **Data Anggota** — pencarian bebas, lima filter, pengurutan tiap kolom,
  paginasi, tambah/ubah/hapus, dan unduh CSV sesuai hasil saringan.
- **Rekap & Analisa** — matriks Kadus × RT, gender & status per Kadus, rekap per
  jabatan, TPS, korwil, segmen usia, dan perekrut teraktif.
- **Target & Capaian** — target vs realisasi per Kadus dengan penanda warna.
- **Validasi Data** — deteksi NIK kosong/bukan 16 digit/ganda dan kolom wajib
  yang kosong, dengan tombol perbaiki langsung.
- **Cetak Daftar** — empat jenis dokumen (daftar tanda tangan, daftar hadir,
  rekapitulasi, kartu) dengan filter yang sama seperti versi Excel.
- **Kartu Anggota** — 8 kartu per halaman A4, siap potong.
- **Pengaturan** — identitas kop surat, daftar Kadus/RT/TPS/jabatan/status,
  dan target per Kadus.
- **Cadangan & Drive** — paket ZIP, ekspor/impor JSON dan CSV.
- **Petunjuk** — panduan empat langkah, tabel cara mencetak, dan tanya-jawab.

## Mencetak

Filter yang dikosongkan berarti "semua", persis seperti versi Excel:

| Ingin mencetak | Isi filter |
|---|---|
| Seluruh anggota | kosongkan semua |
| Per Kadus | Kadus saja |
| Per RT | RT saja |
| Per korwil | Kadus + RT |
| Per TPS | TPS saja |
| Per jabatan / status | jabatan atau status |

Berbeda dengan Excel, versi web **tidak punya batas nama per halaman** — daftar
mengalir sepanjang datanya dan baris judul tabel berulang di tiap halaman.
Tidak ada halaman kosong karena yang dicetak hanya baris yang ada.

## Google Drive — apa yang bisa dan tidak

**Tidak bisa:** CRUD langsung ke Google Drive saat berkas dibuka dari perangkat
(alamat `file://`). Google Identity Services menolak proses OAuth dari origin
`file://` — ini kebijakan Google, bukan batasan aplikasi. Tanpa OAuth, tidak ada
token, sehingga aplikasi tidak bisa membaca maupun menulis Drive.

**Yang berjalan penuh sekarang:** folder Drive dipakai sebagai gudang data
bersama lewat berkas cadangan.

1. Tekan **Unduh cadangan (JSON)** — seluruh anggota dan pengaturan ikut.
2. Unggah berkas itu ke folder Drive tim.
3. Di perangkat lain, unduh berkasnya lalu pilih pada **Pulihkan dari berkas**.

Impor menerima JSON aplikasi ini maupun CSV (termasuk hasil ekspor sheet
DATABASE versi Excel — judul kolom seperti `NAMA LENGKAP`, `NIK (16 digit)`,
`L/P`, `NO. HP` dikenali otomatis; kolom hitungan seperti KORWIL dan USIA
diabaikan karena dihitung ulang). Mode **gabung** melewati NIK yang sudah ada
sehingga aman dijalankan berulang.

**Bila ingin CRUD langsung ke Drive:** aplikasi harus dilayani dari alamat
`https` (misalnya Cloudflare Pages atau GitHub Pages) dan butuh satu OAuth
Client ID dari Google Cloud Console milik pemilik Drive. Konsekuensinya
aplikasi tidak lagi murni offline.

## Catatan teknis

- **Logo ditanam sebagai data URI** dari aset 300 px yang sudah dibersihkan
  latarnya. Ukuran tampil terbesar 200 px, jadi logo tetap tajam di layar
  hi-dpi maupun saat dicetak sebagai segel kartu.
- **Nama disimpan huruf kapital** agar seragam di dokumen resmi; pencarian tetap
  mengabaikan besar-kecil huruf.
- **Deteksi NIK ganda** membandingkan NIK sebagai teks penuh, jadi tidak ada
  masalah pemotongan 15 digit seperti pada `COUNTIF` Excel.
- **`.bar-fill` dan `.bar-track` harus `display:block`** — keduanya elemen
  `span`, dan sebagai elemen inline lebar animasinya tidak pernah terlihat.
- **KPI bernilai teks** (misalnya `6,0%`) ditandai `data-count` kosong supaya
  tidak diambil alih animasi hitung angka.
- **Animasi dimatikan** bila sistem mengaktifkan `prefers-reduced-motion`.
- Tidak ada permintaan jaringan sama sekali: tanpa CDN, font sistem, ikon SVG
  sebaris, grafik digambar dengan CSS dan SVG.

## Verifikasi

Diuji dengan Chromium melalui Playwright:

- CRUD lewat antarmuka: tambah, ubah, hapus, muat ulang — data bertahan.
- Validasi formulir: NIK 3 digit dan NIK ganda **ditolak** dengan pesan tepat,
  data tidak tersimpan.
- Pencarian nama dan no. HP, filter per Kadus / Kadus+RT / TPS, pengurutan
  naik-turun, paginasi — semua menghasilkan jumlah baris yang benar.
- Ekspor JSON dan CSV, pulihkan dari keduanya, serta mode gabung yang melewati
  NIK duplikat.
- Keempat dokumen cetak dirender ke PDF dan diperiksa satu per satu.
- Tema terang dan gelap, serta tampilan lebar 390 px (HP).
- **Alur paket ZIP menyeluruh:** ekstrak paket kosong → input 6 anggota →
  unduh paket ZIP → paket lolos `unzip -t` → ekstrak di profil peramban bersih
  (setara perangkat lain) → 6 anggota termuat otomatis dan aplikasi berfungsi.
- **Penyelesaian konflik:** perangkat berisi 8 anggota dibuka dengan paket
  berisi 9 anggota bertanggal lebih baru → dialog muncul, data **tidak berubah**
  sampai dipilih; setelah *Gabungkan* jadi 11 dan kedua data lokal selamat.
- **Tidak ada kesalahan konsol maupun pageerror** pada seluruh rangkaian uji.

## Kenapa database paket berupa `.js`, bukan `.json`

Diuji langsung di Chromium: saat halaman dibuka lewat `file://`, `fetch()` ke
berkas tetangga **diblokir** kebijakan CORS (origin `null`), sedangkan memuat
berkas lewat tag `<script>` **tetap diizinkan**. Karena itu database paket
disimpan sebagai `data/database.js` yang mengisi `window.TP_DATA`. Berkas
`.json` tetap disertakan untuk cadangan dan alat lain.

Berkas ZIP ditulis sendiri di dalam aplikasi tanpa pustaka luar: CRC-32 plus
struktur ZIP baku, dimampatkan dengan `CompressionStream('deflate-raw')` bila
peramban mendukung, dan disimpan apa adanya bila tidak.
