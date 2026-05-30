import React from "react";
import ContactForm from "./ContactForm";
import Container from "@/components/Container";
import Link from "next/link";

export const metadata = {
  title: "Contact Beyond Traveling | Punta Mita Property Management",
  description:
    "Contact Beyond Traveling for luxury property management in Punta Mita. Talk with a local team about property care, guest support, rental results, clear pricing, and no hidden fees.",
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
    className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-900 px-5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
  >
    {children}
  </Link>
);

const OutlineAnchor = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-900/35 bg-white/55 px-5 text-[15px] font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
  >
    {children}
  </a>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-slate-900 md:text-4xl">
    {children}
  </h2>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[17px] leading-[1.75] text-slate-900/72">{children}</p>
);

const ContactOption = ({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="block rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
  >
    <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-900/45">
      {label}
    </p>
    <p className="mt-2 break-words text-[15px] font-semibold leading-6 text-slate-900">
      {value}
    </p>
  </a>
);

const ContactIntro = () => (
  <section className="bg-white">
    <Container>
      <div className="mx-auto max-w-[820px] py-16 text-center md:py-24">
        <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-900/60">
          Contact Beyond Traveling
        </p>

        <h1 className="mx-auto max-w-[820px] font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-slate-900 md:text-6xl">
          Let’s Have a Conversation.
          <span className="block italic text-[0.78em] leading-[1.15]">
            No pressure. No sales pitch.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.75] text-slate-900/72">
          Whether you are actively looking for a new property management team in
          Punta Mita or just want to understand your options, we are happy to
          talk. You can also explore how we work on our{" "}
          <Link
            href="/services"
            className="font-semibold underline decoration-slate-900/25 underline-offset-4 transition hover:decoration-slate-900"
          >
            Services
          </Link>{" "}
          page.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <PrimaryButton href="#contact-form">Send a Message</PrimaryButton>
          <OutlineAnchor href="https://wa.me/523313619889">
            WhatsApp Us
          </OutlineAnchor>
        </div>
      </div>
    </Container>
  </section>
);

const ContactSection = () => {
  return (
    <section id="contact-form" className="overflow-hidden bg-[#f1f4f8]">
      <div className="mx-auto max-w-[1100px] px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start md:gap-16">
          <div className="min-w-0 space-y-6 md:col-span-6">
            <SectionTitle>Get in Touch</SectionTitle>

            <Body>
              We keep communication simple and direct. Tell us a little about
              your property, what you are looking for, or what has not been
              working with your current setup.
            </Body>

            <div className="grid gap-3">
              <ContactOption
                label="Email"
                value="beyondtravelingmx@gmail.com"
                href="mailto:beyondtravelingmx@gmail.com"
              />

              <ContactOption
                label="Phone / WhatsApp"
                value="+52 33 1361 9889"
                href="https://wa.me/523313619889"
              />
            </div>

            <div className="rounded-2xl border border-slate-900/10 bg-white/55 p-5">
              <p className="text-[16px] font-semibold text-slate-900">
                What happens next?
              </p>

              <ul className="mt-3 space-y-2 text-[15px] leading-7 text-slate-900/72">
                <li>— We read your message carefully.</li>
                <li>— We reply directly, usually by email or WhatsApp.</li>
                <li>— If it makes sense, we schedule a simple conversation.</li>
              </ul>
            </div>
          </div>

          <div className="min-w-0 md:col-span-6">
            <div className="w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactClosing = () => (
  <section className="border-t border-slate-900/8 bg-white">
    <Container>
      <div className="mx-auto max-w-[780px] py-14 text-center md:py-20">
        <h2 className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-slate-900 md:text-5xl">
          A simple conversation is usually the best place to start.
        </h2>

        <p className="mx-auto mt-5 max-w-[680px] text-[17px] leading-[1.75] text-slate-900/72">
          We can talk about your home, your current setup, rental goals,
          communication, costs, and whether we are the right fit.
        </p>
      </div>
    </Container>
  </section>
);

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <ContactIntro />
      <ContactSection />
      <ContactClosing />
    </main>
  );
}
