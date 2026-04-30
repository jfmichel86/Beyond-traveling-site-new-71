import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-white">
      <Container>
        <div className="py-10 md:py-12">

          {/* Divider */}
          <div className="mb-6 md:mb-10 h-px w-full bg-slate-900/10" />

          {/* 3 Columns */}
          <div className="grid gap-6 md:gap-12 md:grid-cols-3 text-[14px] text-slate-900/70">

            {/* Logo */}
            <div>
              <div className="relative h-[90px] w-[280px] mx-auto md:mx-0 md:h-[80px] md:w-[420px]">
                <Image
                  src="/logo-beyond-traveling.jpg"
                  alt="Beyond Traveling"
                  fill
                  className="object-contain object-center md:object-left opacity-90"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col items-center mt-2">
              <span className="mb-3 text-[13px] uppercase tracking-wide text-slate-500">
                Navigation
              </span>

              <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-left">
                <Link href="/" className="hover:text-slate-900 transition">Home</Link>
                <Link href="/about" className="hover:text-slate-900 transition">About</Link>
                <Link href="/services" className="hover:text-slate-900 transition">Services</Link>
                <Link href="/properties" className="hover:text-slate-900 transition">Properties</Link>
                <Link href="/contact" className="hover:text-slate-900 transition">Contact</Link>

                <span className="text-[12px] uppercase tracking-wide text-slate-400 mt-4">
  Guides
</span>
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
            <div className="flex flex-col items-center mt-2">
              <span className="mb-3 text-[13px] uppercase tracking-wide text-slate-500">
                Contact
              </span>

              <div className="flex flex-col gap-2 text-left">
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

          {/* Bottom Row */}
          <div className="mt-10 flex flex-col gap-2 text-center md:flex-row md:items-center md:justify-between text-[13px] text-slate-500">
            <div>© {new Date().getFullYear()} · Beyond Traveling</div>
            <div>All rights reserved</div>
          </div>

        </div>
      </Container>
    </footer>
  );
}
