import { defineCollection, z } from "astro:content";
import type { SchemaContext } from "astro:content";
import { glob } from "astro/loaders";

/* ────────────────────────────────────────────────────────────────────────
   Los esquemas son la red de seguridad que reemplaza al CMS: si falta un
   `alt`, si un horario está mal formado o si una foto no existe, el build
   falla antes de publicar. Editar contenido es editar los .yaml de al lado.
   ──────────────────────────────────────────────────────────────────────── */

const HORA = /^([01]\d|2[0-3]):[0-5]\d$/;

/**
 * Dentro de un bloque de texto de YAML (`>-`), un `#` NO abre un comentario:
 * queda como texto y se publica. Esta validación lo caza en el build.
 */
const publicable = <T extends z.ZodString>(base: T) =>
  base.refine((t) => !/\b(TODO|VERIFICAR|FIXME)\b/.test(t), {
    message:
      "Hay un TODO metido en texto que se publica. Dentro de un bloque >- el # no comenta: sacá la nota a su propia línea.",
  });
const DIA_MES = /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

/**
 * Una foto siempre viaja con su alt. El alt es contenido, no relleno.
 *
 * La resolución mínima NO se valida acá: dentro del esquema, image() todavía
 * no expone el ancho. La revisa scripts/fotos.mjs antes de cada build.
 */
const foto = (image: SchemaContext["image"]) =>
  z.object({
    src: image(),
    alt: z
      .string()
      .min(15, "El alt tiene que describir la foto de verdad, no decir «foto del hotel»."),
    /** Encuadre preferido cuando la foto se recorta. */
    foco: z.enum(["centro", "arriba", "abajo"]).default("centro"),
  });

/** Cuando todavía no hay foto, el sitio muestra un marcador honesto. */
const fotoOpcional = (image: SchemaContext["image"]) => foto(image).nullable().default(null);

const franja = z.object({
  desde: z.string().regex(HORA, "Usá formato HH:MM, por ejemplo 20:00."),
  hasta: z.string().regex(HORA, "Usá formato HH:MM, por ejemplo 00:30."),
});

const horario = z.object({
  /** Días de la semana que cubre esta regla. 0 es domingo. */
  dias: z.array(z.number().int().min(0).max(6)).nonempty(),
  etiqueta: z.string(),
  franjas: z.array(franja).nonempty(),
  nota: z.string().optional(),
});

const cta = z.object({
  texto: z.string().min(4),
  /** Versión corta para la puerta del home, donde la columna es angosta. */
  textoCorto: z.string().max(22).optional(),
  /** `whatsapp` arma el link desde datos/contacto.yaml. Nunca se hardcodea. */
  tipo: z.enum(["whatsapp", "woki", "externo", "interno"]),
  href: z.string().optional(),
  contexto: z.string().optional(),
});

const unidades = defineCollection({
  loader: glob({ base: "./src/content/unidades", pattern: "**/*.yaml" }),
  schema: ({ image }) =>
    z.object({
      orden: z.number().int(),
      nombre: z.string(),
      nombreLargo: z.string(),
      color: z.enum(["verde", "arena", "teal", "terracota"]),
      ornamento: z.enum(["caracol", "vieira", "ammonite", "coral"]),

      titular: publicable(z.string().min(10)),
      bajada: publicable(
        z.string().min(10).max(90, "En la puerta del home no entra más que un renglón."),
      ),
      firma: z.string().optional(),
      intro: z.array(publicable(z.string())).min(1),

      hero: fotoOpcional(image),
      /**
       * Video vertical para el hero, opcional. Se muestra en su proporción,
       * en un panel, no a pantalla completa: el material es de teléfono y
       * a full-bleed habría que ampliarlo y recortarle casi todo el alto.
       */
      heroVideo: z
        .object({
          /** Base sin extensión: el sitio sirve .mp4 y .webm. */
          src: z
            .string()
            .startsWith("/video/")
            .refine((v) => !/\.(mp4|webm)$/.test(v), {
              message: "Poné la base sin extensión, por ejemplo /video/ili-ili-hero",
            }),
          poster: z.string().startsWith("/video/"),
          alt: z
            .string()
            .min(15, "El alt del video también es contenido: contá qué se ve."),
        })
        .optional(),
      galeria: z.array(foto(image)).default([]),

      horarios: z.array(horario).default([]),
      temporada: z
        .object({
          desde: z.string().regex(DIA_MES, "Usá MM-DD, por ejemplo 12-01."),
          hasta: z.string().regex(DIA_MES, "Usá MM-DD, por ejemplo 03-31."),
          abierta: z.string(),
          cerrada: z.string(),
        })
        .optional(),
      estadoFijo: z.string().optional(),

      /* strict(): una coma sin comillas dentro de { } parte el valor y crea
         una clave fantasma. Con strict el build lo denuncia en vez de
         quedarse con medio texto. */
      ficha: z.array(z.object({ clave: z.string(), valor: z.string() }).strict()).default([]),
      ctas: z.array(cta).min(1).max(2),

      /* Bloques propios de cada unidad. */
      /** La carta vive fuera del sitio: acá va el link, no los platos. */
      cartaUrl: z.string().url().optional(),

      /** Video corto del lugar. Va mudo, con poster y sin descargarse solo. */
      video: z
        .object({
          /** Base sin extensión: el sitio sirve .webm y .mp4. */
          src: z.string().startsWith("/video/").refine((v) => !/\.(mp4|webm)$/.test(v), {
            message: "Poné la base sin extensión, por ejemplo /video/waikiki-salon",
          }),
          poster: z.string().startsWith("/video/"),
          titulo: z.string(),
          descripcion: z.string().min(20),
        })
        .optional(),
      listas: z
        .array(z.object({ titulo: z.string(), items: z.array(z.string()).nonempty() }))
        .default([]),
      /* Eventos deriva a Mar Eventos: la producción se vende allá. */
      derivacion: z
        .object({ titulo: z.string(), texto: z.string(), texto_cta: z.string(), url: z.string().url() })
        .optional(),

      seo: z.object({
        titulo: z.string().max(62, "Google corta los títulos largos."),
        descripcion: z.string().min(70).max(165),
      }),
      schema: z.enum(["Restaurant", "LodgingBusiness", "EventVenue", "BeachResort"]),
    }),
});

