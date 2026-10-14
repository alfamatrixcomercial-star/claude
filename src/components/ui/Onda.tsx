import { asset, cn } from "@/lib/utils";

// The wave line from miradorwaikiki.com, used the same way: as the divider
// between bands instead of a straight border. Colored with background-color.
export function Onda({ className }: { className?: string }) {
  const url = `url(${asset("/images/onda.svg")})`;
  return (
    <div
      aria-hidden="true"
      className={cn("h-[7px] w-full bg-mw-arena-fuerte", className)}
      style={{ maskImage: url, WebkitMaskImage: url, maskSize: "100% 100%", WebkitMaskSize: "100% 100%" }}
    />
  );
}

// The background of a band that ends (borde "abajo") or starts (borde "arriba")
// with an <Onda />: cut along the line, so what comes next — the photo, the
// page — shows right up to it instead of a strip of the band's color. Sits
// behind the band's content; the band needs a stacking context.
export function FondoOndulado({ borde, className }: { borde: "abajo" | "arriba"; className?: string }) {
  // onda-arriba.svg is everything above the line's lower edge; onda-abajo.svg
  // everything below its upper edge. The plain part overlaps the cut 1px so no seam shows.
  const url = `linear-gradient(#000, #000), url(${asset(`/images/onda-${borde === "abajo" ? "arriba" : "abajo"}.svg`)})`;
  const size = "100% calc(100% - 6px), 100% 7px";
  const position = borde === "abajo" ? "top, bottom" : "bottom, top";
  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 -z-10", className)}
      style={{
        maskImage: url,
        WebkitMaskImage: url,
        maskSize: size,
        WebkitMaskSize: size,
        maskPosition: position,
        WebkitMaskPosition: position,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}
