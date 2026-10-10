import { venue } from "@venue";
import { asset, cn } from "@/lib/utils";

// The venue's logo, or its name set in type until there is one.
export function Logo({ className, textClassName }: { className: string; textClassName: string }) {
  const { logo, name } = venue.restaurant;
  if (logo) return <img src={asset(logo)} alt={name} className={className} />;
  return (
    <span className={cn("block leading-none font-bold tracking-[0.08em] whitespace-nowrap text-mw-tinta uppercase", textClassName)}>
      {name}
    </span>
  );
}
