/**
 * El sitio sabe en qué mes está. Cada unidad declara sus horarios y su
 * temporada en el YAML, y acá se calcula qué mostrar hoy. Un complejo
 * costero vive de la estacionalidad: ocultarla es la mentira del rubro.
 *
 * Se calcula dos veces: al publicar, para que el HTML ya traiga un texto
 * (y quien no tenga JavaScript vea algo), y otra vez en el navegador de
 * cada visitante con la hora de Argentina (Estado.astro). Sin lo segundo
 * el cartel quedaba congelado en la hora de la última publicación: se
 * publicaba de noche y a la mañana seguía diciendo «Hoy ya cerró».
 */

type Franja = { desde: string; hasta: string };
type Horario = { dias: number[]; etiqueta: string; franjas: Franja[]; nota?: string };
type Temporada = { desde: string; hasta: string; abierta: string; cerrada: string };

export type FuenteEstado = { horarios?: Horario[]; temporada?: Temporada; estadoFijo?: string };
/** `fuente` son los datos con que se calculó, para recalcular en el navegador. */
export type Estado = { texto: string; activo: boolean; detalle?: string; fuente?: FuenteEstado };

const ZONA = "America/Argentina/Buenos_Aires";

function ahora() {
  /* El día de la semana en inglés: las abreviaturas en castellano cambian
     entre versiones de navegador («vie», «vie.»), las inglesas no. */
  const f = new Intl.DateTimeFormat("en-US", {
    timeZone: ZONA,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const g = (t: string) => f.find((p) => p.type === t)?.value ?? "";
  const dias = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return {
    dia: Math.max(0, dias.indexOf(g("weekday"))),
    minutos: (Number(g("hour")) % 24) * 60 + Number(g("minute")),
    mesDia: `${g("month")}-${g("day")}`,
  };
}

const aMin = (h: string) => Number(h.slice(0, 2)) * 60 + Number(h.slice(3, 5));

/** Rango que puede cruzar el fin de año, como diciembre a marzo. */
function dentroDelRango(hoy: string, desde: string, hasta: string) {
  return desde <= hasta ? hoy >= desde && hoy <= hasta : hoy >= desde || hoy <= hasta;
}

export function estadoDeUnidad(opciones: FuenteEstado): Estado {
  return { ...calcular(opciones), fuente: opciones };
}

function calcular(opciones: FuenteEstado): Estado {
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
      const hasta = abierta.hasta === "23:59" ? "la medianoche" : `las ${abierta.hasta}`;
      return { texto: `Abierto hasta ${hasta}`, activo: true, detalle: deHoy.nota };
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
