"use client";

import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { CategoryGlyph, HeartIcon, MenuIcon, StarIcon } from "@/components/icons";
import { Onda } from "@/components/ui/Onda";
import { Logo } from "@/components/menu/Logo";
import { pick, type Strings } from "@/lib/i18n";
import type { Category, Lang } from "@/types/menu";

interface HeaderProps {
  t: Strings;
  lang: Lang;
  categories: Category[];
  /** Category indices in strip order, in groups split by a line. */
  groups: number[][];
  selected: number | null;
  favoritesCount: number;
  hasSuggested: boolean;
  onSelect: (index: number | null) => void;
  onOpenMenu: () => void;
  onOpenSuggested: () => void;
  onOpenFavorites: () => void;
}

const iconButton =
  "flex h-11 w-11 items-center justify-center rounded-full text-mw-rotulo transition-colors hover:bg-white/60";

export function Header({
  t,
  lang,
  categories,
  groups,
  selected,
  favoritesCount,
  hasSuggested,
  onSelect,
  onOpenMenu,
  onOpenSuggested,
  onOpenFavorites,
}: HeaderProps) {
  const chip = (i: number) => {
    const category = categories[i];
    const active = i === selected;
    return (
      <button
        key={category.name}
        type="button"
        aria-current={active ? "page" : undefined}
        onClick={() => onSelect(i)}
        className="flex w-[74px] shrink-0 flex-col items-center gap-1.5"
      >
        <span
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl border transition-colors duration-[260ms] ease-mw",
            active
              ? "border-mw-accion bg-mw-accion text-white"
              : "border-mw-arena bg-white text-mw-titulo hover:border-mw-verde",
          )}
        >
          <CategoryGlyph icon={category.icon} className="h-7 w-7" />
        </span>
        <span
          className={cn(
            "text-center text-[11.5px] leading-tight",
            active ? "font-semibold text-mw-rotulo" : "text-mw-tinta-suave",
          )}
        >
          {pick(lang, category.name, category.nameEn)}
        </span>
      </button>
    );
  };

  return (
    <header className="sticky top-0 z-30 bg-mw-crema/85 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-3xl grid-cols-[88px_1fr_88px] items-center px-2">
        <button type="button" aria-label={t.openMenu} onClick={onOpenMenu} className={iconButton}>
          <MenuIcon className="h-6 w-6" />
        </button>
        <button type="button" onClick={() => onSelect(null)} className="justify-self-center" aria-label={t.title}>
          <Logo className="h-11 w-auto" textClassName="text-[18px]" />
        </button>
        <div className="flex justify-end">
          {favoritesCount > 0 && (
            <button type="button" aria-label={t.favorites} onClick={onOpenFavorites} className={cn(iconButton, "relative")}>
              <HeartIcon filled className="h-6 w-6 text-mw-verde" />
              <span className="absolute top-1.5 right-1 min-w-4 rounded-full bg-mw-accion px-1 text-[10px] leading-4 font-semibold text-white">
                {favoritesCount}
              </span>
            </button>
          )}
          {hasSuggested && (
            <button type="button" aria-label={t.suggested} onClick={onOpenSuggested} className={iconButton}>
              <StarIcon className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>

      {selected !== null && (
      <nav aria-label={t.allSections} className="no-scrollbar flex gap-2 overflow-x-auto px-3 pt-1 pb-3 md:justify-center">
        {groups.map((group, g) => (
          <Fragment key={g}>
            {g > 0 && <span aria-hidden="true" className="mx-1 mt-2 h-10 w-px shrink-0 self-start bg-mw-arena-fuerte/70" />}
            {group.map(chip)}
          </Fragment>
        ))}
      </nav>
      )}
      <Onda />
    </header>
  );
}
