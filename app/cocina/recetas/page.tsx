import React from "react";
import RecipeReview from "./RecipeReview";
import { BREAKFAST_RECIPES } from "@/lib/kitchenRecipes";

// Private page for villa cooks to review recipe amounts — not in Google.
const title = "Revisión de recetas del desayuno | Beyond Traveling";
const description =
  "Para la cocina: revisa las cantidades de cada platillo del desayuno, ajusta lo necesario y envía tus cambios por WhatsApp.";

export const metadata = {
  title: { absolute: title },
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: "https://www.beyondtravelingmx.com/cocina/recetas",
    type: "website",
    locale: "es_MX",
    images: [{ url: "/cocina/recetas-preview.jpg", width: 1200, height: 630, alt: "Chilaquiles, huevos rancheros y hot cakes" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/cocina/recetas-preview.jpg"],
  },
};

// Recipe changes from the cook go to this WhatsApp (country code + number, digits only)
export default function CookRecipeReviewPage() {
  return (
    <div translate="no" className="min-h-screen bg-bt-cream/40">
      <RecipeReview dishes={BREAKFAST_RECIPES} whatsapp="523221292966" title="Desayunos" />
    </div>
  );
}
