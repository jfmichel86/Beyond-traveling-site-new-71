// Spanish twin of the English page — same content, /es URL, Spanish metadata (not indexed).
import Page from "@/app/groceries/page";

export default Page;
export const revalidate = 60;
export const metadata = {
  title: { absolute: "Despensa Antes de tu Llegada | Beyond Traveling" },
  description:
    "Elige la despensa que quieres encontrar en tu villa en Punta Mita y envía tu lista a nuestro concierge.",
  robots: { index: false, follow: false },
};
