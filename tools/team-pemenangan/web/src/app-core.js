/* ==========================================================================
   Aplikasi Team Pemenangan — inti: data, penyimpanan, hitungan
   Semua data tersimpan di localStorage peramban. Tanpa server, tanpa internet.
   ========================================================================== */

'use strict';

const KEY = 'tp_app_v1';
const KEY_UI = 'tp_ui_v1';

const DEFAULTS = {
  identitas: {
    calon: 'JONI FAHAMSYAH',
    team: 'TEAM PEMENANGAN',
    periode: 'PERIODE 2026 S/D 2034',
    tahun: '2026',
    desa: 'SUKAKARYA',
    kecamatan: '',
    kabupaten: '',
    ketua: 'IDRUS KAMSENO',
    jabatanTtd: 'Ketua Team',
    motto: 'MELAYANI DENGAN HATI, MEMBANGUN DESA UNTUK NEGERI',
    driveUrl: 'https://drive.google.com/drive/folders/14LvBYSGaDkrgcI3R5iJ7mja2uyAj0rR8'
  },
  // nama orangnya, bukan nomor wilayah — sesuai cara daftar aslinya ditulis
  kadus: [],
  namaRk: [],
  namaRt: [],
  kampung: ['Kp. Gamprit', 'Kp. Kuda Kuda', 'Kp. Wangkal', 'Kp. Tenjolaut',
    'Kp. Putri Melintang'],
  rt: ['001', '002', '003', '004', '005', '006', '007', '008', '009', '010',
    '011', '012', '013', '014', '015'],
  rw: ['001', '002', '003', '004', '005', '006', '007', '008'],
  tps: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
  jabatan: ['Ketua Team', 'Wakil Ketua', 'Sekretaris', 'Bendahara',
    'Koordinator Wilayah', 'Koordinator Lapangan', 'Anggota', 'Relawan'],
  status: ['Aktif', 'Calon', 'Nonaktif'],
  target: {},
  kelompokUsia: [
    { label: 'Di bawah 17 th', min: 0 },
    { label: 'Pemula 17-22 th', min: 17 },
    { label: 'Muda 23-35 th', min: 23 },
    { label: 'Dewasa 36-50 th', min: 36 },
    { label: 'Matang 51-65 th', min: 51 },
    { label: 'Senior 66 th +', min: 66 }
  ]
};

const FIELDS = ['nama', 'nik', 'kk', 'jk', 'kadus', 'namaRk', 'namaRt',
  'kampung', 'rt', 'rw', 'alamat', 'tps', 'jabatan', 'hp', 'tglLahir',
  'status', 'tglGabung', 'perekrut', 'catatan'];

/** Daftar pilihan yang bisa disunting di Pengaturan. */
const LISTS = ['kadus', 'namaRk', 'namaRt', 'kampung', 'rt', 'rw', 'tps',
  'jabatan', 'status'];

/* ----------------------------------------------------------------- state */

let state = { members: [], settings: null, disimpan: '' };
let ui = {
  view: 'dasbor',
  theme: 'light',
  q: '',
  f: { kadus: '', namaRk: '', namaRt: '', kampung: '', rt: '', rw: '', tps: '', jabatan: '', status: '' },
  sort: { by: 'nama', dir: 1 },
  page: 1,
  perPage: 25,
  cetak: {
    jenis: 'daftar', kadus: '', namaRk: '', namaRt: '', kampung: '',
    rt: '', rw: '', tps: '', jabatan: '', status: ''
  },
  kartu: { kadus: '', namaRt: '', kampung: '', rt: '', rw: '' }
};

function clone(o) { return JSON.parse(JSON.stringify(o)); }

function defaultSettings() {
  const s = clone(DEFAULTS);
  s.kampung.forEach(k => { s.target[k] = 0; });
  return s;
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const d = JSON.parse(raw);
      state.members = Array.isArray(d.members) ? d.members : [];
      state.disimpan = d.disimpan || '';
      state.settings = Object.assign(defaultSettings(), d.settings || {});
      // pastikan setiap daftar tetap array walau berkas cadangan lama
      LISTS.forEach(k => {
        if (!Array.isArray(state.settings[k])) state.settings[k] = DEFAULTS[k].slice();
      });
      if (!state.settings.identitas) state.settings.identitas = clone(DEFAULTS.identitas);
      else state.settings.identitas = Object.assign(clone(DEFAULTS.identitas),
        state.settings.identitas);
      if (!state.settings.target) state.settings.target = {};
      if (!Array.isArray(state.settings.kelompokUsia) || !state.settings.kelompokUsia.length) {
        state.settings.kelompokUsia = clone(DEFAULTS.kelompokUsia);
      }
    } else {
      state.settings = defaultSettings();
      state.members = [];
    }
  } catch (e) {
    console.error('Gagal membaca data tersimpan:', e);
    state.settings = defaultSettings();
    state.members = [];
  }
  try {
    const rawUi = localStorage.getItem(KEY_UI);
    if (rawUi) ui = Object.assign(ui, JSON.parse(rawUi));
    if (!ui.f) ui.f = { kadus: '', namaRk: '', namaRt: '', kampung: '', rt: '', rw: '', tps: '', jabatan: '', status: '' };
    if (!ui.cetak) ui.cetak = Object.assign({ jenis: 'daftar' }, { kadus: '', namaRk: '', namaRt: '', kampung: '', rt: '', rw: '', tps: '', jabatan: '', status: '' });
    if (!ui.kartu) ui.kartu = { kadus: '', namaRt: '', kampung: '', rt: '', rw: '' };
  } catch (e) { /* pengaturan tampilan boleh gagal tanpa mengganggu data */ }
}

