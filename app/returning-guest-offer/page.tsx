import React from "react";
import Link from "@/components/LocaleLink";
import Container from "@/components/Container";
import EsText from "@/components/EsText";

// Terms of the thank-you offer sent to guests after check-out.
// Linked from the thank-you email; not listed in the sitemap and not indexed.
export const metadata = {
  title: { absolute: "Returning Guest Offer – Terms | Beyond Traveling Punta Mita" },
  description:
    "Terms of the 10% returning guest offer, referral program and survey thank-you gift for guests of Beyond Traveling and Mexican Reserve.",
  alternates: { canonical: "/returning-guest-offer" },
  robots: { index: false, follow: true },
};

const linkClass = "text-bt-navy underline underline-offset-2 hover:text-bt-gold";

const Section = ({
  number,
  en,
  es,
  children,
}: {
  number: string;
  en: string;
  es: string;
  children: React.ReactNode;
}) => (
  <div className="border-t border-bt-navy/10 py-8 first:border-t-0 first:pt-0 md:py-10">
    <div className="flex items-baseline gap-3">
      <span className="font-serif text-[15px] italic text-bt-gold">{number}</span>
      <h2 className="font-serif text-[22px] leading-tight text-bt-navy md:text-[26px]">
        <EsText en={en} es={es} />
      </h2>
    </div>
    <div className="mt-3 max-w-[680px] font-normal text-[16px] leading-[1.75] text-slate-900/80">
      {children}
    </div>
  </div>
);

const P = ({ en, es }: { en: string; es: string }) => (
  <p className="mb-3 last:mb-0">
    <EsText en={en} es={es} />
  </p>
);

