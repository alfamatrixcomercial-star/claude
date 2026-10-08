"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { asset, cn } from "@/lib/utils";
import { strings } from "@/lib/i18n";
import { restaurant } from "@/data/menu";
import { usePersistentState } from "@/hooks/usePersistentState";
import { CrossIcon } from "@/components/icons";
import type { Lang } from "@/types/menu";

const SWIPE_THRESHOLD = 50;

export function Onboarding() {
  const router = useRouter();
  const [lang] = usePersistentState<Lang>("subsidiaryLanguage", "es");
  const t = strings[lang];
  const [index, setIndex] = useState(0);
  const dragStart = useRef<number | null>(null);

  const slides = [
    { title: t.welcome },
    { title: t.chose, description: t.find, image: "/images/ui/slider-elegi.svg", background: "/images/ui/onboarding-bg-1.jpg" },
    { title: t.suggested, description: t.info, image: "/images/ui/slider-sugeridos.svg", background: "/images/ui/onboarding-bg-2.jpg" },
  ];

  const onPointerUp = (x: number) => {
    if (dragStart.current === null) return;
    const delta = x - dragStart.current;
    dragStart.current = null;
    if (delta < -SWIPE_THRESHOLD) setIndex((i) => Math.min(i + 1, slides.length - 1));
    if (delta > SWIPE_THRESHOLD) setIndex((i) => Math.max(i - 1, 0));
  };

  return (
    <section className="relative h-dvh w-full overflow-hidden">
      <button
        type="button"
        onClick={() => router.push("/menu")}
        className="absolute top-5 right-5 z-[2] flex w-full cursor-pointer flex-row justify-end"
      >
        <span className="mt-1 mr-1.5 text-[12px] leading-[10px] text-brand-primary capitalize">{t.skip}</span>
        <CrossIcon className="h-5 w-5 text-brand-primary" />
      </button>

      <div
        className="h-full touch-pan-y select-none"
        onPointerDown={(e) => (dragStart.current = e.clientX)}
        onPointerUp={(e) => onPointerUp(e.clientX)}
        onPointerCancel={() => (dragStart.current = null)}
      >
        <ul
          className="carousel-track m-0 flex h-full list-none p-0"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {slides.map((slide, i) => (
            <li key={i} className="flex h-dvh w-full shrink-0 flex-col justify-center">
              {i === 0 ? (
                <div className="flex h-[80dvh] flex-col items-center justify-center">
                  <img src={asset(restaurant.logo)} alt="" className="mt-[50px] w-[150px]" draggable={false} />
                  <div className="h-[180px] w-full" />
                  <div>
                    <p className="my-4 text-center text-[16px] leading-[18.4px] tracking-[3px] text-brand-title">
                      {slide.title}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex h-[80dvh] flex-col items-center justify-around">
                  <img src={asset(restaurant.logo)} alt="" className="mt-5 w-[130px]" draggable={false} />
                  <div
                    className="flex h-[230px] w-full justify-center bg-cover bg-bottom bg-no-repeat"
                    style={{ backgroundImage: `url(${asset(slide.background ?? "")})` }}
                  >
                    <img src={asset(slide.image ?? "")} alt="" className="h-[230px] max-w-[230px]" draggable={false} />
                  </div>
                  <div className="w-full text-center">
                    <p className="my-4 text-[16px] leading-[18.4px] tracking-[3px] text-brand-title">{slide.title}</p>
                    <p className="mt-3.5 mb-[50px] px-[5px] text-[14px] leading-[16.1px] text-brand-muted">
                      {slide.description}
                    </p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <ul className="absolute bottom-0 my-2.5 w-full p-0 text-center">
        {slides.map((_, i) => (
          <li
            key={i}
            role="button"
            aria-label={`slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "mx-2 inline-block h-2 w-2 cursor-pointer rounded-full bg-brand-primary shadow-[1px_1px_2px_rgba(0,0,0,0.9)] transition-opacity duration-[250ms] ease-in",
              i === index ? "opacity-100" : "opacity-30",
            )}
          />
        ))}
      </ul>
    </section>
  );
}
