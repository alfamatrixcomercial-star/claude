"use client";

import { useEffect, useMemo, useState } from "react";
import { applyCambios, readCambios, type Cambio } from "@/lib/cambios";
import type { Venue } from "@/types/menu";

/**
 * The venue's categories with the changes made from the admin page. The page
 * renders the published menu first; the last changes seen on this phone are
 * applied right away and the current ones as soon as they arrive. Without a
 * connection the published menu stays.
 */
export function useMenu(venue: Venue) {
  const [cambios, setCambios] = useState<Cambio[]>([]);

  useEffect(() => {
    const key = `mw-carta-cambios-${venue.id}`;
    try {
      const saved = window.localStorage.getItem(key);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from storage after mount
      if (saved) setCambios(JSON.parse(saved) as Cambio[]);
    } catch {
      // nothing saved, or storage unavailable
    }
    const controller = new AbortController();
    readCambios(venue.id, controller.signal)
      .then((fresh) => {
        setCambios(fresh);
        try {
          window.localStorage.setItem(key, JSON.stringify(fresh));
        } catch {
          // storage unavailable
        }
      })
      .catch(() => {
        // offline, or the table is not there yet: keep what we have
      });
    return () => controller.abort();
  }, [venue.id]);

  return useMemo(() => applyCambios(venue.categories, cambios), [venue.categories, cambios]);
}
