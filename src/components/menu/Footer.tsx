import { asset } from "@/lib/utils";
import { restaurant } from "@/data/menu";
import { ArrowLeftIcon } from "@/components/icons";
import { Onda } from "@/components/ui/Onda";
import type { Strings } from "@/lib/i18n";

export function Footer({ t }: { t: Strings }) {
  return (
    <footer className="mt-12 bg-mw-arena-clara">
      <Onda />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-10 text-center">
        <img src={asset(restaurant.logo)} alt={restaurant.name} className="h-14 w-auto" />
        <p className="text-[13px] text-mw-tinta-suave">{restaurant.city}</p>
        <a
          href={restaurant.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-mw-accion px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-mw-accion-hover"
        >
          {t.reserve}
        </a>
        <a
          href={restaurant.website}
          className="flex items-center gap-1.5 text-[13px] font-medium text-mw-rotulo hover:text-mw-tinta"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          {t.backToSite}
        </a>
      </div>
    </footer>
  );
}
