import { restaurant } from "@/data/menu";
import { CategoryGlyph, StarIcon } from "@/components/icons";
import type { Strings } from "@/lib/i18n";
import type { Category } from "@/types/menu";

interface HomeViewProps {
  t: Strings;
  categories: Category[];
  onSelect: (index: number) => void;
  onOpenSuggested: () => void;
}

const eyebrow = "text-[11px] font-semibold tracking-[0.2em] text-mw-rotulo uppercase";

export function HomeView({ t, categories, onSelect, onOpenSuggested }: HomeViewProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[30px] leading-tight font-semibold tracking-[-0.02em] text-mw-titulo">{t.title}</h1>
        <p className="mt-1 text-[15px] text-mw-tinta-suave">{t.intro}</p>
      </div>

      <button
        type="button"
        onClick={onOpenSuggested}
        className="flex w-full items-center gap-3 rounded-2xl border border-mw-verde/40 bg-mw-salvia p-4 text-left shadow-mw-1 transition-colors hover:border-mw-verde"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-mw-verde">
          <StarIcon filled className="h-5 w-5" />
        </span>
        <span className="font-medium text-mw-tinta">{t.suggested}</span>
      </button>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {categories.map((category, i) => (
          <button
            key={category.name}
            type="button"
            onClick={() => onSelect(i)}
            className="flex flex-col items-start gap-3 rounded-2xl border border-mw-arena bg-white p-4 text-left shadow-mw-1 transition-colors hover:border-mw-verde"
          >
            <CategoryGlyph icon={category.icon} className="h-7 w-7 text-mw-titulo" />
            <span className="text-[15px] leading-snug font-medium text-mw-tinta">{category.name}</span>
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-mw-arena bg-mw-arena-clara p-4">
        <h2 className={eyebrow}>{t.payments}</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {restaurant.paymentMethods.map((method) => (
            <li key={method} className="rounded-full border border-mw-arena bg-white px-3 py-1 text-[13px] text-mw-tinta">
              {method}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
