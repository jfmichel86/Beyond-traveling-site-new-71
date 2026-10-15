import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import Analytics from "@/components/Analytics";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { LanguageProvider } from "@/lib/language-context";
import { services } from "@/lib/services";
import { getProperties } from "@/lib/sanity";
import type { Metadata } from "next";

// Self-hosted via next/font — an elegant, light-weight serif paired with a
// clean, wide-tracked sans, replacing the previous system-font fallback
// (Georgia) that made headings read as generic rather than boutique-luxury.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://www.beyondtravelingmx.com"),
  title: {
    default: "Luxury Property Management Punta Mita | Beyond Traveling",
    template: "%s | Beyond Traveling",
  },
  description:
    "Luxury property management in Punta Mita with direct owner communication, guest support, clear pricing, no hidden fees, and local care for high-end homes.",
  openGraph: {
    title: "Luxury Property Management Punta Mita | Beyond Traveling",
    description:
    "Luxury property management in Punta Mita with direct communication, guest support, clear pricing, no hidden fees, and local care for high-end homes.",
    url: "https://www.beyondtravelingmx.com",
    siteName: "Beyond Traveling",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury property management in Punta Mita",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Property Management Punta Mita | Beyond Traveling",
    description:
      "Luxury property management in Punta Mita with direct owner communication, guest support, clear pricing, no hidden fees, and local care for high-end homes.",
    images: ["/og-image.jpg"],
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
// Runs before the page paints. Hides .reveal elements only once the observer is
// ready, and falls back to showing everything if anything goes wrong.
const REVEAL_BOOT = `(function(){var d=document.documentElement;try{if(!("IntersectionObserver" in window))return;d.classList.add("js-reveal");function start(){try{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:0.08,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".reveal:not(.in)").forEach(function(el){io.observe(el)})}catch(x){d.classList.remove("js-reveal")}}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start()}catch(x){d.classList.remove("js-reveal")}})();`;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Villa list for the PROPERTIES menu, from Sanity.
  const properties = (await getProperties()).map(({ slug, title }) => ({ slug, title }));

  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
     <body className={`${inter.className} ${cormorant.variable} ${inter.variable} bg-white text-slate-900`}>
    <script
      dangerouslySetInnerHTML={{
        __html: REVEAL_BOOT,
      }}
    />
    <ScrollReveal />
    <Analytics />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://www.beyondtravelingmx.com/#website",
          name: "Beyond Traveling",
          alternateName: "Beyond Traveling Punta Mita",
          url: "https://www.beyondtravelingmx.com",
          inLanguage: ["en", "es"],
          publisher: { "@id": "https://www.beyondtravelingmx.com/#business" },
        }),
      }}
    />
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://www.beyondtravelingmx.com/#business",
        name: "Beyond Traveling",
        url: "https://www.beyondtravelingmx.com",
        logo: "https://www.beyondtravelingmx.com/logo-beyond-traveling.png",
        image: "https://www.beyondtravelingmx.com/og-image.jpg",
        email: "management@beyondtravelingmx.com",
        telephone: "+523313619889",
        foundingDate: "2023",
        knowsLanguage: ["en", "es"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Punta Mita",
          addressRegion: "Nayarit",
          addressCountry: "MX",
        },
        areaServed: [
          { "@type": "Place", name: "Punta Mita" },
          { "@type": "Place", name: "Riviera Nayarit" },
        ],
        description:
          "Luxury property management in Punta Mita with property care, guest support, rental coordination, clear pricing, no hidden fees, and direct owner communication.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Property management services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `${service.title} ${service.italicTitle}`,
              description: service.summary,
              url: `https://www.beyondtravelingmx.com/services/${service.slug}`,
            },
          })),
        },
      }),
    }}
  />

        <LanguageProvider>
          <SiteHeader properties={properties} />
          <main>{children}</main>
          <SiteFooter />
          <FloatingWhatsApp />
        </LanguageProvider>

      </body>
    </html>
  );
}
