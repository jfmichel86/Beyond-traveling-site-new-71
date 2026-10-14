"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fades in every .reveal element as it enters the viewport. Mounted once in
 * the root layout so it covers every page. Re-scans whenever the route
 * changes, since the root layout doesn't remount between client-side
 * navigations and new .reveal elements can appear on the next page.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal:not(.in)").forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, [pathname]);

  return null;
}
