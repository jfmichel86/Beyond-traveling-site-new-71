"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { isEsPath } from "@/lib/locale";

/**
 * Anchor whose link differs by language — used for WhatsApp and email links
 * whose prefilled text should be in the visitor's language.
 */
export default function BilingualAnchor({
  hrefEn,
  hrefEs,
  children,
  ...rest
}: { hrefEn: string; hrefEs: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const es = isEsPath(usePathname() || "/");
  return (
    <a href={es ? hrefEs : hrefEn} {...rest}>
      {children}
    </a>
  );
}
