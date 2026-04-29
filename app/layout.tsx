import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { LanguageProvider } from "@/lib/language-context";
import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.beyondtravelingmx.com"),
  title: {
    default: "Luxury Property Management Punta Mita | Beyond Traveling",
    template: "%s | Beyond Traveling",
  },
  description:
    "Luxury property management in Punta Mita, Riviera Nayarit. We handle rentals, guest experience, maintenance, and local operations for high-end homes.",
  keywords: [
    "property management Punta Mita",
    "luxury property management Punta Mita",
    "villa management Punta Mita",
    "luxury rentals Punta Mita",
    "Punta Mita property services",
    "Riviera Nayarit property management",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luxury Property Management Punta Mita | Beyond Traveling",
    description:
      "Full-service luxury property management for high-end homes in Punta Mita, Riviera Nayarit.",
    url: "https://www.beyondtravelingmx.com",
    siteName: "Beyond Traveling",
    images: [
      {
        url: "/home/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury property management in Punta Mita",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "rdN9v2s2ZpF-poU8g0BnbSvRm8_YXErtgROUaWO5qR4",
  },
icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
  ],
  shortcut: "/favicon.ico",
  apple: [
    { url: "/icon-192.png" },
  ],
},
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
     <body className="bg-white text-slate-900 antialiased">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        name: "Beyond Traveling",
        url: "https://www.beyondtravelingmx.com",
        email: "contact@beyondtravelingmx.com",
        telephone: "+523313619889",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Punta Mita",
          addressCountry: "MX",
        },
        areaServed: "Punta Mita",
        description:
          "Luxury property management in Punta Mita. Beyond Traveling handles property care, rentals, and guest experience for high-end homes.",
      }),
    }}
  />

        <LanguageProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </LanguageProvider>

      </body>
    </html>
  );
}
