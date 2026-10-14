import type { Category, Product } from "@/types/menu";

// Supabase of the Mirador Waikiki group (the same project as the internal app
// and the gift cards on miradorwaikiki.com/gestion). The publishable key is
// public by design: the table's policies let anyone read and only admins
// write (supabase/carta-cambios.sql).
export const SUPABASE_URL = "https://tkkszstrshamwdpqyuhw.supabase.co";
export const SUPABASE_KEY = "sb_publishable_iH0dBO6Cx2VzamEU4fw78Q_OWgN7J7R";

/** A change made from the admin page; null fields keep the published value. */
export interface Cambio {
  producto_id: string;
  precio: number | null;
  descripcion: string | null;
  descripcion_en: string | null;
  oculto: boolean;
}

export const CAMBIO_FIELDS = "producto_id,precio,descripcion,descripcion_en,oculto";

export async function readCambios(carta: string, signal?: AbortSignal): Promise<Cambio[]> {
  const url = `${SUPABASE_URL}/rest/v1/carta_cambios?carta=eq.${encodeURIComponent(carta)}&select=${CAMBIO_FIELDS}`;
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

export function applyCambio(product: Product, cambio: Cambio): Product {
  const next = { ...product };
  if (cambio.precio != null) next.price = formatPrice(cambio.precio);
  // A new Spanish text always comes with its English one (maybe empty, and
  // then guests browsing in English read the Spanish).
  if (cambio.descripcion != null) {
    next.description = cambio.descripcion || undefined;
    next.descriptionEn = cambio.descripcion_en || undefined;
  } else if (cambio.descripcion_en != null) {
    next.descriptionEn = cambio.descripcion_en || undefined;
  }
  return next;
}

/** The published menu with the admin's changes on top; hidden dishes left out. */
export function applyCambios(categories: Category[], cambios: Cambio[]): Category[] {
  if (cambios.length === 0) return categories;
  const byId = new Map(cambios.map((c) => [c.producto_id, c]));
  return categories.map((category) => ({
    ...category,
    subcategories: category.subcategories
      .map((sub) => ({
        ...sub,
        products: sub.products.flatMap((p) => {
          const cambio = byId.get(p.id);
          if (!cambio) return [p];
          return cambio.oculto ? [] : [applyCambio(p, cambio)];
        }),
      }))
      .filter((sub) => sub.products.length > 0),
  }));
}
