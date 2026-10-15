"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { isEsPath } from "@/lib/locale";

/**
 * A short piece of text with an explicit Spanish version, for the few places
 * where the word-by-word dictionary can't work (e.g. two halves of a heading
 * that must be recombined). English renders unchanged.
 */
export default function EsText({ en, es }: { en: string; es: string }) {
  const isEs = isEsPath(usePathname() || "/");
  return isEs ? <span translate="no">{es}</span> : <>{en}</>;
}
