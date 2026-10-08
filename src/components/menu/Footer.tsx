import { asset } from "@/lib/utils";
import { restaurant } from "@/data/menu";

export function Footer() {
  return (
    <div className="row-start-3">
      <footer className="fixed bottom-0 z-[999] w-full p-0">
        <div className="flex h-[70px] items-center justify-center rounded-t-[20px] bg-brand-surface">
          <img src={asset(restaurant.logo)} alt="Mirador Waikiki" className="h-[40px] w-auto object-contain" />
        </div>
      </footer>
    </div>
  );
}
