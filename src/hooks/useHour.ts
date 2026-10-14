"use client";

import { useSyncExternalStore } from "react";

/**
 * The guest's local hour, kept current while the page stays open. -1 while
 * the page is pre-rendered, before there is a clock to read.
 */
export function useHour() {
  return useSyncExternalStore(
    (notify) => {
      const timer = window.setInterval(notify, 60_000);
      document.addEventListener("visibilitychange", notify);
      return () => {
        window.clearInterval(timer);
        document.removeEventListener("visibilitychange", notify);
      };
    },
    () => new Date().getHours(),
    () => -1,
  );
}
