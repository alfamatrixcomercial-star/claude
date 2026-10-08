"use client";

import { cn } from "@/lib/utils";
import { CloseIcon, DeleteForeverIcon, HeartSolidIcon } from "@/components/icons";
import type { Product } from "@/types/menu";

interface FavoritesDialogProps {
  open: boolean;
  products: Product[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

export function FavoritesDialog({ open, products, onClose, onRemove }: FavoritesDialogProps) {
  return (
    <div
      role="presentation"
      className={cn("dialog-fade fixed inset-0 z-[1300]", open ? "visible opacity-100" : "invisible opacity-0")}
    >
      <div aria-hidden="true" className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="pointer-events-none relative flex h-full items-center justify-center">
        <div
          role="dialog"
          aria-modal="true"
          className="pointer-events-auto m-8 max-w-[600px] min-w-[200px] rounded-[10px] bg-white text-black shadow-[0_11px_15px_-7px_rgba(0,0,0,0.2),0_24px_38px_3px_rgba(0,0,0,0.14),0_9px_46px_8px_rgba(0,0,0,0.12)]"
        >
          <div className="flex w-full items-center justify-between">
            <span className="p-[3px]">
              <HeartSolidIcon className="h-5 w-5 text-black" />
            </span>
            <button type="button" aria-label="Cerrar" onClick={onClose} className="cursor-pointer p-[3px] text-brand-primary">
              <CloseIcon className="h-8 w-8" />
            </button>
          </div>
          <div className="px-6 py-2">
            <ul className="list-none p-0">
              {products.map((product) => (
                <li key={product.id}>
                  <h3 className="my-[1em] flex items-center justify-between gap-1 text-[1.17em] font-bold">
                    {product.name}
                    <button
                      type="button"
                      aria-label={`Quitar ${product.name}`}
                      onClick={() => onRemove(product.id)}
                      className="cursor-pointer p-[3px] text-brand-primary"
                    >
                      <DeleteForeverIcon className="h-8 w-8" />
                    </button>
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
