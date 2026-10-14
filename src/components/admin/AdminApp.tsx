"use client";

import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import { venues } from "@/venues";
import {
  CAMBIO_FIELDS,
  SUPABASE_KEY,
  SUPABASE_URL,
  addedProduct,
  applyCambio,
  formatPrice,
  parsePrice,
  seccionKey,
  type Cambio,
} from "@/lib/cambios";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/menu/Logo";
import { ChevronDownIcon } from "@/components/icons";
import type { Product } from "@/types/menu";

// Admin of the menus, at miradorwaikiki.com/gestion/cartas/: names, prices,
// descriptions and which dishes show, plus dishes added from here, one menu
// at a time. The changes go to Supabase (supabase/carta-cambios.sql) and each
// menu applies them when it opens, with no new deploy. Only admins of the
// Mirador Waikiki app can save; the database enforces it, this page only
// follows along.

type View = "cargando" | "login" | "sin-permiso" | "sin-tabla" | "panel";

/** What the form shows for a dish. */
interface Draft {
  name: string;
  nameEn: string;
  price: string;
  visible: boolean;
  description: string;
  descriptionEn: string;
}

/** A dish in the list: published, or added from here (with its section). */
interface Row {
  product: Product;
  cambio: Cambio | undefined;
  seccion: string | null;
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

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** The menu in the address (?carta=hulakai), so a link opens straight on it. */
function cartaFromUrl() {
  const id = new URLSearchParams(window.location.search).get("carta");
  return venues.some((v) => v.id === id) ? id! : venues[0].id;
}

const emptyDraft: Draft = { name: "", nameEn: "", price: "", visible: true, description: "", descriptionEn: "" };

/** The dish as guests see it now: published, with its saved change on top. */
function draftOf(row: Row): Draft {
  const { product, cambio } = row;
  const p = cambio ? (cambio.seccion ? addedProduct(cambio) : applyCambio(product, cambio)) : product;
  const price = parsePrice(p.price);
  return {
    name: p.name,
    nameEn: p.nameEn ?? "",
    price: price ? formatPrice(price) : p.price,
    visible: !cambio?.oculto,
    description: p.description ?? "",
    descriptionEn: p.descriptionEn ?? "",
  };
}

const sameDraft = (a: Draft, b: Draft) =>
  a.name.trim() === b.name.trim() &&
  a.nameEn.trim() === b.nameEn.trim() &&
  parsePrice(a.price) === parsePrice(b.price) &&
  a.visible === b.visible &&
  a.description.trim() === b.description.trim() &&
  a.descriptionEn.trim() === b.descriptionEn.trim();

type Fields = Omit<Cambio, "producto_id" | "creado_en">;

/**
 * The row to save for a dish. An added dish saves everything; a published one
 * only what differs from the menu, and null when nothing does.
 */
function toCambio(row: Row, draft: Draft): Fields | null {
  const t = {
    name: draft.name.trim(),
    nameEn: draft.nameEn.trim(),
    description: draft.description.trim(),
    descriptionEn: draft.descriptionEn.trim(),
  };
  const precio = parsePrice(draft.price);
  if (row.seccion) {
    return {
      nombre: t.name,
      nombre_en: t.nameEn || null,
      precio,
      descripcion: t.description || null,
      descripcion_en: t.descriptionEn || null,
      oculto: !draft.visible,
      seccion: row.seccion,
    };
  }
  const p = row.product;
  const nombre = t.name === p.name ? null : t.name;
  const descripcion = t.description === (p.description ?? "") ? null : t.description;
  // A new Spanish text always saves its English one, so it never shows a stale translation.
  const fields: Fields = {
    nombre,
    nombre_en: nombre !== null || t.nameEn !== (p.nameEn ?? "") ? t.nameEn : null,
    precio: precio === parsePrice(p.price) ? null : precio,
    descripcion,
    descripcion_en: descripcion !== null || t.descriptionEn !== (p.descriptionEn ?? "") ? t.descriptionEn : null,
    oculto: !draft.visible,
    seccion: null,
  };
  const unchanged =
    fields.nombre === null &&
    fields.nombre_en === null &&
    fields.precio === null &&
    fields.descripcion === null &&
    fields.descripcion_en === null &&
    !fields.oculto;
  return unchanged ? null : fields;
}

const newId = () => `nuevo-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

function errorMessage(e: unknown) {
  const m = (e as { message?: string })?.message ?? String(e);
  if (/Invalid login credentials/i.test(m)) return "Email o contraseña incorrectos.";
  if (/row-level security|permission denied/i.test(m)) return "Tu usuario no tiene permiso para esto.";
  if (/Failed to fetch|NetworkError|Load failed/i.test(m)) return "No hay conexión con el servidor. Probá de nuevo.";
  if (/column .* does not exist|could not find the .* column/i.test(m))
    return "Falta actualizar la tabla de cambios: volvé a correr supabase/carta-cambios.sql en Supabase.";
  return m;
}

const missingTable = (e: { code?: string; message?: string } | null) =>
  !!e && (e.code === "PGRST205" || e.code === "42P01" || /relation .*carta_cambios/.test(e.message ?? ""));

const field =
  "w-full rounded-xl border border-mw-arena bg-white px-3 py-2.5 text-[15px] text-mw-tinta outline-none focus:border-mw-foco focus:ring-2 focus:ring-mw-foco/20";
const buttonPrimary =
  "rounded-full bg-mw-accion px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-mw-accion-hover disabled:opacity-50";
const buttonQuiet =
  "rounded-full border border-mw-arena bg-white px-4 py-2 text-[14px] font-medium text-mw-tinta transition-colors hover:border-mw-verde";

export function AdminApp() {
  const [view, setView] = useState<View>("cargando");
  const [cartaId, setCartaId] = useState(venues[0].id);
  const [user, setUser] = useState("");
  const [saved, setSaved] = useState<Cambio[]>([]);
  const [drafts, setDrafts] = useState<Record<string, Draft>>({});
  /** Dishes added here and not saved yet: id → section. */
  const [unsaved, setUnsaved] = useState<Record<string, string>>({});
  const [query, setQuery] = useState("");
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState<{ kind: "ok" | "error"; text: string } | null>(null);

  const carta = venues.find((v) => v.id === cartaId) ?? venues[0];

  // Every dish of the menu by id, with its saved change, and the added ones per section.
  const { rows, addedBySeccion } = useMemo(() => {
    const byId = new Map(saved.map((c) => [c.producto_id, c]));
    const rows = new Map<string, Row>();
    for (const c of carta.categories)
      for (const s of c.subcategories)
        for (const p of s.products) rows.set(p.id, { product: p, cambio: byId.get(p.id), seccion: null });
    const addedBySeccion = new Map<string, string[]>();
    const add = (seccion: string, row: Row) => {
      rows.set(row.product.id, row);
      addedBySeccion.set(seccion, [...(addedBySeccion.get(seccion) ?? []), row.product.id]);
    };
    for (const c of saved)
      if (c.seccion && !rows.has(c.producto_id)) add(c.seccion, { product: addedProduct(c), cambio: c, seccion: c.seccion });
    for (const [id, seccion] of Object.entries(unsaved))
      add(seccion, { product: { id, name: "", price: "" }, cambio: undefined, seccion });
    return { rows, addedBySeccion };
  }, [carta, saved, unsaved]);

  const loadCambios = useCallback(async (id: string) => {
    const sb = await supabase();
    const { data, error } = await sb.from("carta_cambios").select(CAMBIO_FIELDS).eq("carta", id).order("creado_en");
    if (missingTable(error)) return setView("sin-tabla");
    if (error) throw error;
    setSaved(data as Cambio[]);
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
      const id = cartaFromUrl();
      setCartaId(id);
      await loadCambios(id);
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
        const row = rows.get(id);
        return row && (id in unsaved || !sameDraft(drafts[id], draftOf(row)));
      }),
    [drafts, rows, unsaved],
  );
  const invalidIds = dirtyIds.filter((id) => parsePrice(drafts[id].price) === null || drafts[id].name.trim() === "");

  // Don't lose edits by closing the tab.
  useEffect(() => {
    if (dirtyIds.length === 0) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirtyIds.length]);

  const edit = (row: Row, patch: Partial<Draft>) =>
    setDrafts((prev) => ({ ...prev, [row.product.id]: { ...(prev[row.product.id] ?? draftOf(row)), ...patch } }));

  const restore = (row: Row) => edit(row, draftOf({ ...row, cambio: undefined }));

  const addDish = (seccion: string) => {
    const id = newId();
    setUnsaved((prev) => ({ ...prev, [id]: seccion }));
    setDrafts((prev) => ({ ...prev, [id]: emptyDraft }));
  };

  const forget = (id: string) => {
    setDrafts((prev) => Object.fromEntries(Object.entries(prev).filter(([k]) => k !== id)));
    setUnsaved((prev) => Object.fromEntries(Object.entries(prev).filter(([k]) => k !== id)));
  };

  const removeAdded = async (row: Row) => {
    const id = row.product.id;
    if (id in unsaved) return forget(id);
    if (!window.confirm(`¿Eliminar «${row.product.name}» de la carta de ${carta.restaurant.name}?`)) return;
    try {
      const sb = await supabase();
      const { error } = await sb.from("carta_cambios").delete().eq("carta", carta.id).eq("producto_id", id);
      if (error) throw error;
      forget(id);
      await loadCambios(carta.id);
      setNotice({ kind: "ok", text: `Eliminado de la carta de ${carta.restaurant.name}.` });
    } catch (e) {
      setNotice({ kind: "error", text: errorMessage(e) });
    }
  };

  const save = async () => {
    if (invalidIds.length > 0) {
      setNotice({
        kind: "error",
        text: "Hay platos sin nombre o con un precio que no es un número. Corregilos antes de guardar.",
      });
      return;
    }
    setSaving(true);
    setNotice(null);
    try {
      const sb = await supabase();
      const upserts: (Fields & { carta: string; producto_id: string })[] = [];
      const deletes: string[] = [];
      for (const id of dirtyIds) {
        const fields = toCambio(rows.get(id)!, drafts[id]);
        if (fields) upserts.push({ carta: carta.id, producto_id: id, ...fields });
        else deletes.push(id);
      }
      if (upserts.length > 0) {
        const { error } = await sb.from("carta_cambios").upsert(upserts, { onConflict: "carta,producto_id" });
        if (error) throw error;
      }
      if (deletes.length > 0) {
        const { error } = await sb.from("carta_cambios").delete().eq("carta", carta.id).in("producto_id", deletes);
        if (error) throw error;
      }
      setDrafts({});
      setUnsaved({});
      await loadCambios(carta.id);
      setNotice({ kind: "ok", text: `Guardado. Ya se ve en la carta de ${carta.restaurant.name}.` });
    } catch (e) {
      setNotice({ kind: "error", text: errorMessage(e) });
    } finally {
      setSaving(false);
    }
  };

  const discard = () => {
    setDrafts({});
    setUnsaved({});
  };

  const choose = async (id: string) => {
    if (id === carta.id) return;
    if (dirtyIds.length > 0 && !window.confirm(`Hay cambios sin guardar en ${carta.restaurant.name}. ¿Los descartás?`)) {
      return;
    }
    discard();
    setQuery("");
    setNotice(null);
    setSaved([]);
    setCartaId(id);
    window.history.replaceState(null, "", `?carta=${id}`);
    window.scrollTo(0, 0);
    try {
      await loadCambios(id);
    } catch (e) {
      setNotice({ kind: "error", text: errorMessage(e) });
    }
  };

  const signOut = async () => {
    const sb = await supabase();
    await sb.auth.signOut();
    discard();
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
  const matches = (id: string) => {
    if (!q || id in unsaved) return true;
    const d = drafts[id] ?? draftOf(rows.get(id)!);
    return normalize(d.name).includes(q);
  };
  const sections = carta.categories
    .map((category) => ({
      category,
      subcategories: category.subcategories
        .map((sub) => {
          const seccion = seccionKey(category.name, sub.name);
          const ids = [...sub.products.map((p) => p.id), ...(addedBySeccion.get(seccion) ?? [])];
          return { sub, seccion, ids: ids.filter(matches) };
        })
        .filter((s) => !q || s.ids.length > 0),
    }))
    .filter((s) => s.subcategories.length > 0);

  return (
    <div className="min-h-svh bg-mw-crema pb-32">
      <header className="sticky top-0 z-20 border-b border-mw-arena bg-mw-crema/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <Logo className="h-9 w-auto" textClassName="text-[15px]" />
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-mw-rotulo uppercase">Cartas</p>
            <p className="truncate text-[13px] text-mw-tinta-suave">{user}</p>
          </div>
          <a href="/gestion/" className="text-[13px] font-medium text-mw-rotulo hover:text-mw-tinta">
            Gift cards
          </a>
          <button
            type="button"
            onClick={() => void signOut()}
            className="text-[13px] font-medium text-mw-rotulo hover:text-mw-tinta"
          >
            Salir
          </button>
        </div>
        <nav aria-label="Cartas" className="mx-auto flex max-w-3xl flex-wrap gap-2 px-4 pb-3">
          {venues.map((v) => (
            <button
              key={v.id}
              type="button"
              aria-pressed={v.id === carta.id}
              onClick={() => void choose(v.id)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-[14px] font-medium transition-colors",
                v.id === carta.id
                  ? "bg-mw-accion text-white"
                  : "border border-mw-arena bg-white text-mw-tinta hover:border-mw-verde",
              )}
            >
              {v.restaurant.name}
            </button>
          ))}
        </nav>
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
              {carta.categories.map((c) => (
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
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <p className="min-w-0 flex-1 text-[14px] leading-relaxed text-mw-tinta-suave">
            Cambiá nombres, precios y descripciones, ocultá lo que no hay o agregá platos, y tocá{" "}
            <strong>Guardar</strong>: la carta lo toma al abrirse, sin publicar de nuevo.
          </p>
          <a href={`/carta/${carta.id}/`} target="_blank" rel="noreferrer" className={buttonQuiet}>
            Ver la carta de {carta.restaurant.name}
          </a>
        </div>

        {sections.length === 0 && (
          <p className="mt-8 text-center text-[15px] text-mw-tinta-suave">No hay platos con ese nombre.</p>
        )}

        {sections.map(({ category, subcategories }) => (
          <section key={category.name} id={encodeURIComponent(category.name)} className="scroll-mt-56 pt-8">
            <h2 className="text-[24px] font-semibold tracking-[-0.01em] text-mw-titulo">{category.name}</h2>
            {subcategories.map(({ sub, seccion, ids }) => (
              <div key={sub.name} className="mt-4 overflow-hidden rounded-2xl border border-mw-arena bg-white">
                <h3 className="border-b border-mw-arena-clara px-4 py-3 text-[11px] font-semibold tracking-[0.2em] text-mw-rotulo uppercase">
                  {sub.name}
                </h3>
                <ul className="divide-y divide-mw-arena-clara">
                  {ids.map((id) => {
                    const row = rows.get(id)!;
                    return (
                      <ProductRow
                        key={id}
                        row={row}
                        draft={drafts[id] ?? draftOf(row)}
                        isNew={id in unsaved}
                        dirty={dirtyIds.includes(id)}
                        invalid={invalidIds.includes(id)}
                        onEdit={(patch) => edit(row, patch)}
                        onRestore={() => restore(row)}
                        onRemove={() => void removeAdded(row)}
                      />
                    );
                  })}
                </ul>
                {!q && (
                  <button
                    type="button"
                    onClick={() => addDish(seccion)}
                    className="w-full border-t border-mw-arena-clara px-4 py-3 text-left text-[14px] font-medium text-mw-rotulo hover:bg-mw-crema-clarito"
                  >
                    + Agregar plato en {sub.name}
                  </button>
                )}
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
                notice?.kind === "error"
                  ? "text-red-700"
                  : notice?.kind === "ok" && dirtyIds.length === 0
                    ? "text-mw-foco"
                    : "text-mw-tinta",
              )}
            >
              {notice && (notice.kind === "error" || dirtyIds.length === 0)
                ? notice.text
                : `${dirtyIds.length} ${dirtyIds.length === 1 ? "cambio sin guardar" : "cambios sin guardar"}`}
            </p>
            {dirtyIds.length > 0 ? (
              <>
                <button type="button" onClick={discard} disabled={saving} className={buttonQuiet}>
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
  row,
  draft,
  isNew,
  dirty,
  invalid,
  onEdit,
  onRestore,
  onRemove,
}: {
  row: Row;
  draft: Draft;
  isNew: boolean;
  dirty: boolean;
  invalid: boolean;
  onEdit: (patch: Partial<Draft>) => void;
  onRestore: () => void;
  onRemove: () => void;
}) {
  const [open, setOpen] = useState(isNew);
  const added = row.seccion !== null;
  const published = added ? null : parsePrice(row.product.price);
  const priceNow = parsePrice(draft.price);
  const name = draft.name.trim();
  const label = name || "el plato nuevo";
  return (
    <li className={cn("px-4 py-3.5", !draft.visible && "bg-mw-crema-clarito")}>
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <p
            className={cn(
              "text-[15px] leading-snug font-semibold text-mw-tinta",
              !draft.visible && "text-mw-tinta-suave line-through",
              !name && "font-normal text-mw-tinta-suave italic",
            )}
          >
            {name || "Plato nuevo, sin nombre"}
          </p>
          <div className="mt-1 flex flex-wrap gap-1.5 text-[11.5px]">
            {added && <span className="rounded-full bg-mw-salvia px-2 py-0.5 text-mw-rotulo">Agregado desde acá</span>}
            {dirty && <span className="rounded-full bg-mw-arena px-2 py-0.5 text-mw-tinta">Sin guardar</span>}
            {!dirty && !added && row.cambio && (
              <span className="rounded-full bg-mw-salvia px-2 py-0.5 text-mw-rotulo">Cambiado desde acá</span>
            )}
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
            aria-label={`Precio de ${label}`}
            aria-invalid={invalid && priceNow === null}
            placeholder="0"
            className={cn(
              "w-[96px] rounded-lg border bg-white px-2 py-1.5 text-right text-[15px] font-semibold tabular-nums outline-none focus:ring-2",
              invalid && priceNow === null
                ? "border-red-600 text-red-700 focus:ring-red-600/20"
                : "border-mw-arena text-mw-tinta focus:border-mw-foco focus:ring-mw-foco/20",
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
          Nombre y descripción
          <ChevronDownIcon className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
        </button>
        {added ? (
          <button type="button" onClick={onRemove} className="text-[13px] text-red-700 underline-offset-2 hover:underline">
            {isNew ? "Descartar" : "Eliminar"}
          </button>
        ) : (
          (row.cambio || dirty) && (
            <button
              type="button"
              onClick={onRestore}
              className="text-[13px] text-mw-tinta-suave underline-offset-2 hover:underline"
            >
              Volver a lo publicado
            </button>
          )
        )}
      </div>

      {open && (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="block">
            <span className="text-[12px] font-medium text-mw-tinta-suave">Nombre</span>
            <input
              type="text"
              value={draft.name}
              onChange={(e) => onEdit({ name: e.target.value })}
              maxLength={120}
              aria-invalid={invalid && !name}
              autoFocus={isNew}
              className={cn(field, "mt-1 text-[14px]", invalid && !name && "border-red-600")}
            />
          </label>
          <label className="block">
            <span className="text-[12px] font-medium text-mw-tinta-suave">Nombre en inglés (vacío: se lee en español)</span>
            <input
              type="text"
              value={draft.nameEn}
              onChange={(e) => onEdit({ nameEn: e.target.value })}
              maxLength={120}
              className={cn(field, "mt-1 text-[14px]")}
            />
          </label>
          <label className="block">
            <span className="text-[12px] font-medium text-mw-tinta-suave">Descripción</span>
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
              Descripción en inglés (vacía: se lee en español)
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
        <h1 className="mt-5 text-center text-[20px] font-semibold text-mw-titulo">Administrar las cartas</h1>
        <p className="mt-1 text-center text-[13px] text-mw-tinta-suave">Con el mismo usuario de la app de Mirador Waikiki.</p>
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
