"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { isEsPath } from "@/lib/locale";
import { ES_SERVICE_NAMES } from "@/lib/services";

/**
 * A service's two-part name, e.g. "Home" + italic "Watch". In English it
 * renders exactly as before; on the Spanish site it swaps in the Spanish
 * name (and tells the DOM translator to leave it alone).
 */
export default function ServiceName({
  title,
  italic,
  italicClassName = "italic",
  plain = false,
}: {
  title: string;
  italic: string;
  /** Class for the italic half (ignored when `plain`). */
  italicClassName?: string;
  /** Render as one run of text, with no italic span. */
  plain?: boolean;
}) {
  const es = isEsPath(usePathname() || "/");
  const names = es ? ES_SERVICE_NAMES[`${title}|${italic}`] : undefined;
  const [first, second] = names ?? [title, italic];

  const body = plain ? (
    <>
      {first} {second}
    </>
  ) : (
    <>
      {first} <span className={italicClassName}>{second}</span>
    </>
  );

  return names ? <span translate="no">{body}</span> : body;
}
