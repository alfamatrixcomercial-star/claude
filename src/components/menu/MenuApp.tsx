"use client";

import { useMemo, useState } from "react";
import { categories, suggestedProductIds } from "@/data/menu";
import { strings } from "@/lib/i18n";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePersistentState } from "@/hooks/usePersistentState";
import { TopBar } from "@/components/menu/TopBar";
import { RestaurantInfo } from "@/components/menu/RestaurantInfo";
import { SubcategoryAccordion } from "@/components/menu/SubcategoryAccordion";
import { SideMenu } from "@/components/menu/SideMenu";
import { SuggestedDialog } from "@/components/menu/SuggestedDialog";
import { FavoritesDialog } from "@/components/menu/FavoritesDialog";
import { Footer } from "@/components/menu/Footer";
import type { Lang, Product } from "@/types/menu";

const productsById = new Map<string, Product>(
  categories.flatMap((c) => c.subcategories.flatMap((s) => s.products.map((p) => [p.id, p] as const))),
);
const suggestedProducts = suggestedProductIds.flatMap((id) => productsById.get(id) ?? []);

export function MenuApp() {
  const [selected, setSelected] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [suggestedOpen, setSuggestedOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [lang, setLang] = usePersistentState<Lang>("subsidiaryLanguage", "es");
  const [favorites, setFavorites] = usePersistentState<string[]>("favorites miradorwaikiki", []);
  const wide = useMediaQuery("(min-width: 640px)");
  const t = strings[lang];

  const favoriteProducts = useMemo(
    () => favorites.flatMap((id) => productsById.get(id) ?? []),
    [favorites],
  );

  const toggleFavorite = (id: string) =>
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  const removeFavorite = (id: string) => {
    const next = favorites.filter((f) => f !== id);
    setFavorites(next);
    if (next.length === 0) setFavoritesOpen(false);
  };

  const selectCategory = (index: number) => {
    setSelected(index);
    window.scrollTo(0, 0);
  };

  const category = selected === null ? null : categories[selected];

  return (
    <div className="relative grid min-h-dvh w-full grid-rows-[auto_auto_70px] text-[13px] leading-[18.59px] text-brand-muted">
      <TopBar
        categories={categories}
        selected={selected}
        hasFavorites={favorites.length > 0}
        onSelect={selectCategory}
        onOpenMenu={() => setMenuOpen(true)}
        onOpenSuggested={() => setSuggestedOpen(true)}
        onOpenFavorites={() => setFavoritesOpen(true)}
      />

      {category ? (
        <div key={category.name} className="flex w-full flex-col items-center justify-start min-[640px]:text-center">
          {category.subcategories.map((subcategory) => (
            <SubcategoryAccordion
              key={subcategory.name}
              subcategory={subcategory}
              defaultOpen={category.subcategories.length === 1}
              wide={wide}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <RestaurantInfo cardsText={t.cards} />
      )}

      <Footer />

      <SideMenu
        open={menuOpen}
        lang={lang}
        t={t}
        onClose={() => setMenuOpen(false)}
        onHome={() => {
          setSelected(null);
          setMenuOpen(false);
        }}
        onSuggested={() => {
          setMenuOpen(false);
          setSuggestedOpen(true);
        }}
        onLang={setLang}
      />
      <SuggestedDialog open={suggestedOpen} products={suggestedProducts} onClose={() => setSuggestedOpen(false)} />
      <FavoritesDialog
        open={favoritesOpen}
        products={favoriteProducts}
        onClose={() => setFavoritesOpen(false)}
        onRemove={removeFavorite}
      />
    </div>
  );
}
