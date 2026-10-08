"use client";

import { asset, cn } from "@/lib/utils";
import { StarFilledIcon } from "@/components/icons";
import type { Product } from "@/types/menu";

interface ProductRowProps {
  product: Product;
  first: boolean;
  wide: boolean;
  favorite: boolean;
  onToggleFavorite: () => void;
}

function HeartButton({ favorite, onClick }: { favorite: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
      aria-pressed={favorite}
      onClick={onClick}
      className="flex cursor-pointer items-center justify-center p-0 text-black"
    >
      <img src={asset(favorite ? "/images/ui/heart-filled.svg" : "/images/ui/heart.svg")} alt="" className="h-3 w-3.5" />
    </button>
  );
}

function Badges({ product }: { product: Product }) {
  return (
    <>
      {product.suggested && <StarFilledIcon aria-label="Sugerido" className="mr-2.5 h-3 w-3 text-brand-accent" />}
      {product.glutenFree && (
        <img src={asset("/images/ui/gluten-free.png")} alt="Sin TACC" className="mx-[5px] mt-2.5 h-5" />
      )}
    </>
  );
}

function Details({ product }: { product: Product }) {
  return (
    <>
      {product.description && (
        <p className="my-[13px] pr-[15px] text-[13px] leading-[19.5px] font-medium [overflow-wrap:anywhere] whitespace-pre-line text-brand-muted">
          {product.description}
        </p>
      )}
      <p className="my-[13px] pr-[15px] text-[15px] leading-[21.45px] font-medium tracking-[1px] text-brand-muted">
        ${product.price}
      </p>
    </>
  );
}

const titleClass =
  "m-0 inline-block pt-1 pr-2.5 text-[15px] leading-[17.5px] font-semibold [overflow-wrap:anywhere] text-brand-product";

export function ProductRow({ product, first, wide, favorite, onToggleFavorite }: ProductRowProps) {
  const toggle = onToggleFavorite;

  return (
    <li className={cn("flex", first ? "px-[5px] pt-5 pb-[15px]" : "px-2.5 pb-[15px]")}>
      <div className="flex w-full flex-wrap">
        {wide ? (
          <div className="flex w-full items-center justify-center gap-5">
            <div className="min-w-[300px]">
              <div className="flex items-center justify-center">
                <h3 className={titleClass}>{product.name}</h3>
                <Badges product={product} />
                {!product.image && <HeartButton favorite={favorite} onClick={toggle} />}
              </div>
              <Details product={product} />
            </div>
            <div className="relative rounded-lg">
              {product.image && (
                <>
                  <img src={asset(product.image)} alt="product image" className="h-[120px] w-[144px] rounded-lg object-cover" />
                  <div className="absolute top-1 right-1 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-lg bg-white">
                    <HeartButton favorite={favorite} onClick={toggle} />
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="w-2/3 min-w-[200px] pl-[7px] text-left">
              <div className="flex flex-wrap items-center">
                <h3 className={titleClass}>{product.name}</h3>
                <Badges product={product} />
              </div>
              <Details product={product} />
            </div>
            <div className="relative w-1/3 rounded-lg">
              {product.image && (
                <img src={asset(product.image)} alt="product image" className="h-[112px] w-[120px] rounded-lg object-cover" />
              )}
              <div className="absolute top-1 right-2 flex h-5 w-5 items-center justify-center rounded-md bg-white">
                <HeartButton favorite={favorite} onClick={toggle} />
              </div>
            </div>
          </>
        )}
        <div className="flex w-full items-center justify-center py-[15px]">
          <img src={asset("/images/ui/divisor.svg")} alt="" className="h-0.5 w-[257px]" />
        </div>
      </div>
    </li>
  );
}
