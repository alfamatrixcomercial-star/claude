export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  /** Price without the currency sign, as printed on the menu (e.g. "21.500"). */
  price: string;
  description?: string;
  descriptionEn?: string;
  suggested?: boolean;
  glutenFree?: boolean;
}

export interface Subcategory {
  name: string;
  nameEn?: string;
  products: Product[];
}

export type CategoryIcon =
  | "ejecutivo"
  | "cafe"
  | "desayuno"
  | "pasteleria"
  | "entradas"
  | "platos"
  | "infantil"
  | "postres"
  | "bebidas"
  | "cocktails"
  | "bodega";

export interface Category {
  name: string;
  nameEn?: string;
  icon: CategoryIcon;
  /** Shown first, above a separator. */
  featured?: boolean;
  subcategories: Subcategory[];
}

export interface Restaurant {
  name: string;
  city: string;
  /** Logo image; without one the name is set in type. */
  logo?: string;
  website?: string;
  email?: string;
  /** Phone as shown to guests. */
  phone: string;
  phoneHref: string;
  whatsappUrl?: string;
  paymentMethods: string[];
}

export type Lang = "es" | "en";

/** A photo in public/, saved as `${prefix}-${width}.webp` for each width (1x, 2x, 3x screens). */
export interface HeroPhoto {
  prefix: string;
  widths: number[];
  /** CSS background-position, to keep the subject in view. */
  position: string;
  alt: Record<Lang, string>;
}

/** Hours (local time) when the menu switches to its dinner layout; `from` may be later than `until`. */
export interface DinnerTime {
  from: number;
  until: number;
  /** Sections moved to the end of the strip at dinner. */
  late: CategoryIcon[];
  photo: HeroPhoto;
}

/** Everything that changes from one menu to another. */
export interface Venue {
  id: string;
  restaurant: Restaurant;
  categories: Category[];
  suggestedProductIds: string[];
  welcome: Record<Lang, string>;
  tagline: Record<Lang, string>;
  description: string;
  photo: HeroPhoto;
  dinner?: DinnerTime;
}
