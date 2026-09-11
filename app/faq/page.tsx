import React from "react";
import Container from "@/components/Container";
import { PrimaryButton, OutlineButton, Eyebrow } from "@/components/ui";

export const metadata = {
  title: "Frequently Asked Questions | Beyond Traveling Punta Mita",
  description:
    "Common questions from Punta Mita homeowners about pricing, availability, rentals, and how Beyond Traveling manages luxury properties.",
};

const QA = ({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) => (
  <div className="border-t border-bt-navy/10 py-8 first:border-t-0 first:pt-0 md:py-10">
    <h2 className="font-serif text-[22px] font-normal leading-tight text-bt-navy md:text-[24px]">
      {question}
    </h2>
    <p className="mt-3 max-w-[600px] font-light text-[15.5px] leading-[1.8] text-bt-charcoal/72">
      {children}
    </p>
  </div>
);

const FAQ_ITEMS = [
  {
    question: "Will I deal with one person, or a system?",
    answer:
      "You deal with people. We keep communication direct and avoid passing your home through layers of staff — you always know who is caring for your property, what's happening day to day, and why decisions are being made.",
  },
  {
    question: "Are there hidden fees?",
    answer:
      "No. Our fees are straightforward, and we actively look for ways to save you money — avoiding unnecessary maintenance and managing cleaning and supplies efficiently. We don't inflate costs, and we don't benefit when your expenses go up.",
  },
  {
    question: "Do you handle rentals, or only maintenance?",
    answer:
      "Both. We help with guest communication, property readiness, local coordination, and the details that support stronger rental performance — alongside the maintenance and oversight that protect the property itself.",
  },
  {
    question: "How available are you, really?",
    answer:
      "We live and work in Punta Mita, close to every home we manage. That means fast responses to guests, quick action when something needs attention, and real relationships with local vendors — not a \"we'll check on that Monday\" mentality.",
  },
  {
    question: "Do you take on every property that asks?",
    answer:
      "No. We work with a limited number of homeowners on purpose, so we can stay closely involved with each home rather than spreading ourselves across a large portfolio.",
  },
  {
    question: "Where do you work?",
    answer:
      "We focus on Punta Mita and nearby luxury homes in Riviera Nayarit.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-white pb-20 md:pb-0">
      <section className="bg-bt-cream">
        <Container>
          <div className="mx-auto max-w-[680px] py-20 text-center md:py-28">
            <Eyebrow>Frequently Asked Questions</Eyebrow>

            <h1 className="font-serif mt-6 text-4xl font-light leading-[1.12] tracking-[-0.01em] text-bt-navy md:text-[48px]">
              Questions Owners
              <br />
              <span className="italic text-bt-gold">Usually Ask Us First.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[460px] font-light text-[16px] leading-[1.85] text-bt-charcoal/72">
              A few honest answers before we talk. Anything not covered here
              is easiest to work through in a short conversation.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div className="mx-auto max-w-[680px] py-16 md:py-20">
            {FAQ_ITEMS.map((item) => (
              <QA key={item.question} question={item.question}>
                {item.answer}
              </QA>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-bt-navy/10 bg-bt-cream">
        <div className="mx-auto max-w-[600px] px-6 py-20 text-center md:py-28">
          <h2 className="font-serif text-3xl font-light leading-[1.2] tracking-[-0.01em] text-bt-navy md:text-[34px]">
            Still Have a Question?
          </h2>

          <p className="mx-auto mt-5 max-w-[420px] font-light text-[16px] leading-[1.8] text-bt-charcoal/72">
            The fastest answers come from a short conversation about your
            property specifically.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/contact">Contact Us</PrimaryButton>
            <OutlineButton href="/services">View Services</OutlineButton>
          </div>
        </div>
      </section>
    </main>
  );
}
