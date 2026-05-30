import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Managed Properties in Punta Mita | Beyond Traveling",
  description:
    "Homes currently looked after by Beyond Traveling in Punta Mita. Luxury property management with direct communication, local care, guest support, and a limited portfolio.",
};

type CardProps = {
  src: string;
  title: string;
  slug: string;
  description: string;
  priority?: boolean;
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

const OutlineButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link
    href={href}
    className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-900/35 bg-white/55 px-5 text-[15px] font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
  >
    {children}
  </Link>
);

const ValueCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur">
    <p className="text-[14px] font-semibold text-slate-900">{title}</p>
    <p className="mt-1 text-[13px] leading-6 text-slate-900/65">
      {children}
    </p>
  </div>
);

function Card({ src, title, slug, description, priority = false }: CardProps) {
  return (
    <Link
      href={`/properties/${slug}`}
      aria-label={`View ${title}`}
      className="group block focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-4"
    >
      <article className="overflow-hidden rounded-2xl border border-slate-900/10 bg-white shadow-sm transition duration-300 group-hover:-translate-y-[2px] group-hover:shadow-[0_20px_55px_rgba(15,23,42,0.12)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={src}
            alt={`${title}, a luxury home managed by Beyond Traveling in Punta Mita`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_55%,rgba(15,23,42,0.18)_100%)]" />
        </div>

        <div className="bg-white p-6">
          <h2 className="font-serif text-2xl leading-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700">
            {title}
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-slate-900/68">
            {description}
          </p>

          <p className="mt-5 text-[14px] font-semibold text-slate-900 underline decoration-slate-900/20 underline-offset-4 transition group-hover:decoration-slate-900">
            View property
          </p>
        </div>
      </article>
    </Link>
  );
}

const MobileStickyCta = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-900/10 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
    <div className="grid grid-cols-2 gap-3">
      <a
        href="https://wa.me/523313619889"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-900/25 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
      >
        WhatsApp
      </a>

      <Link
        href="/contact"
        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-900 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
      >
        Contact
      </Link>
    </div>
  </div>
);

export default function Properties() {
  return (
    <main className="pb-20 md:pb-0">
      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-16 text-center md:py-24">
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.18em] text-slate-900/60">
            Managed properties in Punta Mita
          </p>

          <h1 className="mx-auto max-w-[820px] font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-slate-900 md:text-6xl">
            Homes We Currently Look After
          </h1>

          <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.75] text-slate-900/72">
            Each property here is personally managed and closely overseen. We
            do not list homes we do not manage — and we do not manage more than
            we can handle well.
          </p>

          <div className="mx-auto mt-8 grid max-w-[760px] gap-3 sm:grid-cols-3">
            <ValueCard title="Limited portfolio">
              We only take on homes we can properly look after.
            </ValueCard>

            <ValueCard title="Direct oversight">
              Owners work with people who know the property.
            </ValueCard>

            <ValueCard title="Rental-minded care">
              Guest experience and property care work together.
            </ValueCard>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1100px] px-6">
        <div className="border-t border-slate-200" />
      </div>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <Card
              src="/properties/villa-amore.jpg"
              title="Villa Amore"
              slug="villa-amore"
              description="Ocean-view villa in Punta Mita with private pool, daily service, and access to premier beach clubs."
              priority
            />

            <Card
              src="/properties/villa-llamas.jpg"
              title="Villa Llamas"
              slug="villa-llamas"
              description="Spacious coastal home designed for relaxed stays, with open living areas and seamless indoor-outdoor flow."
              priority
            />

            <Card
              src="/properties/villa-brezza.jpg"
              title="Villa Brezza"
              slug="villa-brezza"
              description="Contemporary villa with clean architectural lines, ocean views, and thoughtfully designed living spaces."
            />

            <Card
              src="/properties/las-palmas-28.jpg"
              title="Las Palmas 28"
              slug="las-palmas-28"
              description="Comfortable villa within Punta Mita, offering privacy, convenience, and close access to golf and beach clubs."
            />
          </div>
        </div>
      </section>

      <section className="border-t border-slate-900/8 bg-[#f1f4f8]">
        <div className="mx-auto max-w-[900px] px-6 py-14 text-center md:py-20">
          <h2 className="font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-slate-900 md:text-5xl">
            Our portfolio grows through trust and referrals — not volume.
          </h2>

          <p className="mx-auto mt-5 max-w-[720px] text-[17px] leading-[1.75] text-slate-900/72">
            If you are looking for a team that will know your home, answer
            directly, protect the property, and care about rental results, we’d
            be happy to talk.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton href="/contact">
              Talk With Us About Your Property
            </PrimaryButton>

            <OutlineButton href="/services">View Services</OutlineButton>
          </div>
        </div>
      </section>

      <MobileStickyCta />
    </main>
  );
}
