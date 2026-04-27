import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { LanguageProvider } from "@/lib/language-context";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Beyond Traveling — Home Preview", description: "Home page preview" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className="bg-white text-slate-900 antialiased">
        <LanguageProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body></html>);
}
