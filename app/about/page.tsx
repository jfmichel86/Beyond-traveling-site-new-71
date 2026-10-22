import React from "react";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "@/components/LocaleLink";
import type { Metadata } from "next";
import Container from "@/components/Container";
import MobileStickyCta from "@/components/MobileStickyCta";
import {
  PrimaryButton,
  Eyebrow,
  FullBleedPhoto,
  HairlineRow,
} from "@/components/ui";
import { pageAlternates } from "@/lib/seo";
import OwnerCta from "@/components/OwnerCta";

const SITE = "https://www.beyondtravelingmx.com";

export const metadata: Metadata = {
  title: { absolute: "About Beyond Traveling | Punta Mita Property Management" },
  description:
    "Meet the small local team behind Beyond Traveling: founded in 2023, we manage luxury homes in Punta Mita with clear pricing and direct communication.",
  alternates: pageAlternates("/about"),
  openGraph: {
    type: "website",
    url: "/about",
    title: "About Beyond Traveling | Punta Mita Property Management",
    description:
      "Meet the small local team behind Beyond Traveling: founded in 2023, we manage luxury homes in Punta Mita with clear pricing and direct communication.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Beyond Traveling — Punta Mita property management" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Beyond Traveling | Punta Mita Property Management",
    description:
      "Meet the small local team behind Beyond Traveling: founded in 2023, we manage luxury homes in Punta Mita with clear pricing and direct communication.",
    images: ["/og-image.jpg"],
  },
};

type TeamMember = {
  name: string;
  title: string;
  scope: string;
  /** Path under /public, e.g. "/about/team/francisco-michel.jpg". Leave empty until the photo is added. */
  photo?: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Francisco Michel",
    title: "Co-Founder & General Manager",
    scope: "Company direction, finances, and growth.",
  },
  {
    name: "Sandra Flores",
    title: "Co-Founder & Guest Experience Manager",
    scope: "Guest experience, rentals, and client acquisition.",
  },
  {
    name: "Andrés Castro",
    title: "Operations Manager",
    scope: "Property operations, maintenance, and on-site staff.",
  },
  {
    name: "Violeta Esparza",
    title: "Office Administrator",
    scope: "Administration, back-office, and rentals.",
  },
  {
    name: "Paloma Mejía",
    title: "Concierge & Social Media",
    scope: "Concierge service and social media.",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE}/about#page`,
      url: `${SITE}/about`,
      name: "About Beyond Traveling",
      inLanguage: "en",
      about: { "@id": `${SITE}/#business` },
      isPartOf: { "@type": "WebSite", url: SITE, name: "Beyond Traveling" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE}/about` },
      ],
    },
    ...TEAM.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.title,
      worksFor: { "@id": `${SITE}/#business` },
      ...(m.title.startsWith("Co-Founder") ? { "@id": `${SITE}/about#${m.name.toLowerCase().replace(/\s+/g, "-")}` } : {}),
    })),
  ],
};

const AboutHero = () => (
  <section className="bg-bt-cream">
    <Container>
      <div className="mx-auto max-w-[680px] py-20 text-center md:py-28">
        <Eyebrow>About Beyond Traveling</Eyebrow>

        <h1 className="font-serif mt-6 text-4xl font-light leading-[1.12] tracking-[-0.01em] text-bt-navy md:text-[50px]">
          Who We Are.
          <br />
          <span className="italic text-bt-gold-text">
            People You Can Actually Reach.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-[520px] font-normal text-[16px] leading-[1.75] text-bt-charcoal/85">
          Beyond Traveling is a Punta Mita property management and luxury rental
          company, founded in 2023 by a local team that believes in personal,
          present, and honest care for your home.
        </p>
      </div>
    </Container>
  </section>
);

