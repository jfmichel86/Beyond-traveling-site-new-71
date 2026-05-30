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
    "Luxury property management in Punta Mita with direct owner communication, guest support, clear pricing, no hidden fees, and local care for high-end homes.",
  keywords: [
    "property management Punta Mita",
    "luxury property management Punta Mita",
    "villa management Punta Mita",
    "luxury rentals Punta Mita",
    "Punta Mita property services",
    "Riviera Nayarit property management",
  ],
  alternates: {
  canonical: "https://www.beyondtravelingmx.com",
},
  openGraph: {
    title: "Luxury Property Management Punta Mita | Beyond Traveling",
    description:
    "Luxury property management in Punta Mita with direct communication, guest support, clear pricing, no hidden fees, and local care for high-end homes.",
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
      __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Beyond Traveling",
          url: "https://www.beyondtravelingmx.com",
          email: "beyondtravelingmx@gmail.com",
          telephone: "+523313619889",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Punta Mita",
            addressRegion: "Nayarit",
            addressCountry: "MX",
          },
          areaServed: ["Punta Mita", "Riviera Nayarit"],
          description:
            "Luxury property management in Punta Mita with property care, guest support, rental coordination, clear pricing, no hidden fees, and direct owner communication.",
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do you handle rentals too?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Beyond Traveling helps with guest communication, property readiness, local coordination, and the details that support stronger rental performance.",
              },
            },
            {
              "@type": "Question",
              name: "Are there hidden fees?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Beyond Traveling focuses on clear pricing and believes owners should understand what they are paying for and why.",
              },
            },
            {
              "@type": "Question",
              name: "Will I deal with one person or a system?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Owners deal with people, not a system. Beyond Traveling keeps communication direct and avoids passing homes through layers of staff.",
              },
            },
            {
              "@type": "Question",
              name: "Where do you work?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Beyond Traveling focuses on Punta Mita and nearby luxury homes in Riviera Nayarit.",
              },
            },
          ],
        },
      ]),
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
