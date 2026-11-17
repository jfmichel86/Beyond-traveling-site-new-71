// Spanish twin of the English page — same content, /es URL, Spanish metadata (not indexed).
import Page from "@/app/groceries/page";

export default Page;
export const revalidate = 60;

const title = "Despensa Antes de tu Llegada | Beyond Traveling";
const description =
  "Llega a una villa lista. Elige botanas, bebidas, el bar y la despensa en línea y envía tu lista a nuestro concierge.";

export const metadata = {
  title: { absolute: title },
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: "https://www.beyondtravelingmx.com/es/groceries",
    type: "website",
    locale: "es_MX",
    images: [{ url: "/groceries/groceries-preview.jpg", width: 1200, height: 630, alt: "Despensa, fruta, botanas y bebidas en la cocina de una villa" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/groceries/groceries-preview.jpg"],
  },
};
