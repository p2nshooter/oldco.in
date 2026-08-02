-- =====================================================================
--  Aplikasi Team Pemenangan — skema database (PostgreSQL / Supabase)
--
--  Bentuknya mengikuti aplikasi offline (Excel + HTML) satu lawan satu,
--  jadi data yang sudah dikumpulkan sekarang bisa dipindahkan apa adanya:
--
--      Excel / HTML                    PostgreSQL
--      ---------------------------     ------------------------------
--      identitas aplikasi              public.tim
--      DAFTAR KAMPUNG + TARGET         public.kampung
--      STRUKTUR PENGURUS (kadus)       public.kadus
--      STRUKTUR PENGURUS (RW 001-006)  public.rw
--      STRUKTUR PENGURUS (RT)          public.rt
--      DAFTAR TPS / JABATAN / STATUS   public.daftar_pilihan
--      KELOMPOK USIA                   public.kelompok_usia
--      DATABASE (baris anggota)        public.anggota
--      kolom rumus (USIA, KORWIL, ..)  public.v_anggota  (view)
--      sheet REKAP                     public.v_rekap_*  (view)
--      sheet VALIDASI                  kolom masalah pada v_anggota
--
--  Aturan yang dijaga di tingkat database, bukan hanya di aplikasi:
--    * NIK KTP wajib 16 digit dan TIDAK BOLEH SAMA antar anggota satu tim.
--    * No. KK wajib 16 digit tetapi BOLEH SAMA — satu keluarga satu KK.
--    * Nomor RW berlaku satu desa (unik per tim), nomor RT berulang per kadus.
--
--  Jalankan sekali di SQL Editor Supabase, lalu jalankan seed.sql.
-- =====================================================================

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------- tim

create table if not exists public.tim (
  id            uuid primary key default gen_random_uuid(),
  kode          text not null unique,
  calon         text not null,
  team          text not null,
  periode       text default '',
  tahun         text default '',
  desa          text default '',
  kecamatan     text default '',
  kabupaten     text default '',
  ketua         text default '',
  jabatan_ttd   text default 'Ketua Team',
  motto         text default '',
  drive_url     text default '',
  dibuat        timestamptz not null default now(),
  diubah        timestamptz not null default now()
);

comment on table public.tim is
  'Satu baris per team pemenangan. Semua tabel lain bergantung ke sini, '
  'jadi satu proyek Supabase bisa dipakai beberapa desa sekaligus.';

-- ------------------------------------------------------- keanggotaan akun

create table if not exists public.pengguna_tim (
  user_id  uuid not null references auth.users (id) on delete cascade,
  tim_id   uuid not null references public.tim (id) on delete cascade,
  peran    text not null default 'operator'
           check (peran in ('pemilik', 'operator', 'pembaca')),
  dibuat   timestamptz not null default now(),
  primary key (user_id, tim_id)
);

comment on table public.pengguna_tim is
  'Menentukan akun mana boleh melihat data tim mana. Dipakai seluruh policy RLS.';

-- Dipakai di dalam policy. SECURITY DEFINER + search_path terkunci supaya
-- pembacaannya tidak ikut tersaring oleh RLS tabel ini sendiri.
create or replace function public.tim_saya()
returns setof uuid
language sql
stable
security definer
set search_path = public
as $$
  select tim_id from public.pengguna_tim where user_id = auth.uid();
$$;

create or replace function public.boleh_ubah(p_tim uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.pengguna_tim
     where user_id = auth.uid() and tim_id = p_tim
       and peran in ('pemilik', 'operator')
  );
$$;

-- --------------------------------------------------------------- wilayah

create table if not exists public.kampung (
  id      uuid primary key default gen_random_uuid(),
  tim_id  uuid not null references public.tim (id) on delete cascade,
  nama    text not null,
  target  integer not null default 0 check (target >= 0),
  urutan  integer not null default 0,
  unique (tim_id, nama)
);

create table if not exists public.kadus (
  id          uuid primary key default gen_random_uuid(),
  tim_id      uuid not null references public.tim (id) on delete cascade,
  nama        text not null,                 -- "Kadus 1"
  nama_ketua  text default '',               -- "Markum"
  urutan      integer not null default 0,
  unique (tim_id, nama)
);

