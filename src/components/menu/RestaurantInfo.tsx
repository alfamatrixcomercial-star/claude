import { asset } from "@/lib/utils";

const cards = [
  { src: "/images/cards/visa.png", alt: "Visa", className: "h-5" },
  { src: "/images/cards/amex.png", alt: "American Express", className: "h-[50px]" },
  { src: "/images/cards/mastercard.png", alt: "Mastercard", className: "h-[30px]" },
  { src: "/images/ui/mercado-pago.png", alt: "Mercado Pago", className: "h-[30px]" },
];

export function RestaurantInfo({ cardsText }: { cardsText: string }) {
  return (
    <div className="w-full">
      <div className="mt-[50px] flex flex-col items-center justify-center">
        {/* the original renders an empty 25px-tall cards icon here */}
        <div className="h-[25px]" />
        <p className="my-[13px] text-[13px] leading-[18.59px] text-brand-primary">{cardsText}</p>
        <div className="flex flex-wrap items-center justify-center">
          {cards.map((card) => (
            <img key={card.alt} src={asset(card.src)} alt={card.alt} className={`m-2.5 ${card.className}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
