-- ===================================================================
--  Data awal Team Pemenangan — dihasilkan dari database.json
--  Jalankan setelah schema.sql. Aman dijalankan berulang kali.
-- ===================================================================

begin;

-- identitas team ---------------------------------------------------
insert into public.tim (id, kode, calon, team, periode, tahun, desa, kecamatan, kabupaten, ketua, jabatan_ttd, motto, drive_url)
values ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'jf3-sukakarya', 'JONI FAHAMSYAH', 'TEAM PEMENANGAN JF JILID 3', 'PERIODE 2026 S/D 2034', '2026', 'SUKAKARYA', '', '', 'IDRUS KAMSENO', 'Ketua Team', 'MELAYANI DENGAN HATI, MEMBANGUN DESA UNTUK NEGERI', 'https://drive.google.com/drive/folders/14LvBYSGaDkrgcI3R5iJ7mja2uyAj0rR8')
on conflict (id) do update set
  kode = excluded.kode,
  calon = excluded.calon,
  team = excluded.team,
  periode = excluded.periode,
  tahun = excluded.tahun,
  desa = excluded.desa,
  kecamatan = excluded.kecamatan,
  kabupaten = excluded.kabupaten,
  ketua = excluded.ketua,
  jabatan_ttd = excluded.jabatan_ttd,
  motto = excluded.motto,
  drive_url = excluded.drive_url;

-- kampung dan targetnya --------------------------------------------
insert into public.kampung (tim_id, nama, target, urutan) values
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Kp. Gamprit', 0, 0),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Kp. Kuda Kuda', 0, 1),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Kp. Wangkal', 0, 2),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Kp. Tenjolaut', 0, 3),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Kp. Putri Melintang', 0, 4)
on conflict (tim_id, nama) do update set
  target = excluded.target, urutan = excluded.urutan;

-- kadus --------------------------------------------------------------
insert into public.kadus (tim_id, nama, nama_ketua, urutan) values
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Kadus 1', '', 0),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Kadus 2', '', 1),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Kadus 3', 'Markum', 2)
on conflict (tim_id, nama) do update set nama_ketua = excluded.nama_ketua;

-- ketua RW — nomor RW berlaku satu desa, jadi unik per tim ----------
insert into public.rw (tim_id, nomor, nama_ketua, kadus_id) values
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', '001', 'Maska', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 1')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', '002', 'Pasni', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 1')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', '003', 'Sutejo', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 2')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', '004', 'Ilyas', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 2')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', '005', 'Uding', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 3')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', '006', 'Saiman', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 3'))
on conflict (tim_id, nomor) do update set
  nama_ketua = excluded.nama_ketua, kadus_id = excluded.kadus_id;

-- ketua RT — nomor RT berulang per kadus, keunikannya per kadus -----
insert into public.rt (tim_id, kadus_id, nomor, nama_ketua, kampung_id, rw_id) values
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 1'), '001', 'Ikin Lois', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Tenjolaut'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 1'), '002', 'Sarjan', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Tenjolaut'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 1'), '003', 'Basir', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Kuda Kuda'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 1'), '004', 'Onin', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Kuda Kuda'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 1'), '005', 'Tongket / Khidir', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Kuda Kuda'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 1'), '006', 'Saari', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Kuda Kuda'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 2'), '001', 'Dedi', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Gamprit'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 2'), '002', 'Rimun', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Gamprit'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 2'), '003', 'Adi Ardiansyah', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Gamprit'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 2'), '004', 'Kusnadi', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Gamprit'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 3'), '001', 'Ropic', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Gamprit'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '005')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 3'), '002', '', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Gamprit'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '005')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 3'), '003', 'Wandy Suwandi', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Gamprit'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '006')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 3'), '004', 'Nemin', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Wangkal'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '006')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 3'), '005', 'Toyib', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Wangkal'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '006')),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', (select id from public.kadus where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kadus 3'), '006', 'Sumintra', (select id from public.kampung where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nama = 'Kp. Gamprit'), (select id from public.rw where tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and nomor = '005'))
on conflict (tim_id, kadus_id, nomor) do update set
  nama_ketua = excluded.nama_ketua,
  kampung_id = excluded.kampung_id,
  rw_id      = excluded.rw_id;

