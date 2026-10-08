"use client";

import { useCallback, useEffect, useState } from "react";

// State mirrored to localStorage (same keys as the original app). Storage failures are ignored.
export function usePersistentState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from storage after mount
      if (raw !== null) setValue(JSON.parse(raw) as T);
    } catch {
      // keep the initial value
    }
  }, [key]);

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        try {
          window.localStorage.setItem(key, JSON.stringify(resolved));
        } catch {
          // storage unavailable (private mode, quota)
        }
        return resolved;
      });
    },
    [key],
  );

  return [value, update] as const;
}
