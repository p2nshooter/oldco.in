/* ==========================================================================
   Aplikasi Team Pemenangan — pengaturan, cadangan, petunjuk, pengendali
   ========================================================================== */

'use strict';

/* ----------------------------------------------------------- pengaturan */

const LABEL_ID = {
  team: 'Nama team', calon: 'Nama calon', periode: 'Periode',
  tahun: 'Tahun', desa: 'Desa', kecamatan: 'Kecamatan', kabupaten: 'Kabupaten',
  ketua: 'Nama penandatangan', jabatanTtd: 'Jabatan penandatangan',
  motto: 'Motto / slogan'
};

function viewPengaturan() {
  const s = state.settings;
  let h = '<div class="sec-title" style="margin-top:0">Identitas — dipakai di semua kop cetak</div>' +
    '<div class="card"><div class="card-b"><div class="form-grid">';
  Object.keys(LABEL_ID).forEach(k => {
    const span = (k === 'motto') ? ' span2' : '';
    h += '<div class="field' + span + '"><label>' + esc(LABEL_ID[k]) + '</label>' +
      '<input type="text" data-id="' + k + '" value="' + esc(s.identitas[k] || '') + '"></div>';
  });
  h += '</div></div></div>';

  const daftar = (kunci, judul, ket) => {
    let x = '<div class="sec-title">' + esc(judul) + '</div><div class="card"><div class="card-b">' +
      '<p class="mini-note" style="margin-bottom:10px">' + esc(ket) + '</p>' +
      '<div class="list-editor" data-list="' + kunci + '">';
    s[kunci].forEach(v => {
      x += '<span class="tag">' + esc(v) +
        '<button data-rm="' + esc(v) + '" data-lk="' + kunci + '" aria-label="Hapus ' + esc(v) + '">' +
        ICON.x + '</button></span>';
    });
    x += '</div><div class="flex" style="margin-top:11px">' +
      '<input type="text" data-add="' + kunci + '" placeholder="Tambah…" style="max-width:230px">' +
      '<button class="btn btn-sm" data-addbtn="' + kunci + '">Tambah</button></div>';
    return x + '</div></div>';
  };

  h += daftar('kampung', 'Daftar Kampung',
    'Menghapus kampung tidak menghapus anggotanya — data lama tetap ada dan bisa diperbaiki lewat menu Data Anggota.');
  h += daftar('rt', 'Daftar RT', 'Tulis tiga angka, contoh 001.');
  h += daftar('rw', 'Daftar RW', 'Tulis tiga angka, contoh 002.');
  h += viewPengurus();
  h += daftar('kadus', 'Wilayah Kadus', 'Tiga kadus desa ini.');
  h += daftar('tps', 'Daftar TPS', 'Tulis dua angka, contoh 01.');
  h += daftar('jabatan', 'Daftar Jabatan', 'Urutan bebas; dipakai pada dropdown formulir anggota.');
  h += daftar('status', 'Status Keanggotaan', 'Bawaan: Aktif, Calon, Nonaktif.');

  h += '<div class="sec-title">Target per Kampung</div><div class="card"><div class="card-b">' +
    '<p class="mini-note" style="margin-bottom:12px">Angka ini asumsi yang Anda tentukan sendiri, ' +
    'dipakai untuk menghitung % capaian pada Dasbor dan Target.</p><div class="form-grid">';
  s.kampung.forEach(k => {
    h += '<div class="field"><label>' + esc(k) + '</label>' +
      '<input type="number" min="0" step="1" data-target="' + esc(k) + '" value="' +
      (Number(s.target[k]) || 0) + '"></div>';
  });
  h += '</div></div></div>';
  return h;
}

/** Struktur pengurus: kadus, ketua RK, dan ketua RT beserta namanya.
 *  Inilah sumber isi dropdown Nama RT dan Nama RK pada formulir anggota. */
function viewPengurus() {
  const list = state.settings.pengurus || [];
  let h = '<div class="sec-title">Struktur Pengurus — Kadus, RK, dan RT</div>' +
    '<div class="card"><div class="card-b">' +
    '<p class="mini-note" style="margin-bottom:12px">Daftar ini mengisi dropdown ' +
    '<b>Nama RT</b> dan <b>Nama RK</b> pada formulir anggota. Memilih nama RT ' +
    'otomatis mengisi nomor RT dan kadusnya. Nomor RT berulang di tiap kadus, ' +
    'jadi nama pengurusnya yang membedakan.</p>';

  if (!list.length) {
    h += '<p class="mini-note">Belum ada struktur pengurus.</p></div></div>';
    return h;
  }

  h += '<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))">';
  list.forEach((k, ik) => {
    h += '<div class="card"><div class="card-h"><h3>' + esc(k.kadus) + '</h3>' +
      '<div class="grow"></div>' +
      (k.nama ? '<span class="chip aktif">' + esc(k.nama) + '</span>'
        : '<span class="chip bad">nama kadus belum ada</span>') + '</div>' +
      '<div class="card-b"><div class="field" style="margin-bottom:10px">' +
      '<label>Nama Kadus</label>' +
      '<input type="text" data-png="' + ik + '" data-pf="nama" value="' +
      esc(k.nama || '') + '" placeholder="nama kadus"></div>';
    [['rk', 'Ketua RK'], ['rt', 'Ketua RT']].forEach(([jenis, judul]) => {
      h += '<div class="mini-note" style="margin:10px 0 6px;font-weight:700">' +
        esc(judul) + '</div>';
      (k[jenis] || []).forEach((r, ir) => {
        h += '<div class="flex" style="gap:8px;margin-bottom:5px">' +
          '<span class="chip" style="min-width:62px;justify-content:center">' +
          esc((jenis === 'rt' ? 'RT ' : 'RK ') + r[0]) + '</span>' +
          '<input type="text" data-png="' + ik + '" data-pj="' + jenis +
          '" data-pi="' + ir + '" value="' + esc(r[1] || '') +
          '" placeholder="belum ada nama" style="flex:1"></div>';
      });
    });
    h += '</div></div>';
  });
  return h + '</div></div></div>';
}

