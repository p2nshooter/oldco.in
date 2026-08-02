/* ==========================================================================
   Aplikasi Team Pemenangan — paket data offline (ZIP) & database bawaan

   Peramban menolak fetch() ke berkas tetangga saat halaman dibuka lewat
   file:// (kebijakan CORS). Yang tetap diizinkan adalah memuat berkas lewat
   tag <script>, jadi database paket disimpan sebagai data/database.js yang
   mengisi window.TP_DATA. Cara ini bekerja tanpa server sama sekali.
   ========================================================================== */

'use strict';

/* --------------------------------------------------------- penulis ZIP */

const CRC_TABEL = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[i] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) c = CRC_TABEL[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

async function kempis(data) {
  if (typeof CompressionStream === 'undefined') return null;
  try {
    const aliran = new Blob([data]).stream().pipeThrough(new CompressionStream('deflate-raw'));
    const hasil = new Uint8Array(await new Response(aliran).arrayBuffer());
    return hasil.length < data.length ? hasil : null;
  } catch (e) {
    return null;                       // peramban lama: simpan tanpa kompresi
  }
}

/** Bangun berkas ZIP dari [{nama, data:Uint8Array}] — tanpa pustaka luar. */
async function buatZip(berkas) {
  const enc = new TextEncoder();
  const bagian = [];
  const pusat = [];
  const kini = new Date();
  const jam = ((kini.getHours() << 11) | (kini.getMinutes() << 5) |
    (kini.getSeconds() >> 1)) & 0xFFFF;
  const tgl = (((kini.getFullYear() - 1980) << 9) | ((kini.getMonth() + 1) << 5) |
    kini.getDate()) & 0xFFFF;
  let posisi = 0;

  for (const f of berkas) {
    const nama = enc.encode(f.nama);
    const crc = crc32(f.data);
    const padat = await kempis(f.data);
    const keluar = padat || f.data;
    const metode = padat ? 8 : 0;

    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true);
    lh.setUint16(4, 20, true);
    lh.setUint16(6, 0x0800, true);      // nama berkas UTF-8
    lh.setUint16(8, metode, true);
    lh.setUint16(10, jam, true);
    lh.setUint16(12, tgl, true);
    lh.setUint32(14, crc, true);
    lh.setUint32(18, keluar.length, true);
    lh.setUint32(22, f.data.length, true);
    lh.setUint16(26, nama.length, true);
    lh.setUint16(28, 0, true);
    bagian.push(new Uint8Array(lh.buffer), nama, keluar);

    pusat.push({ nama, crc, padat: keluar.length, asli: f.data.length, metode, posisi });
    posisi += 30 + nama.length + keluar.length;
  }

  const awalPusat = posisi;
  for (const c of pusat) {
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true);
    ch.setUint16(4, 20, true);
    ch.setUint16(6, 20, true);
    ch.setUint16(8, 0x0800, true);
    ch.setUint16(10, c.metode, true);
    ch.setUint16(12, jam, true);
    ch.setUint16(14, tgl, true);
    ch.setUint32(16, c.crc, true);
    ch.setUint32(20, c.padat, true);
    ch.setUint32(24, c.asli, true);
    ch.setUint16(28, c.nama.length, true);
    ch.setUint32(42, c.posisi, true);
    bagian.push(new Uint8Array(ch.buffer), c.nama);
    posisi += 46 + c.nama.length;
  }

  const akhir = new DataView(new ArrayBuffer(22));
  akhir.setUint32(0, 0x06054b50, true);
  akhir.setUint16(8, pusat.length, true);
  akhir.setUint16(10, pusat.length, true);
  akhir.setUint32(12, posisi - awalPusat, true);
  akhir.setUint32(16, awalPusat, true);
  bagian.push(new Uint8Array(akhir.buffer));

  return new Blob(bagian, { type: 'application/zip' });
}

/* ------------------------------------------------------- isi paket ZIP */

function isiDatabase() {
  return {
    aplikasi: 'Aplikasi Team Pemenangan',
    v: 1,
    disimpan: new Date().toISOString(),
    settings: state.settings,
    members: state.members
  };
}

