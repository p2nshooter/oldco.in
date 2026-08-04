/* ==========================================================================
   Aplikasi Team Pemenangan — tampilan
   ========================================================================== */

'use strict';

const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

function esc(s) {
  return String(s === undefined || s === null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
const nf = new Intl.NumberFormat('id-ID');
const num = n => nf.format(n || 0);
const pct = v => (v * 100).toFixed(1).replace('.', ',') + '%';

function tglId(iso) {
  if (!iso) return '';
  const d = new Date(iso.length <= 10 ? iso + 'T00:00:00' : iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
}

const ICON = {
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20v-1.6a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20"/><circle cx="9" cy="7.5" r="3.5"/><path d="M22 20v-1.6a4 4 0 0 0-3-3.9M16.5 4.2a4 4 0 0 1 0 7.1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8.5v5M12 17h.01"/><path d="M10.3 3.9 2.6 17.2A2 2 0 0 0 4.3 20.2h15.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>',
  cake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16M4 20v-6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6M12 8V5"/><path d="M8 11V8M16 11V8"/></svg>',
  vote: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 13V6.5A1.5 1.5 0 0 1 8.5 5h7A1.5 1.5 0 0 1 17 6.5V13"/><path d="M9.5 9h5"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>',
  print: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 15h12v6H6z"/></svg>',
  bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5.9 1.2.9 1.9v.2h5.2v-.2c0-.7.3-1.4.9-1.9A6 6 0 0 0 12 3z"/></svg>',
  empty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z"/><path d="M3 7.5 12 12l9-4.5M12 12v9"/></svg>'
};

/* --------------------------------------------------------------- toast */

function toast(msg, jenis, ms) {
  const box = $('#toasts');
  const el = document.createElement('div');
  el.className = 'toast ' + (jenis || '');
  const ic = jenis === 'err' ? ICON.alert : (jenis === 'info' ? ICON.bulb : ICON.check);
  el.innerHTML = ic + '<div>' + esc(msg) + '</div>';
  const umur = ms || 3200;
  // garis waktu di dasar pesan menyusut selama umur itu — terlihat berapa
  // lama lagi sebelum hilang, jadi tidak perlu buru-buru membacanya
  el.style.setProperty('--umur', umur + 'ms');
  box.appendChild(el);
  const t = setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 260);
  }, umur);
  el.addEventListener('click', () => { clearTimeout(t); el.remove(); });
}

/* --------------------------------------------------------------- pilihan */

function opts(list, sel, kosong, label) {
  let h = '<option value="">' + esc(kosong || '— semua —') + '</option>';
  for (const v of list) {
    h += '<option value="' + esc(v) + '"' + (v === sel ? ' selected' : '') + '>' +
      esc(label ? label(v) : v) + '</option>';
  }
  return h;
}

/** Nomor RW ditampilkan sekalian nama ketuanya supaya tidak perlu menghafal. */
function labelRw(no) {
  const p = rwDariNomor(no);
  return p ? 'RW ' + no + ' · ' + p.nama : 'RW ' + no;
}

function filterBar(f, prefix, extra) {
  const s = state.settings;
  const sel = (k, list, kosong, label) =>
    '<select data-fk="' + k + '" data-fp="' + prefix + '">' +
    opts(list, f[k], kosong, label) + '</select>';
  return '<div class="filters">' +
    sel('kampung', s.kampung, '— semua Kampung —') +
    sel('rt', s.rt, '— semua RT —', v => 'RT ' + v) +
    sel('rw', s.rw, '— semua RW —', labelRw) +
    (s.namaRt.length ? sel('namaRt', s.namaRt, '— semua Nama RT —') : '') +
    (s.namaRw.length ? sel('namaRw', s.namaRw, '— semua Nama RW —') : '') +
    (s.kadus.length ? sel('kadus', s.kadus, '— semua Kadus —') : '') +
    sel('tps', s.tps, '— semua TPS —') +
    (extra === false ? '' :
      sel('jabatan', s.jabatan, '— semua jabatan —') +
      sel('status', s.status, '— semua status —')) +
    '<button class="btn btn-sm" data-reset="' + prefix + '">Reset filter</button>' +
    '</div>';
}

/** Warna batang capaian: hijau tercapai, kuning setengah jalan, merah kurang.
 *
 *  Selama targetnya belum diisi, capaiannya nol — dan tanpa penjagaan ini
 *  seluruh batang tampil merah seakan tim gagal, padahal yang belum ada justru
 *  angka pembandingnya. Tanpa target, batangnya dibiarkan warna dasar. */