-- Nomor RW berlaku satu desa: 001 s/d 006 tidak mengulang per kadus,
-- jadi nomornya saja sudah cukup untuk menemukan ketuanya.
create table if not exists public.rw (
  id          uuid primary key default gen_random_uuid(),
  tim_id      uuid not null references public.tim (id) on delete cascade,
  nomor       text not null check (nomor ~ '^\d{1,3}$'),
  nama_ketua  text default '',
  kadus_id    uuid references public.kadus (id) on delete set null,
  unique (tim_id, nomor)
);

-- Nomor RT justru berulang di tiap kadus (RT 001 ada di ketiganya) dan
-- Kampung Gamprit dipakai Kadus 2 maupun Kadus 3 — hanya nama ketuanya yang
-- benar-benar membedakan, karena itu keunikannya dihitung per kadus.
create table if not exists public.rt (
  id          uuid primary key default gen_random_uuid(),
  tim_id      uuid not null references public.tim (id) on delete cascade,
  kadus_id    uuid references public.kadus (id) on delete set null,
  nomor       text not null check (nomor ~ '^\d{1,3}$'),
  nama_ketua  text default '',
  kampung_id  uuid references public.kampung (id) on delete set null,
  rw_id       uuid references public.rw (id) on delete set null,
  unique (tim_id, kadus_id, nomor)
);

-- ------------------------------------------------- daftar pilihan sederhana

create table if not exists public.daftar_pilihan (
  id      uuid primary key default gen_random_uuid(),
  tim_id  uuid not null references public.tim (id) on delete cascade,
  jenis   text not null check (jenis in ('tps', 'jabatan', 'status', 'rt', 'rw')),
  nilai   text not null,
  urutan  integer not null default 0,
  unique (tim_id, jenis, nilai)
);

comment on table public.daftar_pilihan is
  'Isi dropdown yang boleh disunting sendiri: TPS, jabatan, status, serta '
  'nomor RT/RW yang tersedia. Sama dengan sheet PENGATURAN pada Excel.';

create table if not exists public.kelompok_usia (
  id       uuid primary key default gen_random_uuid(),
  tim_id   uuid not null references public.tim (id) on delete cascade,
  label    text not null,
  usia_min integer not null check (usia_min >= 0),
  unique (tim_id, label)
);

-- --------------------------------------------------------------- anggota

create table if not exists public.anggota (
  id           uuid primary key default gen_random_uuid(),
  tim_id       uuid not null references public.tim (id) on delete cascade,

  nama         text not null check (length(btrim(nama)) > 0),
  nik          text not null default '' check (nik = '' or nik ~ '^\d{16}$'),
  kk           text not null default '' check (kk  = '' or kk  ~ '^\d{16}$'),
  jk           text not null default '' check (jk in ('', 'L', 'P')),

  kampung_id   uuid references public.kampung (id) on delete set null,
  kadus_id     uuid references public.kadus (id)   on delete set null,
  rw_id        uuid references public.rw (id)      on delete set null,
  rt_id        uuid references public.rt (id)      on delete set null,
  -- nomor disimpan ikut apa adanya: sebagian anggota baru punya nomor RT/RW
  -- dari alamat lama sebelum pengurusnya ketahuan, dan nomor itu tidak boleh
  -- hilang hanya karena pengurusnya belum terdaftar.
  rt_nomor     text not null default '',
  rw_nomor     text not null default '',
  alamat       text not null default '',

  tps          text not null default '',
  jabatan      text not null default 'Anggota',
  hp           text not null default '',
  tgl_lahir    date,
  status       text not null default 'Aktif',
  tgl_gabung   date,
  perekrut     text not null default '',
  catatan      text not null default '',

  dibuat       timestamptz not null default now(),
  diubah       timestamptz not null default now()
);

-- Inilah aturan "yang tidak boleh sama itu NIK KTP".
-- Sengaja partial index: NIK yang belum diisi ('') boleh berulang.
create unique index if not exists anggota_nik_unik
  on public.anggota (tim_id, nik) where nik <> '';