const canal = z.object({
  whatsapp: z
    .string()
    .regex(/^\d{11,15}$/, "Sólo dígitos, con código de país y sin el +. Ej: 5492235466065."),
  mensaje: z.string().min(15, "El mensaje prellenado tiene que identificar de dónde vino la consulta."),
  telefono: z.string().optional(),
  instagram: z.string().url().optional(),
  email: z.string().email().optional(),
});

const sitio = defineCollection({
  loader: glob({ base: "./src/content/sitio", pattern: "**/*.yaml" }),
  schema: z.object({
    nombre: z.string(),
    desde: z.number().int(),
    lema: z.string(),
    firma: z.string(),
    descripcion: z.string().min(70).max(165),
    direccion: z.object({
      calle: z.string(),
      localidad: z.string(),
      provincia: z.string(),
      codigoPostal: z.string(),
      pais: z.string().default("AR"),
    }),
    coordenadas: z.object({ lat: z.number(), lng: z.number() }),
    comoLlegar: z.array(z.string()).min(1),
    estacionamiento: z.string(),
    /** Un canal por unidad. Ningún componente arma un wa.me a mano. */
    contacto: z.object({
      general: canal,
      restaurante: canal,
      hotel: canal,
      balneario: canal,
      eventos: canal,
    }),
    woki: z.string().url().nullable(),
    /**
     * Prueba social. El patrón que recomienda el plugin para hotelería pide
     * de 3 a 5 testimonios con nombre.
     *
     * Arranca VACÍO a propósito: un testimonio inventado es una reseña falsa.
     * Cargá reseñas reales, con el nombre de quien las escribió y de dónde
     * salieron, y la sección aparece sola en el home.
     */
    testimonios: z
      .array(
        z.object({
          texto: z.string().min(40).max(320, "Un testimonio largo no se lee."),
          nombre: z.string().min(3),
          origen: z.enum(["Google", "Tripadvisor", "Instagram", "Booking", "Facebook"]),
          fecha: z.string().optional(),
        }),
      )
      .default([]),
    redes: z.array(z.object({ nombre: z.string(), url: z.string().url() })).default([]),
  }),
});

const agenda = defineCollection({
  loader: glob({ base: "./src/content/agenda", pattern: "**/*.yaml" }),
  schema: z.object({
    titulo: z.string(),
    detalle: z.string(),
    unidad: z.enum(["restaurante", "hotel", "balneario", "eventos"]),
    desde: z.string().regex(DIA_MES, "Usá MM-DD."),
    hasta: z.string().regex(DIA_MES, "Usá MM-DD."),
    orden: z.number().int().default(0),
  }),
});

const legales = defineCollection({
  loader: glob({ base: "./src/content/legales", pattern: "**/*.md" }),
  schema: z.object({ titulo: z.string(), orden: z.number().int(), actualizado: z.string() }),
});

export const collections = { unidades, sitio, agenda, legales };
