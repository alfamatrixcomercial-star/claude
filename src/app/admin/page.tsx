import type { Metadata } from "next";
import { venue } from "@venue";
import { AdminApp } from "@/components/admin/AdminApp";

// /carta/<carta>/admin/: for the staff, so it stays out of search engines.
export const metadata: Metadata = {
  title: `Administrar carta | ${venue.restaurant.name}`,
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminApp />;
}