-- isi dropdown -------------------------------------------------------
insert into public.daftar_pilihan (tim_id, jenis, nilai, urutan) values
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '01', 0),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '02', 1),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '03', 2),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '04', 3),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '05', 4),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '06', 5),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '07', 6),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '08', 7),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '09', 8),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '10', 9),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '11', 10),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '12', 11),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '13', 12),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '14', 13),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '15', 14),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '16', 15),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '17', 16),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '18', 17),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '19', 18),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'tps', '20', 19),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'jabatan', 'Ketua Team', 0),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'jabatan', 'Wakil Ketua', 1),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'jabatan', 'Sekretaris', 2),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'jabatan', 'Bendahara', 3),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'jabatan', 'Kadus', 4),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'jabatan', 'Ketua RW', 5),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'jabatan', 'Ketua RT', 6),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'jabatan', 'Koordinator Wilayah', 7),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'jabatan', 'Koordinator Lapangan', 8),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'jabatan', 'Anggota', 9),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'jabatan', 'Relawan', 10),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'status', 'Aktif', 0),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'status', 'Calon', 1),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'status', 'Nonaktif', 2),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rt', '001', 0),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rt', '002', 1),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rt', '003', 2),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rt', '004', 3),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rt', '005', 4),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rt', '006', 5),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rt', '007', 6),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rt', '008', 7),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rw', '001', 0),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rw', '002', 1),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rw', '003', 2),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rw', '004', 3),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rw', '005', 4),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'rw', '006', 5)
on conflict (tim_id, jenis, nilai) do update set urutan = excluded.urutan;

insert into public.kelompok_usia (tim_id, label, usia_min) values
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Di bawah 17 th', 0),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Pemula 17-22 th', 17),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Muda 23-35 th', 23),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Dewasa 36-50 th', 36),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Matang 51-65 th', 51),
  ('8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', 'Senior 66 th +', 66)
on conflict (tim_id, label) do update set usia_min = excluded.usia_min;

-- anggota ------------------------------------------------------------
-- Tabel sementara menampung baris apa adanya; penyambungan ke tabel
-- wilayah dikerjakan sesudahnya supaya nama yang belum terdaftar di
-- struktur pengurus tidak menggagalkan impor.
create temporary table _impor (
  nama text, nik text, kk text, jk text, kampung text, kadus text,
  rt_nomor text, rw_nomor text, nama_rt text, nama_rw text,
  alamat text, tps text, jabatan text, hp text, tgl_lahir date,
  status text, tgl_gabung date, perekrut text, catatan text
) on commit drop;

