import type { Venue } from "@/types/menu";
import { venue as miradorwaikiki } from "./miradorwaikiki";
import { venue as mirador9 } from "./mirador9";
import { venue as mirador9resto } from "./mirador9resto";
import { venue as hulakai } from "./hulakai";

/** Every menu, for the admin page at /gestion/cartas/. The menus themselves import only their own. */
export const venues: Venue[] = [miradorwaikiki, mirador9, mirador9resto, hulakai];