let saveTimer = null;
function save(now) {
  const write = () => {
    try {
      state.disimpan = new Date().toISOString();
      localStorage.setItem(KEY, JSON.stringify({
        v: 1, disimpan: state.disimpan,
        members: state.members, settings: state.settings
      }));
    } catch (e) {
      toast('Penyimpanan peramban penuh — segera unduh cadangan JSON.', 'err', 8000);
      console.error(e);
    }
  };
  if (now) { clearTimeout(saveTimer); write(); return; }
  clearTimeout(saveTimer);
  saveTimer = setTimeout(write, 250);
}

function saveUi() {
  try { localStorage.setItem(KEY_UI, JSON.stringify(ui)); } catch (e) { /* abaikan */ }
}

/* ------------------------------------------------------------- turunan */

/** Kunci pengelompokan wilayah: kampung + RT bila nomornya ada. */
function korwil(m) {
  const dasar = m.kampung || m.kadus || '';
  if (!dasar) return '';
  return m.rt ? dasar + ' - RT ' + m.rt + (m.rw ? '/' + m.rw : '') : dasar;
}

/** Alamat utuh satu baris. RT/RW ikut menyatu di sini, sedangkan nama RT,
 *  RK, dan Kadus tetap berdiri sebagai kolom tersendiri. */
function wilayah(m) {
  const b = [];
  if (m.kampung) b.push(m.kampung);
  if (m.rt) b.push('RT ' + m.rt + (m.rw ? '/' + m.rw : ''));
  if (m.alamat) b.push(m.alamat);
  return b.join(' ');
}

/** Baris kepengurusan: RT / RK / Kadus yang membawahi anggota tersebut. */
function pengurus(m) {
  const b = [];
  if (m.namaRt) b.push('RT ' + m.namaRt);
  if (m.namaRk) b.push('RK ' + m.namaRk);
  if (m.kadus) b.push('Kadus ' + m.kadus);
  return b.join(' • ');
}

function usia(m, ref) {
  if (!m.tglLahir) return null;
  const d = new Date(m.tglLahir + 'T00:00:00');
  if (isNaN(d)) return null;
  const now = ref || new Date();
  let u = now.getFullYear() - d.getFullYear();
  const bln = now.getMonth() - d.getMonth();
  if (bln < 0 || (bln === 0 && now.getDate() < d.getDate())) u--;
  return u >= 0 && u < 130 ? u : null;
}

function kelompokUsia(u) {
  if (u === null || u === undefined) return '';
  const list = state.settings.kelompokUsia;
  let hit = list[0] ? list[0].label : '';
  for (const g of list) if (u >= g.min) hit = g.label;
  return hit;
}

/** Satu masalah utama per baris, berurutan menurut prioritas — sama seperti
 *  versi Excel supaya hasil kedua aplikasi bisa dibandingkan. */
function masalah(m, nikCount) {
  if (!m.nama || !m.nama.trim()) return 'Nama kosong';
  const nik = (m.nik || '').trim();
  if (!nik) return 'NIK kosong';
  if (!/^\d{16}$/.test(nik)) return 'NIK bukan 16 digit';
  if (nikCount && (nikCount[nik] || 0) > 1) return 'NIK ganda';
  const kk = (m.kk || '').trim();
  if (kk && !/^\d{16}$/.test(kk)) return 'No. KK bukan 16 digit';
  if (!wilayah(m)) return 'Alamat kosong';
  if (!m.jabatan) return 'Jabatan kosong';
  if (!(m.hp || '').trim()) return 'No. HP kosong';
  const u = usia(m);
  if (u !== null && u < 17) return 'Usia di bawah 17';
  return '';
}

function hitungNik() {
  const c = Object.create(null);
  for (const m of state.members) {
    const n = (m.nik || '').trim();
    if (n) c[n] = (c[n] || 0) + 1;
  }
  return c;
}

/* -------------------------------------------------------------- saringan */

