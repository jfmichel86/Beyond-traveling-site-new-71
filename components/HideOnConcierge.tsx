"use client";

import React from "react";
import { usePathname } from "next/navigation";

/** The concierge panel (/concierge) has its own header: hide the site's header, footer and WhatsApp button there. */
export default function HideOnConcierge({ children }: { children: React.ReactNode }) {
  const path = usePathname() || "";
  if (path === "/concierge" || path.startsWith("/concierge/")) return null;
  return <>{children}</>;
}
