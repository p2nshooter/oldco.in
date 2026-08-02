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