function warnaCapaian(x) {
  if (!x.target) return '';
  return x.capaian >= 1 ? 'g' : (x.capaian >= .5 ? 'a' : 'r');
}

function labelFilter(f) {
  const b = [];
  if (f.kampung) b.push(f.kampung);
  if (f.rt) b.push('RT ' + f.rt + (f.rw ? '/' + f.rw : ''));
  else if (f.rw) b.push('RW ' + f.rw);
  if (f.namaRt) b.push('Ketua RT ' + f.namaRt);
  if (f.namaRw) b.push('Ketua RW ' + f.namaRw);
  if (f.kadus) b.push('Kadus ' + f.kadus);
  if (f.tps) b.push('TPS ' + f.tps);
  if (f.jabatan) b.push(f.jabatan);
  if (f.status) b.push(f.status);
  return b.length ? b.join(' • ') : 'SELURUH ANGGOTA';
}

/* --------------------------------------------------------------- dasbor */

function viewDasbor() {
  const r = ringkasan();
  const pk = perKadus().filter(x => x.jumlah > 0 || x.target > 0);
  const maxKadus = Math.max(1, ...pk.map(x => x.jumlah));

  const kpi = (lab, val, sub, ic, cls) =>
    '<div class="kpi ' + (cls || '') + '"><div class="k-top">' + ic +
    '<span class="k-lab">' + lab + '</span></div>' +
    '<div class="k-val" data-count="' + (typeof val === 'number' ? val : '') + '">' +
    (typeof val === 'number' ? '0' : esc(val)) + '</div>' +
    '<div class="k-sub">' + esc(sub) + '</div></div>';

  const usiaMap = new Map();
  state.settings.kelompokUsia.forEach(g => usiaMap.set(g.label, 0));
  state.members.forEach(m => {
    const g = kelompokUsia(usia(m));
    if (g) usiaMap.set(g, (usiaMap.get(g) || 0) + 1);
  });
  const maxUsia = Math.max(1, ...usiaMap.values());

  const total = r.L + r.P;
  const dashL = total ? (r.L / total) * 289 : 0;

  let h = '<div class="grid kpi-grid stagger">' +
    kpi('Total anggota', r.total, 'dari ' + num(r.targetTotal) + ' target', ICON.users) +
    kpi('Berstatus aktif', r.aktif, r.total ? pct(r.aktif / r.total) + ' dari total' : 'belum ada data', ICON.check, 'is-green') +
    kpi('Capaian target', r.targetTotal ? pct(r.capaian) : '—', 'seluruh Kadus', ICON.target, 'is-gold') +
    kpi('Wilayah tercakup', r.kadusAktif, r.rtAktif + ' RT • ' + r.tpsAktif + ' TPS', ICON.pin) +
    kpi('Rata-rata usia', r.rataUsia === null ? '—' : r.rataUsia + ' th', 'dari yang berisi tgl lahir', ICON.cake) +
    kpi('Perlu diperbaiki', r.bermasalah, r.bermasalah ? 'buka Validasi Data' : 'semua data lengkap', ICON.alert,
      r.bermasalah ? 'is-red' : '') +
    '</div>';

  h += '<div class="grid two" style="margin-top:16px">';

  h += '<div class="card"><div class="card-h"><h3>Sebaran per Kampung</h3><div class="grow"></div>' +
    '<span class="mini-note">jumlah / target</span></div><div class="card-b">';
  if (!pk.length) {
    h += '<div class="empty">' + ICON.empty + '<h4>Belum ada data</h4>' +
      '<p class="mini-note">Tambah anggota untuk melihat sebarannya.</p></div>';
  } else {
    pk.forEach(x => {
      const w = (x.jumlah / maxKadus) * 100;
      const cls = warnaCapaian(x);
      h += '<div class="bar-row"><span>' + esc(x.kadus) + '</span>' +
        '<span class="bar-track"><span class="bar-fill ' + cls + '" data-w="' + w + '"></span></span>' +
        '<span class="bar-val">' + num(x.jumlah) + (x.target ? '<span style="color:var(--muted);font-weight:500">/' + num(x.target) + '</span>' : '') + '</span></div>';
    });
  }
  h += '</div></div>';

  h += '<div class="card"><div class="card-h"><h3>Komposisi &amp; segmen usia</h3></div><div class="card-b">' +
    '<div class="donut"><svg width="118" height="118" viewBox="0 0 118 118" aria-label="Komposisi gender">' +
    '<circle cx="59" cy="59" r="46" fill="none" stroke="var(--line)" stroke-width="15"/>' +
    '<circle class="ring" cx="59" cy="59" r="46" fill="none" stroke="var(--navy-600)" stroke-width="15" ' +
    'stroke-dasharray="0 289" stroke-linecap="round" data-dash="' + dashL.toFixed(1) + '" ' +
    'transform="rotate(-90 59 59)"/>' +
    '<text x="59" y="55" text-anchor="middle" font-size="21" font-weight="800" fill="var(--ink)">' + num(total) + '</text>' +
    '<text x="59" y="72" text-anchor="middle" font-size="10" fill="var(--muted)">terdata L/P</text></svg>' +
    '<div class="legend">' +
    '<div><i style="background:var(--navy-600)"></i>Laki-laki <b>' + num(r.L) + '</b>' +
    (total ? ' <span class="mini-note">(' + pct(r.L / total) + ')</span>' : '') + '</div>' +
    '<div><i style="background:var(--line)"></i>Perempuan <b>' + num(r.P) + '</b>' +
    (total ? ' <span class="mini-note">(' + pct(r.P / total) + ')</span>' : '') + '</div>' +
    (r.total - total > 0 ? '<div class="mini-note">' + num(r.total - total) + ' belum diisi L/P</div>' : '') +
    '</div></div>';

  h += '<div class="hr"></div><div class="col-chart">';
  usiaMap.forEach((v, k) => {
    h += '<div class="col"><div class="v">' + num(v) + '</div>' +
      '<div class="bar" data-h="' + ((v / maxUsia) * 100) + '"></div>' +
      '<div class="cap">' + esc(k.replace(' th', '')) + '</div></div>';
  });
  h += '</div></div></div>';

  h += '</div>';

  const terbaru = state.members.slice().sort((a, b) =>
    String(b.dibuat || '').localeCompare(String(a.dibuat || ''))).slice(0, 6);
  if (terbaru.length) {
    h += '<div class="sec-title">Anggota terbaru</div><div class="card"><div class="tbl-wrap">' +
      '<table class="tbl tbl-anim"><thead><tr><th>Nama</th><th>Korwil</th><th>Jabatan</th>' +
      '<th>Status</th><th>Ditambahkan</th></tr></thead><tbody>';
    terbaru.forEach(m => {
      h += '<tr data-open="' + m.id + '" style="cursor:pointer"><td class="name">' + esc(m.nama) + '</td>' +
        '<td>' + esc(wilayah(m) || '—') + '</td><td>' + esc(m.jabatan || '—') + '</td>' +
        '<td>' + chipStatus(m.status) + '</td><td>' + esc(tglId(m.dibuat)) + '</td></tr>';
    });
    h += '</tbody></table></div></div>';
  }
  return h;
}

