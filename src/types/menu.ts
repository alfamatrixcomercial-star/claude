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
  logo: string;
  website: string;
  email: string;
  /** Phone as shown to guests. */
  phone: string;
  phoneHref: string;
  whatsappUrl: string;
  paymentMethods: string[];
}

export type Lang = "es" | "en";