-- No. KK sengaja TIDAK unik — suami, istri, dan anak memakai satu nomor KK.
create index if not exists anggota_kk_idx      on public.anggota (tim_id, kk) where kk <> '';
create index if not exists anggota_tim_idx     on public.anggota (tim_id);
create index if not exists anggota_kampung_idx on public.anggota (kampung_id);
create index if not exists anggota_kadus_idx   on public.anggota (kadus_id);
create index if not exists anggota_rt_idx      on public.anggota (rt_id);
create index if not exists anggota_rw_idx      on public.anggota (rw_id);
create index if not exists anggota_tps_idx     on public.anggota (tim_id, tps);
create index if not exists anggota_status_idx  on public.anggota (tim_id, status);
create index if not exists anggota_nama_idx    on public.anggota
  using gin (to_tsvector('simple', nama));

-- kolom diubah selalu ikut, tanpa perlu diingat aplikasi
create or replace function public.sentuh_diubah()
returns trigger language plpgsql as $$
begin
  new.diubah := now();
  return new;
end;
$$;

drop trigger if exists anggota_sentuh on public.anggota;
create trigger anggota_sentuh before update on public.anggota
  for each row execute function public.sentuh_diubah();

drop trigger if exists tim_sentuh on public.tim;
create trigger tim_sentuh before update on public.tim
  for each row execute function public.sentuh_diubah();

-- ------------------------------------------------- kolom turunan (view)

-- Menggantikan kolom rumus pada Excel: USIA, KELOMPOK USIA, KORWIL, dan
-- MASALAH. Urutan prioritas masalahnya persis sama dengan aplikasi offline,
-- supaya hasil pengecekan bisa dibandingkan satu lawan satu.
create or replace view public.v_anggota as
select
  a.*,
  kp.nama  as kampung,
  kd.nama  as kadus,
  kd.nama_ketua as nama_kadus,
  rw.nama_ketua as nama_rw,
  rt.nama_ketua as nama_rt,
  case when a.tgl_lahir is null then null
       else extract(year from age(current_date, a.tgl_lahir))::int end as usia,
  (select ku.label
     from public.kelompok_usia ku
    where ku.tim_id = a.tim_id
      and a.tgl_lahir is not null
      and ku.usia_min <= extract(year from age(current_date, a.tgl_lahir))::int
    order by ku.usia_min desc limit 1) as kelompok_usia,
  nullif(concat_ws(' ',
    nullif(kp.nama, ''),
    case when a.rt_nomor <> ''
         then 'RT ' || a.rt_nomor || case when a.rw_nomor <> ''
                                          then '/' || a.rw_nomor else '' end end,
    nullif(a.alamat, '')), '') as alamat_lengkap,
  nullif(case
    when coalesce(kp.nama, kd.nama, '') = '' then ''
    when a.rt_nomor <> ''
      then coalesce(kp.nama, kd.nama) || ' - RT ' || a.rt_nomor
           || case when a.rw_nomor <> '' then '/' || a.rw_nomor else '' end
    else coalesce(kp.nama, kd.nama)
  end, '') as korwil,
  case
    when btrim(a.nama) = ''                             then 'Nama kosong'
    when a.nik = ''                                     then 'NIK kosong'
    when a.nik !~ '^\d{16}$'                            then 'NIK bukan 16 digit'
    when a.kk <> '' and a.kk !~ '^\d{16}$'              then 'No. KK bukan 16 digit'
    when coalesce(kp.nama, '') = '' and a.rt_nomor = ''
         and a.alamat = ''                              then 'Alamat kosong'
    when a.jabatan = ''                                 then 'Jabatan kosong'
    when btrim(a.hp) = ''                               then 'No. HP kosong'
    when a.tgl_lahir is not null
         and extract(year from age(current_date, a.tgl_lahir))::int < 17
                                                        then 'Usia di bawah 17'
    else ''
  end as masalah
from public.anggota a
left join public.kampung kp on kp.id = a.kampung_id
left join public.kadus   kd on kd.id = a.kadus_id
left join public.rw      rw on rw.id = a.rw_id
left join public.rt      rt on rt.id = a.rt_id;

comment on view public.v_anggota is
  'Baris anggota lengkap dengan kolom turunan. Catatan: "NIK ganda" tidak '
  'perlu diperiksa di sini — indeks anggota_nik_unik sudah menolaknya sejak '
  'sebelum tersimpan.';