/* -------------------------------------------------------- cadangan/drive */

function viewDataIo() {
  const r = ringkasan();
  const drive = state.settings.identitas.driveUrl || '';
  let h = '<div class="card" style="margin-bottom:16px"><div class="card-h">' +
    '<h3>Paket offline (ZIP)</h3><div class="grow"></div>' +
    '<span class="chip aktif">cara yang dianjurkan</span></div><div class="card-b">' +
    '<p class="mini-note">Satu berkas ZIP berisi <b>aplikasi + seluruh database</b>. ' +
    'Inilah cara memindahkan data antar HP dan laptop tanpa internet: ekstrak paketnya, ' +
    'buka berkas HTML-nya, database langsung termuat.</p>' +
    '<div class="flex" style="margin-top:12px">' +
    '<button class="btn btn-primary" id="btnZip">Unduh paket ZIP</button>' +
    '<span class="mini-note">berisi ' + num(r.total) + ' anggota + pengaturan</span>' +
    '</div>' +
    '<div class="tip blue" style="margin-top:14px">' + ICON.bulb +
    '<div><b>Penting saat membuka paket:</b> ekstrak dulu seluruh isinya ke satu folder. ' +
    'Membuka berkas HTML langsung dari dalam ZIP membuat folder <span class="kbd">data</span> ' +
    'tidak terbaca, sehingga database tidak ikut termuat.</div></div>' +
    '</div></div>';

  h += '<div class="grid two">';

  h += '<div class="card"><div class="card-h"><h3>Cadangan data</h3></div><div class="card-b">' +
    '<p class="mini-note">Data tersimpan di penyimpanan peramban perangkat ini. ' +
    'Menghapus riwayat peramban bisa ikut menghapusnya — unduh cadangan secara berkala.</p>' +
    '<div class="flex" style="margin-top:12px">' +
    '<button class="btn" id="btnExport">Unduh cadangan (JSON)</button>' +
    '<button class="btn" id="btnExportCsv">Unduh CSV</button>' +
    '</div><div class="hr"></div>' +
    '<div class="field"><label>Pulihkan dari berkas</label>' +
    '<input type="file" id="fileImport" accept=".json,.csv,application/json,text/csv">' +
    '<span class="hint">Menerima berkas JSON cadangan aplikasi ini, atau CSV dengan baris judul.</span></div>' +
    '<div class="flex" style="margin-top:11px">' +
    '<label class="mini-note"><input type="checkbox" id="impGabung" style="width:auto;margin-right:6px">' +
    'Gabungkan dengan data yang ada (bila tidak dicentang, data lama diganti)</label></div>' +
    '<div class="hr"></div>' +
    '<div class="mini-note">Tersimpan sekarang: <b>' + num(r.total) + '</b> anggota</div>' +
    '<button class="btn btn-red btn-sm" id="btnReset" style="margin-top:10px">Hapus semua data</button>' +
    '</div></div>';

  h += '<div class="card"><div class="card-h"><h3>Google Drive</h3></div><div class="card-b">' +
    '<div class="tip red">' + ICON.alert +
    '<div><b>Perlu diketahui.</b> Berkas HTML yang dibuka langsung dari perangkat ' +
    '(alamat <span class="kbd">file://</span>) <b>tidak bisa</b> membaca atau menulis Google Drive. ' +
    'Google menolak proses masuk (OAuth) dari berkas lokal — ini aturan Google, bukan batasan aplikasi.</div></div>' +
    '<p class="mini-note" style="margin-top:12px">Yang bisa dilakukan sekarang, dan sudah berjalan penuh:</p>' +
    '<div class="steps" style="margin-top:10px">' +
    '<div class="step"><div><h4>Unduh cadangan</h4><p>Tekan tombol <b>Unduh cadangan (JSON)</b> di samping. ' +
    'Berkas berisi seluruh anggota dan pengaturan.</p></div></div>' +
    '<div class="step"><div><h4>Unggah ke folder Drive</h4><p>Buka folder Drive Anda, ' +
    'seret berkas JSON tadi ke sana. Folder itu menjadi gudang data bersama tim.</p></div></div>' +
    '<div class="step"><div><h4>Pulihkan di perangkat lain</h4><p>Unduh berkas JSON dari Drive, ' +
    'lalu pilih lewat kotak <b>Pulihkan dari berkas</b>. Seluruh data langsung tampil.</p></div></div>' +
    '</div>' +
    (drive ? '<a class="btn btn-primary" style="margin-top:14px" href="' + esc(drive) +
      '" target="_blank" rel="noopener">Buka folder Drive</a>' : '') +
    '<div class="hr"></div>' +
    '<p class="mini-note"><b>Ingin CRUD langsung ke Drive?</b> Bisa, tetapi aplikasinya harus ' +
    'diletakkan di alamat web (https), bukan dibuka sebagai berkas. Perlu satu Client ID OAuth ' +
    'dari Google Cloud Console milik Anda. Sampaikan bila ingin dibuatkan versi itu.</p>' +
    '</div></div>';

  h += '</div>';
  return h;
}

