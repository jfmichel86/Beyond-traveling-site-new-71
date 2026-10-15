"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { isEsPath } from "@/lib/locale";
import { WA_MESSAGES, whatsappUrl, type WaAudience } from "@/lib/whatsapp";

/** WhatsApp link with a prefilled message in the visitor's language. */
export default function WhatsAppLink({
  audience,
  className,
  children,
}: {
  audience: WaAudience;
  className?: string;
  children: React.ReactNode;
}) {
  const es = isEsPath(usePathname() || "/");
  return (
    <a
      href={whatsappUrl(WA_MESSAGES[audience][es ? "es" : "en"])}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
