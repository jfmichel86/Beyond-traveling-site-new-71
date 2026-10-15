"use client";

import React from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { isEsPath, localizeHref } from "@/lib/locale";

/**
 * Drop-in replacement for next/link. On the Spanish site (/es/...) internal
 * links point to their /es twin, so Spanish visitors (and Google) stay in
 * Spanish. The language comes from the URL, so server HTML already has the
 * right hrefs.
 */
const LocaleLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof NextLink>
>(function LocaleLink({ href, ...props }, ref) {
  const pathname = usePathname() || "/";
  const es = isEsPath(pathname);
  const finalHref = typeof href === "string" ? localizeHref(href, es) : href;
  return <NextLink ref={ref} href={finalHref} {...props} />;
});

export default LocaleLink;
