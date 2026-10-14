import type { Category, Product } from "@/types/menu";

// Supabase of the Mirador Waikiki group (the same project as the internal app
// and the gift cards on miradorwaikiki.com/gestion). The publishable key is
// public by design: the table's policies let anyone read and only admins
// write (supabase/carta-cambios.sql).
export const SUPABASE_URL = "https://tkkszstrshamwdpqyuhw.supabase.co";
export const SUPABASE_KEY = "sb_publishable_iH0dBO6Cx2VzamEU4fw78Q_OWgN7J7R";

/**
 * A change made from the admin page. For a published dish, null fields keep
 * the published value. A dish added from the admin has a `seccion` and every
 * field of its own.
 */
export interface Cambio {
  producto_id: string;
  nombre: string | null;
  nombre_en: string | null;
  precio: number | null;
  descripcion: string | null;
  descripcion_en: string | null;
  oculto: boolean;
  /** Only for added dishes: where they go, as `seccionKey()` writes it. */
  seccion: string | null;
  creado_en?: string;
}

export const CAMBIO_FIELDS =
  "producto_id,nombre,nombre_en,precio,descripcion,descripcion_en,oculto,seccion,creado_en";

export async function readCambios(carta: string, signal?: AbortSignal): Promise<Cambio[]> {
  const url = `${SUPABASE_URL}/rest/v1/carta_cambios?carta=eq.${encodeURIComponent(carta)}&select=${CAMBIO_FIELDS}&order=creado_en`;
  const res = await fetch(url, { headers: { apikey: SUPABASE_KEY }, cache: "no-store", signal });
  if (!res.ok) throw new Error(`carta_cambios: HTTP ${res.status}`);
  return (await res.json()) as Cambio[];
}

/** 21500 → "21.500", as prices are printed on the menu. */
export function formatPrice(pesos: number) {
  return String(pesos).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/** "21.500" → 21500; null when it is not a whole number of pesos. */
export function parsePrice(text: string) {
  const digits = text.replace(/[\s.$]/g, "");
  return /^\d{1,8}$/.test(digits) && Number(digits) > 0 ? Number(digits) : null;
}

const slug = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Where an added dish goes: "platos/pescados". */
export const seccionKey = (category: string, subcategory: string) => `${slug(category)}/${slug(subcategory)}`;

export function applyCambio(product: Product, cambio: Cambio): Product {
  const next = { ...product };
  // A new Spanish text always comes with its English one (maybe empty, and
  // then guests browsing in English read the Spanish).
  if (cambio.nombre != null) {
    next.name = cambio.nombre;
    next.nameEn = cambio.nombre_en || undefined;
  } else if (cambio.nombre_en != null) {
    next.nameEn = cambio.nombre_en || undefined;
  }
  if (cambio.precio != null) next.price = formatPrice(cambio.precio);
  if (cambio.descripcion != null) {
    next.description = cambio.descripcion || undefined;
    next.descriptionEn = cambio.descripcion_en || undefined;
  } else if (cambio.descripcion_en != null) {
    next.descriptionEn = cambio.descripcion_en || undefined;
  }
  return next;
}

/** A dish added from the admin page, as the menu shows it. */
export function addedProduct(cambio: Cambio): Product {
  return applyCambio({ id: cambio.producto_id, name: "", price: "" }, cambio);
}

/**
 * The published menu with the admin's changes on top: edited dishes, hidden
 * ones left out, and added ones at the end of their section, oldest first.
 */
export function applyCambios(categories: Category[], cambios: Cambio[]): Category[] {
  if (cambios.length === 0) return categories;
  const byId = new Map(cambios.map((c) => [c.producto_id, c]));
  const added = cambios.filter((c) => c.seccion && c.nombre && c.precio != null && !c.oculto);
  return categories.map((category) => ({
    ...category,
    subcategories: category.subcategories
      .map((sub) => {
        const key = seccionKey(category.name, sub.name);
        return {
          ...sub,
          products: [
            ...sub.products.flatMap((p) => {
              const cambio = byId.get(p.id);
              if (!cambio) return [p];
              return cambio.oculto ? [] : [applyCambio(p, cambio)];
            }),
            ...added.filter((c) => c.seccion === key).map(addedProduct),
          ],
        };
      })
      .filter((sub) => sub.products.length > 0),
  }));
}
