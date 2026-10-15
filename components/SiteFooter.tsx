import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import Link from "@/components/LocaleLink";
import FooterLanguageSwitch from "@/components/FooterLanguageSwitch";
import { services } from "@/lib/services";

/**
 * Site footer.
 *
 * Layout: brand block (logo + tagline) on the left, three link columns on the
 * right, then a full-width "Get in touch" strip and the legal / language bar.
 *
 * Notes for editing:
 * - Visible text is translated by the DOM translator in lib/language-context,
 *   which matches whole text nodes. Keep each label as its own plain string
 *   (one expression per element) and add new strings to that dictionary.
 * - Link text is charcoal/80 and headings solid navy so both clear WCAG AA on
 *   white; links get a 44px tap area on mobile.
 * - The translator restores the first text it saw in an element, so after
 *   editing labels in dev, hard-refresh the page (Cmd+Shift+R).
 */

const SERVICE_LINKS = services.map((s) => ({
  href: `/services/${s.slug}`,
  label: `${s.title} ${s.italicTitle}`,
}));

const EXPLORE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/discover-punta-mita", label: "Discover Punta Mita" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

// Short anchors: the "Punta Mita Guides" heading supplies the location keyword.
const GUIDE_LINKS = [
  { href: "/punta-mita-property-management", label: "Property Management" },
  { href: "/luxury-rentals-punta-mita", label: "Luxury Rentals" },
  { href: "/villa-management-punta-mita", label: "Villa Management" },
];

const COLLABORATE_LINKS = [
  { href: "/contact/agents", label: "Partner With Us" },
  { href: "/contact/work-with-us", label: "Work With Us" },
];

const LEGAL_LINKS = [
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/cancellation-policy", label: "Cancellation Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

const headingClass =
  "text-[11px] font-medium uppercase tracking-[0.16em] text-bt-navy";

/** Text link with the same sliding gold underline as the header nav. */
const FooterLink = ({ href, children }: { href: string; children: string }) => (
  <Link
    href={href}
    className="group relative inline-block py-3 text-[14px] font-normal leading-5 text-bt-charcoal/90 transition-colors hover:text-bt-navy focus-visible:text-bt-navy focus-visible:outline-none md:py-[3px]"
  >
    {children}
    <span
      aria-hidden="true"
      className="absolute inset-x-0 bottom-2.5 h-px origin-left scale-x-0 bg-bt-gold transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 md:bottom-0"
    />
  </Link>
);

const LinkGroup = ({
  id,
  heading,
  headingHref,
  links,
  className = "",
}: {
  id: string;
  heading: string;
  headingHref?: string;
  links: { href: string; label: string }[];
  className?: string;
}) => (
  <nav aria-labelledby={id} className={className}>
    <h2 id={id} className={headingClass}>
      {headingHref ? (
        <Link href={headingHref} className="transition-colors hover:text-bt-navy-light">
          {heading}
        </Link>
      ) : (
        heading
      )}
    </h2>
    {/* short gold rule — same accent as the header dropdowns */}
    <div aria-hidden="true" className="mb-3 mt-3 h-px w-6 bg-bt-gold" />
    <ul>
      {links.map((link) => (
        <li key={link.href}>
          <FooterLink href={link.href}>{link.label}</FooterLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default function SiteFooter() {
  return (
    <footer className="border-t border-bt-navy/10 bg-white pb-20 md:pb-0">
      <Container>
        <div className="pt-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_2.2fr] lg:gap-16">
            {/* Brand */}
            <div>
              <Link
                href="/"
                aria-label="Beyond Traveling home"
                className="relative block h-[70px] w-[162px] md:h-[80px] md:w-[185px]"
              >
                <Image
                  src="/logo-beyond-traveling.png"
                  alt="Beyond Traveling"
                  fill
                  className="object-contain object-left"
                />
              </Link>

              <p className="font-serif mt-6 max-w-[300px] text-[22px] font-normal italic leading-[1.3] text-bt-navy">
                Property management and luxury rentals in Punta Mita.
              </p>
              <p className="mt-3 max-w-[280px] text-[14px] font-normal leading-relaxed text-bt-charcoal/90">
                Hands-on service, local expertise, and direct communication.
              </p>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
              <LinkGroup
                id="footer-services"
                heading="Services"
                headingHref="/services"
                links={SERVICE_LINKS}
              />

              <LinkGroup id="footer-explore" heading="Explore" links={EXPLORE_LINKS} />

              <div className="col-span-2 sm:col-span-1">
                <LinkGroup id="footer-guides" heading="Punta Mita Guides" links={GUIDE_LINKS} />
                <LinkGroup
                  id="footer-collaborate"
                  heading="Collaborate"
                  links={COLLABORATE_LINKS}
                  className="mt-8"
                />
              </div>
            </div>
          </div>

          {/* Get in touch strip */}
          <address className="mt-14 flex flex-col gap-6 border-y border-bt-navy/10 py-8 not-italic md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-[28px] font-normal leading-tight text-bt-navy">
                Get in touch
              </h2>
              <p className="mt-2 text-[14px] font-normal text-bt-charcoal/90">
                We respond within 1 hour during the day.
              </p>
              <p className="mt-0.5 text-[14px] font-normal text-bt-charcoal/90">
                Punta Mita, Nayarit, Mexico
              </p>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
              <a
                href="mailto:management@beyondtravelingmx.com"
                className="group relative inline-block py-1 text-[15px] font-normal text-bt-navy"
              >
                management@beyondtravelingmx.com
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-bt-gold transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </a>
              <a
                href="https://wa.me/523313619889"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center border border-bt-navy/30 px-6 text-[14px] font-medium text-bt-navy transition hover:border-bt-navy hover:bg-bt-navy/[0.03] focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
              >
                WhatsApp +52 33 1361 9889
              </a>
            </div>
          </address>

          {/* Bottom bar */}
          <div className="flex flex-col gap-3 py-4 text-[13px] font-normal text-bt-charcoal/85 md:flex-row md:items-center md:justify-between">
            <p>
              <span>© {new Date().getFullYear()} Beyond Traveling.</span>{" "}
              <span>All rights reserved.</span>
            </p>

            <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-6">
              <nav aria-label="Legal">
                <ul className="flex flex-wrap gap-x-6">
                  {LEGAL_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-11 items-center transition-colors hover:text-bt-navy focus-visible:text-bt-navy focus-visible:outline-none"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="md:border-l md:border-bt-navy/15 md:pl-4">
                <FooterLanguageSwitch />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
