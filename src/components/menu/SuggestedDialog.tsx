"use client";

import { useRef, useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, StarIcon } from "@/components/icons";
import type { Strings } from "@/lib/i18n";
import type { Product } from "@/types/menu";

interface SuggestedDialogProps {
  open: boolean;
  t: Strings;
  products: Product[];
  onClose: () => void;
}

const SWIPE_THRESHOLD = 50;
const roundButton =
  "flex h-10 w-10 items-center justify-center rounded-full border border-mw-arena text-mw-rotulo transition-colors hover:border-mw-verde hover:bg-mw-crema-clarito";

export function SuggestedDialog({ open, t, products, onClose }: SuggestedDialogProps) {
  const [index, setIndex] = useState(0);
  const dragStart = useRef<number | null>(null);
  const count = products.length;
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);
  const product = products[index];

  return (
    <Modal open={open} label={t.suggested} onClose={onClose}>
      <div className="flex items-center justify-between">
        <h2 className="text-[11px] font-semibold tracking-[0.2em] text-mw-rotulo uppercase">{t.suggested}</h2>
        <button
          type="button"
          aria-label={t.close}
          onClick={onClose}
          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-mw-rotulo hover:bg-mw-crema-clarito"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>

      {product && (
        <div
          key={product.id}
          className="flex min-h-[240px] touch-pan-y flex-col items-center justify-center py-6 text-center select-none animate-in fade-in duration-300"
          onPointerDown={(e) => (dragStart.current = e.clientX)}
          onPointerUp={(e) => {
            if (dragStart.current === null) return;
            const delta = e.clientX - dragStart.current;
            dragStart.current = null;
            if (delta < -SWIPE_THRESHOLD) go(1);
            if (delta > SWIPE_THRESHOLD) go(-1);
          }}
        >
          <StarIcon filled className="h-5 w-5 text-mw-verde" />
          <h3 className="mt-3 font-display text-[26px] leading-tight font-medium text-mw-titulo">{product.name}</h3>
          {product.description && (
            <p className="mt-3 text-[14px] leading-relaxed whitespace-pre-line text-mw-tinta-suave">{product.description}</p>
          )}
          <p className="mt-4 text-[17px] font-semibold text-mw-rotulo tabular-nums">$ {product.price}</p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <button type="button" aria-label={t.previous} onClick={() => go(-1)} className={roundButton}>
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <p className="text-[13px] text-mw-tinta-suave tabular-nums">
          {index + 1} {t.of} {count}
        </p>
        <button type="button" aria-label={t.next} onClick={() => go(1)} className={roundButton}>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </Modal>
  );
}
