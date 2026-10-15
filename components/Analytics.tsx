"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_ID, trackEvent } from "@/lib/analytics";

/**
 * Google Analytics 4 + automatic click tracking for the actions that matter:
 *   whatsapp_click, phone_click, email_click,
 *   consultation_click (owners' contact page), reservation_click (guests' page).
 * One delegated listener watches every link, so new buttons are tracked
 * without extra code. Nothing is sent unless NEXT_PUBLIC_GA_ID is set.
 */
export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const a = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;

      const href = a.getAttribute("href") || "";
      let name: string | null = null;
      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(href)) name = "whatsapp_click";
      else if (href.startsWith("tel:")) name = "phone_click";
      else if (href.startsWith("mailto:")) name = "email_click";
      else {
        const path = href.split(/[?#]/)[0].replace(/^\/es(?=\/|$)/, "");
        if (path === "/contact/owners") name = "consultation_click";
        else if (path === "/contact/reservations") name = "reservation_click";
      }
      if (!name) return;

      trackEvent(name, {
        link_text: (a.textContent || "").trim().slice(0, 60),
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{allow_google_signals:false,allow_ad_personalization_signals:false});`}
      </Script>
    </>
  );
}
