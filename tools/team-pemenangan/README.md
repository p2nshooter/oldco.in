# Aplikasi Team Pemenangan — versi puncak

Aplikasi Excel untuk pendataan anggota team pemenangan tingkat desa. Seluruh
isi berkas dihasilkan ulang oleh satu skrip (`build_workbook.py`) sehingga bisa
disesuaikan dan dibangun ulang kapan saja tanpa menyunting sel satu per satu.

Berkas siap pakai: **`Aplikasi_Team_Pemenangan_v2.xlsx`**

Aplikasi ini punya dua wujud dengan data yang sama persis:

| | Berkas | Untuk |
|---|---|---|
| Excel | `Aplikasi_Team_Pemenangan_v2.xlsx` | laptop, sudah terbiasa Excel |
| HTML | `web/Aplikasi_Team_Pemenangan.html` | HP maupun laptop, cukup Chrome |
| Paket | `web/Aplikasi-Team-Pemenangan.zip` | keduanya sekaligus + database |

Folder `supabase/` berisi persiapan pindah ke database daring (Supabase +
GitHub + Vercel) bila suatu saat dibutuhkan — belum dipakai.

## Satu database, dua berkas

Excel dan HTML adalah dua berkas terpisah yang sama-sama bekerja tanpa server,
jadi keduanya tidak bisa membaca satu berkas database yang sama secara
langsung. Yang bisa dilakukan tanpa internet adalah memindahkannya lewat papan
klip — dan itu justru lancar, karena salinan range Excel sudah berbentuk teks
berpisah TAB, bentuk yang sama yang dibaca dan dihasilkan aplikasi HTML.

Sheet **SINKRON** dan bagian **Sinkron dengan berkas Excel** pada halaman
Cadangan menangani keduanya:

| Arah | Caranya |
|---|---|
| Excel → HTML | Blok tabel di sheet SINKRON dari baris judulnya, Ctrl+C, tempel di kotak "Tempel dari Excel", tekan Proses |
| HTML → Excel | Tiga tombol salin; tekan satu, klik sel yang disebut di sheet DATABASE, Ctrl+V — ulangi untuk ketiganya |

Dua hal yang membuatnya aman:

- **Menempel dua kali tidak menggandakan data.** NIK dipakai sebagai penanda
  baris: yang sudah ada diperbarui, yang belum ada ditambahkan.
- **Sinkron pertama tidak menggandakan seluruh anggota.** Pada awalnya justru
  NIK-lah yang baru diisi di Excel sementara barisnya di aplikasi masih kosong
  NIK — kalau hanya NIK yang dicocokkan, semuanya masuk dua kali persis saat
  datanya mulai dilengkapi. Karena itu ada satu cadangan yang sengaja sempit:
  baris masuk ber-NIK boleh dicocokkan dengan baris yang namanya sama **dan**
  NIK-nya masih kosong, dan hanya bila cuma ada satu yang cocok. Daftar ini
  memuat dua orang bernama **WAWAN** — untuk kasus seperti itu tidak ada yang
  ditebak, barisnya dianggap baru supaya diperiksa manusia.

Salinannya dipecah tiga karena kolom KORWIL, USIA, dan KELOMPOK USIA berisi
rumus dan menyela di tengah kolom data pada sheet DATABASE; menempel satu blok
panjang akan menimpa ketiganya. Ketiga potongan selalu memakai urutan yang sama
(menurut nama, bukan mengikuti urutan tabel di layar) — urutan yang bergeser di
antara dua penekanan tombol akan menyambungkan nama seseorang dengan nomor HP
orang lain.

Diuji putar-balik penuh: 52 anggota dari sheet SINKRON masuk ke aplikasi yang
kosong, lalu ketiga potongannya ditempel kembali ke berkas Excel yang baru —
**52 baris, nol perbedaan**, dan seluruh kolom rumus terhitung ulang.

## Membangun ulang

```bash
pip install openpyxl pillow
python3 prepare_logos.py                                  # aset gambar
python3 web/seed/anggota_jf3.py web/seed/database.json    # data awal
python3 build_workbook.py Aplikasi_Team_Pemenangan_v2.xlsx
python3 isi_data.py Aplikasi_Team_Pemenangan_v2.xlsx web/seed/database.json
python3 ~/.claude/skills/xlsx/scripts/recalc.py Aplikasi_Team_Pemenangan_v2.xlsx
python3 poles_xlsx.py Aplikasi_Team_Pemenangan_v2.xlsx
```

Urutannya penting. `isi_data.py` menyalin data dari sumber yang sama dengan
versi web (`web/seed/database.json`) sehingga isi kedua aplikasi identik, dan
tahap hitung-ulang terakhir menanamkan nilai hasil rumus — tanpa itu berkasnya
membengkak dari 1,2 MB menjadi 3,1 MB.

Struktur pengurus (kadus, ketua RW, ketua RT) tidak ditulis dua kali:
`build_workbook.py` membacanya langsung dari `web/seed/anggota_jf3.py`, berkas
yang sama yang dipakai aplikasi HTML. Mengganti nama pengurus cukup di satu
tempat itu.

