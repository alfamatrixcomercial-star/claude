import { asset } from "@/lib/utils";
import { ChevronRightIcon } from "@/components/icons";
import type { Strings } from "@/lib/i18n";

const foto = (w: number) => asset(`/images/fotos/mirador-entrada-${w}.webp`);

// Welcome photo of the Mirador with a short message. On phones the message
// sits on a translucent crema plate over the photo, like the photo blocks on
// miradorwaikiki.com; from 768px the portrait photo moves beside the text.
export function Hero({ t, onStart }: { t: Strings; onStart: () => void }) {
  return (
    <section className="relative md:mx-auto md:grid md:max-w-5xl md:grid-cols-[1fr_1.05fr] md:items-center md:gap-12 md:px-6 md:pt-12 md:pb-4">
      <div className="relative h-[68svh] max-h-[720px] min-h-[420px] overflow-hidden md:order-2 md:h-[560px] md:max-h-none md:min-h-0 md:rounded-3xl md:shadow-mw-3">
        <picture>
          <source
            type="image/webp"
            srcSet={`${foto(640)} 640w, ${foto(1024)} 1024w, ${foto(1600)} 1600w`}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <img
            src={asset("/images/fotos/mirador-entrada-1024.jpg")}
            alt={t.heroAlt}
            className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
            fetchPriority="high"
          />
        </picture>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-mw-tinta/45 via-transparent to-transparent md:hidden"
        />
      </div>

      <div className="absolute inset-x-4 bottom-5 md:static md:order-1">
        <div className="max-w-md rounded-2xl border border-white/40 bg-mw-crema/75 p-5 shadow-mw-3 backdrop-blur-md md:max-w-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-mw-rotulo uppercase">{t.welcome}</p>
          <h1 className="mt-2 text-[28px] leading-[1.15] font-semibold tracking-[-0.02em] text-mw-tinta md:mt-4 md:text-[46px] md:leading-[1.08] md:tracking-[-0.03em] md:text-mw-titulo">
            {t.tagline}
          </h1>
          <button
            type="button"
            onClick={onStart}
            className="cta-dorado mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-full text-[15px] font-semibold tracking-[0.14em] uppercase md:mt-7 md:inline-flex md:w-auto md:px-9"
          >
            {t.seeMenu}
            <ChevronRightIcon className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
