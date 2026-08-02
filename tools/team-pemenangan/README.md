# Aplikasi Team Pemenangan — versi puncak

Aplikasi Excel untuk pendataan anggota team pemenangan tingkat desa. Seluruh
isi berkas dihasilkan ulang oleh satu skrip (`build_workbook.py`) sehingga bisa
disesuaikan dan dibangun ulang kapan saja tanpa menyunting sel satu per satu.

Berkas siap pakai: **`Aplikasi_Team_Pemenangan_v2.xlsx`**

## Membangun ulang

```bash
pip install openpyxl pillow
python3 prepare_logos.py                                  # aset gambar
python3 build_workbook.py Aplikasi_Team_Pemenangan_v2.xlsx
```

`prepare_logos.py` cukup dijalankan ulang bila gambar di `assets/sumber/`
diganti. Bila folder `assets/` kosong, workbook tetap terbangun — hanya tanpa
gambar.

Tambahkan `--sample` untuk mengisi 30 baris data contoh — hanya untuk menguji
rumus, jangan dibagikan.

Berkas ditulis tanpa nilai tersimpan (openpyxl hanya menulis rumus). Excel
menghitung semuanya saat dibuka karena `fullCalcOnLoad` diaktifkan. Untuk
menghitung di luar Excel:

```bash
python3 ~/.claude/skills/xlsx/scripts/recalc.py Aplikasi_Team_Pemenangan_v2.xlsx
```

## Isi aplikasi

| Sheet | Fungsi |
|---|---|
| **MENU** | Dasbor: 10 angka ringkasan, capaian per Kadus, dan tombol ke semua sheet |
| **DATABASE** | Input data anggota, 2.000 baris, 18 kolom + 5 kolom bantu tersembunyi |
| **CARI** | Pencarian bebas (nama/NIK/HP/alamat/perekrut) + filter Kadus, RT, status |
| **REKAP** | Matriks Kadus × RT, gender & status, jabatan, segmen usia, TPS, daftar per korwil, 2 grafik |
| **TARGET** | Target vs realisasi per Kadus, % capaian, grafik batang, penanda warna |
| **VALIDASI** | 13 ringkasan masalah + daftar baris yang perlu diperbaiki |
| **CETAK** | Formulir tanda tangan per korwil, 50 nama, kop & penandatangan otomatis |
| **KARTU** | Kartu anggota siap potong, 8 per halaman |
| **ABSENSI** | Daftar hadir kegiatan per korwil, 40 baris |
| **PROFIL** | Poster resmi siap cetak + kedua emblem beserta keterangannya |
| **REFERENSI** | Pengaturan dropdown, target per Kadus, identitas (kop surat) |
| **PETUNJUK** | Manual penggunaan + kode makro opsional |

## Yang berubah dari versi sebelumnya

**Kapasitas** — 500 → 2.000 baris; 15 → 20 RT dan 8 → 20 Kadus pada rekap;
daftar per korwil 30 → 40 baris; formulir cetak 30 → 50 nama.

**Kolom baru pada DATABASE** — TPS, TGL LAHIR, USIA (otomatis), KELOMPOK USIA
(otomatis), STATUS, TGL GABUNG, PEREKRUT, CATATAN.

**Sheet baru** — CARI, TARGET, VALIDASI, KARTU, ABSENSI.

**Identitas terpusat** — nama calon, team, periode, desa, kecamatan, kabupaten,
ketua, dan jabatan penandatangan diambil dari sheet PENGATURAN lewat named
range (`id_calon`, `id_desa`, dan seterusnya), sehingga kop MENU, CETAK, KARTU,
dan ABSENSI ikut berubah sekali edit. Aplikasi jadi bisa dipakai ulang untuk
desa atau calon lain.

**Target & capaian** — kolom TARGET per Kadus di PENGATURAN menggerakkan sheet
TARGET dan panel capaian di MENU.

**Kualitas data** — kolom bantu `MASALAH` menandai NIK kosong / bukan 16 digit /
ganda, Kadus, RT, jabatan, HP, alamat kosong, dan usia di bawah 17 tahun,
dengan prioritas terurut. Sheet VALIDASI merangkum dan mendaftar barisnya.

