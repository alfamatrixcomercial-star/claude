export interface Product {
  id: string;
  name: string;
  /** Price without the currency sign, formatted as on the site (e.g. "21.500"). */
  price: string;
  description?: string;
  image?: string;
  suggested?: boolean;
  glutenFree?: boolean;
}

export interface Subcategory {
  name: string;
  products: Product[];
}

export interface Category {
  name: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface Restaurant {
  slug: string;
  logo: string;
  email: string;
  phone: string;
  whatsappUrl: string;
}

export type Lang = "es" | "en";
