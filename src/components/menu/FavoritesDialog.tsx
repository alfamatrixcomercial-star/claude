"use client";

import { Modal } from "@/components/ui/Modal";
import { CloseIcon, TrashIcon } from "@/components/icons";
import type { Strings } from "@/lib/i18n";
import type { Product } from "@/types/menu";

interface FavoritesDialogProps {
  open: boolean;
  t: Strings;
  products: Product[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

export function FavoritesDialog({ open, t, products, onClose, onRemove }: FavoritesDialogProps) {
  return (
    <Modal open={open} label={t.favorites} onClose={onClose}>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-[26px] font-medium text-mw-titulo">{t.favorites}</h2>
        <button
          type="button"
          aria-label={t.close}
          onClick={onClose}
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-mw-rotulo hover:bg-mw-crema-clarito"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>
      <ul className="mt-3 divide-y divide-mw-arena/60">
        {products.map((product) => (
          <li key={product.id} className="flex items-center gap-3 py-3">
            <div className="min-w-0 flex-1">
              <p className="text-[15px] leading-snug font-semibold text-mw-tinta">{product.name}</p>
              <p className="text-[13px] text-mw-rotulo tabular-nums">$ {product.price}</p>
            </div>
            <button
              type="button"
              aria-label={`${t.removeFavorite}: ${product.name}`}
              onClick={() => onRemove(product.id)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-mw-rotulo hover:bg-mw-crema-clarito"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