function chipStatus(s) {
  if (!s) return '<span class="chip">—</span>';
  return '<span class="chip ' + esc(s.toLowerCase()) + '">' + esc(s) + '</span>';
}

/* ----------------------------------------------------------------- data */

function viewData() {
  const nikC = hitungNik();
  const hasil = urut(saring(), ui.sort.by, ui.sort.dir);
  const totalHal = Math.max(1, Math.ceil(hasil.length / ui.perPage));
  if (ui.page > totalHal) ui.page = totalHal;
  const mulai = (ui.page - 1) * ui.perPage;
  const hal = hasil.slice(mulai, mulai + ui.perPage);

  const th = (lab, by, cls) => {
    const on = ui.sort.by === by;
    return '<th class="sortable ' + (cls || '') + '" data-sort="' + by + '">' + lab +
      (on ? ' <span class="arw">' + (ui.sort.dir > 0 ? '▲' : '▼') + '</span>' : '') + '</th>';
  };

  let h = '<div class="card"><div class="card-b">' +
    '<div class="flex" style="margin-bottom:12px">' +
    '<div class="search-wrap">' + ICON.search +
    '<input type="search" id="q" placeholder="Cari nama, NIK, no. HP, alamat…" value="' + esc(ui.q) + '"></div>' +
    '<div class="grow"></div>' +
    '<button class="btn" id="btnCsv">Unduh CSV</button>' +
    '<button class="btn btn-primary" id="btnAdd">' +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>Tambah</button>' +
    '</div>' + filterBar(ui.f, 'data') +
    '<div class="mini-note" style="margin-top:10px">Menampilkan <b>' + num(hasil.length) +
    '</b> dari ' + num(state.members.length) + ' anggota — ' + esc(labelFilter(ui.f)) + '</div>' +
    '</div>';

  if (!hasil.length) {
    h += '<div class="empty">' + ICON.empty + '<h4>Tidak ada data yang cocok</h4>' +
      '<p class="mini-note">Ubah kata kunci atau reset filter di atas.</p></div></div>';
    return h;
  }

  h += '<div class="tbl-wrap"><table class="tbl tbl-anim"><thead><tr>' +
    '<th style="width:44px">#</th>' + th('Nama', 'nama') + th('NIK', 'nik') +
    '<th>No. KK</th><th>L/P</th>' + th('Alamat', 'korwil') +
    '<th>Nama RT</th><th>Nama RW</th><th>Kadus</th><th>TPS</th>' +
    th('Jabatan', 'jabatan') +
    '<th>No. HP</th>' + th('Usia', 'usia', 'num') + th('Status', 'status') +
    '<th style="width:86px">Aksi</th></tr></thead><tbody>';

  hal.forEach((m, i) => {
    const mm = masalah(m, nikC);
    const cls = mm === 'NIK ganda' ? 'bad-row' : (mm ? 'warn-row' : '');
    const u = usia(m);
    h += '<tr class="' + cls + '" data-id="' + m.id + '">' +
      '<td class="num" style="color:var(--muted)">' + num(mulai + i + 1) + '</td>' +
      '<td class="name">' + esc(m.nama) +
      (mm ? '<div class="mini-note" style="color:var(--danger);font-weight:600">' + esc(mm) + '</div>' : '') + '</td>' +
      '<td style="font-variant-numeric:tabular-nums">' + esc(m.nik || '—') + '</td>' +
      '<td style="font-variant-numeric:tabular-nums">' + esc(m.kk || '—') + '</td>' +
      '<td>' + esc(m.jk || '—') + '</td>' +
      '<td style="white-space:normal;min-width:190px">' + esc(wilayah(m) || '—') + '</td>' +
      '<td>' + esc(m.namaRt || '—') + '</td>' +
      '<td>' + esc(m.namaRw || '—') + '</td>' +
      '<td>' + esc(m.kadus || '—') + '</td>' +
      '<td>' + esc(m.tps || '—') + '</td>' +
      '<td>' + esc(m.jabatan || '—') + '</td>' +
      '<td>' + esc(m.hp || '—') + '</td>' +
      '<td class="num">' + (u === null ? '—' : u) + '</td>' +
      '<td>' + chipStatus(m.status) + '</td>' +
      '<td><div class="row-act">' +
      '<button class="icon-btn btn-sm" data-edit="' + m.id + '" title="Ubah" style="width:30px;height:30px">' + ICON.edit + '</button>' +
      '<button class="icon-btn btn-sm" data-del="' + m.id + '" title="Hapus" style="width:30px;height:30px">' + ICON.trash + '</button>' +
      '</div></td></tr>';
  });

  h += '</tbody></table></div>';

  h += '<div class="card-b"><div class="pager">' +
    '<button class="btn btn-sm" data-page="1" ' + (ui.page === 1 ? 'disabled' : '') + '>« Awal</button>' +
    '<button class="btn btn-sm" data-page="' + (ui.page - 1) + '" ' + (ui.page === 1 ? 'disabled' : '') + '>‹ Sebelumnya</button>' +
    '<span>Halaman <b>' + ui.page + '</b> dari <b>' + totalHal + '</b></span>' +
    '<button class="btn btn-sm" data-page="' + (ui.page + 1) + '" ' + (ui.page === totalHal ? 'disabled' : '') + '>Berikutnya ›</button>' +
    '<button class="btn btn-sm" data-page="' + totalHal + '" ' + (ui.page === totalHal ? 'disabled' : '') + '>Akhir »</button>' +
    '<div class="grow"></div><span>Baris per halaman</span>' +
    '<select id="perPage" style="width:auto">' +
    [10, 25, 50, 100].map(n => '<option value="' + n + '"' + (ui.perPage === n ? ' selected' : '') + '>' + n + '</option>').join('') +
    '</select></div></div></div>';
  return h;
}