/** Salinan aplikasi yang bisa langsung dibuka, diambil dari DOM saat ini. */
function salinanAplikasi() {
  const doc = document.documentElement.cloneNode(true);
  doc.setAttribute('data-theme', 'light');
  doc.querySelectorAll('.view').forEach(v => { v.innerHTML = ''; });
  ['#print-root', '#toasts'].forEach(s => {
    const el = doc.querySelector(s);
    if (el) el.innerHTML = '';
  });
  const ov = doc.querySelector('#overlay');
  if (ov) { ov.setAttribute('hidden', ''); const m = ov.querySelector('#modal'); if (m) m.innerHTML = ''; }
  const sb = doc.querySelector('#sidebar');
  if (sb) sb.classList.remove('open');
  const sc = doc.querySelector('#scrim');
  if (sc) sc.setAttribute('hidden', '');
  // tag skrip database yang disuntik saat berjalan tidak ikut disalin —
  // aplikasi akan menyuntiknya lagi sendiri ketika dibuka
  doc.querySelectorAll('script[data-bawaan]').forEach(s => s.remove());
  return '<!doctype html>\n' + doc.outerHTML;
}

const BACA_DULU = `APLIKASI TEAM PEMENANGAN — PAKET OFFLINE
========================================

Isi paket ini:

  Aplikasi Team Pemenangan.html   <- buka berkas ini (klik dua kali)
  data/database.js                <- database Anda, dimuat otomatis
  data/database.json              <- database yang sama, untuk cadangan
  data/untuk-excel.csv            <- untuk dibuka / diimpor di Excel
  BACA-DULU.txt                   <- berkas ini

Berkas Excel tidak ikut dalam paket yang dibuat dari dalam aplikasi.
Salin "Aplikasi Team Pemenangan.xlsx" dari paket aslinya, lalu perbarui
isinya lewat data/untuk-excel.csv.

CARA PAKAI
----------
1. Ekstrak (unzip) seluruh isi paket ini ke satu folder.
   JANGAN membuka berkas HTML langsung dari dalam ZIP — folder data
   tidak ikut terbaca sehingga database tidak termuat.
2. Buka "Aplikasi Team Pemenangan.html" dengan Chrome.
3. Database dari folder data akan dimuat otomatis saat pertama dibuka.

DI HP
-----
Ekstrak ZIP memakai aplikasi pengelola berkas (misalnya Files atau ZArchiver),
lalu buka berkas HTML-nya dengan Chrome. Pastikan folder data ikut terekstrak
dan berada di sebelah berkas HTML.

MEMINDAHKAN DATA KE PERANGKAT LAIN
----------------------------------
Di aplikasi, buka menu "Cadangan & Drive" lalu tekan
"Unduh paket ZIP". Paket baru berisi aplikasi + seluruh data terbaru.
Kirim paket itu ke perangkat lain, ekstrak, buka.

PENTING
-------
Selama dipakai, data disimpan di penyimpanan peramban perangkat tersebut,
bukan di dalam berkas HTML. Membersihkan data peramban akan menghapusnya.
Biasakan menekan "Unduh paket ZIP" setiap selesai menginput banyak data.
`;

/** Isi CSV yang sama dengan tombol "Unduh CSV" — dipakai di dalam paket ZIP. */
function isiCsv() {
  const baris = [CSV_KOLOM.join(',')];
  state.members.forEach(m => {
    baris.push(CSV_KOLOM.map(k => csvCell(m[k])).join(','));
  });
  return '\ufeff' + baris.join('\r\n');
}

