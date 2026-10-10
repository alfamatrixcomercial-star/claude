import type { DinnerTime } from "@/types/menu";

export const DINNER_ATTR = "data-cena";

export function isDinner(hour: number, { from, until }: Pick<DinnerTime, "from" | "until">) {
  return from > until ? hour >= from || hour < until : hour >= from && hour < until;
}

/**
 * Runs in <head> before the page paints, so the dinner photo is the first one
 * the browser fetches. Uses the guest's clock, which in the restaurant is local time.
 */
export function dinnerScript({ from, until }: Pick<DinnerTime, "from" | "until">) {
  const test = from > until ? `h>=${from}||h<${until}` : `h>=${from}&&h<${until}`;
  return `(function(){var h=new Date().getHours();if(${test})document.documentElement.setAttribute("${DINNER_ATTR}","")})()`;
}
