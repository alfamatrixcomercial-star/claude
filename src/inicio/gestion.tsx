import type { Metadata } from "next";
import { AdminApp } from "@/components/admin/AdminApp";

// The admin of every menu, served at miradorwaikiki.com/gestion/cartas/ (see
// "@inicio" in next.config.ts). For the staff, so it stays out of search engines.
export const metadata: Metadata = {
  title: "Cartas · Gestión · Mirador Waikiki",
  robots: { index: false, follow: false },
};
export const Inicio = AdminApp;
