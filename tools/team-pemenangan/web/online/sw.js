/* Service worker Aplikasi Team Pemenangan.

   Tujuannya satu: aplikasi yang dibuka lewat alamat web tetap terbuka ketika
   sinyal hilang — sama seperti versi yang dibuka dari berkas.

   Aturannya sengaja dibedakan menurut jenis permintaan:

     * Aplikasi (index.html) dan berkas pendampingnya diambil dari simpanan
       lebih dulu, jadi terbuka seketika dan tetap jalan tanpa jaringan.
     * Permintaan ke API database daring TIDAK PERNAH disimpan. Data anggota
       yang basah dari simpanan lebih berbahaya daripada pesan galat: orang
       bisa menghapus anggota yang sudah tidak ada, atau menghitung ulang
       target dari angka kemarin.
*/

const VERSI = '3';
const SIMPANAN = 'team-pemenangan-v' + VERSI;
const BAWAAN = [
  '.', 'index.html', 'manifest.webmanifest',
  'icon-192.png', 'icon-512.png', 'data/database.js'
];

self.addEventListener('install', e => {
  // Berkas bawaan disimpan satu per satu: bila salah satu gagal diunduh,
  // sisanya tetap masuk. addAll() menggugurkan semuanya hanya karena satu.
  e.waitUntil((async () => {
    const c = await caches.open(SIMPANAN);
    await Promise.all(BAWAAN.map(u => c.add(u).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const nama = await caches.keys();
    await Promise.all(nama.filter(n => n !== SIMPANAN).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== location.origin) return;          // API luar: lewat saja
  if (url.pathname.includes('/rest/v1/')) return;      // data Supabase: jangan disimpan

  e.respondWith((async () => {
    const tersimpan = await caches.match(req);
    if (tersimpan) {
      // Sajikan yang tersimpan sekarang, perbarui diam-diam untuk kunjungan
      // berikutnya. Pengguna tidak pernah menunggu jaringan.
      e.waitUntil(perbarui(req));
      return tersimpan;
    }
    try {
      return await perbarui(req);
    } catch (err) {
      // Tanpa jaringan dan belum pernah tersimpan: kembalikan aplikasinya,
      // supaya menyegarkan halaman di tengah lapangan tidak berujung layar
      // galat peramban.
      const induk = await caches.match('index.html');
      if (induk) return induk;
      throw err;
    }
  })());
});

async function perbarui(req) {
  const res = await fetch(req);
  if (res && res.ok) {
    const c = await caches.open(SIMPANAN);
    c.put(req, res.clone());
  }
  return res;
}
