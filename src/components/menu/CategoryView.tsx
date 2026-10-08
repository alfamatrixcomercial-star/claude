"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ChevronDownIcon, HeartIcon, StarIcon } from "@/components/icons";
import type { Strings } from "@/lib/i18n";
import type { Category, Product, Subcategory } from "@/types/menu";

interface CategoryViewProps {
  t: Strings;
  category: Category;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onBack: () => void;
}

export function CategoryView({ t, category, favorites, onToggleFavorite, onBack }: CategoryViewProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="-ml-1 flex items-center gap-1.5 rounded-full px-1 py-1 text-[13px] font-medium text-mw-rotulo hover:text-mw-tinta"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        {t.allSections}
      </button>
      <h1 className="mt-2 text-[30px] leading-tight font-semibold tracking-[-0.02em] text-mw-titulo">{category.name}</h1>

      <div className="mt-5 space-y-3">
        {category.subcategories.map((subcategory, i) => (
          <SubcategoryCard
            key={subcategory.name}
            t={t}
            subcategory={subcategory}
            defaultOpen={i === 0}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

function SubcategoryCard({
  t,
  subcategory,
  defaultOpen,
  favorites,
  onToggleFavorite,
}: {
  t: Strings;
  subcategory: Subcategory;
  defaultOpen: boolean;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="overflow-hidden rounded-2xl border border-mw-arena bg-white shadow-mw-1">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
      >
        <h2 className="text-[12.5px] font-semibold tracking-[0.16em] text-mw-rotulo uppercase">
          {subcategory.name}
          <span className="ml-2 font-normal tracking-normal text-mw-tinta-suave">{subcategory.products.length}</span>
        </h2>
        <ChevronDownIcon
          className={cn("h-5 w-5 shrink-0 text-mw-verde transition-transform duration-[260ms] ease-mw", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-[260ms] ease-mw",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <ul className="divide-y divide-mw-arena/60 border-t border-mw-arena/60 px-4">
            {subcategory.products.map((product) => (
              <ProductItem
                key={product.id}
                t={t}
                product={product}
                favorite={favorites.includes(product.id)}
                onToggleFavorite={() => onToggleFavorite(product.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProductItem({
  t,
  product,
  favorite,
  onToggleFavorite,
}: {
  t: Strings;
  product: Product;
  favorite: boolean;
  onToggleFavorite: () => void;
}) {
  const description = product.description?.replace(/\n{3,}/g, "\n\n");

  return (
    <li className="py-4">
      <div className="flex items-start gap-3">
        <h3 className="flex-1 pt-1.5 text-[15px] leading-snug font-semibold text-mw-tinta">{product.name}</h3>
        <p className="pt-1.5 text-[15px] leading-snug font-semibold whitespace-nowrap text-mw-rotulo tabular-nums">
          $ {product.price}
        </p>
        <button
          type="button"
          aria-pressed={favorite}
          aria-label={favorite ? t.removeFavorite : t.addFavorite}
          onClick={onToggleFavorite}
          className="-mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-mw-verde transition-colors hover:bg-mw-salvia"
        >
          <HeartIcon filled={favorite} className="h-5 w-5" />
        </button>
      </div>

      {(product.suggested || product.glutenFree) && (
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {product.suggested && (
            <span className="inline-flex items-center gap-1 rounded-full bg-mw-salvia px-2 py-0.5 text-[11.5px] font-medium text-mw-rotulo">
              <StarIcon filled className="h-3 w-3 text-mw-verde" />
              {t.suggestedBadge}
            </span>
          )}
          {product.glutenFree && (
            <span className="rounded-full border border-mw-arena px-2 py-0.5 text-[11.5px] font-medium text-mw-rotulo">
              {t.glutenFree}
            </span>
          )}
        </div>
      )}
      {description && (
        <p className="mt-1.5 pr-8 text-[14px] leading-relaxed whitespace-pre-line text-mw-tinta-suave">{description}</p>
      )}
    </li>
  );
}
