import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <Container>
        <div className="py-16">

          {/* Top Grid */}
          <div className="grid items-start gap-10 md:gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] text-[14px] text-slate-700">

            {/* Logo + Tagline */}
            <div className="flex flex-col gap-4 pt-[2px]">
              <div className="relative h-[70px] w-[240px] md:h-[80px] md:w-[320px]">
                <Image
                  src="/logo-beyond-traveling.jpg"
                  alt="Beyond Traveling"
                  fill
                  className="object-contain object-left opacity-90"
                />
              </div>

              <p className="text-sm text-slate-500 leading-relaxed max-w-[260px]">
                Property management and luxury rentals in Punta Mita. 
                Hands-on service, local expertise, and direct communication.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <span className="block mb-4 text-[12px] uppercase tracking-[0.12em] text-slate-400">
                Navigation
              </span>

              <div className="flex flex-col gap-2">
                <Link href="/" className="hover:text-slate-900 transition">Home</Link>
                <Link href="/about" className="hover:text-slate-900 transition">About</Link>
                <Link href="/services" className="hover:text-slate-900 transition">Services</Link>
                <Link href="/properties" className="hover:text-slate-900 transition">Properties</Link>
                <Link href="/contact" className="hover:text-slate-900 transition">Contact</Link>
              </div>
            </div>

            {/* Guides */}
            <div>
              <span className="block mb-4 text-[12px] uppercase tracking-[0.12em] text-slate-400">
                Guides
              </span>

              <div className="flex flex-col gap-2">
                <Link href="/punta-mita-property-management" className="hover:text-slate-900 transition">
                  Property Management
                </Link>
                <Link href="/luxury-rentals-punta-mita" className="hover:text-slate-900 transition">
                  Luxury Rentals
                </Link>
                <Link href="/villa-management-punta-mita" className="hover:text-slate-900 transition">
                  Villa Management
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <span className="block mb-4 text-[12px] uppercase tracking-[0.12em] text-slate-400">
                Contact
              </span>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:contact@beyondtravelingmx.com"
                  className="hover:text-slate-900 transition"
                >
                  contact@beyondtravelingmx.com
                </a>

                <a
                  href="https://wa.me/523313619889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 transition"
                >
                  WhatsApp +52 33 1361 9889
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-6 border-t border-slate-200 flex flex-col md:flex-row md:items-center md:justify-between text-[13px] text-slate-500">
            <div>© {new Date().getFullYear()} Beyond Traveling</div>
            <div className="mt-2 md:mt-0">All rights reserved</div>
          </div>

        </div>
      </Container>
    </footer>
  );
}
