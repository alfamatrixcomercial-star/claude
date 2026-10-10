"use client";

import { useEffect, useMemo, useState } from "react";
import { venue } from "@venue";
import { strings } from "@/lib/i18n";
import { usePersistentState } from "@/hooks/usePersistentState";
import { useDinner } from "@/hooks/useDinner";
import { Header } from "@/components/menu/Header";
import { HomeView } from "@/components/menu/HomeView";
import { Hero } from "@/components/menu/Hero";
import { CategoryView } from "@/components/menu/CategoryView";
import { SideMenu } from "@/components/menu/SideMenu";
import { SuggestedDialog } from "@/components/menu/SuggestedDialog";
import { FavoritesDialog } from "@/components/menu/FavoritesDialog";
import { Footer } from "@/components/menu/Footer";
import type { Lang, Product } from "@/types/menu";

const { categories, suggestedProductIds } = venue;
const productsById = new Map<string, Product>(
  categories.flatMap((c) => c.subcategories.flatMap((s) => s.products.map((p) => [p.id, p] as const))),
);
const suggestedProducts = suggestedProductIds.flatMap((id) => productsById.get(id) ?? []);

const indices = categories.map((_, i) => i);
const isLate = (i: number) => venue.dinner?.late.includes(categories[i].icon) ?? false;
// The section strip: two groups split by a line. By day the featured sections
// (coffee, pastries) lead; at dinner time the late ones go last instead.
const dayGroups = [indices.filter((i) => categories[i].featured), indices.filter((i) => !categories[i].featured)];
const dinnerGroups = [indices.filter((i) => !isLate(i)), indices.filter(isLate)];

export function MenuApp() {
  const [selected, setSelected] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [suggestedOpen, setSuggestedOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [lang, setLang] = usePersistentState<Lang>("mw-carta-idioma", "es");
  const [favorites, setFavorites] = usePersistentState<string[]>("mw-carta-favoritos", []);
  const t = strings[lang];
  const dinner = useDinner(venue.dinner);
  const groups = (dinner ? dinnerGroups : dayGroups).filter((g) => g.length > 0);

  const favoriteProducts = useMemo(() => favorites.flatMap((id) => productsById.get(id) ?? []), [favorites]);
  const overlayOpen = menuOpen || suggestedOpen || favoritesOpen;

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (!overlayOpen) return;
    const closeAll = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      setSuggestedOpen(false);
      setFavoritesOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeAll);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeAll);
    };
  }, [overlayOpen]);

  const select = (index: number | null) => {
    setSelected(index);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // "Ver la carta": open the first section of the strip so every section icon shows on top.
  const openMenu = () => select(groups[0][0]);

  const toggleFavorite = (id: string) =>
    setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  const removeFavorite = (id: string) => {
    const next = favorites.filter((f) => f !== id);
    setFavorites(next);
    if (next.length === 0) setFavoritesOpen(false);
  };

  const category = selected === null ? null : categories[selected];

  return (
    <>
      <Header
        t={t}
        lang={lang}
        categories={categories}
        groups={groups}
        selected={selected}
        favoritesCount={favorites.length}
        hasSuggested={suggestedProducts.length > 0}
        onSelect={select}
        onOpenMenu={() => setMenuOpen(true)}
        onOpenSuggested={() => setSuggestedOpen(true)}
        onOpenFavorites={() => setFavoritesOpen(true)}
      />

      {!category && <Hero t={t} lang={lang} dinner={dinner} onStart={openMenu} />}

      <main className="mx-auto max-w-3xl px-4 pt-6">
        {category ? (
          <CategoryView
            key={category.name}
            t={t}
            lang={lang}
            category={category}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onBack={() => select(null)}
          />
        ) : (
          <HomeView t={t} />
        )}
      </main>

      <Footer t={t} />

      <SideMenu
        open={menuOpen}
        lang={lang}
        t={t}
        favoritesCount={favorites.length}
        hasSuggested={suggestedProducts.length > 0}
        onClose={() => setMenuOpen(false)}
        onHome={() => select(null)}
        onSeeMenu={openMenu}
        onSuggested={() => {
          setMenuOpen(false);
          setSuggestedOpen(true);
        }}
        onFavorites={() => {
          setMenuOpen(false);
          setFavoritesOpen(true);
        }}
        onLang={setLang}
      />
      <SuggestedDialog open={suggestedOpen} t={t} lang={lang} products={suggestedProducts} onClose={() => setSuggestedOpen(false)} />
      <FavoritesDialog
        open={favoritesOpen}
        t={t}
        lang={lang}
        products={favoriteProducts}
        onClose={() => setFavoritesOpen(false)}
        onRemove={removeFavorite}
      />
    </>
  );
}
