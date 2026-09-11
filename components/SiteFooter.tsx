import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-bt-navy/10 pb-20 md:pb-0">
      <Container>
        <div className="py-16">

          {/* Top Grid */}
          <div className="grid items-start gap-10 md:gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] font-light text-[14px] text-bt-charcoal-light">

            {/* Logo + Tagline */}
            <div className="flex flex-col gap-4 pt-[2px]">
              <div className="relative h-[70px] w-[162px] md:h-[80px] md:w-[185px]">
                <Image
                  src="/logo-beyond-traveling.png"
                  alt="Beyond Traveling"
                  fill
                  className="object-contain object-left opacity-90"
                />
              </div>

              <p className="text-sm leading-relaxed max-w-[260px] text-bt-charcoal-light">
                Property management and luxury rentals in Punta Mita.
                Hands-on service, local expertise, and direct communication.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <span className="block mb-4 text-[12px] font-light uppercase tracking-[0.14em] text-bt-navy/45">
                Navigation
              </span>

              <div className="flex flex-col gap-2">
                <Link href="/" className="hover:text-bt-navy transition">Home</Link>
                <Link href="/services" className="hover:text-bt-navy transition">Services</Link>
                <Link href="/properties" className="hover:text-bt-navy transition">Properties</Link>
                <Link href="/discover-punta-mita" className="hover:text-bt-navy transition">Discover</Link>
                <Link href="/about" className="hover:text-bt-navy transition">About</Link>
                <Link href="/contact" className="hover:text-bt-navy transition">Contact</Link>
                <Link href="/faq" className="hover:text-bt-navy transition">FAQ</Link>
              </div>
            </div>

            {/* Guides */}
            <div>
              <span className="block mb-4 text-[12px] font-light uppercase tracking-[0.14em] text-bt-navy/45">
                Guides
              </span>

              <div className="flex flex-col gap-2">
                <Link href="/punta-mita-property-management" className="hover:text-bt-navy transition">
                  Property Management
                </Link>
                <Link href="/luxury-rentals-punta-mita" className="hover:text-bt-navy transition">
                  Luxury Rentals
                </Link>
                <Link href="/villa-management-punta-mita" className="hover:text-bt-navy transition">
                  Villa Management
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <span className="block mb-4 text-[12px] font-light uppercase tracking-[0.14em] text-bt-navy/45">
                Contact
              </span>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:beyondtravelingmx@gmail.com"
                  className="hover:text-bt-navy transition"
                >
                  beyondtravelingmx@gmail.com
                </a>

                <a
                  href="https://wa.me/523313619889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-bt-navy transition"
                >
                  WhatsApp +52 33 1361 9889
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-6 border-t border-bt-navy/10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-[13px] font-light text-bt-charcoal-light">
            <div>© {new Date().getFullYear()} Beyond Traveling. All rights reserved.</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/terms-and-conditions" className="hover:text-bt-navy transition">
                Terms & Conditions
              </Link>
              <Link href="/cancellation-policy" className="hover:text-bt-navy transition">
                Cancellation Policy
              </Link>
              <Link href="/privacy-policy" className="hover:text-bt-navy transition">
                Privacy Policy
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}
