"use client";

import { useSyncExternalStore } from "react";
import { DINNER_ATTR, isDinner } from "@/lib/dinner";
import type { DinnerTime } from "@/types/menu";

const readAttr = () => document.documentElement.hasAttribute(DINNER_ATTR);

/**
 * Whether the menu is in its dinner layout. The <head> script sets the
 * attribute on load; this keeps it in step when the page stays open past 20:00.
 */
export function useDinner(dinner: DinnerTime | undefined) {
  return useSyncExternalStore(
    (notify) => {
      if (!dinner) return () => {};
      const refresh = () => {
        document.documentElement.toggleAttribute(DINNER_ATTR, isDinner(new Date().getHours(), dinner));
        notify();
      };
      const timer = window.setInterval(refresh, 60_000);
      document.addEventListener("visibilitychange", refresh);
      return () => {
        window.clearInterval(timer);
        document.removeEventListener("visibilitychange", refresh);
      };
    },
    () => (dinner ? readAttr() : false),
    () => false,
  );
}
