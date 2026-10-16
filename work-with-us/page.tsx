import React from "react";
import Container from "@/components/Container";
import { Eyebrow } from "@/components/ui";
import {
  ContactHero,
  IncludeList,
} from "@/components/contact/ContactShell";
import { pageAlternates } from "@/lib/seo";
import { mailtoUrl } from "@/lib/mailto";
import BilingualAnchor from "@/components/BilingualAnchor";

// A recruiting / vendor page isn't something we want ranking in search.
export const metadata = {
  title: "Work With Us | Careers & Vendors in Punta Mita",
  description:
    "Join the Beyond Traveling team in Punta Mita, or offer your services to our guests and properties.",
  alternates: pageAlternates("/contact/work-with-us"),
  robots: { index: false, follow: true },
};

const EMAIL = "info@beyondtravelingmx.com";

const mailtoFor = (subject: string, fields: string[], es = false) =>
  mailtoUrl(EMAIL, subject, [es ? "Hola," : "Hello,", "", ...fields, "", es ? "¡Gracias!" : "Thank you!"]);

const jobMailto = mailtoFor("Job inquiry", [
  "Name:",
  "Role you are interested in:",
  "Experience and languages:",
  "Link to your CV or portfolio:",
]);
const jobMailtoEs = mailtoFor(
  "Consulta de empleo",
  [
    "Nombre:",
    "Puesto que te interesa:",
    "Experiencia e idiomas que hablas:",
    "Enlace a tu CV o portafolio:",
  ],
  true
);

const vendorMailto = mailtoFor("Service provider inquiry", [
  "Name and company:",
  "Service you offer:",
  "Area you cover:",
  "Website or portfolio:",
]);
const vendorMailtoEs = mailtoFor(
  "Consulta de proveedor de servicios",
  [
    "Nombre y empresa:",
    "Servicio que ofreces:",
    "Zona que cubres:",
    "Sitio web o portafolio:",
  ],
  true
);

const mailButton =
  "inline-flex min-h-11 items-center justify-center rounded-sm bg-bt-navy px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition duration-150 hover:bg-bt-navy-light focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2 active:scale-[0.98]";

const Block = ({
  id,
  eyebrow,
  title,
  body,
  includes,
  cta,
  href,
  hrefEs,
  divider,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  includes: string[];
  cta: string;
  href: string;
  hrefEs: string;
  divider?: boolean;
}) => (
  <div id={id} className={`min-w-0 scroll-mt-32 ${divider ? "md:border-l md:border-bt-navy/15 md:pl-16" : ""}`}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="font-serif mt-4 text-[30px] font-light leading-[1.15] text-bt-navy md:text-[34px]">
      {title}
    </h2>
    <p className="mt-4 max-w-[420px] text-[15.5px] font-normal leading-[1.75] text-bt-charcoal/85">
      {body}
    </p>

    <p className="mt-8 text-[14px] font-medium text-bt-navy">Please include</p>
    <IncludeList items={includes} />

    <div className="mt-8">
      <BilingualAnchor hrefEn={href} hrefEs={hrefEs} className={mailButton}>
        {cta}
      </BilingualAnchor>
      <p className="mt-4 text-[13.5px] font-normal text-bt-charcoal/85">
        Or write to{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="border-b border-bt-gold/50 pb-px font-medium text-bt-navy"
        >
          {EMAIL}
        </a>
      </p>
    </div>
  </div>
);

export default function WorkWithUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero
        eyebrow="Staff & Vendors"
        title="Work With"
        accent="Beyond Traveling."
      >
        Whether you would like to join our team or offer your services to our
        guests and our properties, we would like to hear from you.
      </ContactHero>

      <section className="bg-white">
        <Container>
          <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-16 py-20 md:grid-cols-2 md:gap-16 md:py-24">
            <Block
              id="careers"
              eyebrow="Careers"
              title="Join Our Team"
              body="If you would like to work with us in property management, rentals, or on-site and guest-service roles, send us your details. We will be in touch if there is a fit."
              includes={[
                "Your name and contact details",
                "The role you are interested in",
                "Your experience and the languages you speak",
                "A link to your CV or portfolio",
              ]}
              cta="Email Your Details"
              href={jobMailto}
              hrefEs={jobMailtoEs}
            />
            <Block
              id="vendors"
              divider
              eyebrow="Vendors"
              title="Offer Your Services"
              body="If you provide a service our guests or our properties could benefit from, tell us what you do and where you work."
              includes={[
                "Your name and company",
                "The service you offer",
                "The area you cover",
                "Your website or portfolio",
              ]}
              cta="Email Your Proposal"
              href={vendorMailto}
              hrefEs={vendorMailtoEs}
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
