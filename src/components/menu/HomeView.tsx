import { venue } from "@venue";
import type { Strings } from "@/lib/i18n";

const eyebrow = "text-[11px] font-semibold tracking-[0.2em] text-mw-rotulo uppercase";

// What sits below the welcome photo: only the payment methods.
export function HomeView({ t }: { t: Strings }) {
  return (
    <div className="rounded-2xl border border-mw-arena bg-mw-arena-clara p-4">
      <h2 className={eyebrow}>{t.payments}</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {venue.restaurant.paymentMethods.map((method) => (
          <li key={method} className="rounded-full border border-mw-arena bg-white px-3 py-1 text-[13px] text-mw-tinta">
            {method}
          </li>
        ))}
      </ul>
    </div>
  );
}
