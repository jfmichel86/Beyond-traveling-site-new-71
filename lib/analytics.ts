// Google Analytics 4 helpers. Analytics only runs when NEXT_PUBLIC_GA_ID is set
// (Vercel → Settings → Environment Variables), e.g. "G-ABC123XYZ4".
const RAW_ID = process.env.NEXT_PUBLIC_GA_ID?.trim();
export const GA_ID = RAW_ID && /^G-[A-Z0-9]{4,}$/.test(RAW_ID) ? RAW_ID : undefined;

type EventParams = Record<string, string | number | boolean>;

/** Send a custom event to Google Analytics (does nothing if analytics is off). */
export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
