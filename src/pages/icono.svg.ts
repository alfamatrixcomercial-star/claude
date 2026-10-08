import type { APIRoute } from "astro";
import { iconoSvg } from "~/lib/icono";

/** El ícono de la pestaña (ver src/lib/icono.ts). */
export const GET: APIRoute = () =>
  new Response(iconoSvg(), { headers: { "Content-Type": "image/svg+xml" } });