`poles_xlsx.py` di baris terakhir mengembalikan warna tab sheet. LibreOffice
membuang sebagian warna tab saat berkas dihitung ulang — pada percobaan
terakhir hanya 4 dari 12 yang selamat — dan menyimpan ulang dengan openpyxl
bukan jalan keluar karena hasil hitung-ulangnya justru ikut hilang. Berkasnya
ditambal langsung pada XML-nya: hanya atribut warna tab yang disentuh, dan
tiap sheet yang diubah diurai ulang sebagai XML sebelum ditulis.

### Kapasitas 10.000 baris dan harganya

Menaikkan kapasitas dari 2.000 ke 10.000 bukan sekadar mengganti satu angka.
Delapan rumus per baris membaca seluruh baris di atasnya, jadi biayanya
kuadrat terhadap jumlah baris — pada 2.000 baris itu masih lewat, pada 10.000
satu hitung-ulang tidak selesai dalam dua menit dan satu perubahan sel memicu
ratusan juta pembacaan.

Yang diubah, dan hasil ukurannya pada 3.000 anggota terisi:

| Perubahan | Hitung-ulang penuh |
|---|---|
| apa adanya, kapasitas 10.000 | **> 120 detik** (tidak selesai) |
| nomor urut berjalan ditumpuk dari satu baris di atasnya, bukan `MAX` atas rentang memanjang | 54 detik |
| tabel salinan SINKRON dihapus — 190.000 rumus, 57% dari seluruhnya | 41 detik |
| NIK kembar dicari dua tahap: saring dengan 8 digit belakang, baru cocokkan penuh | **30 detik** |

Pencarian NIK kembar dulu memakai `COUNTIF(rentang, nik&"*")`. Tanda bintang
memaksa pencocokan teks berpola, dan itu jauh lebih lambat daripada
membandingkan angka — sendirian memakan 19 detik dari 41. Sekarang NIK dipecah
menjadi dua angka delapan digit (16 digit melampaui ketelitian angka Excel yang
15 digit), disaring lebih dulu dengan delapan digit **belakang**. Menyaring
dengan delapan digit depan tidak ada gunanya: seluruh warga satu desa memakai
kode wilayah yang sama.

Hitung-ulang saat berkas dibuka juga dimatikan. Berkas yang dibagikan selalu
sudah lewat `recalc.py` sehingga seluruh nilainya tersimpan — memaksa hitung
ulang membuat pemakainya menunggu setengah menit untuk hasil yang sama persis.
`poles_xlsx.py` karena itu menolak menyelesaikan berkas yang nilainya belum
tersimpan; tanpa penjagaan itu, melewatkan `recalc.py` menghasilkan berkas yang
tampil kosong seluruhnya.

Harganya: berkas menjadi **4,0 MB** (dari 1,4 MB), karena 10.000 baris rumus
beserta nilai tersimpannya. Sheet DATABASE sendiri sebagian besar dari jumlah itu.

### Dua akibat yang baru ketahuan setelah diuji fungsinya

Hitung-ulang melaporkan nol galat, dan seluruh sheet penyaringan tetap
menampilkan orang yang benar. Tetapi mengubah arti kolom indeks membawa dua
akibat yang tidak muncul sebagai galat sama sekali:

- **Jumlah hasil saringan menjadi 10.000.** Enam tempat menghitungnya dengan
  `COUNT` atas kolom indeks — benar selama kolom itu kosong pada baris yang
  tidak cocok, dan sejak nomor urutnya ditumpuk setiap baris selalu berisi
  angka. Sheet CETAK menuliskan "10000 orang" padahal hanya 10 yang tersaring.
  Yang benar `MAX`, karena nilai terakhir penumpukan itulah jumlahnya.

- **Nomor urut mengulang dari 1 setelah baris kosong.** Kolom NO harus tetap
  kosong pada baris yang belum terisi, jadi penumpukannya putus begitu ada satu
  baris dikosongkan di tengah — persis yang terjadi ketika pemakai menghapus
  seseorang. Penghitungnya kini dipisah ke kolom tersembunyi yang selalu berisi
  angka, dan kolom NO hanya menampilkannya.

Di sisi aplikasi HTML 10.000 anggota tidak jadi soal — menggambar halaman
sekitar 120 ms — tetapi datanya mencapai **4,5 MB** di penyimpanan peramban,
sedangkan sebagian peramban HP berhenti menyimpan di sekitar 5 MB. Halaman
Cadangan karena itu menampilkan ukuran datanya dan memperingatkan sebelum
batas itu tercapai.

### Poles yang bisa dan tidak bisa dipakai di Excel