insert into _impor values
  ('GURU BADRI', '', '', '', 'Kp. Tenjolaut', 'Kadus 1', '001', '001', '', 'Maska', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Guru Badri Kp. Tenjolaut RT 001/001'),
  ('IDRUS KAMSENO', '', '', '', 'Kp. Gamprit', '', '', '', '', '', '', '', 'Ketua Team', '', null, 'Aktif', null, '', 'asli: Idrus Kamseno Kp. Gamprit'),
  ('ALI IBRO MALISI', '', '', '', 'Kp. Tenjolaut', '', '', '', '', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Ali Ibro Malisi Kp Tenjolaut'),
  ('MURDIN (BENGKUNG)', '', '', '', 'Kp. Gamprit', '', '', '', '', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Murdin/bengkung gamprit'),
  ('RUSTADI', '', '', '', 'Kp. Wangkal', '', '', '', '', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Rustadi kp wangkal'),
  ('ABDUL MANAN', '', '', '', 'Kp. Kuda Kuda', '', '', '', '', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Abdul manan kuda kuda'),
  ('IJAH', '', '', '', 'Kp. Putri Melintang', '', '', '', '', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Ijah mmh putri melintang'),
  ('JEBAG', '', '', '', 'Kp. Kuda Kuda', 'Kadus 2', '001', '003', '', 'Sutejo', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Jebag kuda kuda 01/03'),
  ('DONY', '', '', '', 'Kp. Gamprit', '', '', '', '', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Dony gamprit'),
  ('WAWAN', '', '', '', 'Kp. Kuda Kuda', 'Kadus 2', '001', '004', '', 'Ilyas', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Wawan kuda kuda Rt 01/04'),
  ('MAS DENI', '', '', '', '', 'Kadus 2', '001', '004', '', 'Ilyas', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Mas Deni RT 01/04'),
  ('HARIS', '', '', '', 'Kp. Kuda Kuda', 'Kadus 1', '003', '001', 'Basir', 'Maska', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Haris kuda kuda Rt003/001 Rt basir'),
  ('NELIH', '', '', '', 'Kp. Wangkal', 'Kadus 3', '004', '006', '', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Nelih wangkal 04/06'),
  ('RUDI', '', '', '', 'Kp. Gamprit', 'Kadus 3', '003', '006', 'Wandy Suwandi', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Rudi kp gamprit RT wandi'),
  ('NIMAN', '', '', '', 'Kp. Gamprit', 'Kadus 3', '002', '005', '', 'Niman', '', '', 'Ketua RW', '', null, 'Aktif', null, '', 'asli: RK NIMAN RT 002/ RW 005 kp gamprit'),
  ('RENALDI', '', '', '', 'Kp. Gamprit', 'Kadus 3', '003', '006', 'Wandy Suwandi', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Renaldi kp gamprit RT wandi'),
  ('JAYA', '', '', '', 'Kp. Wangkal', 'Kadus 3', '004', '006', '', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Jaya kp wangkal RT 04/06'),
  ('ADE RINO', '', '', '', 'Kp. Gamprit', 'Kadus 3', '003', '006', 'Wandy Suwandi', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Ade Rino kp gamprit RT wandi'),
  ('WINDA', '', '', '', 'Kp. Kuda Kuda', 'Kadus 1', '004', '', 'Onin', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Winda kp kuda kuda RT onin'),
  ('HERMAN BOLON', '', '', '', 'Kp. Gamprit', 'Kadus 3', '003', '006', 'Wandy Suwandi', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Herman Bolon kp gamprit RT wandi'),
  ('TASBIH (BODONG)', '', '', '', 'Kp. Wangkal', 'Kadus 3', '004', '006', 'Nemin', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Tasbih/bodong kp wangkal RT nemin'),
  ('MARDI', '', '', '', 'Kp. Wangkal', 'Kadus 3', '005', '006', '', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Mardi kp wangkal RT 05/06'),
  ('OTIH (AAL)', '', '', '', 'Kp. Gamprit', 'Kadus 3', '003', '006', 'Wandy Suwandi', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Otih/aal kp gamprit RT wandi'),
  ('KANDI', '', '', '', 'Kp. Gamprit', 'Kadus 3', '003', '006', 'Wandy Suwandi', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Kandi gamprit RT wandi'),
  ('EMIN (KOJEK)', '', '', '', 'Kp. Wangkal', 'Kadus 3', '004', '006', '', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Emin/Kojek kp wangkal RT 04/06'),
  ('KET NALIH', '', '', '', 'Kp. Wangkal', 'Kadus 3', '004', '006', '', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Ket Nalih kp wangkal RT 04/06'),
  ('FEI', '', '', '', '', 'Kadus 1', '004', '001', '', 'Maska', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Fei RT 004/001'),
  ('AAL', '', '', '', 'Kp. Kuda Kuda', 'Kadus 1', '004', '002', 'Onin', 'Pasni', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Aal rt. 04/02 rt. Onin'),
  ('OMAN', '', '', '', '', 'Kadus 1', '003', '002', '', 'Pasni', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Oman RT. 003/002'),
  ('WACEP ACENK', '', '', '', '', 'Kadus 2', '003', '003', '', 'Sutejo', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Wacep Acenk RT. 003/003'),
  ('A. AZIZ MAULANA', '', '', '', '', 'Kadus 1', '002', '002', '', 'Pasni', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: A. Aziz Maulana RT. 002/002'),
  ('MARKUM', '', '', '', '', 'Kadus 3', '', '', '', '', '', '', 'Kadus', '', null, 'Aktif', null, '', 'asli: Kadus MARKUM Dusun 3'),
  ('ANAH', '', '', '', 'Kp. Kuda Kuda', 'Kadus 1', '004', '002', 'Onin', 'Pasni', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Anah RT.04/02 .RT onin'),
  ('SUGENG', '', '', '', 'Kp. Kuda Kuda', 'Kadus 1', '004', '002', 'Onin', 'Pasni', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Sugeng RT.04/02.rt onin'),
  ('YUSRON EFENDI', '', '', '', 'Kp. Kuda Kuda', 'Kadus 1', '003', '001', 'Basir', 'Maska', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Yusron Efendi Kp Kuda2 003/001 Bpk RT. Basir'),
  ('SLAMET', '', '', '', '', 'Kadus 1', '005', '002', '', 'Pasni', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Slamet RT. 005/002 gy'),
  ('MUMUN MULYASAROH', '', '', '', '', 'Kadus 1', '004', '002', '', 'Pasni', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Mumun mulyasaroh rt04/02'),
  ('SUFI NURFAZRI (JAPUT)', '', '', '', '', '', '', '', '', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Sufi Nurfazri/Japut'),
  ('DEDE PARIDA', '', '', '', '', '', '', '', '', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Dede Parida'),
  ('HENDRA', '', '', '', 'Kp. Gamprit', 'Kadus 2', '004', '004', '', 'Ilyas', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Hendra gamprit Rt04/04'),
  ('NENDA (KHENZON)', '', '', '', 'Kp. Wangkal', '', '', '', '', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Nenda/khenzon kp wangkal'),
  ('SAIH', '', '', '', 'Kp. Wangkal', 'Kadus 3', '005', '006', '', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Saih kp wangkal RT 05/06'),
  ('JEBING', '', '', '', 'Kp. Kuda Kuda', 'Kadus 1', '003', '', 'Basir', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: jebing kuda kuda RT Basir'),
  ('IQWAL M.S', '', '', '', 'Kp. Gamprit', 'Kadus 3', '001', '005', 'Ropic', 'Uding', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: iqwal M.s kp.Gamprit RT ropik'),
  ('HERMAN', '', '', '', 'Kp. Gamprit', '', '', '', '', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Herman Kp Gampri'),
  ('WAWAN', '', '', '', 'Kp. Gamprit', 'Kadus 1', '004', '002', '', 'Pasni', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Wawan Gamprit rt04/02'),
  ('DETA NALA SRI M', '', '', '', 'Kp. Kuda Kuda', 'Kadus 1', '004', '', 'Onin', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Deta Nala sri M kuda kuda Rt Onin'),
  ('OPIC (ROPIK)', '', '', '', 'Kp. Gamprit', 'Kadus 3', '001', '005', 'Ropic', 'Uding', '', '', 'Ketua RT', '', null, 'Aktif', null, '', 'asli: RT Opic / Ropik Rt 001/005'),
  ('KOMARUDIN', '', '', '', 'Kp. Wangkal', '', '', '', '', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Komarudin Kp Wangkal'),
  ('ROHADI (ADE)', '', '', '', 'Kp. Gamprit', '', '', '', 'Engkus', '', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Rohadi /ade kp gamprit RT engkus'),
  ('ADE PRABOWO', '', '', '', 'Kp. Gamprit', 'Kadus 3', '003', '006', 'Wandy Suwandi', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Ade prabowo kp gamprit RT wandi'),
  ('ALI NURDIN', '', '', '', 'Kp. Gamprit', 'Kadus 3', '003', '006', 'Wandy Suwandi', 'Saiman', '', '', 'Anggota', '', null, 'Aktif', null, '', 'asli: Ali Nurdin kp gamprit RT wandi');

insert into public.anggota (
  tim_id, nama, nik, kk, jk, kampung_id, kadus_id, rw_id, rt_id,
  rt_nomor, rw_nomor, alamat, tps, jabatan, hp, tgl_lahir, status,
  tgl_gabung, perekrut, catatan)
select
  '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21', i.nama, i.nik, i.kk, i.jk,
  kp.id, kd.id, rw.id, rt.id,
  i.rt_nomor, i.rw_nomor, i.alamat, i.tps, i.jabatan, i.hp,
  i.tgl_lahir, i.status, i.tgl_gabung, i.perekrut, i.catatan
from _impor i
left join public.kampung kp on kp.tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and kp.nama = i.kampung
left join public.kadus   kd on kd.tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and kd.nama = i.kadus
left join public.rw      rw on rw.tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and rw.nomor = i.rw_nomor
left join public.rt      rt on rt.tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21'
                            and rt.kadus_id = kd.id and rt.nomor = i.rt_nomor
-- NIK adalah kunci sesungguhnya, tetapi sebagian anggota memang belum
-- punya NIK. Selama itu, pasangan nama + catatan asli dipakai sebagai
-- pengenal sementara supaya menjalankan ulang berkas ini tidak
-- menggandakan barisnya.
where not exists (
  select 1 from public.anggota a
   where a.tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21'
     and ((i.nik <> '' and a.nik = i.nik)
       or (i.nik  = '' and a.nik = '' and a.nama = i.nama
           and a.catatan = i.catatan)));

-- baris yang sudah ada: diperbarui, bukan digandakan
update public.anggota a set
  nama = i.nama, kk = i.kk, jk = i.jk,
  rt_nomor = i.rt_nomor, rw_nomor = i.rw_nomor, alamat = i.alamat,
  tps = i.tps, jabatan = i.jabatan, hp = i.hp, tgl_lahir = i.tgl_lahir,
  status = i.status, tgl_gabung = i.tgl_gabung, perekrut = i.perekrut,
  catatan = i.catatan
from _impor i
where a.tim_id = '8f6d1c3a-4b2e-4f10-9a77-1c0d5e9b7a21' and i.nik <> '' and a.nik = i.nik;

commit;

-- ringkas: 52 anggota, 5 kampung, 3 kadus,
--          6 RW, 16 RT
