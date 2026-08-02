# Aplikasi Team Pemenangan — versi web offline

Klik ganda, langsung jalan — tanpa server, tanpa internet, tanpa pemasangan.
Data disimpan di `localStorage` peramban, dan dibawa antar perangkat lewat
paket ZIP.

| Berkas | Untuk apa |
|---|---|
| **`Aplikasi-Team-Pemenangan.zip`** (± 1,45 MB) | Paket lengkap: aplikasi HTML + Excel + database. **Ini yang dibagikan.** |
| `Aplikasi_Team_Pemenangan.html` (± 980 KB) | Aplikasi web saja, tanpa database bawaan |

## Paket ZIP — database yang ikut berpindah

Isi paket:

```
Aplikasi Team Pemenangan.html   cara 1 — buka dengan Chrome
Aplikasi Team Pemenangan.xlsx   cara 2 — buka dengan Excel
data/database.js                database, dimuat otomatis oleh versi HTML
data/database.json              database yang sama, untuk cadangan/alat lain
data/untuk-excel.csv            jembatan data ke Excel
BACA-DULU.txt                   petunjuk singkat
```

Keduanya berkas terpisah — mengetik di satu sisi tidak langsung muncul di sisi
lain. Jembatannya CSV, dan sebaiknya pilih satu sebagai induk data. Paket yang
dibuat dari dalam aplikasi (tombol **Unduh paket ZIP**) berisi HTML + database
+ CSV; berkas Excel disalin sekali dari paket asli.

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

## Data awal yang sudah terisi

Paket rilis sudah berisi **52 anggota Team Pemenangan JF Jilid 3** dengan
alamat yang dipisah menjadi empat bagian: kampung, RT, RW, dan nama ketua RT.

Alamat aslinya ditulis bebas dalam satu baris — misalnya
`Haris kuda kuda Rt003/001 Rt basir` menjadi kampung *Kp. Kuda Kuda*, RT *003*,
RW *001*, ketua RT *Basir*. Baris asli tetap disimpan pada kolom **Catatan**
sehingga tidak ada keterangan yang hilang dan mudah diperiksa ulang.

**RW dan Ketua RT adalah kolom yang memang diperlukan data ini,** bukan
tambahan hiasan: di daftar tersebut ada RT 04/02, 04/04, dan 04/06 yang tanpa
RW akan tertulis sama; dan 15 orang beralamat hanya "RT Wandi", "RT Basir",
"RT Onin", "RT Ropik", "RT Nemin", atau "RT Engkus" tanpa nomor sama sekali.

Sumber dan pembangkitnya ada di `seed/anggota_jf3.py`; hasilnya
`seed/database.json` dan `seed/anggota-jf3.csv`.

Yang **tidak** ditebak dan sengaja dibiarkan kosong: NIK, no. HP, jenis
kelamin, tanggal lahir, TPS, dan target per kampung. Menu **Validasi Data**
menampilkannya sebagai daftar tugas pelengkapan.

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

## Struktur pengurus

Data induk kepengurusan diisi lebih dulu dan mengisi dropdown formulir:

| Kadus | Ketua RW | Kampung | Ketua RT | RW |
|---|---|---|---|---|
| Kadus 1 | RW 001 Maska, RW 002 Pasni | Kp. Tenjolaut | 001 Ikin Lois, 002 Sarjan | belum diisi |
| | | Kp. Kuda Kuda | 003 Basir, 004 Onin, 005 Tongket / Khidir, 006 Saari | belum diisi |
| Kadus 2 | RW 003 Sutejo, RW 004 Ilyas | Kp. Gamprit | 001 Dedi, 002 Rimun, 003 Adi Ardiansyah, 004 Kusnadi | belum diisi |
| Kadus 3 — Markum | RW 005 Uding, RW 006 Saiman | Kp. Gamprit | 001 Ropic, 002 (belum ada) | RW 005 |
| | | Kp. Gamprit | 003 Wandy Suwandi | RW 006 |
| | | Kp. Wangkal | 004 Nemin, 005 Toyib | RW 006 |
| | | Kp. Gamprit | 006 Sumintra | RW 005 |

Dua nomor ini berperilaku berbeda, dan perbedaannya menentukan cara aplikasi
mengisi kolom secara otomatis:

- **Nomor RW berlaku satu desa.** RW 001 sampai RW 006 tidak mengulang per
  kadus, jadi nomornya saja sudah cukup untuk menemukan ketuanya. Karena itu
  memilih nomor RW langsung mengisi Nama RW, dan sebaliknya.
- **Nomor RT berulang di tiap kadus.** RT 001 ada di ketiganya, dan Kampung
  Gamprit dipakai Kadus 2 maupun Kadus 3 — **hanya nama pengurus yang
  benar-benar membedakan satu RT dari RT lain.** Karena itu dropdown Nama RT
  dikelompokkan per kadus memakai `optgroup` berlabel kampung, dan memilih
  nama RT otomatis mengisi **nomor RT, nomor RW, kampung, dan kadus** sekaligus.

Nomor pada struktur disamakan tiga digit (`003`, bukan `03`) supaya cocok
dengan daftar RT dan RW; tanpa penyamaan ini pengisian otomatis gagal
diam-diam.