/* ---------------------------------------------------------------- rekap */

function viewRekap() {
  const s = state.settings;
  const rtAda = s.rt.filter(rt => state.members.some(m => m.rt === rt));
  const rtList = rtAda.length ? rtAda : s.rt.slice(0, 8);

  let h = '<div class="sec-title">Matriks Kampung × RT</div><div class="card"><div class="tbl-wrap">' +
    '<table class="tbl matrix"><thead><tr><th>Kampung</th>';
  rtList.forEach(rt => { h += '<th>' + esc(rt) + '</th>'; });
  h += '<th>Total</th></tr></thead><tbody>';
  s.kadus.forEach(k => {
    h += '<tr><td>' + esc(k) + '</td>';
    let tot = 0;
    rtList.forEach(rt => {
      const n = state.members.filter(m => m.kadus === k && m.rt === rt).length;
      tot += n;
      h += '<td class="' + (n ? '' : 'zero') + '">' + n + '</td>';
    });
    h += '<td><b>' + num(tot) + '</b></td></tr>';
  });
  h += '</tbody><tfoot><tr><td>TOTAL</td>';
  let grand = 0;
  rtList.forEach(rt => {
    const n = state.members.filter(m => m.rt === rt).length;
    grand += n;
    h += '<td>' + n + '</td>';
  });
  h += '<td>' + num(grand) + '</td></tr></tfoot></table></div></div>';

  h += '<div class="sec-title">Gender &amp; status per Kampung</div><div class="card"><div class="tbl-wrap">' +
    '<table class="tbl matrix"><thead><tr><th>Kampung</th><th>Laki-laki</th><th>Perempuan</th>' +
    '<th>Aktif</th><th>Calon</th><th>Nonaktif</th><th>Total</th><th>% total</th></tr></thead><tbody>';
  const totalAll = state.members.length || 1;
  perKadus().forEach(x => {
    const a = state.members.filter(m => m.kadus === x.kadus);
    const c = st => a.filter(m => m.status === st).length;
    h += '<tr><td>' + esc(x.kadus) + '</td><td>' + x.L + '</td><td>' + x.P + '</td>' +
      '<td>' + c('Aktif') + '</td><td>' + c('Calon') + '</td><td>' + c('Nonaktif') + '</td>' +
      '<td><b>' + x.jumlah + '</b></td><td>' + pct(x.jumlah / totalAll) + '</td></tr>';
  });
  h += '</tbody></table></div></div>';

  const blok = (judul, map, kolom) => {
    let x = '<div class="sec-title">' + judul + '</div><div class="card"><div class="tbl-wrap">' +
      '<table class="tbl matrix"><thead><tr><th>' + kolom + '</th><th>Jumlah</th><th>% total</th>' +
      '<th style="width:34%">Sebaran</th></tr></thead><tbody>';
    const maks = Math.max(1, ...map.values());
    if (!map.size) {
      x += '<tr><td colspan="4" style="text-align:center;color:var(--muted);padding:22px">Belum ada data</td></tr>';
    }
    map.forEach((v, k) => {
      x += '<tr><td>' + esc(k) + '</td><td><b>' + num(v) + '</b></td><td>' + pct(v / totalAll) + '</td>' +
        '<td><span class="bar-track" style="display:block"><span class="bar-fill" data-w="' +
        ((v / maks) * 100) + '"></span></span></td></tr>';
    });
    return x + '</tbody></table></div></div>';
  };

  const sortMap = m => new Map(Array.from(m.entries()).sort((a, b) => b[1] - a[1]));
  h += blok('Rekap per jabatan', sortMap(hitungPer('jabatan')), 'Jabatan');
  h += blok('Sebaran per TPS', sortMap(hitungPer('tps')), 'TPS');
  h += blok('Rekap per korwil', sortMap(hitungPer('korwil')), 'Korwil');

  const um = new Map();
  state.settings.kelompokUsia.forEach(g => um.set(g.label, 0));
  state.members.forEach(m => {
    const g = kelompokUsia(usia(m));
    if (g) um.set(g, (um.get(g) || 0) + 1);
  });
  h += blok('Segmen usia pemilih', um, 'Kelompok usia');

  const perekrut = sortMap(hitungPer('perekrut'));
  if (perekrut.size) h += blok('Perekrut teraktif', perekrut, 'Nama perekrut');
  return h;
}

