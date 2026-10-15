import Link from "@/components/LocaleLink";

/**
 * Sticky two-button bar shown on phones only. Shared so every page uses the
 * same readable sizes and focus styles. `contactHref` lets a page point the
 * second button at the right audience (e.g. /contact/owners).
 */
export default function MobileStickyCta({
  contactHref = "/contact",
  contactLabel = "Contact",
  whatsappHref = "https://wa.me/523313619889",
}: {
  contactHref?: string;
  contactLabel?: string;
  whatsappHref?: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-bt-navy/10 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center border border-bt-navy/30 text-[12px] font-medium uppercase tracking-[0.12em] text-bt-navy transition hover:bg-bt-cream focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
        >
          WhatsApp
        </a>
        <Link
          href={contactHref}
          className="inline-flex min-h-11 items-center justify-center bg-bt-navy text-[12px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-bt-navy-light focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
        >
          {contactLabel}
        </Link>
      </div>
    </div>
  );
}
