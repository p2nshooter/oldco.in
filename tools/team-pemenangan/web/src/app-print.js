/* ==========================================================================
   Aplikasi Team Pemenangan — cetak & kartu anggota
   Dokumen dibangun ke #print-root lalu window.print(). Gaya cetak ada di
   blok @media print pada stylesheet.
   ========================================================================== */

'use strict';

const JENIS_DOK = {
  daftar: {
    judul: 'DAFTAR ANGGOTA TEAM PEMENANGAN',
    ket: 'Daftar lengkap dengan kolom tanda tangan'
  },
  hadir: {
    judul: 'DAFTAR HADIR KEGIATAN',
    ket: 'Absensi kegiatan, ada kolom kegiatan/tanggal/tempat'
  },
  rekap: {
    judul: 'REKAPITULASI ANGGOTA',
    ket: 'Ringkasan jumlah per Kadus, RT, TPS, jabatan, dan status'
  },
  kartu: {
    judul: 'KARTU ANGGOTA',
    ket: 'Kartu siap potong, 8 per halaman'
  }
};

function kopDok() {
  const id = state.settings.identitas;
  const wil = ['DESA ' + (id.desa || '-')];
  if (id.kecamatan) wil.push('KECAMATAN ' + id.kecamatan);
  if (id.kabupaten) wil.push('KABUPATEN ' + id.kabupaten);
  return '<div class="doc-head">' +
    '<img src="' + LOGO_EMBLEM + '" alt="">' +
    '<div class="ttl">' +
    '<div class="t1">' + esc(id.team || 'TEAM PEMENANGAN') + '</div>' +
    '<div class="t2">' + esc(id.calon || '') + '</div>' +
    '<div class="t3">' + esc(id.periode || '') + '</div>' +
    '<div class="t4">' + esc(wil.join(' • ')) + '</div>' +
    '</div><div></div></div>';
}

function ttdDok() {
  const id = state.settings.identitas;
  const hariIni = new Date().toLocaleDateString('id-ID',
    { day: 'numeric', month: 'long', year: 'numeric' });
  return '<div class="doc-sign"><div class="box">' +
    esc((id.desa || '') + ', ' + hariIni) +
    '<div style="margin-top:2px">' + esc(id.jabatanTtd || 'Ketua Team') + '</div>' +
    '<div class="nm">' + esc(id.ketua || '') + '</div>' +
    '</div></div>';
}

function footDok(info) {
  const id = state.settings.identitas;
  return '<div class="doc-foot"><span>' + esc(id.team || '') + ' — ' + esc(id.calon || '') +
    '</span><span>' + esc(info) + '</span></div>';
}

function metaDok(baris) {
  let h = '<div class="doc-meta">';
  baris.forEach(b => {
    h += '<b>' + esc(b[0]) + '</b><span>:</span><span>' + esc(b[1]) + '</span>';
  });
  return h + '</div>';
}