function cocok(m, f, q) {
  if (f.kadus && m.kadus !== f.kadus) return false;
  if (f.namaRk && m.namaRk !== f.namaRk) return false;
  if (f.namaRt && m.namaRt !== f.namaRt) return false;
  if (f.kampung && m.kampung !== f.kampung) return false;
  if (f.rt && m.rt !== f.rt) return false;
  if (f.rw && m.rw !== f.rw) return false;
  if (f.tps && m.tps !== f.tps) return false;
  if (f.jabatan && m.jabatan !== f.jabatan) return false;
  if (f.status && m.status !== f.status) return false;
  if (q) {
    const t = q.toLowerCase();
    const blob = [m.nama, m.nik, m.kk, m.hp, m.perekrut, m.jabatan, m.tps,
      wilayah(m), pengurus(m), m.catatan].join(' ').toLowerCase();
    if (!blob.includes(t)) return false;
  }
  return true;
}

function saring(f, q) {
  return state.members.filter(m => cocok(m, f || ui.f, q === undefined ? ui.q : q));
}

function urut(list, by, dir) {
  const arr = list.slice();
  arr.sort((a, b) => {
    let x, y;
    if (by === 'usia') { x = usia(a); y = usia(b); x = x === null ? -1 : x; y = y === null ? -1 : y; }
    else if (by === 'korwil') { x = korwil(a); y = korwil(b); }
    else { x = a[by]; y = b[by]; }
    if (typeof x === 'number' || typeof y === 'number') return ((x || 0) - (y || 0)) * dir;
    return String(x || '').localeCompare(String(y || ''), 'id', { sensitivity: 'base' }) * dir;
  });
  return arr;
}

/* -------------------------------------------------------------- CRUD */

function uid() {
  return 'm' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function normalisasi(rec) {
  const m = {};
  FIELDS.forEach(k => { m[k] = (rec[k] === undefined || rec[k] === null) ? '' : String(rec[k]).trim(); });
  m.nama = m.nama.toUpperCase();
  m.nik = m.nik.replace(/\s+/g, '');
  m.hp = m.hp.replace(/[^\d+]/g, '');
  return m;
}

function tambah(rec) {
  const m = normalisasi(rec);
  m.id = uid();
  m.dibuat = new Date().toISOString();
  m.diubah = m.dibuat;
  state.members.push(m);
  save();
  return m;
}

function ubah(id, rec) {
  const i = state.members.findIndex(m => m.id === id);
  if (i < 0) return null;
  const m = Object.assign({}, state.members[i], normalisasi(rec));
  m.id = id;
  m.diubah = new Date().toISOString();
  state.members[i] = m;
  save();
  return m;
}

function hapus(id) {
  const i = state.members.findIndex(m => m.id === id);
  if (i < 0) return false;
  state.members.splice(i, 1);
  save();
  return true;
}

function cariById(id) { return state.members.find(m => m.id === id) || null; }

/* --------------------------------------------------------------- ringkas */

function ringkasan() {
  const ms = state.members;
  const nikC = hitungNik();
  const total = ms.length;
  const aktif = ms.filter(m => m.status === 'Aktif').length;
  const L = ms.filter(m => m.jk === 'L').length;
  const P = ms.filter(m => m.jk === 'P').length;
  const kadusAktif = new Set(ms.map(m => m.kampung).filter(Boolean)).size;
  const rtAktif = new Set(ms.map(m => m.rt).filter(Boolean)).size;
  const tpsAktif = new Set(ms.map(m => m.tps).filter(Boolean)).size;
  const usiaList = ms.map(m => usia(m)).filter(u => u !== null);
  const rataUsia = usiaList.length
    ? Math.round(usiaList.reduce((a, b) => a + b, 0) / usiaList.length) : null;
  const targetTotal = state.settings.kampung
    .reduce((a, k) => a + (Number(state.settings.target[k]) || 0), 0);
  const bermasalah = ms.filter(m => masalah(m, nikC)).length;
  return {
    total, aktif, L, P, kadusAktif, rtAktif, tpsAktif, rataUsia, targetTotal,
    capaian: targetTotal ? total / targetTotal : 0, bermasalah, nikC
  };
}

/** Kelompok utama untuk dasbor, rekap, dan target: kampung. */
function perKadus() {
  return state.settings.kampung.map(k => {
    const anggota = state.members.filter(m => m.kampung === k);
    const target = Number(state.settings.target[k]) || 0;
    return {
      kadus: k,
      jumlah: anggota.length,
      aktif: anggota.filter(m => m.status === 'Aktif').length,
      L: anggota.filter(m => m.jk === 'L').length,
      P: anggota.filter(m => m.jk === 'P').length,
      target,
      capaian: target ? anggota.length / target : 0,
      kurang: Math.max(0, target - anggota.length)
    };
  });
}

function hitungPer(field) {
  const map = new Map();
  for (const m of state.members) {
    const v = field === 'korwil' ? korwil(m) : (m[field] || '');
    if (!v) continue;
    map.set(v, (map.get(v) || 0) + 1);
  }
  return map;
}