async function unduhPaketZip() {
  const tombol = $('#btnZip');
  if (tombol) { tombol.disabled = true; tombol.textContent = 'Menyiapkan paket…'; }
  try {
    const enc = new TextEncoder();
    const data = isiDatabase();
    const json = JSON.stringify(data, null, 2);
    const berkas = [
      { nama: 'Aplikasi Team Pemenangan.html', data: enc.encode(salinanAplikasi()) },
      { nama: 'data/database.js', data: enc.encode('window.TP_DATA = ' + json + ';\n') },
      { nama: 'data/database.json', data: enc.encode(json) },
      // jembatan ke versi Excel: kolomnya sama dengan sheet DATABASE
      { nama: 'data/untuk-excel.csv', data: enc.encode(isiCsv()) },
      { nama: 'BACA-DULU.txt', data: enc.encode(BACA_DULU) }
    ];
    const zip = await buatZip(berkas);
    const url = URL.createObjectURL(zip);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Aplikasi-Team-Pemenangan-' + stamp() + '.zip';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 600);
    toast('Paket ZIP terunduh — berisi aplikasi + ' + num(state.members.length) +
      ' anggota.', 'ok', 5000);
  } catch (e) {
    console.error(e);
    toast('Paket gagal dibuat: ' + e.message, 'err', 6000);
  } finally {
    if (tombol) { tombol.disabled = false; tombol.textContent = 'Unduh paket ZIP'; }
  }
}

/* ------------------------------------------------- database bawaan paket */

function muatBawaan(selesai) {
  const s = document.createElement('script');
  s.src = 'data/database.js';
  s.dataset.bawaan = '1';
  s.onload = () => selesai(true);
  s.onerror = () => selesai(false);   // dibuka tanpa folder data — wajar
  document.head.appendChild(s);
}

function gabungAnggota(masuk) {
  const adaNik = new Set(state.members.map(m => m.nik).filter(Boolean));
  const adaId = new Set(state.members.map(m => m.id));
  let tambahJml = 0, lewat = 0;
  masuk.forEach(r => {
    const m = normalisasi(r);
    m.id = adaId.has(r.id) || !r.id ? uid() : r.id;
    m.dibuat = r.dibuat || new Date().toISOString();
    m.diubah = new Date().toISOString();
    if (m.nik && adaNik.has(m.nik)) { lewat++; return; }
    if (m.nik) adaNik.add(m.nik);
    adaId.add(m.id);
    state.members.push(m);
    tambahJml++;
  });
  return { tambahJml, lewat };
}

function pakaiPaket(d) {
  state.members = (d.members || []).map(r => {
    const m = normalisasi(r);
    m.id = r.id || uid();
    m.dibuat = r.dibuat || new Date().toISOString();
    m.diubah = r.diubah || m.dibuat;
    return m;
  });
  if (d.settings) state.settings = Object.assign(defaultSettings(), d.settings);
  save(true);
}

/** Terapkan database bawaan paket, tanpa pernah menimpa data diam-diam. */
function terapkanBawaan(d) {
  if (!d || !Array.isArray(d.members) || !d.members.length) return;
  d = naikkanVersi(d);

  if (!state.members.length) {
    pakaiPaket(d);
    render();
    toast('Database dari paket dimuat: ' + num(state.members.length) + ' anggota.',
      'info', 5000);
    return;
  }

  const tPaket = Date.parse(d.disimpan || '') || 0;
  const tLokal = Date.parse(state.disimpan || '') || 0;
  if (tPaket <= tLokal) return;        // data perangkat sama baru atau lebih baru

  const tglPaket = d.disimpan ? tglId(d.disimpan) : 'tanpa tanggal';
  const tglLokal = state.disimpan ? tglId(state.disimpan) : 'tanpa tanggal';
  bukaModal('<div class="modal-h"><h3>Paket berisi data lebih baru</h3><div class="grow"></div>' +
    '<button class="icon-btn" data-close="1">' + ICON.x + '</button></div>' +
    '<div class="modal-b">' +
    '<p>Folder <b>data</b> di sebelah aplikasi berisi database yang lebih baru ' +
    'daripada yang tersimpan di perangkat ini.</p>' +
    '<div class="grid two" style="margin:14px 0">' +
    '<div class="card"><div class="card-b"><div class="mini-note">DARI PAKET</div>' +
    '<div style="font-size:22px;font-weight:800">' + num(d.members.length) + ' anggota</div>' +
    '<div class="mini-note">' + esc(tglPaket) + '</div></div></div>' +
    '<div class="card"><div class="card-b"><div class="mini-note">DI PERANGKAT INI</div>' +
    '<div style="font-size:22px;font-weight:800">' + num(state.members.length) + ' anggota</div>' +
    '<div class="mini-note">' + esc(tglLokal) + '</div></div></div>' +
    '</div><p class="mini-note">Tidak ada yang diubah sampai Anda memilih.</p></div>' +
    '<div class="modal-f"><button class="btn" data-close="1">Pertahankan data perangkat</button>' +
    '<button class="btn" id="btnGabung">Gabungkan</button>' +
    '<button class="btn btn-primary" id="btnPakaiPaket">Gunakan data paket</button></div>');

  $('#btnPakaiPaket').addEventListener('click', () => {
    pakaiPaket(d);
    tutupModal();
    render();
    toast('Data paket dipakai: ' + num(state.members.length) + ' anggota.');
  });
  $('#btnGabung').addEventListener('click', () => {
    const { tambahJml, lewat } = gabungAnggota(d.members);
    save(true);
    tutupModal();
    render();
    toast('Ditambahkan ' + num(tambahJml) + ' anggota' +
      (lewat ? ', ' + num(lewat) + ' dilewati karena NIK sudah ada.' : '.'));
  });
}