**Proteksi** — sheet berumus dikunci tanpa kata sandi (sel kuning tetap bisa
diisi). DATABASE dan PENGATURAN sengaja tidak dikunci agar bebas disunting dan
disortir.

**Cetak** — setiap sheet cetak sudah diatur ukuran A4, skala muat selebar
halaman, area cetak, dan baris judul yang berulang tiap halaman.

## Logo dan aset gambar

Emblem asli berupa PNG persegi berlatar gelap. Bila disisipkan apa adanya,
yang tampak adalah kotak hitam di atas lembar putih, jadi `prepare_logos.py`
menghapus latarnya lebih dulu dengan dua metode berbeda:

- **Emblem bertagline** — cincin emas luarnya utuh, sehingga latar bisa dihapus
  dengan flood fill dari empat sudut. Bidang hitam di dalam emblem aman karena
  cincin menjadi dinding penahan.
- **Emblem berpita nama** — cincinnya terputus oleh mahkota, jadi flood fill
  merembes ke dalam dan ikut menghapus panel "#2026". Emblem ini dipotong
  memakai batas lingkaran, lalu digabung dengan piksel terang pada pita nama
  supaya ujung pita yang menjorok keluar lingkaran tidak terpotong.

Penempatan di workbook:

| Tempat | Ukuran | Alasan |
|---|---|---|
| MENU, pojok kanan atas | 150 px | Sejajar blok judul, tidak menabrak panel ringkasan |
| Kop CETAK dan ABSENSI | 88 / 80 px | Format kop surat resmi: logo kiri, teks rata tengah |
| Segel kartu anggota | 62 px | Cukup besar agar tulisan emblem tetap terbaca saat dicetak |
| PROFIL | 200 px | Etalase kedua emblem beserta keterangan pemakaiannya |

Ukuran segel kartu sengaja tidak lebih kecil: pada percobaan 26 px di bilah
judul kartu, emblem hanya terbaca sebagai noda gelap. Kartu karena itu memakai
tata letak kartu identitas — segel di panel kiri, data di kanan.

Rasio gambar selalu dipertahankan oleh fungsi `gambar()`, jadi logo tidak
pernah gepeng. Untuk mengganti logo tanpa membangun ulang: klik kanan pada
gambar di Excel > Change Picture — ukuran dan posisinya tetap.

## Catatan teknis

- **Deteksi NIK ganda** memakai `COUNTIF(range, NIK & "*")`. `COUNTIF` biasa
  membandingkan angka hanya sampai 15 digit sehingga dua NIK berbeda bisa
  dianggap sama; akhiran wildcard memaksa perbandingan teks. Kolom NIK juga
  diformat teks agar angka 0 di depan tidak hilang.
- **Kata kunci kosong pada CARI** dijaga dengan `OR($C$5="", ISNUMBER(SEARCH(...)))`
  karena `SEARCH` terhadap sel kosong menghasilkan `#VALUE!` di LibreOffice.
- **Hasil `INDEX` ke sel kosong** disambung `&""` supaya tampil kosong, bukan `0`.
- **Pewarnaan otomatis** membaca kolom bantu `MASALAH`, bukan menghitung ulang
  `COUNTIF` di tiap sel — tanpa itu satu berkas berisi puluhan juta perhitungan
  dan lambat dibuka.
- **Angka TARGET adalah asumsi yang diisi pengguna**, bukan hasil perhitungan.
  Nilai bawaan 50 per Kadus hanya contoh; ubah di PENGATURAN kolom TARGET.
- Rumus dibatasi pada fungsi yang tersedia di Excel 2007 ke atas (`COUNTIFS`,
  `INDEX`, `MATCH`, `SUMPRODUCT`, `IFERROR`, `DATEDIF`) agar berjalan juga di
  LibreOffice, WPS Office, dan aplikasi Excel di HP.

## Verifikasi

Berkas rilis lulus perhitungan ulang LibreOffice: **22.003 rumus, 0 error**,
dengan 14 gambar dan 3 grafik utuh setelah perhitungan ulang.
Dengan data contoh, seluruh angka pada MENU, REKAP, TARGET, dan VALIDASI sudah
dicocokkan satu per satu terhadap perhitungan independen di Python — termasuk
jumlah per Kadus, komposisi gender, status, deteksi NIK ganda, dan NIK pendek.
