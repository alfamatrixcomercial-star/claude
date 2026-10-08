export interface Product {
  id: string;
  name: string;
  /** Price without the currency sign, as printed on the menu (e.g. "21.500"). */
  price: string;
  description?: string;
  suggested?: boolean;
  glutenFree?: boolean;
}

export interface Subcategory {
  name: string;
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
  icon: CategoryIcon;
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