function unduh(nama, isi, mime) {
  const blob = new Blob([isi], { type: mime || 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nama;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 400);
}

function stamp() {
  const d = new Date();
  const p = n => String(n).padStart(2, '0');
  return d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + '-' + p(d.getHours()) + p(d.getMinutes());
}

function exportJson() {
  unduh('team-pemenangan-' + stamp() + '.json', JSON.stringify({
    aplikasi: 'Aplikasi Team Pemenangan', v: 1,
    diekspor: new Date().toISOString(),
    settings: state.settings, members: state.members
  }, null, 2));
  toast('Cadangan JSON terunduh — unggah ke folder Drive Anda.');
}

const CSV_KOLOM = ['nama', 'nik', 'kk', 'jk', 'kampung', 'rt', 'rw', 'alamat',
  'namaRt', 'namaRk', 'kadus', 'tps', 'jabatan', 'hp', 'tglLahir', 'status',
  'tglGabung', 'perekrut', 'catatan'];

function csvCell(v) {
  const s = String(v === undefined || v === null ? '' : v);
  return /[",;\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function exportCsv(list) {
  const rows = [CSV_KOLOM.join(',')];
  (list || state.members).forEach(m => {
    rows.push(CSV_KOLOM.map(k => csvCell(m[k])).join(','));
  });
  unduh('team-pemenangan-' + stamp() + '.csv', '﻿' + rows.join('\r\n'), 'text/csv;charset=utf-8');
  toast('CSV terunduh (' + num((list || state.members).length) + ' baris).');
}

function parseCsv(teks) {
  const baris = [];
  let cur = [], nilai = '', dalam = false;
  const t = teks.replace(/^﻿/, '');
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (dalam) {
      if (c === '"') {
        if (t[i + 1] === '"') { nilai += '"'; i++; } else dalam = false;
      } else nilai += c;
    } else if (c === '"') dalam = true;
    else if (c === ',' || c === ';') { cur.push(nilai); nilai = ''; }
    else if (c === '\n') { cur.push(nilai); baris.push(cur); cur = []; nilai = ''; }
    else if (c !== '\r') nilai += c;
  }
  if (nilai !== '' || cur.length) { cur.push(nilai); baris.push(cur); }
  return baris.filter(b => b.some(v => String(v).trim() !== ''));
}

function importFile(file, gabung) {
  const fr = new FileReader();
  fr.onload = () => {
    try {
      const teks = String(fr.result);
      let masuk = [];
      let setelan = null;
      if (/\.json$/i.test(file.name) || teks.trim().startsWith('{')) {
        const d = JSON.parse(teks);
        masuk = Array.isArray(d.members) ? d.members : (Array.isArray(d) ? d : []);
        if (d.settings) setelan = d.settings;
      } else {
        const baris = parseCsv(teks);
        if (baris.length < 2) throw new Error('CSV tidak berisi data');
        const kepala = baris[0].map(x => x.trim().toLowerCase());
        const petaAlias = {
          'nama lengkap': 'nama', 'nik (16 digit)': 'nik', 'l/p': 'jk',
          'no. hp': 'hp', 'no hp': 'hp', 'tgl lahir': 'tglLahir',
          'nik ktp': 'nik', 'no. kk': 'kk', 'no kk': 'kk',
          'nama rt': 'namaRt', 'nama rk': 'namaRk', 'nama kadus': 'kadus',
          'tgl gabung': 'tglGabung', 'kelompok usia': null, 'usia': null,
          'korwil': null, 'no': null, 'key': null
        };
        const idx = kepala.map(k => {
          if (Object.prototype.hasOwnProperty.call(petaAlias, k)) return petaAlias[k];
          const bersih = k.replace(/[^a-z]/g, '');
          const cocokKol = CSV_KOLOM.find(c => c.toLowerCase() === bersih);
          return cocokKol || null;
        });
        for (let i = 1; i < baris.length; i++) {
          const rec = {};
          idx.forEach((kol, j) => { if (kol) rec[kol] = baris[i][j]; });
          if ((rec.nama || '').trim()) masuk.push(rec);
        }
      }
      if (!masuk.length) { toast('Tidak ada baris yang bisa dibaca dari berkas itu.', 'err'); return; }

      const bersih = masuk.map(r => {
        const m = normalisasi(r);
        m.id = r.id || uid();
        m.dibuat = r.dibuat || new Date().toISOString();
        m.diubah = new Date().toISOString();
        return m;
      });

      if (gabung) {
        const adaNik = new Set(state.members.map(m => m.nik).filter(Boolean));
        const adaId = new Set(state.members.map(m => m.id));
        let tambahJml = 0, lewat = 0;
        bersih.forEach(m => {
          if (adaId.has(m.id)) m.id = uid();
          if (m.nik && adaNik.has(m.nik)) { lewat++; return; }
          if (m.nik) adaNik.add(m.nik);
          state.members.push(m);
          tambahJml++;
        });
        toast('Ditambahkan ' + num(tambahJml) + ' anggota' +
          (lewat ? ', ' + num(lewat) + ' dilewati karena NIK sudah ada.' : '.'));
      } else {
        state.members = bersih;
        if (setelan) state.settings = Object.assign(defaultSettings(), setelan);
        toast('Data dipulihkan: ' + num(bersih.length) + ' anggota.');
      }
      save(true);
      render();
    } catch (e) {
      console.error(e);
      toast('Berkas gagal dibaca: ' + e.message, 'err', 6000);
    }
  };
  fr.onerror = () => toast('Berkas gagal dibuka.', 'err');
  fr.readAsText(file);
}

/* ------------------------------------------------------------- petunjuk */

function viewPetunjuk() {
  const id = state.settings.identitas;
  let h = '<div class="guide-hero"><img src="' + LOGO_EMBLEM + '" alt="">' +
    '<div><h2>Selamat datang di aplikasi ' + esc(id.team || 'Team Pemenangan') + '</h2>' +
    '<p>Semua berjalan otomatis. Anda hanya perlu mengetik data anggota satu kali — ' +
    'rekap, target, validasi, kartu, dan dokumen cetak terisi dengan sendirinya. ' +
    'Tanpa internet, tanpa pemasangan, data tersimpan di perangkat Anda.</p></div></div>';

  h += '<div class="sec-title">Empat langkah, selesai</div><div class="steps">' +
    '<div class="step"><div><h4>Atur dulu wilayahnya</h4><p>Buka <b>Pengaturan</b>. ' +
    'Sesuaikan nama Kadus, daftar RT, TPS, jabatan, dan identitas untuk kop surat. ' +
    'Isi juga target anggota tiap Kadus.</p></div></div>' +
    '<div class="step"><div><h4>Masukkan anggota</h4><p>Buka <b>Data Anggota</b> lalu tekan ' +
    '<b>Tambah</b>. Kolom bertanda wajib akan diperiksa otomatis: NIK harus 16 angka dan ' +
    'tidak boleh kembar. Korwil, usia, dan kelompok usia dihitung sendiri.</p></div></div>' +
    '<div class="step"><div><h4>Rapikan lewat Validasi</h4><p>Buka <b>Validasi Data</b>. ' +
    'Semua baris yang bermasalah muncul di sana lengkap dengan sebabnya — tekan ' +
    '<b>Perbaiki</b> untuk langsung menyuntingnya.</p></div></div>' +
    '<div class="step"><div><h4>Cetak apa pun yang dibutuhkan</h4><p>Buka <b>Cetak Daftar</b>, ' +
    'pilih jenis dokumen, saring kelompoknya, lalu tekan cetak. Kop surat, jumlah, ' +
    'dan blok tanda tangan terisi otomatis.</p></div></div></div>';

  h += '<div class="sec-title">Cara mencetak apa pun</div>' +
    '<div class="card"><div class="tbl-wrap"><table class="tbl">' +
    '<thead><tr><th>Ingin mencetak</th><th>Isi filter</th></tr></thead><tbody>' +
    '<tr><td>Seluruh anggota</td><td>kosongkan semua filter</td></tr>' +
    '<tr><td>Per Kadus</td><td>pilih <b>Kadus</b> saja</td></tr>' +
    '<tr><td>Per RT</td><td>pilih <b>RT</b> saja</td></tr>' +
    '<tr><td>Per korwil</td><td>pilih <b>Kadus</b> + <b>RT</b></td></tr>' +
    '<tr><td>Per TPS</td><td>pilih <b>TPS</b> saja</td></tr>' +
    '<tr><td>Per jabatan / status</td><td>pilih jabatan atau status</td></tr>' +
    '</tbody></table></div></div>';

  h += '<div class="tip" style="margin-top:14px">' + ICON.bulb +
    '<div>Saat kotak cetak muncul, pilih <b>Simpan sebagai PDF</b> bila ingin mengirim lewat ' +
    'WhatsApp, atau pilih pencetak untuk langsung mencetak. Aktifkan opsi ' +
    '<b>Background graphics</b> agar kop dan warna tabel ikut tercetak.</div></div>';

  h += '<div class="sec-title">Pertanyaan yang sering muncul</div><div class="faq">' +
    faq('Data saya tersimpan di mana?',
      '<p>Di penyimpanan peramban (localStorage) pada perangkat yang Anda pakai. ' +
      'Data tidak dikirim ke mana pun dan tetap ada walau aplikasi ditutup atau perangkat mati.</p>' +
      '<p><b>Yang perlu dijaga:</b> membersihkan riwayat/data peramban bisa ikut menghapusnya. ' +
      'Karena itu unduh cadangan JSON secara berkala lewat menu <b>Cadangan &amp; Drive</b>.</p>') +
    faq('Bisakah dipakai di HP?',
      '<p>Bisa. Kirim berkas HTML-nya ke HP, lalu buka dengan Chrome. Tampilan menyesuaikan ' +
      'layar kecil dan menu berubah jadi tombol garis tiga di kiri atas.</p>' +
      '<p>Perlu diingat, data di HP dan di komputer terpisah — pindahkan lewat cadangan JSON.</p>') +
    faq('Apakah bisa CRUD langsung ke Google Drive?',
      '<p>Tidak, selama berkas dibuka langsung dari perangkat (<span class="kbd">file://</span>). ' +
      'Google menolak proses masuk OAuth dari berkas lokal, jadi aplikasi tidak diizinkan ' +
      'menulis ke Drive Anda. Ini aturan Google, bukan kekurangan aplikasi.</p>' +
      '<p>Yang berjalan penuh sekarang: unduh cadangan JSON lalu unggah ke folder Drive, dan ' +
      'pulihkan dari berkas Drive di perangkat mana pun. Bila ingin CRUD langsung, aplikasi ' +
      'harus dipasang di alamat web https dengan Client ID OAuth milik Anda.</p>') +
    faq('Bagaimana memindahkan data dari file Excel?',
      '<p>Di Excel, simpan sheet DATABASE sebagai CSV, lalu pilih berkas itu pada kotak ' +
      '<b>Pulihkan dari berkas</b>. Judul kolom seperti NAMA LENGKAP, NIK, L/P, KADUS, RT, ' +
      'JABATAN, NO. HP, ALAMAT, TPS dikenali otomatis. Kolom hitungan seperti KORWIL dan USIA ' +
      'diabaikan karena dihitung ulang.</p>') +
    faq('Kenapa nama anggota otomatis jadi huruf kapital?',
      '<p>Agar seragam di dokumen resmi dan pencarian tidak terganggu beda besar-kecil huruf. ' +
      'Pencarian sendiri tetap mengabaikan besar-kecil huruf.</p>') +
    faq('NIK ditandai ganda padahal orangnya berbeda?',
      '<p>Berarti ada dua baris dengan NIK yang sama persis. Buka <b>Validasi Data</b>, ' +
      'cari keduanya, lalu perbaiki yang salah ketik. NIK yang sah tidak pernah kembar.</p>') +
    '</div>';

  h += '<div class="tip red" style="margin-top:16px">' + ICON.alert +
    '<div><b>Kebiasaan yang menyelamatkan:</b> unduh cadangan JSON setiap selesai menginput ' +
    'banyak data, lalu simpan di folder Drive. Satu berkas kecil itu berisi seluruh kerja Anda.</div></div>';
  return h;
}

function faq(t, isi) {
  return '<details><summary>' + esc(t) + '</summary><div class="ans">' + isi + '</div></details>';
}

/* ---------------------------------------------------------- modal form */

function formAnggota(id) {
  const s = state.settings;
  const m = id ? cariById(id) : null;
  const v = k => esc(m ? (m[k] || '') : '');
  const sel = (list, k, kosong) => opts(list, m ? m[k] : '', kosong || '— pilih —');

  return '<div class="modal-h"><h3>' + (m ? 'Ubah data anggota' : 'Tambah anggota baru') + '</h3>' +
    '<div class="grow"></div>' +
    '<button class="icon-btn" data-close="1" aria-label="Tutup">' + ICON.x + '</button></div>' +
    '<div class="modal-b"><form id="formAnggota" novalidate>' +
    '<div class="form-grid">' +
    '<div class="field span2" data-f="nama"><label>Nama lengkap <span style="color:var(--danger)">*</span></label>' +
    '<input type="text" name="nama" value="' + v('nama') + '" placeholder="BUDI SANTOSO" autocomplete="off">' +
    '<span class="hint">Sesuai KTP. Otomatis jadi huruf kapital.</span>' +
    '<span class="err">Nama wajib diisi.</span></div>' +

    '<div class="field" data-f="nik"><label>NIK KTP (16 digit)</label>' +
    '<input type="text" name="nik" value="' + v('nik') + '" inputmode="numeric" maxlength="16" placeholder="3201011203800001">' +
    '<span class="err"></span></div>' +

    '<div class="field" data-f="kk"><label>No. KK (16 digit)</label>' +
    '<input type="text" name="kk" value="' + v('kk') + '" inputmode="numeric" maxlength="16" placeholder="3201010101010001">' +
    '<span class="err"></span></div>' +

    '<div class="field" data-f="jk"><label>Jenis kelamin</label><select name="jk">' +
    '<option value="">— pilih —</option>' +
    '<option value="L"' + (m && m.jk === 'L' ? ' selected' : '') + '>L — Laki-laki</option>' +
    '<option value="P"' + (m && m.jk === 'P' ? ' selected' : '') + '>P — Perempuan</option>' +
    '</select></div>' +

    '<div class="field" data-f="kampung"><label>Kampung</label><select name="kampung">' + sel(s.kampung, 'kampung') + '</select></div>' +
    '<div class="field" data-f="rt"><label>RT</label><select name="rt">' + sel(s.rt, 'rt') + '</select></div>' +
    '<div class="field" data-f="rw"><label>RW</label><select name="rw">' + sel(s.rw, 'rw') + '</select></div>' +
    '<div class="field" data-f="namaRt"><label>Nama RT</label>' +
    '<select name="namaRt">' + optPengurus('rt', m ? m.namaRt : '') + '</select>' +
    '<span class="hint">Memilih nama RT otomatis mengisi nomor RT dan Kadus.</span></div>' +
    '<div class="field" data-f="namaRk"><label>Nama RK</label>' +
    '<select name="namaRk">' + optPengurus('rk', m ? m.namaRk : '') + '</select></div>' +
    '<div class="field" data-f="kadus"><label>Kadus</label>' +
    '<select name="kadus">' + sel(s.kadus, 'kadus') + '</select></div>' +
    '<div class="field" data-f="tps"><label>TPS</label><select name="tps">' + sel(s.tps, 'tps') + '</select></div>' +
    '<div class="field" data-f="jabatan"><label>Jabatan</label><select name="jabatan">' + sel(s.jabatan, 'jabatan') + '</select></div>' +

    '<div class="field" data-f="hp"><label>No. HP</label>' +
    '<input type="text" name="hp" value="' + v('hp') + '" inputmode="tel" placeholder="081234567890"></div>' +
    '<div class="field" data-f="status"><label>Status</label><select name="status">' + sel(s.status, 'status') + '</select></div>' +

    '<div class="field span2" data-f="alamat"><label>Keterangan alamat</label>' +
    '<input type="text" name="alamat" value="' + v('alamat') + '" placeholder="patokan / keterangan tambahan">' +
    '<span class="hint">Kampung dan RT/RW sudah otomatis masuk alamat — isi ini hanya bila ada keterangan lain.</span></div>' +

    '<div class="field" data-f="tglLahir"><label>Tanggal lahir</label>' +
    '<input type="date" name="tglLahir" value="' + v('tglLahir') + '">' +
    '<span class="hint" id="usiaHint">Usia dihitung otomatis.</span></div>' +
    '<div class="field" data-f="tglGabung"><label>Tanggal bergabung</label>' +
    '<input type="date" name="tglGabung" value="' + v('tglGabung') + '"></div>' +

    '<div class="field" data-f="perekrut"><label>Perekrut</label>' +
    '<input type="text" name="perekrut" value="' + v('perekrut') + '" list="daftarNama" placeholder="Nama yang merekrut">' +
    '<datalist id="daftarNama">' +
    state.members.slice(0, 400).map(x => '<option value="' + esc(x.nama) + '">').join('') +
    '</datalist></div>' +
    '<div class="field" data-f="catatan"><label>Catatan</label>' +
    '<input type="text" name="catatan" value="' + v('catatan') + '" placeholder="Catatan bebas"></div>' +

    '<div class="field span2"><label>Alamat wilayah (otomatis)</label>' +
    '<input type="text" id="korwilPrev" value="' + esc(m ? wilayah(m) : '') + '" readonly ' +
    'style="background:var(--surface-2);color:var(--muted)"></div>' +
    '</div></form></div>' +
    '<div class="modal-f">' +
    (m ? '<button class="btn btn-red" data-del="' + m.id + '">Hapus</button><div class="grow"></div>' : '') +
    '<button class="btn" data-close="1">Batal</button>' +
    '<button class="btn btn-primary" id="btnSimpan">' + (m ? 'Simpan perubahan' : 'Simpan anggota') + '</button>' +
    '</div>';
}

/** Pilihan nama RT / RK dikelompokkan per kadus memakai optgroup. */
function optPengurus(jenis, terpilih) {
  let h = '<option value="">— pilih —</option>';
  (state.settings.pengurus || []).forEach(k => {
    const isi = (k[jenis] || []).filter(r => r[1]);
    if (!isi.length) return;
    h += '<optgroup label="' + esc(k.kadus + (k.nama ? ' — ' + k.nama : '')) + '">';
    isi.forEach(r => {
      const label = (jenis === 'rt' ? 'RT ' : 'RK ') + r[0] + ' — ' + r[1];
      h += '<option value="' + esc(r[1]) + '"' +
        (r[1] === terpilih ? ' selected' : '') + '>' + esc(label) + '</option>';
    });
    h += '</optgroup>';
  });
  // nilai lama yang belum ada di struktur tetap bisa dipilih
  if (terpilih && !h.includes('value="' + esc(terpilih) + '"')) {
    h += '<optgroup label="Belum ada di struktur pengurus">' +
      '<option value="' + esc(terpilih) + '" selected>' + esc(terpilih) + '</option></optgroup>';
  }
  return h;
}

function bukaModal(html, lebarKecil) {
  const ov = $('#overlay');
  const md = $('#modal');
  md.className = 'modal' + (lebarKecil ? ' narrow' : '');
  md.innerHTML = html;
  ov.hidden = false;
  const fokus = md.querySelector('input,select,textarea,button');
  if (fokus) setTimeout(() => fokus.focus(), 60);
}

function tutupModal() {
  $('#overlay').hidden = true;
  $('#modal').innerHTML = '';
}

function validasiForm(form, idSekarang) {
  let ok = true;
  const setBad = (nama, pesan) => {
    const f = form.querySelector('[data-f="' + nama + '"]');
    if (!f) return;
    f.classList.add('bad');
    const e = f.querySelector('.err');
    if (e && pesan) e.textContent = pesan;
    ok = false;
  };
  $$('.field', form).forEach(f => f.classList.remove('bad'));

  const nama = form.nama.value.trim();
  if (!nama) setBad('nama', 'Nama wajib diisi.');

  const nik = form.nik.value.trim();
  if (nik) {
    if (!/^\d+$/.test(nik)) setBad('nik', 'NIK hanya boleh angka.');
    else if (nik.length !== 16) setBad('nik', 'NIK harus tepat 16 angka (sekarang ' + nik.length + ').');
    else {
      const kembar = state.members.some(m => m.nik === nik && m.id !== idSekarang);
      if (kembar) setBad('nik', 'NIK ini sudah dipakai anggota lain.');
    }
  }

  const kk = form.kk.value.trim();
  if (kk) {
    if (!/^\d+$/.test(kk)) setBad('kk', 'No. KK hanya boleh angka.');
    else if (kk.length !== 16) {
      setBad('kk', 'No. KK harus tepat 16 angka (sekarang ' + kk.length + ').');
    }
  }
  return ok;
}

function konfirmasi(judul, pesan, aksi, labelAksi) {
  bukaModal('<div class="modal-h"><h3>' + esc(judul) + '</h3><div class="grow"></div>' +
    '<button class="icon-btn" data-close="1">' + ICON.x + '</button></div>' +
    '<div class="modal-b"><p style="margin:0">' + pesan + '</p></div>' +
    '<div class="modal-f"><button class="btn" data-close="1">Batal</button>' +
    '<button class="btn btn-red" id="btnYa">' + esc(labelAksi || 'Ya, lanjutkan') + '</button></div>', true);
  $('#btnYa').addEventListener('click', () => { tutupModal(); aksi(); });
}

/* ------------------------------------------------------------- pengendali */

const JUDUL = {
  dasbor: ['Dasbor', 'Ringkasan data team pemenangan'],
  data: ['Data Anggota', 'Cari, saring, tambah, dan ubah data'],
  rekap: ['Rekap & Analisa', 'Semua angka dihitung otomatis'],
  target: ['Target & Capaian', 'Perbandingan target dengan realisasi'],
  validasi: ['Validasi Data', 'Baris yang perlu diperbaiki'],
  cetak: ['Cetak Daftar', 'Dokumen resmi siap cetak'],
  kartu: ['Kartu Anggota', 'Kartu siap potong, 8 per halaman A4'],
  pengaturan: ['Pengaturan', 'Wilayah, jabatan, target, dan identitas'],
  'data-io': ['Cadangan & Drive', 'Simpan, pulihkan, dan bagikan data'],
  petunjuk: ['Petunjuk', 'Panduan singkat pemakaian aplikasi']
};

const RENDERER = {
  dasbor: viewDasbor, data: viewData, rekap: viewRekap, target: viewTarget,
  validasi: viewValidasi, cetak: viewCetak, kartu: viewKartu,
  pengaturan: viewPengaturan, 'data-io': viewDataIo, petunjuk: viewPetunjuk
};

function render() {
  const v = ui.view;
  const el = $('#view-' + v);
  if (!el) return;
  $$('.view').forEach(x => { x.hidden = x.id !== 'view-' + v; });
  el.innerHTML = RENDERER[v]();
  el.classList.remove('view-enter');
  void el.offsetWidth;
  el.classList.add('view-enter');

  $('#pageTitle').textContent = JUDUL[v][0];
  $('#pageSub').textContent = JUDUL[v][1];
  $$('#nav button').forEach(b => b.classList.toggle('on', b.dataset.view === v));

  const id = state.settings.identitas;
  $('#brandTeam').textContent = id.team || 'Team Pemenangan';
  $('#brandCalon').textContent = id.calon || '';
  document.title = (id.team || 'Team Pemenangan') + ' — Aplikasi Database Anggota';

  const r = ringkasan();
  const nc = $('#navCount');
  nc.hidden = !r.total;
  nc.textContent = num(r.total);
  const ni = $('#navIssues');
  ni.hidden = !r.bermasalah;
  ni.textContent = num(r.bermasalah);

  animasi(el);
  $('#viewWrap').scrollTop = 0;
}

/** Jalankan animasi bar & angka setelah elemen masuk DOM. */
function animasi(root) {
  requestAnimationFrame(() => {
    $$('[data-w]', root).forEach(b => { b.style.width = b.dataset.w + '%'; });
    $$('[data-h]', root).forEach(b => { b.style.height = b.dataset.h + '%'; });
    $$('[data-dash]', root).forEach(c => {
      c.setAttribute('stroke-dasharray', c.dataset.dash + ' 289');
    });
    $$('[data-count]', root).forEach(el => {
      // KPI bernilai teks (misal "1,2%" atau "—") ditandai data-count kosong;
      // jangan disentuh, kalau tidak isinya berubah jadi 0
      if (el.dataset.count === '') return;
      const akhir = Number(el.dataset.count);
      if (!akhir || akhir < 0) { el.textContent = num(akhir || 0); return; }
      const mulai = performance.now();
      const durasi = Math.min(900, 260 + akhir * 6);
      const step = t => {
        const p = Math.min(1, (t - mulai) / durasi);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = num(Math.round(akhir * e));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  });
}

function pindah(v) {
  if (!RENDERER[v]) return;
  ui.view = v;
  saveUi();
  render();
  if (window.innerWidth <= 940) tutupSidebar();
}

function tutupSidebar() {
  $('#sidebar').classList.remove('open');
  $('#scrim').hidden = true;
}

function setTema(t) {
  ui.theme = t;
  document.documentElement.setAttribute('data-theme', t);
  $('#themeIcon').innerHTML = t === 'dark'
    ? '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7"/>'
    : '<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8z"/>';
  saveUi();
}

let qTimer = null;

function pasangEvent() {
  $('#nav').addEventListener('click', e => {
    const b = e.target.closest('button[data-view]');
    if (b) pindah(b.dataset.view);
  });
  $('#menuToggle').addEventListener('click', () => {
    const sb = $('#sidebar');
    sb.classList.toggle('open');
    $('#scrim').hidden = !sb.classList.contains('open');
  });
  $('#scrim').addEventListener('click', tutupSidebar);
  $('#themeToggle').addEventListener('click', () => setTema(ui.theme === 'dark' ? 'light' : 'dark'));
  $('#btnAddTop').addEventListener('click', () => bukaForm(null));

  $('#overlay').addEventListener('click', e => {
    if (e.target.id === 'overlay' || e.target.closest('[data-close]')) tutupModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('#overlay').hidden) tutupModal();
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT'
      && document.activeElement.tagName !== 'TEXTAREA') {
      const q = $('#q');
      if (q) { e.preventDefault(); q.focus(); q.select(); }
    }
  });

  $('#viewWrap').addEventListener('click', onKlik);
  $('#viewWrap').addEventListener('input', onInput);
  $('#viewWrap').addEventListener('change', onChange);
}

function bukaForm(id) {
  bukaModal(formAnggota(id));
  const form = $('#formAnggota');
  const perbaruiKorwil = () => {
    $('#korwilPrev').value = wilayah({
      kampung: form.kampung.value, rt: form.rt.value,
      rw: form.rw.value, alamat: form.alamat.value
    });
  };
  ['kampung', 'rt', 'rw', 'alamat'].forEach(k =>
    form[k].addEventListener('change', perbaruiKorwil));
  form.alamat.addEventListener('input', perbaruiKorwil);
  // memilih nama RT/RK langsung mengisi nomor RT dan kadusnya
  form.namaRt.addEventListener('change', () => {
    const info = cariRt(form.namaRt.value);
    if (!info) return;
    form.rt.value = info.no;
    form.kadus.value = info.kadus;
    perbaruiKorwil();
  });
  form.namaRk.addEventListener('change', () => {
    const info = cariRk(form.namaRk.value);
    if (info && !form.kadus.value) form.kadus.value = info.kadus;
  });
  form.tglLahir.addEventListener('change', () => {
    const u = usia({ tglLahir: form.tglLahir.value });
    $('#usiaHint').textContent = u === null
      ? 'Usia dihitung otomatis.'
      : 'Usia ' + u + ' tahun — ' + kelompokUsia(u);
  });
  form.addEventListener('submit', e => { e.preventDefault(); simpanForm(id); });
  $('#btnSimpan').addEventListener('click', () => simpanForm(id));
}

function simpanForm(id) {
  const form = $('#formAnggota');
  if (!validasiForm(form, id)) {
    toast('Periksa kolom yang ditandai merah.', 'err');
    return;
  }
  const rec = {};
  FIELDS.forEach(k => { if (form[k]) rec[k] = form[k].value; });
  if (id) { ubah(id, rec); toast('Perubahan tersimpan.'); }
  else { tambah(rec); toast('Anggota baru tersimpan.'); }
  tutupModal();
  render();
}

function onKlik(e) {
  const t = e.target;

  const nav = t.closest('[data-page]');
  if (nav && !nav.disabled) { ui.page = Number(nav.dataset.page); saveUi(); render(); return; }

  const sort = t.closest('[data-sort]');
  if (sort) {
    const by = sort.dataset.sort;
    ui.sort = { by, dir: ui.sort.by === by ? -ui.sort.dir : 1 };
    saveUi(); render(); return;
  }

  const edit = t.closest('[data-edit]');
  if (edit) { bukaForm(edit.dataset.edit); return; }

  const buka = t.closest('[data-open]');
  if (buka) { bukaForm(buka.dataset.open); return; }

  const del = t.closest('[data-del]');
  if (del) {
    const m = cariById(del.dataset.del);
    if (!m) return;
    tutupModal();
    konfirmasi('Hapus anggota?',
      'Data <b>' + esc(m.nama) + '</b> akan dihapus permanen dari perangkat ini. ' +
      'Tindakan ini tidak bisa dibatalkan.',
      () => { hapus(m.id); toast('Data ' + m.nama + ' dihapus.'); render(); }, 'Ya, hapus');
    return;
  }

  const reset = t.closest('[data-reset]');
  if (reset) {
    const p = reset.dataset.reset;
    const kosong = { kadus: '', rt: '', tps: '', jabatan: '', status: '' };
    if (p === 'data') { ui.f = kosong; ui.q = ''; ui.page = 1; }
    else if (p === 'cetak') ui.cetak = Object.assign({ jenis: ui.cetak.jenis }, kosong);
    else if (p === 'kartu') ui.kartu = { kadus: '', rt: '', tps: '' };
    saveUi(); render(); return;
  }

  const jenis = t.closest('[data-jenis]');
  if (jenis) { ui.cetak.jenis = jenis.dataset.jenis; saveUi(); render(); return; }

  const rm = t.closest('[data-rm]');
  if (rm) {
    const kunci = rm.dataset.lk, nilai = rm.dataset.rm;
    state.settings[kunci] = state.settings[kunci].filter(v => v !== nilai);
    if (kunci === 'kadus') delete state.settings.target[nilai];
    save(true); render(); toast('"' + nilai + '" dihapus dari daftar.', 'info'); return;
  }

  const addbtn = t.closest('[data-addbtn]');
  if (addbtn) { tambahDaftar(addbtn.dataset.addbtn); return; }

  if (t.closest('#btnZip')) { unduhPaketZip(); return; }
  if (t.closest('#btnAdd')) { bukaForm(null); return; }
  if (t.closest('#btnCsv')) { exportCsv(urut(saring(), ui.sort.by, ui.sort.dir)); return; }
  if (t.closest('#btnExport')) { exportJson(); return; }
  if (t.closest('#btnExportCsv')) { exportCsv(); return; }
  if (t.closest('#btnReset')) {
    konfirmasi('Hapus semua data?',
      'Seluruh <b>' + num(state.members.length) + ' anggota</b> akan dihapus dari perangkat ini. ' +
      'Unduh cadangan JSON lebih dulu bila belum. Pengaturan tetap dipertahankan.',
      () => {
        state.members = [];
        save(true); render();
        toast('Semua data anggota dihapus.', 'info');
      }, 'Ya, hapus semua');
    return;
  }

  if (t.closest('#btnCetak') || t.closest('#btnCetakKartu')) {
    const pakaiKartu = !!t.closest('#btnCetakKartu');
    const f = pakaiKartu ? ui.kartu : ui.cetak;
    const j = pakaiKartu ? 'kartu' : (ui.cetak.jenis || 'daftar');
    const ekstra = {
      kegiatan: ($('#egKegiatan') || {}).value || '',
      tanggal: ($('#egTanggal') || {}).value || '',
      tempat: ($('#egTempat') || {}).value || ''
    };
    cetakSekarang(j, f, ekstra);
    return;
  }

  if (t.closest('#btnPratinjau')) {
    const ekstra = {
      kegiatan: ($('#egKegiatan') || {}).value || '',
      tanggal: ($('#egTanggal') || {}).value || '',
      tempat: ($('#egTempat') || {}).value || ''
    };
    const box = $('#pratinjauBox');
    box.innerHTML = '<div class="sec-title">Pratinjau dokumen</div>' +
      '<div class="card"><div class="card-b" style="background:#fff;color:#000">' +
      '<div class="pratinjau">' + buatDokumen(ui.cetak.jenis || 'daftar', ui.cetak, ekstra) + '</div>' +
      '</div></div>';
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
}

function tambahDaftar(kunci) {
  const inp = $('[data-add="' + kunci + '"]');
  if (!inp) return;
  const v = inp.value.trim();
  if (!v) return;
  if (state.settings[kunci].includes(v)) { toast('"' + v + '" sudah ada.', 'err'); return; }
  state.settings[kunci].push(v);
  if (kunci === 'kadus' && state.settings.target[v] === undefined) state.settings.target[v] = 50;
  save(true);
  render();
  toast('"' + v + '" ditambahkan.');
}

function onInput(e) {
  const t = e.target;
  if (t.id === 'q') {
    clearTimeout(qTimer);
    qTimer = setTimeout(() => {
      ui.q = t.value;
      ui.page = 1;
      saveUi();
      const posisi = t.selectionStart;
      render();
      const baru = $('#q');
      if (baru) { baru.focus(); baru.setSelectionRange(posisi, posisi); }
    }, 260);
    return;
  }
  if (t.dataset.id) {
    state.settings.identitas[t.dataset.id] = t.value;
    save();
    $('#brandTeam').textContent = state.settings.identitas.team || 'Team Pemenangan';
    $('#brandCalon').textContent = state.settings.identitas.calon || '';
    return;
  }
  if (t.dataset.png !== undefined && t.dataset.png !== '') {
    const k = state.settings.pengurus[Number(t.dataset.png)];
    if (k) {
      if (t.dataset.pf === 'nama') k.nama = t.value.trim();
      else if (t.dataset.pj) k[t.dataset.pj][Number(t.dataset.pi)][1] = t.value.trim();
      // daftar nama ikut diperbarui supaya dropdown dan filter tetap cocok
      state.settings.namaRt = state.settings.pengurus
        .flatMap(x => (x.rt || []).map(r => r[1])).filter(Boolean);
      state.settings.namaRk = state.settings.pengurus
        .flatMap(x => (x.rk || []).map(r => r[1])).filter(Boolean);
      save();
    }
    return;
  }
  if (t.dataset.target !== undefined && t.dataset.target !== '') {
    state.settings.target[t.dataset.target] = Math.max(0, Number(t.value) || 0);
    save();
    return;
  }
  if (t.dataset.add !== undefined && e.inputType === undefined) return;
}

function onChange(e) {
  const t = e.target;
  if (t.dataset.fk) {
    const p = t.dataset.fp;
    const wadah = p === 'data' ? ui.f : (p === 'cetak' ? ui.cetak : ui.kartu);
    wadah[t.dataset.fk] = t.value;
    if (p === 'data') ui.page = 1;
    saveUi();
    render();
    return;
  }
  if (t.id === 'perPage') { ui.perPage = Number(t.value); ui.page = 1; saveUi(); render(); return; }
  if (t.id === 'fileImport' && t.files && t.files[0]) {
    const gabung = $('#impGabung') && $('#impGabung').checked;
    importFile(t.files[0], gabung);
    t.value = '';
    return;
  }
}

document.addEventListener('keydown', e => {
  const inp = e.target;
  if (inp && inp.dataset && inp.dataset.add !== undefined && e.key === 'Enter') {
    e.preventDefault();
    tambahDaftar(inp.dataset.add);
  }
});

/* ---------------------------------------------------------------- mulai */

function mulai() {
  load();
  setTema(ui.theme === 'dark' ? 'dark' : 'light');
  pasangEvent();
  render();
  // database bawaan paket (data/database.js) — diabaikan diam-diam bila
  // aplikasi dibuka sendirian tanpa folder data
  muatBawaan(ada => { if (ada) terapkanBawaan(window.TP_DATA); });
  window.addEventListener('beforeprint', () => {
    if (!$('#print-root').innerHTML.trim()) {
      $('#print-root').innerHTML = buatDokumen(ui.cetak.jenis || 'daftar', ui.cetak, {});
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mulai);
} else {
  mulai();
}
