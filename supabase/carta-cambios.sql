-- ─────────────────────────────────────────────────────────────────────────
--  Cambios a las cartas digitales (miradorwaikiki.com/carta/<carta>/)
--
--  Las cartas son sitios estáticos: platos, precios y textos vienen de
--  src/venues/<carta>/menu.ts. Esta tabla guarda lo que se cambia desde el
--  panel miradorwaikiki.com/gestion/cartas/ sin volver a publicar: nombre,
--  precio, descripción y si el plato se muestra, y los platos que se agregan
--  desde ahí (con su sección). Al abrir la carta, cada cambio pisa al valor
--  publicado; sin conexión con la base, la carta sale con lo publicado.
--
--  Vive en el mismo proyecto de Supabase que la app interna y las gift
--  cards: reusa sus usuarios y su regla de administrador (public.is_admin()).
--  Sólo agrega; no toca ninguna tabla ni política existente.
--
--  Cualquiera puede leer (es lo que muestra la carta pública); sólo los
--  administradores escriben. Si se vuelve a correr, es idempotente: también
--  sirve para sumar las columnas nuevas a una tabla creada antes.
-- ─────────────────────────────────────────────────────────────────────────

create table if not exists public.carta_cambios (
  carta            text not null check (carta ~ '^[a-z0-9]+$'),
  producto_id      text not null check (length(producto_id) between 1 and 120),
  -- Null: el nombre publicado.
  nombre           text check (nombre is null or length(nombre) between 1 and 120),
  nombre_en        text check (nombre_en is null or length(nombre_en) <= 120),
  -- En pesos, sin puntos. Null: el precio publicado.
  precio           integer check (precio is null or precio between 1 and 99999999),
  -- Null: la descripción publicada.
  descripcion      text check (descripcion is null or length(descripcion) <= 600),
  descripcion_en   text check (descripcion_en is null or length(descripcion_en) <= 600),
  -- Sin stock o fuera de carta: no se muestra.
  oculto           boolean not null default false,
  -- Sólo los platos agregados desde el panel: la sección donde van
  -- ("platos/pescados"). Esos llevan nombre y precio propios.
  seccion          text check (seccion is null or seccion ~ '^[a-z0-9-]+/[a-z0-9-]+$'),
  creado_en        timestamptz not null default now(),
  actualizado_en   timestamptz not null default now(),
  actualizado_por  uuid default auth.uid() references public.profiles (id) on delete set null,
  primary key (carta, producto_id),
  constraint carta_cambios_agregado_completo
    check (seccion is null or (nombre is not null and precio is not null))
);

-- Para una tabla creada con la primera versión de este archivo.
alter table public.carta_cambios
  add column if not exists nombre text check (nombre is null or length(nombre) between 1 and 120),
  add column if not exists nombre_en text check (nombre_en is null or length(nombre_en) <= 120),
  add column if not exists seccion text check (seccion is null or seccion ~ '^[a-z0-9-]+/[a-z0-9-]+$'),
  add column if not exists creado_en timestamptz not null default now();
alter table public.carta_cambios drop constraint if exists carta_cambios_agregado_completo;
alter table public.carta_cambios add constraint carta_cambios_agregado_completo
  check (seccion is null or (nombre is not null and precio is not null));

-- Cada cambio se firma solo: quién y cuándo.
create or replace function public.carta_cambios_firmar()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.actualizado_en := now();
  new.actualizado_por := auth.uid();
  return new;
end;
$$;

drop trigger if exists carta_cambios_firmar on public.carta_cambios;
create trigger carta_cambios_firmar
  before insert or update on public.carta_cambios
  for each row execute function public.carta_cambios_firmar();
revoke execute on function public.carta_cambios_firmar() from public, anon, authenticated;

alter table public.carta_cambios enable row level security;

revoke all on public.carta_cambios from anon;
grant select on public.carta_cambios to anon;
revoke truncate on public.carta_cambios from authenticated;

drop policy if exists "carta_cambios: todos leen" on public.carta_cambios;
create policy "carta_cambios: todos leen" on public.carta_cambios
  for select to anon, authenticated using (true);

drop policy if exists "carta_cambios: admins agregan" on public.carta_cambios;
create policy "carta_cambios: admins agregan" on public.carta_cambios
  for insert to authenticated with check (public.is_admin());

drop policy if exists "carta_cambios: admins editan" on public.carta_cambios;
create policy "carta_cambios: admins editan" on public.carta_cambios
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "carta_cambios: admins borran" on public.carta_cambios;
create policy "carta_cambios: admins borran" on public.carta_cambios
  for delete to authenticated using (public.is_admin());
