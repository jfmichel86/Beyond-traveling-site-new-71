import React from "react";
import RecipeReview from "./RecipeReview";
import { BREAKFAST_RECIPES } from "@/lib/kitchenRecipes";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

// Private page for villa cooks to review recipe amounts — not in Google.
export const metadata = {
  title: { absolute: "Revisión de recetas – Cocina | Beyond Traveling" },
  description: "Revisión de las recetas del desayuno para la cocina.",
  robots: { index: false, follow: false },
};

export default function CookRecipeReviewPage() {
  return (
    <div translate="no" className="min-h-screen bg-bt-cream/40">
      <RecipeReview dishes={BREAKFAST_RECIPES} whatsapp={WHATSAPP_NUMBER} title="Desayunos" />
    </div>
  );
}
