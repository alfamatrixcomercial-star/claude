// The menu being built. next.config.ts points "@venue" at src/venues/<CARTA>/index.ts.
declare module "@venue" {
  export const venue: import("@/types/menu").Venue;
}
