"use client";

import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import { venue } from "@venue";
import { CAMBIO_FIELDS, SUPABASE_KEY, SUPABASE_URL, formatPrice, parsePrice, type Cambio } from "@/lib/cambios";
import { asset, cn } from "@/lib/utils";
import { Logo } from "@/components/menu/Logo";
import { ChevronDownIcon } from "@/components/icons";
import type { Product } from "@/types/menu";

// Admin page of one menu: prices, descriptions and which dishes show. The
// changes go to Supabase (supabase/carta-cambios.sql) and the menu applies
// them when it opens, with no new deploy. Only admins of the Mirador Waikiki
// app can save; the database enforces it, this page only follows along.

type View = "cargando" | "login" | "sin-permiso" | "sin-tabla" | "panel";

/** What the form shows for a dish. */
interface Draft {
  price: string;
  visible: boolean;
  description: string;
  descriptionEn: string;
}

let client: SupabaseClient | undefined;
async function supabase() {
  if (!client) {
    const { createClient } = await import("@supabase/supabase-js");
    // Same storage key as miradorwaikiki.com/gestion: one login for both.
    client = createClient(SUPABASE_URL, SUPABASE_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, storageKey: "mw-gestion" },
    });
  }
  return client;
}

const products = venue.categories.flatMap((c) => c.subcategories.flatMap((s) => s.products));
const productsById = new Map(products.map((p) => [p.id, p]));

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** The published dish with its saved change, as the guest sees it now. */
function current(product: Product, cambio: Cambio | undefined): Draft {
  const published = parsePrice(product.price);
  const textChanged = cambio?.descripcion != null;
  return {
    price: cambio?.precio != null ? formatPrice(cambio.precio) : published ? formatPrice(published) : product.price,
    visible: !cambio?.oculto,
    description: textChanged ? (cambio.descripcion ?? "") : (product.description ?? ""),
    descriptionEn:
      textChanged || cambio?.descripcion_en != null ? (cambio?.descripcion_en ?? "") : (product.descriptionEn ?? ""),
  };
}

const sameDraft = (a: Draft, b: Draft) =>
  parsePrice(a.price) === parsePrice(b.price) &&
  a.visible === b.visible &&
  a.description.trim() === b.description.trim() &&
  a.descriptionEn.trim() === b.descriptionEn.trim();

/** The row to save for a dish, or null when it matches what is published. */
function toCambio(product: Product, draft: Draft): Omit<Cambio, "producto_id"> | null {
  const precio = parsePrice(draft.price);
  const description = draft.description.trim();
  const descriptionEn = draft.descriptionEn.trim();
  const descripcion = description === (product.description ?? "") ? null : description;
  // A new Spanish text always saves its English one, so it never shows a stale translation.
  const descripcion_en =
    descripcion !== null || descriptionEn !== (product.descriptionEn ?? "") ? descriptionEn : null;
  const row = {
    precio: precio === parsePrice(product.price) ? null : precio,
    descripcion,
    descripcion_en,
    oculto: !draft.visible,
  };
  return row.precio === null && row.descripcion === null && row.descripcion_en === null && !row.oculto ? null : row;
}

function errorMessage(e: unknown) {
  const m = (e as { message?: string })?.message ?? String(e);
  if (/Invalid login credentials/i.test(m)) return "Email o contraseña incorrectos.";
  if (/row-level security|permission denied/i.test(m)) return "Tu usuario no tiene permiso para esto.";
  if (/Failed to fetch|NetworkError|Load failed/i.test(m)) return "No hay conexión con el servidor. Probá de nuevo.";
  return m;
}

const missingTable = (e: { code?: string; message?: string } | null) =>
  !!e && (e.code === "PGRST205" || e.code === "42P01" || /carta_cambios/.test(e.message ?? ""));

const field =
  "w-full rounded-xl border border-mw-arena bg-white px-3 py-2.5 text-[15px] text-mw-tinta outline-none focus:border-mw-foco focus:ring-2 focus:ring-mw-foco/20";
const buttonPrimary =
  "rounded-full bg-mw-accion px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-mw-accion-hover disabled:opacity-50";
const buttonQuiet =
  "rounded-full border border-mw-arena bg-white px-4 py-2 text-[14px] font-medium text-mw-tinta transition-colors hover:border-mw-verde";

