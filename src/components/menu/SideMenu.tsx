"use client";

import { venue } from "@venue";
import { cn } from "@/lib/utils";
import { CloseIcon, HeartIcon, HomeIcon, MenuIcon, StarIcon } from "@/components/icons";
import { Logo } from "@/components/menu/Logo";
import type { Strings } from "@/lib/i18n";
import type { Lang } from "@/types/menu";

interface SideMenuProps {
  open: boolean;
  lang: Lang;
  t: Strings;
  favoritesCount: number;
  hasSuggested: boolean;
  onClose: () => void;
  onHome: () => void;
  onSeeMenu: () => void;
  onSuggested: () => void;
  onFavorites: () => void;
  onLang: (lang: Lang) => void;
}

const navItem =
  "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[15px] font-medium text-mw-tinta transition-colors hover:bg-white";
const eyebrow = "px-3 text-[11px] font-semibold tracking-[0.2em] text-mw-rotulo uppercase";
const { restaurant } = venue;

export function SideMenu({ open, lang, t, favoritesCount, hasSuggested, onClose, onHome, onSeeMenu, onSuggested, onFavorites, onLang }: SideMenuProps) {
  return (
    <div className={cn("fixed inset-0 z-40 transition-[visibility] duration-[260ms]", open ? "visible" : "invisible")}>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-mw-tinta/40 transition-opacity duration-[260ms] ease-mw",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t.openMenu}
        className={cn(
          "absolute inset-y-0 left-0 flex w-[300px] max-w-[85vw] flex-col overflow-y-auto rounded-r-3xl bg-mw-crema-clarito px-4 pt-4 pb-6 shadow-mw-3 transition-transform duration-[260ms] ease-mw",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <span className="ml-2">
            <Logo className="h-11 w-auto" textClassName="text-[17px]" />
          </span>
          <button
            type="button"
            aria-label={t.close}
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full text-mw-rotulo hover:bg-white"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-6 space-y-1">
          <button type="button" onClick={onHome} className={navItem}>
            <HomeIcon className="h-5 w-5 text-mw-verde" />
            {t.home}
          </button>
          <button type="button" onClick={onSeeMenu} className={navItem}>
            <MenuIcon className="h-5 w-5 text-mw-verde" />
            {t.seeMenu}
          </button>
          {hasSuggested && (
            <button type="button" onClick={onSuggested} className={navItem}>
              <StarIcon className="h-5 w-5 text-mw-verde" />
              {t.suggested}
            </button>
          )}
          {favoritesCount > 0 && (
            <button type="button" onClick={onFavorites} className={navItem}>
              <HeartIcon className="h-5 w-5 text-mw-verde" />
              {t.favorites} ({favoritesCount})
            </button>
          )}
        </nav>

        {restaurant.whatsappUrl && (
          <a
            href={restaurant.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex h-11 items-center justify-center rounded-full bg-mw-accion text-[14px] font-medium text-white transition-colors hover:bg-mw-accion-hover"
          >
            {t.reserve}
          </a>
        )}

        <div className="mt-8 space-y-2">
          <h2 className={eyebrow}>{t.contact}</h2>
          {restaurant.email && (
            <a href={`mailto:${restaurant.email}`} className="block px-3 text-[14px] text-mw-tinta hover:text-mw-rotulo">
              {restaurant.email}
            </a>
          )}
          <a href={restaurant.phoneHref} className="block px-3 text-[14px] text-mw-tinta hover:text-mw-rotulo">
            {restaurant.phone}
          </a>
        </div>

        <div className="mt-8 space-y-2">
          <h2 className={eyebrow}>{t.language}</h2>
          <div className="mx-3 grid grid-cols-2 rounded-full border border-mw-arena bg-white p-1">
            {(["es", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={lang === code}
                onClick={() => onLang(code)}
                className={cn(
                  "h-9 rounded-full text-[13px] font-medium transition-colors",
                  lang === code ? "bg-mw-accion text-white" : "text-mw-tinta hover:bg-white",
                )}
              >
                {code === "es" ? "Español" : "English"}
              </button>
            ))}
          </div>
        </div>

        {restaurant.website && (
          <a href={restaurant.website} className="mt-auto px-3 pt-8 text-[13px] font-medium text-mw-rotulo hover:text-mw-tinta">
            {t.backTo} {new URL(restaurant.website).host}
          </a>
        )}
      </aside>
    </div>
  );
}
