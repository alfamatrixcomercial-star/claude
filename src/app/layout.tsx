import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { venue } from "@venue";
import { dinnerScript } from "@/lib/dinner";
import { asset } from "@/lib/utils";
import "./globals.css";

// Poppins for text and titles, as on miradorwaikiki.com.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `Carta | ${venue.restaurant.name}`,
  description: venue.description,
  icons: { icon: { url: asset(`/venues/${venue.id}/icon.svg`), type: "image/svg+xml" } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#dbd2b5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The dinner script sets an attribute on <html> before React hydrates.
    <html lang="es" className={poppins.variable} suppressHydrationWarning>
      {venue.dinner && (
        <head>
          <script dangerouslySetInnerHTML={{ __html: dinnerScript(venue.dinner) }} />
        </head>
      )}
      <body>{children}</body>
    </html>
  );
}