export function AdminApp() {
  const [view, setView] = useState<View>("cargando");
  const [user, setUser] = useState("");
  const [saved, setSaved] = useState<Map<string, Cambio>>(new Map());
  const [drafts, setDrafts] = useState<Record<string, Draft>>({});
  const [query, setQuery] = useState("");
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  const loadCambios = useCallback(async () => {
    const sb = await supabase();
    const { data, error } = await sb.from("carta_cambios").select(CAMBIO_FIELDS).eq("carta", venue.id);
    if (missingTable(error)) return setView("sin-tabla");
    if (error) throw error;
    setSaved(new Map((data as Cambio[]).map((c) => [c.producto_id, c])));
    setView("panel");
  }, []);

  const start = useCallback(async () => {
    try {
      const sb = await supabase();
      const { data } = await sb.auth.getSession();
      if (!data.session) return setView("login");
      const { data: isAdmin, error } = await sb.rpc("is_admin");
      if (error || !isAdmin) return setView("sin-permiso");
      const { data: profile } = await sb
        .from("profiles")
        .select("full_name")
        .eq("id", data.session.user.id)
        .maybeSingle();
      setUser(profile?.full_name ?? data.session.user.email ?? "");
      await loadCambios();
    } catch (e) {
      setNotice({ kind: "error", text: errorMessage(e) });
      setView("login");
    }
  }, [loadCambios]);

  useEffect(() => {
    void start();
  }, [start]);

  const dirtyIds = useMemo(
    () =>
      Object.keys(drafts).filter((id) => {
        const product = productsById.get(id);
        return product && !sameDraft(drafts[id], current(product, saved.get(id)));
      }),
    [drafts, saved],
  );
  const invalidIds = dirtyIds.filter((id) => parsePrice(drafts[id].price) === null);

  // Don't lose edits by closing the tab.
  useEffect(() => {
    if (dirtyIds.length === 0) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirtyIds.length]);

  const edit = (product: Product, patch: Partial<Draft>) =>
    setDrafts((prev) => ({ ...prev, [product.id]: { ...(prev[product.id] ?? current(product, saved.get(product.id))), ...patch } }));

  const restore = (product: Product) => edit(product, current(product, undefined));

  const save = async () => {
    if (invalidIds.length > 0) {
      setNotice({ kind: "error", text: "Hay precios que no son un número. Corregilos antes de guardar." });
      return;
    }
    setSaving(true);
    setNotice(null);
    try {
      const sb = await supabase();
      const upserts: (Cambio & { carta: string })[] = [];
      const deletes: string[] = [];
      for (const id of dirtyIds) {
        const row = toCambio(productsById.get(id)!, drafts[id]);
        if (row) upserts.push({ carta: venue.id, producto_id: id, ...row });
        else deletes.push(id);
      }
      if (upserts.length > 0) {
        const { error } = await sb.from("carta_cambios").upsert(upserts, { onConflict: "carta,producto_id" });
        if (error) throw error;
      }
      if (deletes.length > 0) {
        const { error } = await sb.from("carta_cambios").delete().eq("carta", venue.id).in("producto_id", deletes);
        if (error) throw error;
      }
      setDrafts({});
      await loadCambios();
      setNotice({ kind: "ok", text: "Guardado. Ya se ve en la carta." });
    } catch (e) {
      setNotice({ kind: "error", text: errorMessage(e) });
    } finally {
      setSaving(false);
    }
  };

  const signOut = async () => {
    const sb = await supabase();
    await sb.auth.signOut();
    setDrafts({});
    setView("login");
  };

  if (view === "cargando") {
    return <Centered>Cargando…</Centered>;
  }
  if (view === "login") {
    return <Login notice={notice} onDone={() => void start()} />;
  }
  if (view === "sin-permiso") {
    return (
      <Centered>
        <p className="text-[15px] text-mw-tinta">Tu usuario no es administrador de la app de Mirador Waikiki.</p>
        <button type="button" onClick={() => void signOut()} className={cn(buttonQuiet, "mt-5")}>
          Entrar con otro usuario
        </button>
      </Centered>
    );
  }
  if (view === "sin-tabla") {
    return (
      <Centered>
        <p className="text-[15px] text-mw-tinta">
          Falta un paso: crear la tabla de cambios en Supabase. Es el archivo <code>supabase/carta-cambios.sql</code>,
          que se pega y se corre una vez en el editor SQL del proyecto.
        </p>
      </Centered>
    );
  }

  const q = normalize(query.trim());
  const sections = venue.categories
    .map((category) => ({
      category,
      subcategories: category.subcategories
        .map((sub) => ({ sub, products: sub.products.filter((p) => !q || normalize(p.name).includes(q)) }))
        .filter((s) => s.products.length > 0),
    }))
    .filter((s) => s.subcategories.length > 0);

  return (
    <div className="min-h-svh bg-mw-crema pb-32">
      <header className="sticky top-0 z-20 border-b border-mw-arena bg-mw-crema/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <Logo className="h-9 w-auto" textClassName="text-[15px]" />
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-mw-rotulo uppercase">Administrar carta</p>
            <p className="truncate text-[13px] text-mw-tinta-suave">{user}</p>
          </div>
          <a href={asset("/")} target="_blank" rel="noreferrer" className={buttonQuiet}>
            Ver carta
          </a>
          <button type="button" onClick={() => void signOut()} className="text-[13px] font-medium text-mw-rotulo hover:text-mw-tinta">
            Salir
          </button>
        </div>
        <div className="mx-auto max-w-3xl px-4 pb-3">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar un plato"
            aria-label="Buscar un plato"
            className={field}
          />
          {!q && (
            <nav aria-label="Secciones" className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4">
              {venue.categories.map((c) => (
                <a
                  key={c.name}
                  href={`#${encodeURIComponent(c.name)}`}
                  className="shrink-0 rounded-full border border-mw-arena bg-white px-3 py-1.5 text-[13px] text-mw-tinta hover:border-mw-verde"
                >
                  {c.name}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 pt-5">
        <p className="text-[14px] leading-relaxed text-mw-tinta-suave">
          Cambiá precios, descripciones o lo que se muestra, y tocá <strong>Guardar</strong>: la carta lo toma al
          abrirse, sin publicar de nuevo.
        </p>

        {sections.length === 0 && <p className="mt-8 text-center text-[15px] text-mw-tinta-suave">No hay platos con ese nombre.</p>}

        {sections.map(({ category, subcategories }) => (
          <section key={category.name} id={encodeURIComponent(category.name)} className="scroll-mt-40 pt-8">
            <h2 className="text-[24px] font-semibold tracking-[-0.01em] text-mw-titulo">{category.name}</h2>
            {subcategories.map(({ sub, products: list }) => (
              <div key={sub.name} className="mt-4 overflow-hidden rounded-2xl border border-mw-arena bg-white">
                <h3 className="border-b border-mw-arena-clara px-4 py-3 text-[11px] font-semibold tracking-[0.2em] text-mw-rotulo uppercase">
                  {sub.name}
                </h3>
                <ul className="divide-y divide-mw-arena-clara">
                  {list.map((product) => {
                    const cambio = saved.get(product.id);
                    const draft = drafts[product.id] ?? current(product, cambio);
                    return (
                      <ProductRow
                        key={product.id}
                        product={product}
                        draft={draft}
                        changed={!!cambio}
                        dirty={dirtyIds.includes(product.id)}
                        invalid={invalidIds.includes(product.id)}
                        onEdit={(patch) => edit(product, patch)}
                        onRestore={() => restore(product)}
                      />
                    );
                  })}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </main>

      {(dirtyIds.length > 0 || notice) && (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-mw-arena bg-mw-crema-clarito/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-3 px-4 py-3">
            <p
              role="status"
              className={cn(
                "min-w-0 flex-1 text-[14px]",
                notice?.kind === "error" ? "text-red-700" : notice?.kind === "ok" && dirtyIds.length === 0 ? "text-mw-foco" : "text-mw-tinta",
              )}
            >
              {notice && (notice.kind === "error" || dirtyIds.length === 0)
                ? notice.text
                : `${dirtyIds.length} ${dirtyIds.length === 1 ? "cambio sin guardar" : "cambios sin guardar"}`}
            </p>
            {dirtyIds.length > 0 ? (
              <>
                <button type="button" onClick={() => setDrafts({})} disabled={saving} className={buttonQuiet}>
                  Descartar
                </button>
                <button type="button" onClick={() => void save()} disabled={saving} className={buttonPrimary}>
                  {saving ? "Guardando…" : "Guardar"}
                </button>
              </>
            ) : (
              <button type="button" onClick={() => setNotice(null)} className={buttonQuiet}>
                Listo
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function ProductRow({
  product,
  draft,
  changed,
  dirty,
  invalid,
  onEdit,
  onRestore,
}: {
  product: Product;
  draft: Draft;
  changed: boolean;
  dirty: boolean;
  invalid: boolean;
  onEdit: (patch: Partial<Draft>) => void;
  onRestore: () => void;
}) {
  const [open, setOpen] = useState(false);
  const published = parsePrice(product.price);
  const priceNow = parsePrice(draft.price);
  return (
    <li className={cn("px-4 py-3.5", !draft.visible && "bg-mw-crema-clarito")}>
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <p className={cn("text-[15px] leading-snug font-semibold text-mw-tinta", !draft.visible && "text-mw-tinta-suave line-through")}>
            {product.name}
          </p>
          <div className="mt-1 flex flex-wrap gap-1.5 text-[11.5px]">
            {dirty && <span className="rounded-full bg-mw-arena px-2 py-0.5 text-mw-tinta">Sin guardar</span>}
            {!dirty && changed && <span className="rounded-full bg-mw-salvia px-2 py-0.5 text-mw-rotulo">Cambiado desde acá</span>}
            {published !== null && priceNow !== null && priceNow !== published && (
              <span className="text-mw-tinta-suave">Publicado: $ {formatPrice(published)}</span>
            )}
          </div>
        </div>
        <label className="flex shrink-0 items-center gap-1 text-[15px] font-semibold text-mw-rotulo">
          $
          <input
            type="text"
            inputMode="numeric"
            value={draft.price}
            onChange={(e) => onEdit({ price: e.target.value })}
            onBlur={() => priceNow !== null && onEdit({ price: formatPrice(priceNow) })}
            aria-label={`Precio de ${product.name}`}
            aria-invalid={invalid}
            className={cn(
              "w-[96px] rounded-lg border bg-white px-2 py-1.5 text-right text-[15px] font-semibold tabular-nums outline-none focus:ring-2",
              invalid ? "border-red-600 text-red-700 focus:ring-red-600/20" : "border-mw-arena text-mw-tinta focus:border-mw-foco focus:ring-mw-foco/20",
            )}
          />
        </label>
      </div>

      <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          type="button"
          role="switch"
          aria-checked={draft.visible}
          onClick={() => onEdit({ visible: !draft.visible })}
          className="flex items-center gap-2 text-[13px] text-mw-tinta"
        >
          <span className={cn("relative h-5 w-9 rounded-full transition-colors", draft.visible ? "bg-mw-accion" : "bg-mw-arena")}>
            <span
              className={cn(
                "absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-mw-1 transition-[left]",
                draft.visible ? "left-[18px]" : "left-0.5",
              )}
            />
          </span>
          {draft.visible ? "Se muestra" : "Oculto"}
        </button>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1 text-[13px] font-medium text-mw-rotulo hover:text-mw-tinta"
        >
          Descripción
          <ChevronDownIcon className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
        </button>
        {(changed || dirty) && (
          <button type="button" onClick={onRestore} className="text-[13px] text-mw-tinta-suave underline-offset-2 hover:underline">
            Volver a lo publicado
          </button>
        )}
      </div>

      {open && (
        <div className="mt-3 space-y-3">
          <label className="block">
            <span className="text-[12px] font-medium text-mw-tinta-suave">En español</span>
            <textarea
              value={draft.description}
              onChange={(e) => onEdit({ description: e.target.value })}
              rows={3}
              maxLength={600}
              className={cn(field, "mt-1 text-[14px]")}
            />
          </label>
          <label className="block">
            <span className="text-[12px] font-medium text-mw-tinta-suave">
              En inglés (si lo dejás vacío, en inglés se lee el texto en español)
            </span>
            <textarea
              value={draft.descriptionEn}
              onChange={(e) => onEdit({ descriptionEn: e.target.value })}
              rows={3}
              maxLength={600}
              className={cn(field, "mt-1 text-[14px]")}
            />
          </label>
        </div>
      )}
    </li>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh items-center justify-center bg-mw-crema px-4">
      <div className="w-full max-w-sm rounded-3xl bg-mw-crema-clarito p-7 text-center shadow-mw-3">
        <div className="flex justify-center">
          <Logo className="h-14 w-auto" textClassName="text-[22px]" />
        </div>
        <div className="mt-5 text-[15px] text-mw-tinta-suave">{children}</div>
      </div>
    </div>
  );
}

function Login({ notice, onDone }: { notice: { kind: "ok" | "error"; text: string } | null; onDone: () => void }) {
  const [error, setError] = useState(notice?.kind === "error" ? notice.text : "");
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setBusy(true);
    setError("");
    try {
      const sb = await supabase();
      const { error: authError } = await sb.auth.signInWithPassword({
        email: String(form.get("email")).trim(),
        password: String(form.get("clave")),
      });
      if (authError) throw authError;
      onDone();
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-svh items-center justify-center bg-mw-crema px-4">
      <form onSubmit={(e) => void submit(e)} className="w-full max-w-sm rounded-3xl bg-mw-crema-clarito p-7 shadow-mw-3">
        <div className="flex justify-center">
          <Logo className="h-14 w-auto" textClassName="text-[22px]" />
        </div>
        <h1 className="mt-5 text-center text-[20px] font-semibold text-mw-titulo">Administrar la carta</h1>
        <p className="mt-1 text-center text-[13px] text-mw-tinta-suave">
          Con el mismo usuario de la app de Mirador Waikiki.
        </p>
        <label className="mt-6 block">
          <span className="text-[13px] font-medium text-mw-tinta">Email</span>
          <input name="email" type="email" autoComplete="username" required className={cn(field, "mt-1")} />
        </label>
        <label className="mt-4 block">
          <span className="text-[13px] font-medium text-mw-tinta">Contraseña</span>
          <input name="clave" type="password" autoComplete="current-password" required className={cn(field, "mt-1")} />
        </label>
        {error && (
          <p role="alert" className="mt-4 text-[14px] text-red-700">
            {error}
          </p>
        )}
        <button type="submit" disabled={busy} className={cn(buttonPrimary, "mt-6 w-full py-3")}>
          {busy ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </div>
  );
}
