import React from "react";
import Link from "@/components/LocaleLink";
import WhatsAppLink from "@/components/WhatsAppLink";

/**
 * The one owner call-to-action band, used at the bottom of every owner-facing
 * page (Home, About, Services, each service). Same look, same copy, and the
 * same WhatsApp message everywhere — edit it here and every page follows.
 */
export default function OwnerCta() {
  return (
    <section className="bg-bt-navy">
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:gap-16 md:px-12 md:py-24">
        <div>
          <h2 className="font-serif text-3xl font-light leading-[1.15] tracking-[-0.01em] text-white md:text-[38px]">
            Let&rsquo;s See If We&rsquo;re a Good Fit
          </h2>

          <p className="mt-5 max-w-[480px] font-normal text-[16px] leading-[1.75] text-white/80">
            If you want a team that actually answers, stays involved, and treats
            your home like it matters, let&rsquo;s talk.
          </p>

          <p className="mt-4 max-w-[480px] font-normal text-[14px] leading-[1.75] text-white/80">
            No long-term contracts. Cancel anytime with 30 days&rsquo; notice.
          </p>

          <p className="mt-6">
            <Link
              href="/faq"
              className="text-[12.5px] font-normal text-white/85 underline decoration-white/35 underline-offset-4 transition hover:text-white hover:decoration-white"
            >
              Have a question first? See common questions.
            </Link>
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
          <Link
            href="/contact/owners"
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-white px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-bt-navy transition duration-150 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bt-navy active:scale-[0.98]"
          >
            Talk With Us About Your Property
          </Link>
          <WhatsAppLink
            topic="owner"
            className="inline-flex min-h-11 items-center justify-center border border-white/35 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition duration-150 hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-bt-navy active:scale-[0.98]"
          >
            WhatsApp Us
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
