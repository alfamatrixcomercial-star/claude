/**
 * El sitio sabe en qué mes está. Cada unidad declara sus horarios y su
 * temporada en el YAML, y acá se calcula qué mostrar hoy. Un complejo
 * costero vive de la estacionalidad: ocultarla es la mentira del rubro.
 *
 * Ojo: esto se evalúa en build time (el sitio es estático). Un rebuild
 * diario en Vercel mantiene el estado al día; ver README.
 */

type Franja = { desde: string; hasta: string };
type Horario = { dias: number[]; etiqueta: string; franjas: Franja[]; nota?: string };
type Temporada = { desde: string; hasta: string; abierta: string; cerrada: string };

export type Estado = { texto: string; activo: boolean; detalle?: string };

const ZONA = "America/Argentina/Buenos_Aires";

function ahora() {
  const f = new Intl.DateTimeFormat("es-AR", {
    timeZone: ZONA,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour12: false,
  }).formatToParts(new Date());
  const g = (t: string) => f.find((p) => p.type === t)?.value ?? "";
  const dias = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
  const corto = g("weekday").toLowerCase().slice(0, 3);
  return {
    dia: Math.max(0, dias.indexOf(corto)),
    minutos: Number(g("hour")) * 60 + Number(g("minute")),
    mesDia: `${g("month")}-${g("day")}`,
  };
}

const aMin = (h: string) => Number(h.slice(0, 2)) * 60 + Number(h.slice(3, 5));

/** Rango que puede cruzar el fin de año, como diciembre a marzo. */
function dentroDelRango(hoy: string, desde: string, hasta: string) {
  return desde <= hasta ? hoy >= desde && hoy <= hasta : hoy >= desde || hoy <= hasta;
}

export function estadoDeUnidad(opciones: {
  horarios?: Horario[];
  temporada?: Temporada;
  estadoFijo?: string;
}): Estado {
  const { horarios = [], temporada, estadoFijo } = opciones;
  const hoy = ahora();

  if (temporada) {
    const abierta = dentroDelRango(hoy.mesDia, temporada.desde, temporada.hasta);
    return { texto: abierta ? temporada.abierta : temporada.cerrada, activo: abierta };
  }

  if (horarios.length) {
    const deHoy = horarios.find((h) => h.dias.includes(hoy.dia));
    if (!deHoy) return { texto: "Hoy cerrado", activo: false };

    const abierta = deHoy.franjas.find(
      (f) => hoy.minutos >= aMin(f.desde) && hoy.minutos <= aMin(f.hasta),
    );
    if (abierta) {
      return { texto: `Abierto hasta las ${abierta.hasta}`, activo: true, detalle: deHoy.nota };
    }
    const proxima = deHoy.franjas.find((f) => hoy.minutos < aMin(f.desde));
    if (proxima) {
      return { texto: `Hoy abre a las ${proxima.desde}`, activo: true, detalle: deHoy.nota };
    }
    return { texto: "Hoy ya cerró", activo: false, detalle: deHoy.nota };
  }

  if (estadoFijo) return { texto: estadoFijo, activo: true };
  return { texto: "", activo: true };
}

/** Los anuncios de agenda vigentes hoy, ordenados. */
export function agendaVigente<T extends { desde: string; hasta: string; orden: number }>(items: T[]) {
  const hoy = ahora().mesDia;
  return items
    .filter((a) => dentroDelRango(hoy, a.desde, a.hasta))
    .sort((a, b) => a.orden - b.orden);
}