create or replace view public.v_rekap_kampung as
select kp.tim_id, kp.nama as kampung, kp.target,
       count(a.id)                                          as jumlah,
       count(a.id) filter (where a.status = 'Aktif')         as aktif,
       count(a.id) filter (where a.jk = 'L')                 as laki,
       count(a.id) filter (where a.jk = 'P')                 as perempuan,
       greatest(0, kp.target - count(a.id))                  as kurang,
       case when kp.target > 0
            then round(count(a.id)::numeric / kp.target, 4)
            else null end                                    as capaian
  from public.kampung kp
  left join public.anggota a on a.kampung_id = kp.id
 group by kp.id, kp.tim_id, kp.nama, kp.target;

create or replace view public.v_rekap_tps as
select tim_id, tps, count(*) as jumlah,
       count(*) filter (where status = 'Aktif') as aktif
  from public.anggota where tps <> '' group by tim_id, tps;

create or replace view public.v_rekap_rt as
select a.tim_id, kd.nama as kadus, a.rt_nomor, a.rw_nomor,
       rt.nama_ketua as nama_rt, rw.nama_ketua as nama_rw,
       count(*) as jumlah
  from public.anggota a
  left join public.kadus kd on kd.id = a.kadus_id
  left join public.rt    rt on rt.id = a.rt_id
  left join public.rw    rw on rw.id = a.rw_id
 where a.rt_nomor <> ''
 group by a.tim_id, kd.nama, a.rt_nomor, a.rw_nomor, rt.nama_ketua, rw.nama_ketua;

-- ------------------------------------------------------------------- RLS
-- Tanpa ini, anon key yang dipakai di browser bisa membaca seluruh tabel.

alter table public.tim            enable row level security;
alter table public.pengguna_tim   enable row level security;
alter table public.kampung        enable row level security;
alter table public.kadus          enable row level security;
alter table public.rw             enable row level security;
alter table public.rt             enable row level security;
alter table public.daftar_pilihan enable row level security;
alter table public.kelompok_usia  enable row level security;
alter table public.anggota        enable row level security;

drop policy if exists tim_baca on public.tim;
create policy tim_baca on public.tim
  for select using (id in (select public.tim_saya()));

drop policy if exists tim_ubah on public.tim;
create policy tim_ubah on public.tim
  for update using (public.boleh_ubah(id)) with check (public.boleh_ubah(id));

drop policy if exists pengguna_tim_baca on public.pengguna_tim;
create policy pengguna_tim_baca on public.pengguna_tim
  for select using (user_id = auth.uid() or tim_id in (select public.tim_saya()));

-- Policy yang sama berlaku untuk seluruh tabel data: baca bila anggota tim,
-- tulis bila perannya pemilik atau operator.
do $$
declare t text;
begin
  foreach t in array array['kampung', 'kadus', 'rw', 'rt',
                           'daftar_pilihan', 'kelompok_usia', 'anggota']
  loop
    execute format('drop policy if exists %I_baca on public.%I', t, t);
    execute format(
      'create policy %I_baca on public.%I for select '
      'using (tim_id in (select public.tim_saya()))', t, t);

    execute format('drop policy if exists %I_tulis on public.%I', t, t);
    execute format(
      'create policy %I_tulis on public.%I for insert '
      'with check (public.boleh_ubah(tim_id))', t, t);

    execute format('drop policy if exists %I_sunting on public.%I', t, t);
    execute format(
      'create policy %I_sunting on public.%I for update '
      'using (public.boleh_ubah(tim_id)) with check (public.boleh_ubah(tim_id))', t, t);

    execute format('drop policy if exists %I_hapus on public.%I', t, t);
    execute format(
      'create policy %I_hapus on public.%I for delete '
      'using (public.boleh_ubah(tim_id))', t, t);
  end loop;
end;
$$;

-- View ikut aturan tabel sumbernya (Postgres 15+ default: security_invoker).
alter view public.v_anggota       set (security_invoker = on);
alter view public.v_rekap_kampung set (security_invoker = on);
alter view public.v_rekap_tps     set (security_invoker = on);
alter view public.v_rekap_rt      set (security_invoker = on);
