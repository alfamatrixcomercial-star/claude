import type { APIRoute } from "astro";
import { iconoIco } from "~/lib/icono";

/** El ícono para los navegadores que no leen SVG (ver src/lib/icono.ts). */
export const GET: APIRoute = async () =>
  new Response(new Uint8Array(await iconoIco()), { headers: { "Content-Type": "image/x-icon" } });
