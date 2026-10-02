-- ─────────────────────────────────────────────────────────────────────────
--  Gift cards de Mirador Waikiki
--
--  Vive en el mismo proyecto de Supabase que la app interna: reusa sus
--  usuarios y su regla de administrador (public.is_admin()). Sólo agrega;
--  no toca ninguna tabla ni política existente.
--
--  · giftcards: una fila por tarjeta emitida, numerada (N° 1, 2, 3…) y con
--    un código de verificación que va impreso en la tarjeta.
--  · giftcard_eventos: el historial, que escriben los triggers (nadie lo
--    puede editar ni borrar desde la web).
--  · bucket privado giftcard-comprobantes: los comprobantes de pago.
--
--  Nada se borra: una tarjeta se anula, con motivo. Sólo los
--  administradores leen y escriben.
--
--  Se aplicó el 2026-10-02. Si se vuelve a correr, es idempotente.
-- ─────────────────────────────────────────────────────────────────────────

create table if not exists public.giftcards (
  id                    uuid primary key default gen_random_uuid(),
  numero                integer generated always as identity unique,
  codigo                text unique,
  propuesta_id          text not null,
  propuesta_nombre      text not null,
  para_cuantos          text,
  precio                integer check (precio is null or precio > 0),
  monto_cobrado         integer check (monto_cobrado is null or monto_cobrado >= 0),
  para                  text not null check (length(trim(para)) between 2 and 80),
  de                    text not null check (length(trim(de)) between 2 and 80),
  email_comprador       text,
  telefono_comprador    text,
  telefono_destinatario text,
  mensaje               text check (mensaje is null or length(mensaje) <= 200),
  medio_pago            text not null default 'transferencia',
  comprobante_path      text,
  notas                 text,
  estado                text not null default 'activa'
                        check (estado in ('activa', 'canjeada', 'anulada')),
  emitida_en            timestamptz not null default now(),
  vence_en              date not null
                        default ((now() at time zone 'America/Argentina/Buenos_Aires') + interval '6 months')::date,
  emitida_por           uuid default auth.uid() references public.profiles (id) on delete set null,
  canjeada_en           timestamptz,
  canjeada_por          uuid references public.profiles (id) on delete set null,
  nota_canje            text,
  anulada_en            timestamptz,
  anulada_por           uuid references public.profiles (id) on delete set null,
  motivo_anulacion      text
);

create table if not exists public.giftcard_eventos (
  id           bigint generated always as identity primary key,
  giftcard_id  uuid not null references public.giftcards (id) on delete restrict,
  tipo         text not null
               check (tipo in ('emitida', 'canjeada', 'anulada', 'reactivada', 'editada', 'comprobante')),
  detalle      text,
  hecho_por    uuid default auth.uid() references public.profiles (id) on delete set null,
  hecho_en     timestamptz not null default now()
);
create index if not exists giftcard_eventos_giftcard_idx on public.giftcard_eventos (giftcard_id, hecho_en);
create index if not exists giftcards_estado_idx on public.giftcards (estado, vence_en);

-- ── Antes de guardar ──────────────────────────────────────────────────────
-- Al emitir: el código (MW-0007-K4P9: número + cuatro letras al azar, sin
-- las que se confunden al dictarlas). Al editar: lo que no cambia nunca
-- vuelve a su valor, y el canje y la anulación se firman solos.
create or replace function public.giftcards_antes()
returns trigger
language plpgsql
set search_path = public
as $$
declare
  letras constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  sufijo text := '';
begin
  if tg_op = 'INSERT' then
    for i in 1..4 loop
      sufijo := sufijo || substr(letras, 1 + floor(random() * length(letras))::int, 1);
    end loop;
    new.codigo := 'MW-' || lpad(new.numero::text, 4, '0') || '-' || sufijo;
    new.estado := 'activa';
    new.emitida_en := now();
    new.emitida_por := auth.uid();
    return new;
  end if;

  new.numero := old.numero;
  new.codigo := old.codigo;
  new.emitida_en := old.emitida_en;
  new.emitida_por := old.emitida_por;

  if new.estado is distinct from old.estado then
    if new.estado = 'canjeada' then
      new.canjeada_en := now();
      new.canjeada_por := auth.uid();
    elsif new.estado = 'anulada' then
      if coalesce(trim(new.motivo_anulacion), '') = '' then
        raise exception 'Para anular una gift card hay que poner el motivo.';
      end if;
      new.anulada_en := now();
      new.anulada_por := auth.uid();
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists giftcards_antes on public.giftcards;
create trigger giftcards_antes
  before insert or update on public.giftcards
  for each row execute function public.giftcards_antes();

