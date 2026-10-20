import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import Link from "@/components/LocaleLink";
import FooterLanguageSwitch from "@/components/FooterLanguageSwitch";
import { services } from "@/lib/services";
import WhatsAppLink from "@/components/WhatsAppLink";

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
  { href: "/contact/agents", label: "Partner With Us" }, // agents & travel advisors who want to promote our properties
  { href: "/contact/work-with-us#vendors", label: "Work With Us" }, // suppliers & vendors
  { href: "/contact/work-with-us#careers", label: "Join Our Team" }, // people who want to work at BT
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
                  sizes="(min-width: 768px) 185px, 162px"
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
              <WhatsAppLink
                topic="owner"
                className="inline-flex min-h-11 items-center justify-center gap-2.5 border border-bt-navy/30 px-6 text-[14px] font-medium text-bt-navy transition hover:border-bt-navy hover:bg-bt-navy/[0.03] focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </WhatsAppLink>
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