Kolom **RW** pada tabel di atas adalah RW yang membawahi tiap RT. Untuk Kadus 3
sudah ada datanya; Kadus 1 dan Kadus 2 belum disebutkan, jadi sengaja
dikosongkan dan bisa diisi sendiri lewat **Pengaturan → Struktur Pengurus**
(kotak pilihan RW di sebelah kanan tiap RT). Begitu diisi, pengisian otomatis
langsung berlaku untuk kadus itu juga.

Struktur bisa disunting di **Pengaturan → Struktur Pengurus**; daftar nama RT
dan RW ikut diperbarui sendiri. Pada Excel, acuannya ada di sheet PENGATURAN
mulai baris 60, lengkap dengan kolom kampung dan nomor RW.

Sumbernya satu berkas: `web/seed/anggota_jf3.py`. `build_workbook.py` membaca
struktur dari sana juga, jadi aplikasi Excel dan HTML tidak mungkin berbeda.

### Penyelarasan ejaan

Ejaan pada daftar 52 nama berbeda dengan daftar pengurus resmi. Tiga di
antaranya cocok kampung **dan** nomor RT-nya, jadi diselaraskan ke ejaan resmi
— baris aslinya tetap tersimpan di kolom CATATAN:

| Ditulis di daftar anggota | Diselaraskan ke | Bukti |
|---|---|---|
| Wandi (8 orang) | Wandy Suwandi | Kp. Gamprit, Kadus 3 RT 003 |
| Ropik / Opic-Ropik (2) | Ropic | Kp. Gamprit, Kadus 3 RT 001 |

`Nemin` tidak lagi diselaraskan: sejak struktur terbaru, **Nemin** justru ejaan
resminya, dan ia memegang **RT 004** (sebelumnya tercatat RT 005). **Toyib**
pindah ke RT 005. Anggota yang RT-nya tertulis "RT nemin" ikut berpindah
sendiri karena nomornya diturunkan dari struktur, bukan diketik.

**Engkus** (1 orang) dan **Niman** (Ketua RW) tidak ada di struktur resmi
sehingga dibiarkan apa adanya; keduanya tetap muncul di dropdown pada kelompok
"Belum ada di struktur pengurus". Perlu diperiksa: Niman tercatat di RT 002 /
RW 005 Kp. Gamprit, dan **RT 002 Kadus 3 memang satu-satunya RT yang namanya
masih kosong** pada struktur — kemungkinan besar itu tempatnya.

Struktur ini juga melengkapi data yang kosong: **39 dari 52 anggota** mendapat
kadus, **42** mendapat kampung, dan **35** mendapat nama ketua RW tanpa
diketik satu per satu.

## Struktur alamat

Mengikuti cara daftar aslinya ditulis:

| Kolom | Isi | Filter |
|---|---|---|
| KAMPUNG | Gamprit, Kuda Kuda, Wangkal, Tenjolaut, Putri Melintang | ada |
| RT / RW | nomor — tampil menyatu di alamat, mis. `RT 004/002` | ada |
| ALAMAT | keterangan tambahan (patokan) | — |
| NAMA RT | Wandy Suwandi, Basir, Onin, Ropic, Nemin, Engkus | ada |
| NAMA RW | Maska, Pasni, Sutejo, Ilyas, Uding, Saiman, Niman | ada |
| NAMA KADUS | Markum | ada |
| NIK KTP / NO. KK | 16 digit, keduanya divalidasi | — |

RW wajib ada karena daftar memuat RT 04/02, 04/04, dan 04/06 — tanpa RW
ketiganya tertulis sama padahal wilayahnya berbeda.

## Ukuran kertas

Daftar lengkap dan rekapitulasi memakai **A4 melintang** lewat halaman bernama
CSS (`@page lebar`), sedangkan daftar hadir dan kartu tetap tegak. Lebar kolom
selalu dijumlahkan tepat 100% supaya tidak ada sel yang terdorong keluar
kertas. Orientasi diperiksa dari PDF hasil render: 842×595pt untuk yang
melintang, 595×842pt untuk yang tegak.

## NIK dan No. KK

Dua aturan yang sering tertukar, dan sengaja dibedakan:

| | NIK KTP | No. KK |
|---|---|---|
| Panjang | 16 digit, wajib | 16 digit bila diisi |
| Boleh sama antar anggota | **tidak** | **ya** |
| Alasan | satu orang satu NIK | satu keluarga satu KK — suami, istri, dan anak memakai nomor yang sama |

Pemeriksaan berlapis: saat menyimpan formulir (`validasiForm`), saat impor
CSV/JSON (baris ber-NIK kembar dilewati, bukan menimpa), pada daftar
**Validasi Data** (`masalah()` → "NIK ganda"), dan — bila kelak pindah ke
Supabase — oleh indeks unik `anggota_nik_unik` di dalam database itu sendiri.

## Persiapan database daring

Folder `../supabase` berisi bahan pindah ke database bersama bila suatu saat
dibutuhkan: `schema.sql` (tabel, aturan, view, RLS), `seed.sql` (seluruh data
sekarang), `klien-contoh.js` (CRUD memakai supabase-js), dan langkah pemasangan
Supabase + GitHub + Vercel. **Belum dipakai** — aplikasi ini tetap offline
sepenuhnya.

Aplikasi juga bisa membuat berkas SQL itu sendiri kapan saja lewat
**Data & Cadangan → Unduh SQL (Supabase)**. Keluarannya diuji byte-per-byte
sama dengan `supabase/seed.sql` yang dihasilkan `build_sql.py`, jadi berapa
lama pun tim bekerja offline lebih dulu, hasilnya tetap bisa diangkat utuh.