/* --------------------------------------------------------------- target */

function viewTarget() {
  const pk = perKadus();
  const totT = pk.reduce((a, x) => a + x.target, 0);
  const totJ = pk.reduce((a, x) => a + x.jumlah, 0);

  let h = '<div class="tip blue">' + ICON.bulb +
    '<div><b>Angka target diisi sendiri</b>, bukan hasil perhitungan. ' +
    'Ubah di <b>Pengaturan → Target per Kadus</b>.</div></div>';

  h += '<div class="card" style="margin-top:14px"><div class="tbl-wrap"><table class="tbl matrix">' +
    '<thead><tr><th>Kadus</th><th>Target</th><th>Realisasi</th><th>Aktif</th><th>Kurang</th>' +
    '<th>% capaian</th><th style="width:30%">Grafik</th></tr></thead><tbody>';
  pk.forEach(x => {
    const cls = warnaCapaian(x);
    const warna = !x.target ? 'var(--muted)'
      : (x.capaian >= 1 ? 'var(--green)' : (x.capaian >= .5 ? 'var(--amber)' : 'var(--red)'));
    h += '<tr><td>' + esc(x.kadus) + '</td><td>' + num(x.target) + '</td>' +
      '<td><b>' + num(x.jumlah) + '</b></td><td>' + num(x.aktif) + '</td>' +
      '<td>' + num(x.kurang) + '</td>' +
      '<td style="color:' + warna + ';font-weight:750">' + (x.target ? pct(x.capaian) : '—') + '</td>' +
      '<td><span class="bar-track" style="display:block"><span class="bar-fill ' + cls +
      '" data-w="' + Math.min(100, x.capaian * 100) + '"></span></span></td></tr>';
  });
  h += '</tbody><tfoot><tr><td>TOTAL</td><td>' + num(totT) + '</td><td>' + num(totJ) + '</td>' +
    '<td>' + num(pk.reduce((a, x) => a + x.aktif, 0)) + '</td>' +
    '<td>' + num(Math.max(0, totT - totJ)) + '</td>' +
    '<td>' + (totT ? pct(totJ / totT) : '—') + '</td><td></td></tr></tfoot></table></div></div>';

  h += '<div class="flex" style="margin-top:14px;gap:16px">' +
    '<span class="chip aktif">Hijau: capaian ≥ 100%</span>' +
    '<span class="chip calon">Kuning: 50–99%</span>' +
    '<span class="chip bad">Merah: di bawah 50%</span></div>';
  return h;
}

