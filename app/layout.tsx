import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { LanguageProvider } from "@/lib/language-context";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Beyond Traveling | Luxury Property Management in Punta Mita",
  description:
    "Luxury property management in Punta Mita. Beyond Traveling handles property care, guest experience, rentals, and local support for luxury homes.",
  verification: {
    google: "rdN9v2s2ZpF-poU8g0BnbSvRm8_YXErtgROUaWO5qR4" />
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="bg-white text-slate-900 antialiased">
        <LanguageProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body></html>);
}
