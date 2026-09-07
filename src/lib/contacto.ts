import { getEntry } from "astro:content";

export type Unidad = "restaurante" | "hotel" | "balneario" | "eventos";
type Canal = Unidad | "general";

export async function datosSitio() {
  const sitio = await getEntry("sitio", "sitio");
  if (!sitio) throw new Error("Falta src/content/sitio/sitio.yaml");
  return sitio.data;
}

/**
 * Arma el link de WhatsApp con el mensaje ya escrito para que quien atiende
 * sepa de dónde vino la consulta sin preguntar. Ningún componente escribe un
 * wa.me a mano: los números y los textos viven en sitio.yaml.
 */
export async function waLink(canal: Canal, extra?: string) {
  const { contacto } = await datosSitio();
  const { whatsapp, mensaje } = contacto[canal];
  const texto = extra ? `${mensaje} ${extra}` : mensaje;
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(texto)}`;
}

/** Link de Woki si está cargado; si no, no se muestra el botón. */
export async function wokiLink() {
  const { woki } = await datosSitio();
  return woki;
}

export function telefonoLegible(whatsapp: string) {
  // 5492235466065 → 223 546 6065
  const local = whatsapp.replace(/^549?/, "");
  return local.replace(/^(\d{3})(\d{3})(\d{4})$/, "$1 $2 $3");
}
