"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { isEsPath } from "@/lib/locale";
import {
  WA_MESSAGES,
  serviceMessage,
  whatsappUrl,
  type WaTopic,
} from "@/lib/whatsapp";

/**
 * WhatsApp link with a prefilled message in the visitor's language that fits
 * the page.
 * `topic="service"` needs `serviceEn` / `serviceEs` (the service's name).
 */
export default function WhatsAppLink({
  topic,
  audience,
  serviceEn,
  serviceEs,
  className,
  children,
  ...rest
}: {
  topic?: WaTopic;
  /** Older name for `topic` ("owner" | "guest"). */
  audience?: "owner" | "guest";
  serviceEn?: string;
  serviceEs?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">) {
  const pathname = usePathname() || "/";
  const es = isEsPath(pathname);
  const t: WaTopic = topic ?? audience ?? "owner";
  const msg =
    t === "service"
      ? serviceMessage(serviceEn ?? "management", serviceEs ?? serviceEn ?? "administración")
      : WA_MESSAGES[t];
  const text = es ? msg.es : msg.en;
  return (
    <a
      {...rest}
      href={whatsappUrl(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
