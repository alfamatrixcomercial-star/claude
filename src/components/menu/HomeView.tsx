import { restaurant } from "@/data/menu";
import { CategoryGlyph, StarIcon } from "@/components/icons";
import { Onda } from "@/components/ui/Onda";
import { pick, type Strings } from "@/lib/i18n";
import type { Category, Lang } from "@/types/menu";

interface HomeViewProps {
  t: Strings;
  lang: Lang;
  categories: Category[];
  onSelect: (index: number) => void;
  onOpenSuggested: () => void;
}

const eyebrow = "text-[11px] font-semibold tracking-[0.2em] text-mw-rotulo uppercase";

function SectionCard({ category, lang, onClick }: { category: Category; lang: Lang; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-start gap-3 rounded-2xl border border-mw-arena bg-white p-4 text-left shadow-mw-1 transition-colors hover:border-mw-verde"
    >
      <CategoryGlyph icon={category.icon} className="h-7 w-7 text-mw-titulo" />
      <span className="text-[15px] leading-snug font-medium text-mw-tinta">{pick(lang, category.name, category.nameEn)}</span>
    </button>
  );
}

export function HomeView({ t, lang, categories, onSelect, onOpenSuggested }: HomeViewProps) {
  const indexed = categories.map((category, index) => ({ category, index }));
  const featured = indexed.filter(({ category }) => category.featured);
  const rest = indexed.filter(({ category }) => !category.featured);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[30px] leading-tight font-semibold tracking-[-0.02em] text-mw-titulo">{t.title}</h2>
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

      <div className="grid grid-cols-2 gap-3">
        {featured.map(({ category, index }) => (
          <SectionCard key={category.name} category={category} lang={lang} onClick={() => onSelect(index)} />
        ))}
      </div>
      <Onda className="mx-auto h-[6px] w-24" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {rest.map(({ category, index }) => (
          <SectionCard key={category.name} category={category} lang={lang} onClick={() => onSelect(index)} />
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