-- ── Después de guardar: el historial ──────────────────────────────────────
create or replace function public.giftcards_historial()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  cambios text[] := '{}';
begin
  if tg_op = 'INSERT' then
    insert into giftcard_eventos (giftcard_id, tipo, detalle, hecho_por)
    values (new.id, 'emitida', new.propuesta_nombre || ' para ' || new.para, auth.uid());
    return new;
  end if;

  if new.estado is distinct from old.estado then
    insert into giftcard_eventos (giftcard_id, tipo, detalle, hecho_por)
    values (
      new.id,
      case new.estado when 'activa' then 'reactivada' else new.estado end,
      case new.estado
        when 'anulada' then new.motivo_anulacion
        when 'canjeada' then new.nota_canje
        else null
      end,
      auth.uid()
    );
  end if;

  if new.comprobante_path is distinct from old.comprobante_path then
    insert into giftcard_eventos (giftcard_id, tipo, detalle, hecho_por)
    values (new.id, 'comprobante', case when old.comprobante_path is null then 'Cargado' else 'Reemplazado' end, auth.uid());
  end if;

  if new.para is distinct from old.para then cambios := array_append(cambios, 'para'); end if;
  if new.de is distinct from old.de then cambios := array_append(cambios, 'de'); end if;
  if new.mensaje is distinct from old.mensaje then cambios := array_append(cambios, 'mensaje'); end if;
  if new.vence_en is distinct from old.vence_en then cambios := array_append(cambios, ('vencimiento ' || to_char(new.vence_en, 'DD/MM/YYYY'))); end if;
  if new.monto_cobrado is distinct from old.monto_cobrado then cambios := array_append(cambios, 'monto cobrado'); end if;
  if new.email_comprador is distinct from old.email_comprador
     or new.telefono_comprador is distinct from old.telefono_comprador
     or new.telefono_destinatario is distinct from old.telefono_destinatario then
    cambios := array_append(cambios, 'contacto');
  end if;
  if new.notas is distinct from old.notas then cambios := array_append(cambios, 'notas'); end if;
  if array_length(cambios, 1) > 0 then
    insert into giftcard_eventos (giftcard_id, tipo, detalle, hecho_por)
    values (new.id, 'editada', array_to_string(cambios, ', '), auth.uid());
  end if;
  return new;
end;
$$;

drop trigger if exists giftcards_historial on public.giftcards;
create trigger giftcards_historial
  after insert or update on public.giftcards
  for each row execute function public.giftcards_historial();

revoke execute on function public.giftcards_historial() from public, anon, authenticated;

-- ── Quién puede qué ───────────────────────────────────────────────────────
alter table public.giftcards enable row level security;
alter table public.giftcard_eventos enable row level security;

revoke all on public.giftcards from anon;
revoke all on public.giftcard_eventos from anon;
revoke delete, truncate on public.giftcards from authenticated;
revoke insert, update, delete, truncate on public.giftcard_eventos from authenticated;

drop policy if exists "giftcards: admins leen" on public.giftcards;
create policy "giftcards: admins leen" on public.giftcards
  for select to authenticated using (public.is_admin());

drop policy if exists "giftcards: admins emiten" on public.giftcards;
create policy "giftcards: admins emiten" on public.giftcards
  for insert to authenticated with check (public.is_admin());

drop policy if exists "giftcards: admins editan" on public.giftcards;
create policy "giftcards: admins editan" on public.giftcards
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "giftcard_eventos: admins leen" on public.giftcard_eventos;
create policy "giftcard_eventos: admins leen" on public.giftcard_eventos
  for select to authenticated using (public.is_admin());

-- ── Comprobantes ──────────────────────────────────────────────────────────
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'giftcard-comprobantes', 'giftcard-comprobantes', false, 10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'application/pdf']
)
on conflict (id) do update
  set public = false,
      file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "giftcard-comprobantes: admins leen" on storage.objects;
create policy "giftcard-comprobantes: admins leen" on storage.objects
  for select to authenticated
  using (bucket_id = 'giftcard-comprobantes' and public.is_admin());

drop policy if exists "giftcard-comprobantes: admins suben" on storage.objects;
create policy "giftcard-comprobantes: admins suben" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'giftcard-comprobantes' and public.is_admin());
