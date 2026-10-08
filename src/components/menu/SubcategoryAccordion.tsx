"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExpandMoreIcon } from "@/components/icons";
import { ProductRow } from "@/components/menu/ProductRow";
import type { Subcategory } from "@/types/menu";

interface SubcategoryAccordionProps {
  subcategory: Subcategory;
  defaultOpen: boolean;
  wide: boolean;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export function SubcategoryAccordion({
  subcategory,
  defaultOpen,
  wide,
  favorites,
  onToggleFavorite,
}: SubcategoryAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="relative w-[95vw] bg-white">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex w-full cursor-default items-center px-4 transition-[min-height] duration-150",
          open ? "min-h-[68px]" : "min-h-[52px]",
        )}
      >
        <span className={cn("flex grow", open ? "my-5" : "my-3")}>
          <h2 className="m-0 mt-2.5 text-[15px] leading-[18px] font-normal tracking-[1px] text-brand-heading uppercase">
            {subcategory.name}
          </h2>
        </span>
        <span
          className={cn(
            "-mr-3 flex h-[38px] w-[38px] items-center justify-center rounded-full p-[3px] text-[#9e9e9e] transition-transform duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
            open && "rotate-180",
          )}
        >
          <ExpandMoreIcon className="h-8 w-8" />
        </span>
      </button>

      <div className={cn("accordion-collapse grid", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="overflow-hidden">
          <div className="mx-auto h-px w-[95vw] bg-brand-heading opacity-50" />
          <ul className={cn("m-0 w-[95vw] list-none p-0", wide && "text-center")}>
            {subcategory.products.map((product, i) => (
              <ProductRow
                key={product.id}
                product={product}
                first={i === 0}
                wide={wide}
                favorite={favorites.includes(product.id)}
                onToggleFavorite={() => onToggleFavorite(product.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
