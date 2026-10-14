// The menu being built. next.config.ts points "@venue" at src/venues/<CARTA>/index.ts.
declare module "@venue" {
  export const venue: import("@/types/menu").Venue;
}

// What the home page shows: the menu, or the admin of every menu (CARTA=gestion).
declare module "@inicio" {
  export const metadata: import("next").Metadata;
  export const Inicio: () => import("react").JSX.Element;
}
