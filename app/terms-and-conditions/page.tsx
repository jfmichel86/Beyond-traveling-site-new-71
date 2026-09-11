import React from "react";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata = {
  title: "Terms & Conditions | Beyond Traveling Punta Mita",
  description:
    "Terms and conditions for booking a luxury villa or working with Beyond Traveling in Punta Mita: booking process, rates, guest conduct, and liability.",
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

const LegalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-bt-navy underline underline-offset-2 hover:text-bt-gold"
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

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white pb-20 md:pb-0">
      <section className="bg-white">
        <Container>
          <div className="reveal mx-auto max-w-[760px] py-16 text-center md:py-24">
            <p className="mb-5 text-[13px] font-light uppercase tracking-[0.18em] text-slate-900/60">
              Legal
            </p>

            <h1 className="mx-auto max-w-[760px] font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-bt-navy md:text-6xl">
              Terms &
              <span className="block italic text-[0.78em] leading-[1.15] text-bt-gold">
                Conditions.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[620px] font-light text-[17px] leading-[1.75] text-slate-900/72">
              The terms below apply whenever you browse this website, submit
              an inquiry, or book a property with Beyond Traveling.
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
              By using this website or submitting an inquiry, you agree to the
              terms below. Our <LegalLink href="/cancellation-policy">Cancellation Policy</LegalLink> and{" "}
              <LegalLink href="/privacy-policy">Privacy Policy</LegalLink> are
              incorporated into these terms by reference.
            </p>

            <Section number="01" title="Who We Are">
              <p>
                Beyond Traveling is a luxury property management and vacation
                rental company based in Punta Mita, Nayarit, México. We
                represent privately owned villas and act as booking agents and
                on-site coordinators on behalf of homeowners; ownership of
                each property remains with its respective owner.
              </p>
            </Section>

            <Section number="02" title="Booking Process">
              <p>
                Rates and availability shown on this site are provisional. A
                booking is only confirmed once we&apos;ve issued written
                confirmation and received your deposit. A refundable security
                deposit equivalent to one night&apos;s rental applies to all
                reservations, and any additional house rules specific to a
                property are shared with you in your booking confirmation.
              </p>
            </Section>

            <Section number="03" title="Rates, Taxes & Availability">
              <p>
                Rates are quoted per night in US dollars and are subject to
                change without notice until a booking is confirmed. Photos
                are representative and may vary slightly from current
                conditions. 16% VAT and 5% tourism tax may apply, and staff
                gratuities of 10–15% of the pre-tax reservation total are
                customary. Rates do not include food, beverage, or fees for
                guests beyond your confirmed occupancy.
              </p>
            </Section>

            <Section number="04" title="Guest Conduct & Property Use">
              <p>
                Please treat each property with the same care you&apos;d give
                your own home — respecting occupancy limits, house rules, and
                local laws. Events or gatherings beyond your confirmed guest
                count require our prior written consent, and pets are only
                permitted with advance written approval. Significant
                violations of house rules may result in your stay being ended
                without refund.
              </p>
            </Section>

            <Section number="05" title="Liability & Assumption of Risk">
              <p>
                Guests use pools, ocean access, and other property amenities
                at their own risk. To the fullest extent permitted by law,
                Beyond Traveling and the homeowners we represent are not
                liable for injury, loss, or damage arising from your stay,
                except where caused by our own negligence. We recommend all
                guests carry travel insurance.
              </p>
            </Section>

            <Section number="06" title="Website Content & Intellectual Property">
              <p>
                All text, photography, and design on this website belong to
                Beyond Traveling or are used with permission from homeowners
                and photographers. Please don&apos;t reproduce or repurpose
                this content without our written consent.
              </p>
            </Section>

            <Section number="07" title="Governing Law">
              <p>
                These Terms are governed by the laws of México and the state
                of Nayarit, whose courts have jurisdiction over any dispute
                arising from your use of this site or a reservation made with
                us.
              </p>
            </Section>

            <Section number="08" title="Changes to These Terms">
              <p>
                We may update these Terms from time to time; the date at the
                top of this page reflects the most recent revision. The Terms
                in effect at the time you book apply to that reservation.
              </p>
            </Section>

            <Section number="09" title="Contact Us">
              <p>
                Questions about these Terms can be sent to{" "}
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
                .
              </p>
            </Section>
          </div>
        </Container>
      </section>

      <section className="border-t border-bt-navy/10 bg-bt-cream">
        <Container>
          <div className="reveal mx-auto max-w-[780px] py-14 text-center md:py-20">
            <h2 className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-bt-navy md:text-5xl">
              Have a question before you book?
            </h2>

            <p className="mx-auto mt-5 max-w-[620px] font-light text-[17px] leading-[1.75] text-slate-900/72">
              We&apos;re happy to walk through the details with you directly.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PrimaryButton href="/contact">Contact Us</PrimaryButton>
              <OutlineButton href="/properties">View Properties</OutlineButton>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
