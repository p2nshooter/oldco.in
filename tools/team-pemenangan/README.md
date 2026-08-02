# Aplikasi Team Pemenangan — versi puncak

Aplikasi Excel untuk pendataan anggota team pemenangan tingkat desa. Seluruh
isi berkas dihasilkan ulang oleh satu skrip (`build_workbook.py`) sehingga bisa
disesuaikan dan dibangun ulang kapan saja tanpa menyunting sel satu per satu.

Berkas siap pakai: **`Aplikasi_Team_Pemenangan_v2.xlsx`**

## Membangun ulang

```bash
pip install openpyxl
python3 build_workbook.py Aplikasi_Team_Pemenangan_v2.xlsx
```

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

Berkas rilis lulus perhitungan ulang LibreOffice: **22.003 rumus, 0 error**.
Dengan data contoh, seluruh angka pada MENU, REKAP, TARGET, dan VALIDASI sudah
dicocokkan satu per satu terhadap perhitungan independen di Python — termasuk
jumlah per Kadus, komposisi gender, status, deteksi NIK ganda, dan NIK pendek.