/** Bangun seluruh dokumen cetak sesuai jenis + filter aktif. */
function buatDokumen(jenis, f, ekstra) {
  const list = urut(saring(f, ''), 'kadus', 1);
  const lab = labelFilter(f);
  const tgl = new Date().toLocaleDateString('id-ID',
    { day: '2-digit', month: '2-digit', year: 'numeric' });

  if (jenis === 'kartu') return dokKartu(list);
  if (jenis === 'rekap') return dokRekap(list, lab, tgl);

  const hadir = jenis === 'hadir';
  const meta = hadir
    ? [['KEGIATAN', (ekstra && ekstra.kegiatan) || '.......................................'],
       ['HARI / TANGGAL', (ekstra && ekstra.tanggal) || '.......................................'],
       ['TEMPAT', (ekstra && ekstra.tempat) || '.......................................'],
       ['KELOMPOK', lab], ['JUMLAH', list.length + ' orang']]
    : [['KELOMPOK', lab], ['JUMLAH', list.length + ' orang'],
       ['DICETAK', tgl]];

  let h = '<div class="doc">' + kopDok() +
    '<div class="doc-title">' + esc(JENIS_DOK[jenis].judul) + '</div>' +
    '<div class="doc-sub">' + esc(state.settings.identitas.motto || '') + '</div>' +
    metaDok(meta);

  // lebar kolom harus berjumlah 100%, kalau lebih isi sel ikut membungkus
  const w = hadir
    ? { no: 5, nama: 30, nik: 18, korwil: 0, jab: 20, hp: 13, ttd: 14 }
    : { no: 5, nama: 24, nik: 16, korwil: 16, jab: 15, hp: 12, ttd: 12 };
  h += '<table class="doc-tbl"><thead><tr>' +
    '<th style="width:' + w.no + '%">No</th>' +
    '<th style="width:' + w.nama + '%">Nama Lengkap</th>' +
    '<th style="width:' + w.nik + '%">NIK</th>' +
    (hadir ? '' : '<th style="width:' + w.korwil + '%">Korwil</th>') +
    '<th style="width:' + w.jab + '%">Jabatan</th>' +
    '<th style="width:' + w.hp + '%">No. HP</th>' +
    '<th style="width:' + w.ttd + '%">Tanda Tangan</th></tr></thead><tbody>';

  if (!list.length) {
    h += '<tr><td colspan="' + (hadir ? 6 : 7) + '" class="c" style="padding:18px">' +
      'Tidak ada data untuk filter ini.</td></tr>';
  }
  list.forEach((m, i) => {
    h += '<tr><td class="c">' + (i + 1) + '</td><td>' + esc(m.nama) + '</td>' +
      '<td class="c nw">' + esc(m.nik || '') + '</td>' +
      (hadir ? '' : '<td class="nw">' + esc(korwil(m)) + '</td>') +
      '<td>' + esc(m.jabatan || '') + '</td><td class="c">' + esc(m.hp || '') + '</td>' +
      '<td class="sig">' + (i + 1) + '.</td></tr>';
  });
  h += '</tbody></table>' + ttdDok() +
    footDok('Dicetak ' + tgl + ' • ' + list.length + ' orang') + '</div>';
  return h;
}

function dokRekap(list, lab, tgl) {
  const s = state.settings;
  const rtAda = s.rt.filter(rt => list.some(m => m.rt === rt));
  let h = '<div class="doc">' + kopDok() +
    '<div class="doc-title">REKAPITULASI ANGGOTA TEAM PEMENANGAN</div>' +
    '<div class="doc-sub">' + esc(state.settings.identitas.motto || '') + '</div>' +
    metaDok([['KELOMPOK', lab], ['JUMLAH', list.length + ' orang'], ['DICETAK', tgl]]);

  h += '<table class="doc-tbl"><thead><tr><th>Kadus</th>';
  rtAda.forEach(rt => { h += '<th>RT ' + esc(rt) + '</th>'; });
  h += '<th>L</th><th>P</th><th>Aktif</th><th>Total</th></tr></thead><tbody>';
  s.kadus.forEach(k => {
    const a = list.filter(m => m.kadus === k);
    if (!a.length) return;
    h += '<tr><td>' + esc(k) + '</td>';
    rtAda.forEach(rt => { h += '<td class="c">' + a.filter(m => m.rt === rt).length + '</td>'; });
    h += '<td class="c">' + a.filter(m => m.jk === 'L').length + '</td>' +
      '<td class="c">' + a.filter(m => m.jk === 'P').length + '</td>' +
      '<td class="c">' + a.filter(m => m.status === 'Aktif').length + '</td>' +
      '<td class="c"><b>' + a.length + '</b></td></tr>';
  });
  h += '</tbody></table>';

  const tabel = (judul, map) => {
    if (!map.size) return '';
    let x = '<div class="doc-title" style="font-size:10.5pt;margin-top:14px">' + esc(judul) + '</div>' +
      '<table class="doc-tbl"><thead><tr><th style="width:60%">Kelompok</th>' +
      '<th>Jumlah</th><th>Persentase</th></tr></thead><tbody>';
    const tot = list.length || 1;
    map.forEach((v, k) => {
      x += '<tr><td>' + esc(k) + '</td><td class="c">' + v + '</td>' +
        '<td class="c">' + pct(v / tot) + '</td></tr>';
    });
    return x + '</tbody></table>';
  };
  const per = (field) => {
    const m = new Map();
    list.forEach(x => {
      const v = field === 'korwil' ? korwil(x) : (x[field] || '');
      if (v) m.set(v, (m.get(v) || 0) + 1);
    });
    return new Map(Array.from(m.entries()).sort((a, b) => b[1] - a[1]));
  };
  h += tabel('Rekap per TPS', per('tps'));
  h += tabel('Rekap per jabatan', per('jabatan'));
  h += tabel('Rekap per status', per('status'));

  h += ttdDok() + footDok('Dicetak ' + tgl) + '</div>';
  return h;
}

