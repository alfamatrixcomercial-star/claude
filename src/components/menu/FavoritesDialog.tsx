"use client";

import { Modal } from "@/components/ui/Modal";
import { CloseIcon, TrashIcon } from "@/components/icons";
import { pick, type Strings } from "@/lib/i18n";
import type { Lang, Product } from "@/types/menu";

interface FavoritesDialogProps {
  open: boolean;
  t: Strings;
  lang: Lang;
  products: Product[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

export function FavoritesDialog({ open, t, lang, products, onClose, onRemove }: FavoritesDialogProps) {
  return (
    <Modal open={open} label={t.favorites} onClose={onClose}>
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] font-semibold tracking-[-0.01em] text-mw-titulo">{t.favorites}</h2>
        <button
          type="button"
          aria-label={t.close}
          onClick={onClose}
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-mw-rotulo hover:bg-mw-salvia"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>
      <ul className="mt-3 divide-y divide-mw-arena/60">
        {products.map((product) => (
          <li key={product.id} className="flex items-center gap-3 py-3">
            <div className="min-w-0 flex-1">
              <p className="text-[15px] leading-snug font-semibold text-mw-tinta">{pick(lang, product.name, product.nameEn)}</p>
              <p className="text-[13px] text-mw-rotulo tabular-nums">$ {product.price}</p>
            </div>
            <button
              type="button"
              aria-label={`${t.removeFavorite}: ${pick(lang, product.name, product.nameEn)}`}
              onClick={() => onRemove(product.id)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-mw-rotulo hover:bg-mw-salvia"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
