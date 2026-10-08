"use client";

import { asset, cn } from "@/lib/utils";
import { CategoryRing, HamburgerIcon, HeartSolidIcon, StarOutlineIcon } from "@/components/icons";
import { restaurant } from "@/data/menu";
import type { Category } from "@/types/menu";

interface TopBarProps {
  categories: Category[];
  selected: number | null;
  hasFavorites: boolean;
  onSelect: (index: number) => void;
  onOpenMenu: () => void;
  onOpenSuggested: () => void;
  onOpenFavorites: () => void;
}

export function TopBar({
  categories,
  selected,
  hasFavorites,
  onSelect,
  onOpenMenu,
  onOpenSuggested,
  onOpenFavorites,
}: TopBarProps) {
  return (
    <div className="h-[240px]">
      <nav className="fixed top-0 z-[999] flex h-[240px] w-full flex-col items-center justify-center bg-white shadow-[0_2px_4px_-1px_rgba(0,0,0,0.25)]">
        <button
          type="button"
          aria-label="Open Menu"
          onClick={onOpenMenu}
          className="absolute top-5 left-2.5 h-10 w-10 cursor-pointer p-2.5 hover:rounded-full hover:bg-[hsla(0,0%,50.2%,0.089)]"
        >
          <HamburgerIcon className="h-5 w-5 text-brand-primary" />
        </button>

        <div className="fixed top-2.5 left-1/2 flex h-20 w-40 -translate-x-1/2 items-center justify-center">
          <img src={asset(restaurant.logo)} alt="Mirador Waikiki" className="h-full w-auto max-w-full object-contain" />
        </div>

        {hasFavorites && (
          <button
            type="button"
            aria-label="Favoritos"
            onClick={onOpenFavorites}
            className="absolute top-5 right-[50px] z-[2] m-px flex h-10 min-w-10 cursor-pointer items-center justify-center rounded p-px"
          >
            <HeartSolidIcon className="h-10 w-10 p-2.5 text-brand-primary" />
          </button>
        )}

        <button
          type="button"
          aria-label="Sugeridos"
          onClick={onOpenSuggested}
          className="absolute top-5 right-2.5 z-[2] m-px flex h-10 min-w-10 cursor-pointer items-center justify-center rounded p-px"
        >
          <StarOutlineIcon className="h-5 w-[21px] text-brand-primary" />
        </button>

        <div className="relative z-[999] mt-[95px] flex w-full gap-[25px] overflow-x-auto overflow-y-hidden px-2.5 pb-3 text-center min-[640px]:justify-center">
          {categories.map((category, i) => {
            const active = i === selected;
            return (
              <div
                key={category.name}
                role="button"
                tabIndex={0}
                onClick={() => onSelect(i)}
                onKeyDown={(e) => e.key === "Enter" && onSelect(i)}
                className="mx-px inline-block w-[65px] shrink-0 cursor-pointer align-top text-[14px] font-medium text-brand-primary"
              >
                <div className="flex items-center justify-center pb-[3px]">
                  <div
                    className={cn(
                      "absolute flex h-[65px] w-[65px] items-center justify-center text-center",
                      active ? "opacity-100" : "opacity-50",
                    )}
                  >
                    <img src={asset(category.icon)} alt="" className="mx-auto h-10 w-10" />
                  </div>
                  <CategoryRing selected={active} className={cn("relative h-[65px] w-[65px]", !active && "opacity-50")} />
                </div>
                <p className="mt-[9px] mb-3 w-[55px] text-[12px] leading-[18px] font-normal whitespace-pre-line text-brand-primary">
                  {category.name}
                </p>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
