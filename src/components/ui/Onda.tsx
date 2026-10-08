import { asset, cn } from "@/lib/utils";

// The wave line from miradorwaikiki.com, used the same way: as the divider
// between bands instead of a straight border. Colored with background-color.
export function Onda({ className }: { className?: string }) {
  const url = `url(${asset("/images/brand/onda.svg")})`;
  return (
    <div
      aria-hidden="true"
      className={cn("h-[7px] w-full bg-mw-arena-fuerte", className)}
      style={{ maskImage: url, WebkitMaskImage: url, maskSize: "100% 100%", WebkitMaskSize: "100% 100%" }}
    />
  );
}
