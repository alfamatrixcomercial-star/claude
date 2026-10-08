"use client";

import { asset, cn } from "@/lib/utils";
import { restaurant } from "@/data/menu";
import { CrossIcon, FacebookSquareIcon, WhatsappSquareIcon } from "@/components/icons";
import type { Strings } from "@/lib/i18n";
import type { Lang } from "@/types/menu";

interface SideMenuProps {
  open: boolean;
  lang: Lang;
  t: Strings;
  onClose: () => void;
  onHome: () => void;
  onSuggested: () => void;
  onLang: (lang: Lang) => void;
}

function LanguageButton({
  active,
  flag,
  label,
  className,
  onClick,
}: {
  active: boolean;
  flag: string;
  label: string;
  className: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "absolute top-[21px] flex h-[38px] w-[140px] cursor-pointer items-center justify-center gap-[5px] rounded-[50px] border border-[#555] px-3 py-1.5 text-[12px] leading-[1.5] focus:shadow-[0_0_0_0.1rem_rgba(0,123,255,0.5)] min-[641px]:h-[34px] min-[641px]:w-[130px]",
        active ? "z-[1] bg-brand-pill text-white" : "bg-white text-black",
        className,
      )}
    >
      <img src={asset(flag)} alt="" className="h-5 w-[30px]" />
      <span className="my-3 flex items-center justify-center text-[12px] leading-[18px]">{label}</span>
    </button>
  );
}

export function SideMenu({ open, lang, t, onClose, onHome, onSuggested, onLang }: SideMenuProps) {
  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "side-menu-overlay fixed inset-0 z-[1000] bg-black/30",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <div
        role="dialog"
        aria-label="Menú"
        aria-hidden={!open}
        className={cn(
          "side-menu-panel fixed top-0 left-0 z-[1100] h-dvh w-full max-w-[310px] rounded-r-[20px] bg-white text-[15px]",
          open ? "visible translate-x-0" : "invisible -translate-x-full",
        )}
      >
        <button type="button" aria-label="Close Menu" onClick={onClose} className="fixed top-[15px] left-[15px] h-5 w-6 cursor-pointer">
          <CrossIcon className="h-5 w-6 text-brand-primary" />
        </button>

        <nav className="flex h-full flex-col items-center justify-between font-light">
          <div className="mx-auto mt-[45px] flex flex-col items-center">
            <button type="button" onClick={onHome} className="mt-[45px] flex w-[95px] cursor-pointer flex-col text-center">
              <span className="mt-2.5 text-[15px] leading-[17.5px] font-bold text-brand-primary">{t.home}</span>
            </button>
            <button type="button" onClick={onSuggested} className="mt-[45px] flex w-[95px] cursor-pointer flex-col text-center">
              <span className="mt-2.5 text-[15px] leading-[17.5px] font-bold text-brand-primary">{t.suggested}</span>
            </button>
          </div>

          <div className="flex w-full flex-col items-center">
            <img src={asset("/images/ui/thx.svg")} alt="Gracias por visitarnos" className="mb-5 h-[50px]" />
          </div>

          <div className="flex h-[262px] w-full flex-col items-center text-center">
            <div className="my-5 flex flex-col items-center text-[13px] font-medium">
              <p className="m-0 w-[200px] text-[13px] leading-[17.3px] text-brand-primary">{restaurant.email}</p>
              <p className="m-0 w-[200px] text-[13px] leading-[17.3px] text-brand-primary">{restaurant.phone}</p>
            </div>
            <div className="flex justify-center text-brand-primary">
              <a href={asset(restaurant.facebookUrl)} target="_blank" rel="noreferrer" aria-label="Facebook" className="mx-[5px]">
                <FacebookSquareIcon className="h-[25px] w-[22px]" />
              </a>
              <a href={restaurant.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="mx-[5px]">
                <WhatsappSquareIcon className="h-[25px] w-[22px]" />
              </a>
            </div>
            <div className="relative flex h-[160px] w-full items-start justify-center">
              <LanguageButton
                active={lang === "es"}
                flag="/images/ui/flag-es.svg"
                label={t.spanish}
                className="left-7 min-[641px]:left-[35px]"
                onClick={() => onLang("es")}
              />
              <LanguageButton
                active={lang === "en"}
                flag="/images/ui/flag-en.svg"
                label={t.english}
                className="right-7 min-[641px]:right-[35px]"
                onClick={() => onLang("en")}
              />
            </div>
          </div>
        </nav>

        <div className="fixed bottom-0 left-3 flex w-[285px] items-center justify-center rounded-tl-[20px] rounded-br-[20px] bg-brand-surface p-5">
          <img src={asset(restaurant.logo)} alt="Mirador Waikiki" className="mx-auto h-[40px] w-auto object-contain" />
        </div>
      </div>
    </>
  );
}
