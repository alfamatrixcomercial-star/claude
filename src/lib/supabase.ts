/**
 * Conexión con el Supabase de la app interna de Mirador Waikiki, donde viven
 * las gift cards (supabase/giftcards.sql).
 *
 * La clave es la «publishable»: pública por diseño, es la misma que lleva
 * cualquier app de Supabase en el navegador. No da permisos por sí sola:
 * lo que protege los datos son las políticas de la base, que sólo dejan
 * leer y escribir gift cards a los administradores logueados.
 *
 * NUNCA va acá la clave secreta (service_role / sb_secret_…): esa saltea
 * las políticas, y un secreto en el repositorio es un secreto público.
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const URL = "https://tkkszstrshamwdpqyuhw.supabase.co";
const CLAVE_PUBLICA = "sb_publishable_iH0dBO6Cx2VzamEU4fw78Q_OWgN7J7R";

let cliente: SupabaseClient | undefined;

export function supabase(): SupabaseClient {
  cliente ??= createClient(URL, CLAVE_PUBLICA, {
    auth: { persistSession: true, autoRefreshToken: true, storageKey: "mw-gestion" },
  });
  return cliente;
}
