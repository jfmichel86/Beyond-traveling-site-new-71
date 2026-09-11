import React from "react";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata = {
  title: "Cancellation Policy | Beyond Traveling Punta Mita",
  description:
    "Deposit schedule, cancellation windows, refunds, and date-change terms for reservations booked directly with Beyond Traveling in Punta Mita.",
};

const PrimaryButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="inline-flex min-h-11 items-center justify-center rounded-sm bg-bt-navy px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white shadow-sm transition hover:bg-bt-navy-light focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
  >
    {children}
  </Link>
);

const OutlineButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="inline-flex min-h-11 items-center justify-center rounded-sm border border-bt-navy/35 bg-white/55 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-bt-navy transition hover:border-bt-navy hover:bg-white focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
  >
    {children}
  </Link>
);

const Section = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="border-t border-bt-navy/10 py-8 first:border-t-0 first:pt-0 md:py-10">
    <div className="flex items-baseline gap-3">
      <span className="font-serif text-[15px] italic text-bt-gold">{number}</span>
      <h2 className="font-serif text-[22px] leading-tight text-bt-navy md:text-[26px]">
        {title}
      </h2>
    </div>
    <div className="mt-3 max-w-[680px] font-light text-[16px] leading-[1.75] text-slate-900/72">
      {children}
    </div>
  </div>
);

const RefundRow = ({
  window,
  refund,
}: {
  window: string;
  refund: string;
}) => (
  <div className="flex flex-col gap-1 border-b border-bt-navy/10 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between">
    <span className="font-light text-[15px] text-bt-navy">{window}</span>
    <span className="font-light text-[15px] text-slate-900/72">{refund}</span>
  </div>
);

export default function CancellationPolicyPage() {
  return (
    <main className="bg-white pb-20 md:pb-0">
      <section className="bg-white">
        <Container>
          <div className="reveal mx-auto max-w-[760px] py-16 text-center md:py-24">
            <p className="mb-5 text-[13px] font-light uppercase tracking-[0.18em] text-slate-900/60">
              Legal
            </p>

            <h1 className="mx-auto max-w-[760px] font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-bt-navy md:text-6xl">
              Cancellation
              <span className="block italic text-[0.78em] leading-[1.15] text-bt-gold">
                Policy.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[620px] font-light text-[17px] leading-[1.75] text-slate-900/72">
              How deposits, cancellations, and date changes work for
              reservations booked directly with Beyond Traveling.
            </p>

            <p className="mt-4 text-[13px] font-light uppercase tracking-[0.14em] text-slate-900/45">
              Last updated: September 2026
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div className="reveal mx-auto max-w-[720px] pb-16 md:pb-24">
            <p className="mb-8 font-light text-[16px] leading-[1.75] text-slate-900/72">
              Once your dates are confirmed, a property is held exclusively
              for you — so a cancellation affects both the homeowner and
              other guests who may have wanted those same dates. This policy
              is meant to be fair to everyone involved. If your situation is
              unusual, reach out directly; we review requests individually.
            </p>

            <p className="mb-8 rounded-sm border border-bt-navy/15 bg-bt-cream px-6 py-4 font-light text-[15px] leading-[1.7] text-slate-900/72">
              This policy applies to reservations booked directly with Beyond
              Traveling. Bookings made through a third-party platform such as
              Airbnb or Vrbo follow that platform&apos;s own cancellation
              terms instead.
            </p>

            <Section number="01" title="Deposit & Payment Schedule">
              <p>
                A 50% deposit secures your dates at the time of booking, in
                addition to the refundable security deposit described in our{" "}
                <Link
                  href="/terms-and-conditions"
                  className="text-bt-navy underline underline-offset-2 hover:text-bt-gold"
                >
                  Terms &amp; Conditions
                </Link>
                . The remaining balance is due 90 days before arrival.
                Bookings made within 90 days of check-in require payment in
                full at the time of booking.
              </p>
            </Section>

            <Section number="02" title="Cancellation Windows & Refunds">
              <div>
                <p className="mb-4">
                  Refunds on amounts paid follow the schedule below, based on
                  how far in advance we receive your written cancellation:
                </p>
                <div className="rounded-sm border border-bt-navy/10 bg-bt-cream/50 px-6">
                  <RefundRow window="90+ days before arrival" refund="100% refund, less a 5% processing fee" />
                  <RefundRow window="60–89 days before arrival" refund="50% refund, less a 5% processing fee" />
                  <RefundRow window="Within 60 days of arrival" refund="No refund" />
                </div>
                <p className="mt-4">
                  Refunds are issued to your original payment method within
                  15 business days of receiving your written cancellation.
                </p>
              </div>
            </Section>

            <Section number="03" title="Date Changes">
              <p>
                We&apos;re happy to accommodate one complimentary date change
                per reservation, provided it&apos;s requested at least 90
                days before arrival and new dates are available within the
                same calendar year. Rate differences between your original
                and new dates may apply. Requests made within 90 days of
                arrival are treated as a cancellation under the terms above.
              </p>
            </Section>

            <Section number="04" title="Force Majeure & Extraordinary Circumstances">
              <p>
                If a natural disaster, government travel restriction, or
                similarly extraordinary event directly affects Punta Mita or
                your ability to travel, we&apos;ll do our best to offer a
                12-month rebooking credit rather than apply the standard
                cancellation terms above. This applies only when the
                circumstance is in effect immediately before or during your
                stay; if it resolves before your arrival, our standard
                cancellation terms apply. Each situation is reviewed
                individually.
              </p>
            </Section>

            <Section number="05" title="Travel Insurance">
              <p>
                We recommend purchasing travel insurance at the time of
                booking to protect against cancellation costs from illness,
                injury, or unexpected changes to your travel plans.
              </p>
            </Section>

            <Section number="06" title="No-Shows & Early Departure">
              <p>
                No refund is issued for early departure or if you do not
                arrive for a confirmed reservation.
              </p>
            </Section>

            <Section number="07" title="How to Cancel or Change a Reservation">
              <p>
                Send cancellation or date-change requests in writing to{" "}
                <a
                  href="mailto:beyondtravelingmx@gmail.com"
                  className="text-bt-navy underline underline-offset-2 hover:text-bt-gold"
                >
                  beyondtravelingmx@gmail.com
                </a>{" "}
                or via WhatsApp at{" "}
                <a
                  href="https://wa.me/523313619889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bt-navy underline underline-offset-2 hover:text-bt-gold"
                >
                  +52 33 1361 9889
                </a>
                . We&apos;ll confirm receipt within 24 hours along with the
                terms that apply to your reservation.
              </p>
            </Section>
          </div>
        </Container>
      </section>

      <section className="border-t border-bt-navy/10 bg-bt-cream">
        <Container>
          <div className="reveal mx-auto max-w-[780px] py-14 text-center md:py-20">
            <h2 className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-bt-navy md:text-5xl">
              Considering an unusual situation?
            </h2>

            <p className="mx-auto mt-5 max-w-[620px] font-light text-[17px] leading-[1.75] text-slate-900/72">
              Reach out directly — we review circumstances individually and
              would rather talk it through than leave you guessing.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PrimaryButton href="/contact">Contact Us</PrimaryButton>
              <OutlineButton href="/terms-and-conditions">Terms & Conditions</OutlineButton>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
