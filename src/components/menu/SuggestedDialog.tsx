"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { restaurant } from "@/data/menu";
import type { Product } from "@/types/menu";

interface SuggestedDialogProps {
  open: boolean;
  products: Product[];
  onClose: () => void;
}

const SWIPE_THRESHOLD = 50;

export function SuggestedDialog({ open, products, onClose }: SuggestedDialogProps) {
  const [index, setIndex] = useState(0);
  const dragStart = useRef<number | null>(null);
  const count = products.length;
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <div
      role="presentation"
      className={cn("dialog-fade fixed inset-0 z-[1300]", open ? "visible opacity-100" : "invisible opacity-0")}
    >
      <div aria-hidden="true" className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div role="dialog" aria-modal="true" className="pointer-events-none relative flex h-full items-center justify-center">
        <div className="pointer-events-auto flex w-4/5 flex-col justify-center rounded-[40px] bg-white text-center min-[500px]:w-[400px]">
          <div className="flex h-[60px] justify-around pt-5 pb-[7px]">
            <button type="button" aria-label="Cerrar" onClick={onClose} className="m-0 h-[30px] cursor-pointer border-none bg-transparent p-0">
              <img src="/images/ui/black-cross.svg" alt="" className="h-3.5 w-3.5" />
            </button>
            <div className="h-[50px] w-[95px]">
              <img src={restaurant.logo} alt="" className="h-full w-full object-contain" />
            </div>
            <img src="/images/ui/sug-icon.svg" alt="" className="h-5 w-5" />
          </div>

          <div
            className="relative w-full touch-pan-y overflow-hidden select-none"
            onPointerDown={(e) => (dragStart.current = e.clientX)}
            onPointerUp={(e) => {
              if (dragStart.current === null) return;
              const delta = e.clientX - dragStart.current;
              dragStart.current = null;
              if (delta < -SWIPE_THRESHOLD) go(1);
              if (delta > SWIPE_THRESHOLD) go(-1);
            }}
          >
            <button
              type="button"
              aria-label="previous slide / item"
              onClick={() => go(-1)}
              className="absolute top-0 bottom-0 left-0 z-[2] w-7 cursor-pointer p-[5px] opacity-40 transition-all duration-[250ms] ease-in hover:opacity-100 before:inline-block before:border-y-8 before:border-r-8 before:border-y-transparent before:border-r-[#2c2b2b] before:content-['']"
            />
            <ul className="carousel-track m-0 flex list-none p-0" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
              {products.map((product) => (
                <li key={product.id} className="w-full shrink-0">
                  <div className="mt-5 mb-[30px] flex min-h-[350px] flex-col items-center justify-center">
                    <h2 className="mx-2.5 mt-2.5 mb-0 flex justify-center text-center text-[16px] leading-[22.9px] font-medium [overflow-wrap:anywhere] text-[#201231]">
                      {product.name}
                    </h2>
                    {product.description && (
                      <p className="mx-10 my-2.5 flex justify-center pt-5 text-center text-[14px] leading-[23px] font-normal tracking-[1px] text-[#808080]">
                        {product.description}
                      </p>
                    )}
                    <p className="mx-2.5 mt-2.5 mb-0 flex justify-center pt-5 text-[15px] leading-[21.45px] font-light text-[#201231]">
                      ${product.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-label="next slide / item"
              onClick={() => go(1)}
              className="absolute top-0 right-0 bottom-0 z-[2] w-7 cursor-pointer p-[5px] opacity-40 transition-all duration-[250ms] ease-in hover:opacity-100 before:inline-block before:border-y-8 before:border-l-8 before:border-y-transparent before:border-l-[#2c2b2b] before:content-['']"
            />
            <ul className="absolute bottom-0 z-[1] mx-0 my-2.5 w-full px-0 text-center">
              {products.map((product, i) => (
                <li
                  key={product.id}
                  role="button"
                  aria-label={`slide item ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "mx-2 inline-block h-2 w-2 cursor-pointer rounded-full bg-[#002e3c] shadow-[1px_1px_2px_rgba(0,0,0,0.9)] transition-opacity duration-[250ms] ease-in",
                    i === index ? "opacity-100" : "opacity-30",
                  )}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
