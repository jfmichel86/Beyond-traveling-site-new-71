import React from "react";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata = {
  title: "Privacy Policy | Beyond Traveling Punta Mita",
  description:
    "How Beyond Traveling collects, uses, and protects the information you share with us through our website, contact form, and WhatsApp.",
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

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white pb-20 md:pb-0">
      <section className="bg-white">
        <Container>
          <div className="reveal mx-auto max-w-[760px] py-16 text-center md:py-24">
            <p className="mb-5 text-[13px] font-light uppercase tracking-[0.18em] text-slate-900/60">
              Legal
            </p>

            <h1 className="mx-auto max-w-[760px] font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-bt-navy md:text-6xl">
              Privacy
              <span className="block italic text-[0.78em] leading-[1.15] text-bt-gold">
                Policy.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[620px] font-light text-[17px] leading-[1.75] text-slate-900/72">
              How we collect, use, and protect the information you share with
              us.
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
            <Section number="01" title="Information We Collect">
              <p>
                We collect the information you choose to share with us —
                your name, email, phone number, and details about your
                travel plans or property — when you reach out through our
                contact form or WhatsApp. We do not collect payment card
                information through this website.
              </p>
            </Section>

            <Section number="02" title="How Our Contact Form Works">
              <p>
                Submitting our contact form opens WhatsApp with your message
                pre-filled; your details aren&apos;t stored in a server
                database on our end, and the message is handled the same way
                as any other conversation you&apos;d start with us directly.
              </p>
            </Section>

            <Section number="03" title="How We Use Your Information">
              <p>
                We use the details you share to respond to your inquiry,
                prepare quotes, and coordinate bookings — and, only if
                you&apos;d like, to send occasional updates about properties
                and availability. We don&apos;t use your information to make
                automated decisions about you, and we never sell your
                personal information to third parties.
              </p>
            </Section>

            <Section number="04" title="Sharing Your Information">
              <p>
                When you book a property, we share the necessary details
                with the relevant homeowner or on-site team so your stay can
                be confirmed and coordinated. We do not share your
                information with advertisers or data brokers.
              </p>
            </Section>

            <Section number="05" title="Cookies & Analytics">
              <p>
                This site does not currently use advertising or tracking
                cookies. If that changes, we&apos;ll update this policy
                accordingly.
              </p>
            </Section>

            <Section number="06" title="Your Rights (ARCO)">
              <p>
                Under Mexican data protection law, you have the right to
                Access, Rectify, Cancel, or Object to the use of your
                personal information. To exercise any of these rights,
                contact us at{" "}
                <a
                  href="mailto:beyondtravelingmx@gmail.com"
                  className="text-bt-navy underline underline-offset-2 hover:text-bt-gold"
                >
                  beyondtravelingmx@gmail.com
                </a>{" "}
                and we&apos;ll respond within a reasonable timeframe.
              </p>
            </Section>

            <Section number="07" title="Changes to This Policy">
              <p>
                We may update this policy periodically as our practices
                evolve. The date at the top of this page reflects the most
                recent revision.
              </p>
            </Section>

            <Section number="08" title="Contact Us">
              <p>
                Questions about your privacy can be sent to{" "}
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
              Have a question about your data?
            </h2>

            <p className="mx-auto mt-5 max-w-[620px] font-light text-[17px] leading-[1.75] text-slate-900/72">
              We&apos;re glad to answer directly — just reach out.
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