const OurStory = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-[720px] px-6 py-20 text-center md:py-28">
      <Eyebrow as="h2">Our Story</Eyebrow>
      <blockquote className="font-serif mt-6 text-[28px] font-light italic leading-[1.4] text-bt-navy md:text-[34px]">
        We started this after seeing how disconnected owners felt from the people
        managing their homes.
      </blockquote>
      <p className="mx-auto mt-6 max-w-[540px] font-normal text-[16px] leading-[1.75] text-bt-charcoal/85">
        Left waiting for updates, unclear about costs, unsure who was actually
        looking after the property. Our goal was simple: work that feels direct
        and genuinely involved.
      </p>
      <p className="mx-auto mt-4 max-w-[540px] font-normal text-[16px] leading-[1.75] text-bt-charcoal/85">
        Since 2023, we have kept the team small on purpose. You know who looks
        after your home, and you can reach them directly.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <Link
          href="/services"
          className="inline-flex min-h-11 items-center border-b border-bt-gold text-[12.5px] font-medium uppercase tracking-[0.14em] text-bt-navy transition hover:border-bt-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-bt-navy focus-visible:ring-offset-2"
        >
          See How We Manage Properties
        </Link>
        <Link
          href="/properties"
          className="inline-flex min-h-11 items-center border-b border-bt-gold text-[12.5px] font-medium uppercase tracking-[0.14em] text-bt-navy transition hover:border-bt-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-bt-navy focus-visible:ring-offset-2"
        >
          Browse Our Villas
        </Link>
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[560px] text-center">
        <Eyebrow as="h2">Meet the Team</Eyebrow>
        <p className="mt-5 font-serif text-[24px] font-light italic leading-[1.4] text-bt-navy md:text-[28px]">
          A small team, on purpose. These are the people you will talk to.
        </p>
      </div>

      <ul className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-12 lg:gap-x-6">
        {TEAM.map((m) => (
          <li
            key={m.name}
            className="w-full text-center sm:w-[calc((100%_-_2rem)/2)] lg:w-[calc((100%_-_6rem)/5)]"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[240px] overflow-hidden bg-bt-sand">
              {m.photo ? (
                <Image
                  src={m.photo}
                  alt={`${m.name}, ${m.title} at Beyond Traveling`}
                  fill
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 45vw, 240px"
                  className="object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-full w-full items-center justify-center font-serif text-[56px] font-light text-bt-navy/70"
                >
                  {initials(m.name)}
                </div>
              )}
            </div>
            <h3 className="mt-6 font-serif text-[24px] font-normal leading-tight text-bt-navy">
              {m.name}
            </h3>
            <p className="mt-2 text-[12px] font-medium uppercase leading-[1.6] tracking-[0.12em] text-bt-gold-text sm:min-h-[2.4rem]">
              {m.title}
            </p>
            <p className="mx-auto mt-3 max-w-[260px] text-[14px] leading-[1.7] text-bt-charcoal/85">
              {m.scope}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/**
 * Group photo of the on-site staff (housekeeping + maintenance). No names or
 * bios on purpose. The real photo appears automatically once it exists at
 * /public/about/on-site-team.jpg. Until then a plain placeholder box is shown
 * while SHOW_ON_SITE_PLACEHOLDER is true; set it to false to hide the whole
 * section until the photo is uploaded.
 */
const ON_SITE_PHOTO = "/about/on-site-team.jpg";
const SHOW_ON_SITE_PLACEHOLDER = true;

const hasOnSitePhoto = () => {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", ON_SITE_PHOTO));
  } catch {
    return false;
  }
};

const OnSiteTeam = () => {
  const hasPhoto = hasOnSitePhoto();
  if (!hasPhoto && !SHOW_ON_SITE_PLACEHOLDER) return null;
  return (
    <section className="bg-white">
      <figure className="mx-auto max-w-[1100px] px-6 pb-20 md:pb-28">
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-bt-sand md:aspect-[16/9]">
          {hasPhoto && (
            <Image
              src={ON_SITE_PHOTO}
              alt="The housekeeping and maintenance team who look after the homes Beyond Traveling manages in Punta Mita"
              fill
              sizes="(min-width: 1148px) 1100px, 100vw"
              className="object-cover"
            />
          )}
        </div>
        <figcaption className="mt-6 text-center font-serif text-[22px] font-light italic leading-[1.4] text-bt-navy md:text-[26px]">
          The team that looks after your home every day.
        </figcaption>
      </figure>
    </section>
  );
};

export default function AboutPage() {
  return (
    <div className="bg-white pb-20 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AboutHero />

      <FullBleedPhoto
        src="/home/partnership.jpg"
        alt="Bright, open living room of a Punta Mita villa with sliding glass doors to the terrace and garden"
      />

      <OurStory />

      <HairlineRow
        columns={4}
        heading="What We Believe"
        items={[
          {
            title: "Transparency",
            body: "Clear pricing and no hidden fees, so you always know where your money goes.",
          },
          {
            title: "Availability",
            body: "A quick answer when you reach out. We reply within one hour during the day.",
          },
          {
            title: "Local Presence",
            body: "We are based in Punta Mita and take on a limited number of properties, so each one gets real attention.",
          },
          {
            title: "Direct",
            body: "You deal with the people who run your property, never a call center.",
          },
        ]}
      />

      <TeamSection />

      <OnSiteTeam />

      <OwnerCta />
      <MobileStickyCta contactHref="/contact/owners" contactLabel="Talk With Us" />
    </div>
  );
}