function dokKartu(list) {
  const id = state.settings.identitas;
  let h = '';
  for (let i = 0; i < list.length; i += 8) {
    const grup = list.slice(i, i + 8);
    h += '<div class="doc"><div class="kartu-sheet">';
    grup.forEach((m, j) => {
      h += '<div class="kartu">' +
        '<div class="kh">' + esc(id.team || '') + ' — ' + esc(id.calon || '') + '</div>' +
        '<div class="kb"><img src="' + LOGO_EMBLEM + '" alt="">' +
        '<div>' +
        '<div class="kr"><span>NAMA</span><span>' + esc(m.nama) + '</span></div>' +
        '<div class="kr"><span>NIK</span><span>' + esc(m.nik || '-') + '</span></div>' +
        '<div class="kr"><span>KORWIL</span><span>' + esc(korwil(m) || '-') + '</span></div>' +
        '<div class="kr"><span>JABATAN</span><span>' + esc(m.jabatan || '-') + '</span></div>' +
        '<div class="kr"><span>NO. HP</span><span>' + esc(m.hp || '-') + '</span></div>' +
        '</div></div>' +
        '<div class="kf"><span>No. ' + (i + j + 1) + '</span><span>' + esc(id.periode || '') + '</span></div>' +
        '</div>';
    });
    h += '</div></div>';
  }
  if (!list.length) {
    h = '<div class="doc">' + kopDok() +
      '<div class="doc-title">KARTU ANGGOTA</div>' +
      '<p style="text-align:center">Tidak ada data untuk filter ini.</p></div>';
  }
  return h;
}

function cetakSekarang(jenis, f, ekstra) {
  const root = $('#print-root');
  root.innerHTML = buatDokumen(jenis, f, ekstra);
  // beri jeda satu frame supaya gambar & tata letak selesai sebelum dialog cetak
  requestAnimationFrame(() => {
    setTimeout(() => window.print(), 60);
  });
}

/* ------------------------------------------------------------ tampilan */

