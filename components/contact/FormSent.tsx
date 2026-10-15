"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/language-context";

/**
 * Shown after a WhatsApp form is submitted. WhatsApp only receives the message
 * once the visitor presses send there, so this says exactly that, offers a
 * link in case the app didn't open, and lets them start over.
 */
export default function FormSent({ url, onReset }: { url: string; onReset: () => void }) {
  const { language } = useLanguage();
  const es = language === "es";
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="status"
      aria-live="polite"
      className="border border-bt-navy/15 bg-bt-cream px-6 py-10 text-center outline-none"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#B8863E"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="7.5 12.5 10.5 15.5 16.5 9" />
      </svg>

      <h3 className="font-serif mt-5 text-[28px] font-light leading-[1.2] text-bt-navy">
        {es ? "Un último paso: presiona enviar en WhatsApp" : "One last step: press send in WhatsApp"}
      </h3>

      <p className="mx-auto mt-4 max-w-[420px] text-[15px] leading-[1.75] text-bt-charcoal/85">
        {es
          ? "Abrimos WhatsApp con tus datos ya escritos. Tu mensaje nos llega cuando presionas enviar. Respondemos en menos de 1 hora durante el día."
          : "We opened WhatsApp with your details already filled in. Your message reaches us once you press send. We reply within 1 hour during the day."}
      </p>

      <p className="mt-6 text-[14px] text-bt-charcoal/85">
        {es ? "¿No se abrió? " : "Nothing opened? "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-bt-navy underline underline-offset-4 hover:text-bt-gold-text"
        >
          {es ? "Abrir WhatsApp" : "Open WhatsApp"}
        </a>
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-5 text-[13px] font-medium text-bt-navy/80 underline underline-offset-4 hover:text-bt-navy"
      >
        {es ? "Enviar otra consulta" : "Send another inquiry"}
      </button>
    </div>
  );
}