| Dipakai | Bentuknya |
|---|---|
| Data bar | TARGET (target & realisasi), REKAP (kolom total) — batang di dalam sel |
| Skala warna | matriks Kampung × RT jadi peta panas; wilayah kosong langsung terlihat |
| Ikon lampu | kolom % capaian pada TARGET: merah / kuning / hijau |
| Warna tab | 12 sheet, satu keluarga warna |
| Garis emas | di bawah tiap kop dan judul bagian |

Yang sengaja **tidak** dipakai: latar sel bergradasi. Kop merah sempat dibuat
bergradasi, tetapi LibreOffice Calc tidak mengenal gradasi pada latar sel dan
memadamkannya di langkah hitung-ulang — berkas yang dibagikan akan tampil beda
dengan yang dilihat saat dibuat. Penggantinya garis emas tebal di bawah kop:
kesannya sama, dan selamat melewati seluruh alur.

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
| **DATABASE** | Input data anggota, **10.000 baris**, 19 kolom + 11 kolom bantu tersembunyi; siap cetak hasil filter |
| **CARI** | Pencarian bebas (nama/NIK/HP/alamat/perekrut) + filter Kadus, RT, status |
| **REKAP** | Matriks Kadus × RT, gender & status, jabatan, segmen usia, TPS, daftar per korwil, 2 grafik |
| **TARGET** | Target vs realisasi per Kadus, % capaian, grafik batang, penanda warna |
| **VALIDASI** | 13 ringkasan masalah + daftar baris yang perlu diperbaiki |
| **CETAK** | Formulir tanda tangan serbaguna: seluruh anggota / per Kadus / per RT / per korwil / per TPS |
| **KARTU** | Kartu anggota siap potong, 8 per halaman, bisa disaring per wilayah |
| **ABSENSI** | Daftar hadir kegiatan dengan filter yang sama seperti CETAK |
| **PROFIL** | Poster resmi siap cetak + kedua emblem beserta keterangannya |
| **SINKRON** | Tukar data dua arah dengan aplikasi HTML lewat salin-tempel |
| **REFERENSI** | Pengaturan dropdown, target per Kadus, identitas (kop surat) |
| **PETUNJUK** | Manual penggunaan + kode makro opsional |

## Yang berubah dari versi sebelumnya

**Kapasitas** — 500 → 10.000 baris; 15 → 20 RT dan 8 → 20 Kadus pada rekap;
daftar per korwil 30 → 40 baris; formulir cetak 25 nama per halaman dengan
halaman otomatis.

**Kolom baru pada DATABASE** — TPS, TGL LAHIR, USIA (otomatis), KELOMPOK USIA
(otomatis), STATUS, TGL GABUNG, PEREKRUT, CATATAN.

**Sheet baru** — CARI, TARGET, VALIDASI, KARTU, ABSENSI, PROFIL.

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

## Mencetak per kelompok apa pun

Sheet CETAK punya lima filter opsional — Kadus, RT, TPS, jabatan, status.
Filter yang dikosongkan berarti "semua", jadi satu mekanisme melayani seluruh
kebutuhan cetak:

| Filter yang diisi | Hasil cetak |
|---|---|
| (kosong semua) | Seluruh anggota |
| Kadus | Per Kadus |
| RT | Per RT |
| Kadus + RT | Per korwil |
| TPS | Per TPS |
| Jabatan / status | Per jabatan atau status keanggotaan |

Judul kop, jumlah orang, dan total halaman menyesuaikan sendiri. ABSENSI
memakai mekanisme yang sama (Kadus/RT/TPS), KARTU juga bisa disaring per
wilayah.

Di balik layar, tiap sheet cetak punya satu kolom bantu di DATABASE yang
memberi nomor urut pada baris yang lolos filter. Sheet cetak lalu memanggil
nomor itu — satu `MATCH` per baris, sisanya `INDEX` yang murah.

**Daftar panjang dalam sekali cetak.** Formulir CETAK memuat 25 nama per
halaman; untuk daftar ratusan orang, saring kolom di sheet DATABASE lalu
Ctrl+P. Excel tidak mencetak baris yang disembunyikan AutoFilter, sehingga
hasilnya persis sebanyak data — tanpa halaman kosong, berapa pun jumlahnya.
DATABASE sudah disiapkan untuk itu: baris judul berulang tiap halaman, kop
"DAFTAR ANGGOTA TEAM PEMENANGAN", dan nomor halaman otomatis.

Dua pendekatan lain sempat diuji dan ditolak: area cetak dinamis lewat
`OFFSET` diabaikan saat diekspor, dan pelewatan halaman kosong tidak terjadi
karena sel berisi rumus tetap dihitung sebagai sel terisi walaupun hasilnya
kosong.

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

Berkas rilis lulus perhitungan ulang LibreOffice: **27.946 rumus, 0 error**,
dengan 14 gambar dan 3 grafik utuh setelah perhitungan ulang.
Dengan data contoh, seluruh angka pada MENU, REKAP, TARGET, dan VALIDASI sudah
dicocokkan satu per satu terhadap perhitungan independen di Python — termasuk
jumlah per Kadus, komposisi gender, status, deteksi NIK ganda, dan NIK pendek.