function viewCetak() {
  const c = ui.cetak;
  const list = saring(c, '');
  const jenis = c.jenis || 'daftar';

  let h = '<div class="card"><div class="card-b">' +
    '<div class="sec-title" style="margin-top:0">1. Pilih jenis dokumen</div>' +
    '<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(210px,1fr))">';
  Object.keys(JENIS_DOK).forEach(k => {
    const on = jenis === k;
    h += '<button class="btn" data-jenis="' + k + '" style="flex-direction:column;align-items:flex-start;' +
      'padding:13px 14px;height:100%;text-align:left;white-space:normal;' +
      (on ? 'border-color:var(--navy);box-shadow:0 0 0 2px rgba(77,109,166,.25)' : '') + '">' +
      '<span style="display:flex;align-items:center;gap:8px;font-weight:750">' +
      (on ? ICON.check : ICON.print) + esc(JENIS_DOK[k].judul) + '</span>' +
      '<span class="mini-note" style="font-weight:400;margin-top:4px">' + esc(JENIS_DOK[k].ket) + '</span>' +
      '</button>';
  });
  h += '</div>';

  h += '<div class="sec-title">2. Saring kelompok yang dicetak</div>' + filterBar(c, 'cetak') +
    '<div class="tip blue" style="margin-top:12px">' + ICON.bulb +
    '<div>Kosongkan semua filter untuk mencetak <b>seluruh anggota</b>. ' +
    'Isi <b>Kadus</b> saja untuk per Kadus, <b>RT</b> saja untuk per RT, ' +
    '<b>Kadus + RT</b> untuk per korwil, atau <b>TPS</b> saja untuk per TPS.</div></div>';

  if (jenis === 'hadir') {
    h += '<div class="sec-title">3. Keterangan kegiatan</div>' +
      '<div class="form-grid">' +
      '<div class="field"><label>Nama kegiatan</label><input type="text" id="egKegiatan" placeholder="Rapat konsolidasi"></div>' +
      '<div class="field"><label>Hari / tanggal</label><input type="text" id="egTanggal" placeholder="Sabtu, 14 Maret 2026"></div>' +
      '<div class="field span2"><label>Tempat</label><input type="text" id="egTempat" placeholder="Balai Desa Sukakarya"></div>' +
      '</div>';
  }

  h += '<div class="hr"></div><div class="flex">' +
    '<div><div style="font-weight:750;font-size:15px">' + esc(labelFilter(c)) + '</div>' +
    '<div class="mini-note">' + num(list.length) + ' orang akan tercetak' +
    (jenis === 'kartu' ? ' — ' + Math.ceil(list.length / 8) + ' halaman kartu' : '') + '</div></div>' +
    '<div class="grow"></div>' +
    '<button class="btn" id="btnPratinjau">Pratinjau</button>' +
    '<button class="btn btn-red" id="btnCetak">' + ICON.print + 'Cetak / Simpan PDF</button>' +
    '</div></div></div>';

  h += '<div id="pratinjauBox"></div>';
  return h;
}

function viewKartu() {
  const k = ui.kartu;
  const list = saring(k, '');
  let h = '<div class="card"><div class="card-b">' + filterBar(k, 'kartu', false) +
    '<div class="flex" style="margin-top:12px">' +
    '<div><div style="font-weight:750;font-size:15px">' + esc(labelFilter(k)) + '</div>' +
    '<div class="mini-note">' + num(list.length) + ' kartu • ' +
    Math.ceil(list.length / 8) + ' halaman A4</div></div><div class="grow"></div>' +
    '<button class="btn btn-red" id="btnCetakKartu">' + ICON.print + 'Cetak kartu</button>' +
    '</div></div></div>';

  if (!list.length) {
    return h + '<div class="card" style="margin-top:14px"><div class="empty">' + ICON.empty +
      '<h4>Belum ada anggota pada filter ini</h4></div></div>';
  }

  h += '<div class="card-grid stagger" style="margin-top:16px">';
  list.slice(0, 60).forEach((m, i) => {
    const id = state.settings.identitas;
    h += '<div class="id-card"><div class="ic-h"><img src="' + LOGO_EMBLEM + '" alt="">' +
      '<span>' + esc(id.team || '') + '</span></div>' +
      '<div class="ic-b"><img src="' + LOGO_EMBLEM + '" alt="">' +
      '<div>' +
      '<div class="ic-row"><span>NAMA</span><span>' + esc(m.nama) + '</span></div>' +
      '<div class="ic-row"><span>NIK</span><span>' + esc(m.nik || '-') + '</span></div>' +
      '<div class="ic-row"><span>KORWIL</span><span>' + esc(korwil(m) || '-') + '</span></div>' +
      '<div class="ic-row"><span>JABATAN</span><span>' + esc(m.jabatan || '-') + '</span></div>' +
      '<div class="ic-row"><span>NO. HP</span><span>' + esc(m.hp || '-') + '</span></div>' +
      '</div></div>' +
      '<div class="ic-f"><span>No. ' + (i + 1) + '</span><span>' + esc(id.periode || '') + '</span></div>' +
      '</div>';
  });
  h += '</div>';
  if (list.length > 60) {
    h += '<p class="mini-note" style="margin-top:12px">Pratinjau dibatasi 60 kartu; ' +
      'seluruh ' + num(list.length) + ' kartu tetap ikut tercetak.</p>';
  }
  return h;
}
