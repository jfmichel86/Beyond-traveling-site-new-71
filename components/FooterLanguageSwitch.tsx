"use client";

import React from "react";
import { useLanguage } from "@/lib/language-context";

/**
 * EN / ES switch for the footer. The footer itself stays a server component
 * (the site translates visible text through the DOM translator in
 * language-context); only this small control needs client state.
 */
export default function FooterLanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const options = [
    { code: "en" as const, label: "EN", name: "English" },
    { code: "es" as const, label: "ES", name: "Español" },
  ];

  return (
    <div className="flex items-center" role="group" aria-label="Language">
      {options.map((option, i) => (
        <React.Fragment key={option.code}>
          {i > 0 && (
            <span aria-hidden="true" className="text-bt-navy/25">
              /
            </span>
          )}
          <button
            type="button"
            lang={option.code}
            aria-label={option.name}
            aria-pressed={language === option.code}
            onClick={() => setLanguage(option.code)}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center px-2 text-[12px] font-medium tracking-[0.12em] transition-colors hover:text-bt-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-bt-navy ${
              language === option.code
                ? "text-bt-navy underline decoration-bt-gold decoration-1 underline-offset-[6px]"
                : "text-bt-navy/80"
            }`}
          >
            {option.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
}