/* ------------------------------------------------- ekspor SQL (Supabase)

   Persiapan pindah ke database daring. Aplikasi ini tetap dipakai offline;
   begitu tim siap, seluruh isinya dituangkan menjadi satu berkas SQL yang
   tinggal ditempel ke SQL Editor Supabase — tanpa mengetik ulang apa pun.

   Keluarannya sengaja dibuat sama persis dengan supabase/build_sql.py,
   supaya dua jalur itu tidak pernah menghasilkan bentuk yang berbeda. */

const TIM_ID = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21';
const KODE_TIM = 'jf3-sukakarya';

/** Nilai menjadi literal SQL yang aman. */
function sq(v) {
  if (v === null || v === undefined) return 'null';
  if (typeof v === 'number') return String(v);
  return "'" + String(v).replace(/'/g, "''") + "'";
}

function sqlTgl(v) { return v ? sq(v) + '::date' : 'null'; }

function buatSql() {
  const s = state.settings;
  const id = s.identitas || {};
  const png = s.pengurus || [];
  const kampung = s.kampung || [];
  const target = s.target || {};
  const ms = state.members;
  const b = [];
  const w = x => b.push(x);
  const T = sq(TIM_ID);

  w('-- ===================================================================');
  w('--  Data awal Team Pemenangan — dihasilkan dari database.json');
  w('--  Jalankan setelah schema.sql. Aman dijalankan berulang kali.');
  w('-- ===================================================================');
  w('');
  w('begin;');
  w('');

  const kolom = ['id', 'kode', 'calon', 'team', 'periode', 'tahun', 'desa',
    'kecamatan', 'kabupaten', 'ketua', 'jabatan_ttd', 'motto', 'drive_url'];
  const nilai = [T, sq(KODE_TIM), sq(id.calon || ''), sq(id.team || ''),
    sq(id.periode || ''), sq(id.tahun || ''), sq(id.desa || ''),
    sq(id.kecamatan || ''), sq(id.kabupaten || ''), sq(id.ketua || ''),
    sq(id.jabatanTtd || ''), sq(id.motto || ''), sq(id.driveUrl || '')];
  w('-- identitas team ---------------------------------------------------');
  w('insert into public.tim (' + kolom.join(', ') + ')');
  w('values (' + nilai.join(', ') + ')');
  w('on conflict (id) do update set');
  w(kolom.slice(1).map(k => '  ' + k + ' = excluded.' + k).join(',\n') + ';');
  w('');

  w('-- kampung dan targetnya --------------------------------------------');
  w('insert into public.kampung (tim_id, nama, target, urutan) values');
  w(kampung.map((k, i) =>
    '  (' + T + ', ' + sq(k) + ', ' + (Number(target[k]) || 0) + ', ' + i + ')')
    .join(',\n'));
  w('on conflict (tim_id, nama) do update set');
  w('  target = excluded.target, urutan = excluded.urutan;');
  w('');

  w('-- kadus --------------------------------------------------------------');
  w('insert into public.kadus (tim_id, nama, nama_ketua, urutan) values');
  w(png.map((k, i) =>
    '  (' + T + ', ' + sq(k.kadus) + ', ' + sq(k.nama || '') + ', ' + i + ')')
    .join(',\n'));
  w('on conflict (tim_id, nama) do update set nama_ketua = excluded.nama_ketua;');
  w('');

  let baris = [];
  png.forEach(k => (k.rw || []).forEach(r => {
    baris.push('  (' + T + ', ' + sq(r[0]) + ', ' + sq(r[1] || '') +
      ', (select id from public.kadus where tim_id = ' + T +
      ' and nama = ' + sq(k.kadus) + '))');
  }));
  w('-- ketua RW — nomor RW berlaku satu desa, jadi unik per tim ----------');
  if (baris.length) {
    w('insert into public.rw (tim_id, nomor, nama_ketua, kadus_id) values');
    w(baris.join(',\n'));
    w('on conflict (tim_id, nomor) do update set');
    w('  nama_ketua = excluded.nama_ketua, kadus_id = excluded.kadus_id;');
    w('');
  }

  baris = [];
  png.forEach(k => (k.rt || []).forEach(r => {
    baris.push('  (' + T + ', (select id from public.kadus where tim_id = ' + T +
      ' and nama = ' + sq(k.kadus) + '), ' + sq(r[0]) + ', ' + sq(r[1] || '') +
      ', (select id from public.kampung where tim_id = ' + T +
      ' and nama = ' + sq(r[2] || '') + ')' +
      ', (select id from public.rw where tim_id = ' + T +
      ' and nomor = ' + sq(r[3] || '') + '))');
  }));
  w('-- ketua RT — nomor RT berulang per kadus, keunikannya per kadus -----');
  if (baris.length) {
    w('insert into public.rt (tim_id, kadus_id, nomor, nama_ketua, kampung_id, rw_id) values');
    w(baris.join(',\n'));
    w('on conflict (tim_id, kadus_id, nomor) do update set');
    w('  nama_ketua = excluded.nama_ketua,');
    w('  kampung_id = excluded.kampung_id,');
    w('  rw_id      = excluded.rw_id;');
    w('');
  }

  baris = [];
  ['tps', 'jabatan', 'status', 'rt', 'rw'].forEach(jenis => {
    (s[jenis] || []).forEach((v, i) => {
      baris.push('  (' + T + ', ' + sq(jenis) + ', ' + sq(v) + ', ' + i + ')');
    });
  });
  w('-- isi dropdown -------------------------------------------------------');
  if (baris.length) {
    w('insert into public.daftar_pilihan (tim_id, jenis, nilai, urutan) values');
    w(baris.join(',\n'));
    w('on conflict (tim_id, jenis, nilai) do update set urutan = excluded.urutan;');
    w('');
  }

  const ku = s.kelompokUsia || [];
  if (ku.length) {
    w('insert into public.kelompok_usia (tim_id, label, usia_min) values');
    w(ku.map(g => '  (' + T + ', ' + sq(g.label) + ', ' + Number(g.min) + ')')
      .join(',\n'));
    w('on conflict (tim_id, label) do update set usia_min = excluded.usia_min;');
    w('');
  }

  w('-- anggota ------------------------------------------------------------');
  w('-- Tabel sementara menampung baris apa adanya; penyambungan ke tabel');
  w('-- wilayah dikerjakan sesudahnya supaya nama yang belum terdaftar di');
  w('-- struktur pengurus tidak menggagalkan impor.');
  w('create temporary table _impor (');
  w('  nama text, nik text, kk text, jk text, kampung text, kadus text,');
  w('  rt_nomor text, rw_nomor text, nama_rt text, nama_rw text,');
  w('  alamat text, tps text, jabatan text, hp text, tgl_lahir date,');
  w('  status text, tgl_gabung date, perekrut text, catatan text');
  w(') on commit drop;');
  w('');

  if (ms.length) {
    w('insert into _impor values');
    w(ms.map(m => '  (' + [
      sq(m.nama || ''), sq(m.nik || ''), sq(m.kk || ''), sq(m.jk || ''),
      sq(m.kampung || ''), sq(m.kadus || ''), sq(m.rt || ''), sq(m.rw || ''),
      sq(m.namaRt || ''), sq(m.namaRw || ''), sq(m.alamat || ''), sq(m.tps || ''),
      sq(m.jabatan || 'Anggota'), sq(m.hp || ''), sqlTgl(m.tglLahir || ''),
      sq(m.status || 'Aktif'), sqlTgl(m.tglGabung || ''), sq(m.perekrut || ''),
      sq(m.catatan || '')
    ].join(', ') + ')').join(',\n') + ';');
    w('');
  }

  w('insert into public.anggota (');
  w('  tim_id, nama, nik, kk, jk, kampung_id, kadus_id, rw_id, rt_id,');
  w('  rt_nomor, rw_nomor, alamat, tps, jabatan, hp, tgl_lahir, status,');
  w('  tgl_gabung, perekrut, catatan)');
  w('select');
  w('  ' + T + ', i.nama, i.nik, i.kk, i.jk,');
  w('  kp.id, kd.id, rw.id, rt.id,');
  w('  i.rt_nomor, i.rw_nomor, i.alamat, i.tps, i.jabatan, i.hp,');
  w('  i.tgl_lahir, i.status, i.tgl_gabung, i.perekrut, i.catatan');
  w('from _impor i');
  w('left join public.kampung kp on kp.tim_id = ' + T + ' and kp.nama = i.kampung');
  w('left join public.kadus   kd on kd.tim_id = ' + T + ' and kd.nama = i.kadus');
  w('left join public.rw      rw on rw.tim_id = ' + T + ' and rw.nomor = i.rw_nomor');
  w('left join public.rt      rt on rt.tim_id = ' + T);
  w('                            and rt.kadus_id = kd.id and rt.nomor = i.rt_nomor');
  w('-- NIK adalah kunci sesungguhnya, tetapi sebagian anggota memang belum');
  w('-- punya NIK. Selama itu, pasangan nama + catatan asli dipakai sebagai');
  w('-- pengenal sementara supaya menjalankan ulang berkas ini tidak');
  w('-- menggandakan barisnya.');
  w('where not exists (');
  w('  select 1 from public.anggota a');
  w('   where a.tim_id = ' + T);
  w("     and ((i.nik <> '' and a.nik = i.nik)");
  w("       or (i.nik  = '' and a.nik = '' and a.nama = i.nama");
  w('           and a.catatan = i.catatan)));');
  w('');
  w('-- baris yang sudah ada: diperbarui, bukan digandakan');
  w('update public.anggota a set');
  w('  nama = i.nama, kk = i.kk, jk = i.jk,');
  w('  rt_nomor = i.rt_nomor, rw_nomor = i.rw_nomor, alamat = i.alamat,');
  w('  tps = i.tps, jabatan = i.jabatan, hp = i.hp, tgl_lahir = i.tgl_lahir,');
  w('  status = i.status, tgl_gabung = i.tgl_gabung, perekrut = i.perekrut,');
  w('  catatan = i.catatan');
  w('from _impor i');
  w('where a.tim_id = ' + T + " and i.nik <> '' and a.nik = i.nik;");
  w('');
  w('commit;');
  w('');
  const nRw = png.reduce((a, k) => a + (k.rw || []).length, 0);
  const nRt = png.reduce((a, k) => a + (k.rt || []).length, 0);
  w('-- ringkas: ' + ms.length + ' anggota, ' + kampung.length + ' kampung, ' +
    png.length + ' kadus,');
  w('--          ' + nRw + ' RW, ' + nRt + ' RT');
  return b.join('\n') + '\n';
}