export default function ReturningGuestOfferPage() {
  return (
    <main className="bg-white pb-20 md:pb-0">
      <section className="bg-white">
        <Container>
          <div className="reveal mx-auto max-w-[760px] py-16 text-center md:py-24">
            <p className="mb-5 text-[13px] font-medium uppercase tracking-[0.14em] text-slate-900/75">
              <EsText en="Offer terms" es="Términos de la oferta" />
            </p>

            <h1 className="mx-auto max-w-[760px] font-serif text-4xl leading-[1.06] tracking-[-0.025em] text-bt-navy md:text-6xl">
              <EsText en="Returning Guest" es="Oferta para" />
              <span className="block italic text-[0.78em] leading-[1.15] text-bt-gold">
                <EsText en="Offer." es="Huéspedes Recurrentes." />
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[620px] font-normal text-[17px] leading-[1.75] text-slate-900/80">
              <EsText
                en="A thank-you to the guests who have stayed with us: how your 10% code, the referral program and the survey gift work."
                es="Un agradecimiento para quienes se han hospedado con nosotros: cómo funcionan su código de 10%, el programa de recomendación y el regalo por responder la encuesta."
              />
            </p>

            <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.14em] text-slate-900/70">
              <EsText en="Last updated: November 2026" es="Última actualización: noviembre 2026" />
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <div className="reveal mx-auto max-w-[720px] pb-16 md:pb-20">
            <Section number="01" en="The Offer" es="La oferta">
              <P
                en="After your stay, we send you a personal code for 10% off the rental rate of one new reservation booked directly with Beyond Traveling or Mexican Reserve. The discount applies to the rental rate only; taxes, deposits, service fees and additional services are not discounted."
                es="Después de su estancia, le enviamos un código personal con 10% de descuento en la tarifa de renta de una nueva reservación hecha directamente con Beyond Traveling o Mexican Reserve. El descuento aplica solo sobre la tarifa de renta; impuestos, depósitos, cuotas de servicio y servicios adicionales no tienen descuento."
              />
            </Section>

            <Section number="02" en="Where It Applies" es="Dónde aplica">
              <P
                en="Valid at all Beyond Traveling villas. At Mexican Reserve, the offer applies to selected properties; our reservations team confirms eligibility when preparing your quote."
                es="Válido en todas las villas de Beyond Traveling. En Mexican Reserve, la oferta aplica en propiedades seleccionadas; nuestro equipo de reservaciones confirma la elegibilidad al preparar su cotización."
              />
            </Section>

            <Section number="03" en="Validity" es="Vigencia">
              <P
                en="Your code is valid for 12 months after your check-out date. The exact expiry date appears in your thank-you email. The new reservation must be booked before that date."
                es="Su código es válido durante 12 meses después de su fecha de salida. La fecha exacta de vencimiento aparece en su correo de agradecimiento. La nueva reservación debe hacerse antes de esa fecha."
              />
            </Section>

            <Section number="04" en="Peak Weeks" es="Semanas pico">
              <P
                en="The offer excludes peak weeks, including Christmas, New Year, Easter / Semana Santa and other high-demand periods."
                es="La oferta no aplica en semanas pico, incluyendo Navidad, Año Nuevo, Semana Santa y otros periodos de alta demanda."
              />
            </Section>

            <Section number="05" en="Direct Bookings Only" es="Solo reservaciones directas">
              <P
                en="The code is valid only for reservations made directly with Beyond Traveling or Mexican Reserve. It does not apply to bookings made through platforms such as Airbnb or Vrbo, or through travel agencies."
                es="El código es válido solo para reservaciones hechas directamente con Beyond Traveling o Mexican Reserve. No aplica en reservaciones hechas a través de plataformas como Airbnb o Vrbo, ni a través de agencias de viajes."
              />
            </Section>

            <Section number="06" en="Refer a Friend" es="Recomiende a un amigo">
              <P
                en="You may share your code with a friend. When a friend books directly with us using your code, they receive 10% off the rental rate of their stay, and once their stay is completed, you receive another 10% off your next stay. The same conditions in this page apply to both discounts."
                es="Puede compartir su código con un amigo. Cuando un amigo reserve directamente con nosotros usando su código, recibirá 10% de descuento en la tarifa de renta de su estancia y, una vez concluida, usted recibirá otro 10% de descuento en su próxima estancia. Las mismas condiciones de esta página aplican a ambos descuentos."
              />
            </Section>

            <Section number="07" en="Survey Thank-You Gift" es="Regalo por responder la encuesta">
              <P
                en="Guests who complete our post-stay survey receive a complimentary welcome dinner service on their next stay booked directly with us within the validity of their code."
                es="Los huéspedes que respondan nuestra encuesta después de su estancia reciben un servicio de cena de bienvenida de cortesía en su próxima estancia reservada directamente con nosotros dentro de la vigencia de su código."
              />
            </Section>

            <Section number="08" en="How to Redeem" es="Cómo usarlo">
              <p>
                <EsText
                  en="Mention your code when you request your quote, or simply use the “Plan Your Return” button in your thank-you email. You can also write to "
                  es="Mencione su código al solicitar su cotización, o use el botón “Planee su regreso” de su correo de agradecimiento. También puede escribirnos a "
                />
                <a href="mailto:rentals@beyondtravelingmx.com" className={linkClass}>
                  rentals@beyondtravelingmx.com
                </a>
                .
              </p>
            </Section>

            <Section number="09" en="General Conditions" es="Condiciones generales">
              <P
                en="One code per reservation. The offer cannot be combined with any other offer, promotion or discount, and has no cash value. We may modify or end this offer at any time; reservations already confirmed with the discount are not affected."
                es="Un código por reservación. La oferta no es acumulable con otras ofertas, promociones o descuentos, y no tiene valor en efectivo. Podemos modificar o terminar esta oferta en cualquier momento; las reservaciones ya confirmadas con el descuento no se ven afectadas."
              />
              <p className="mt-3">
                <EsText en="See also our " es="Consulte también nuestros " />
                <Link href="/terms-and-conditions" className={linkClass}>
                  <EsText en="Terms & Conditions" es="Términos y Condiciones" />
                </Link>{" "}
                <EsText en="and " es="y nuestra " />
                <Link href="/cancellation-policy" className={linkClass}>
                  <EsText en="Cancellation Policy" es="Política de Cancelación" />
                </Link>
                .
              </p>
            </Section>
          </div>
        </Container>
      </section>
    </main>
  );
}
