// Spanish twin of the English page — same content, /es URL, Spanish metadata (not indexed).
import Page from "@/app/returning-guest-offer/page";

export default Page;
export const metadata = {
  title: { absolute: "Oferta para Huéspedes Recurrentes – Términos | Beyond Traveling Punta Mita" },
  description:
    "Términos de la oferta de 10% para huéspedes recurrentes, el programa de recomendación y el regalo por responder la encuesta de Beyond Traveling y Mexican Reserve.",
  alternates: { canonical: "/es/returning-guest-offer" },
  robots: { index: false, follow: true },
};
