import type { APIRoute } from "astro";
import { iconoPng } from "~/lib/icono";

/** El ícono cuando se agrega el sitio a la pantalla de inicio del iPhone
 *  (ver src/lib/icono.ts). Cuadrado y con más aire: el iPhone le recorta
 *  las esquinas. */
export const GET: APIRoute = async () =>
  new Response(new Uint8Array(await iconoPng(180, { ancho: 80, radio: 0 })), {
    headers: { "Content-Type": "image/png" },
  });