/* ------------------------------------------------------------- validasi */

function viewValidasi() {
  const nikC = hitungNik();
  const daftar = state.members.map(m => ({ m, x: masalah(m, nikC) })).filter(o => o.x);
  const grup = new Map();
  daftar.forEach(o => grup.set(o.x, (grup.get(o.x) || 0) + 1));

  let h = '';
  if (!daftar.length) {
    h += '<div class="card"><div class="empty">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="opacity:1"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.4 2.4 4.6-5"/></svg>' +
      '<h4>Semua data sudah lengkap</h4>' +
      '<p class="mini-note">Tidak ada NIK ganda, NIK pendek, atau kolom wajib yang kosong.</p></div></div>';
    return h;
  }

  h += '<div class="grid kpi-grid stagger">';
  grup.forEach((v, k) => {
    h += '<div class="kpi is-red"><div class="k-top">' + ICON.alert +
      '<span class="k-lab">' + esc(k) + '</span></div>' +
      '<div class="k-val" data-count="' + v + '">0</div>' +
      '<div class="k-sub">baris perlu diperbaiki</div></div>';
  });
  h += '</div>';

  h += '<div class="sec-title">Daftar baris yang perlu diperbaiki</div>' +
    '<div class="card"><div class="tbl-wrap"><table class="tbl tbl-anim"><thead><tr>' +
    '<th style="width:44px">#</th><th>Nama</th><th>NIK</th><th>Korwil</th>' +
    '<th>Masalah</th><th style="width:96px">Aksi</th></tr></thead><tbody>';
  daftar.forEach((o, i) => {
    h += '<tr class="bad-row"><td class="num" style="color:var(--muted)">' + (i + 1) + '</td>' +
      '<td class="name">' + esc(o.m.nama || '(tanpa nama)') + '</td>' +
      '<td style="font-variant-numeric:tabular-nums">' + esc(o.m.nik || '—') + '</td>' +
      '<td>' + esc(wilayah(o.m) || '—') + '</td>' +
      '<td><span class="chip bad">' + esc(o.x) + '</span></td>' +
      '<td><button class="btn btn-sm btn-primary" data-edit="' + o.m.id + '">Perbaiki</button></td></tr>';
  });
  h += '</tbody></table></div></div>';
  return h;
}
