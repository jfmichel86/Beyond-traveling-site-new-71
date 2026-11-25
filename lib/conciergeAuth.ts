// ─────────────────────────────────────────────────────────────
// Concierge panel sign-in: "Sign in with Google", only for the company's
// Google Workspace accounts (@beyondtravelingmx.com or @mexicanreserve.com). No extra service or package:
// Google's OAuth + a signed cookie.
// Vercel env: GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, CONCIERGE_SESSION_SECRET
// (optional CONCIERGE_ALLOWED_EMAILS = comma-separated list to restrict further).
// Server-only.
// ─────────────────────────────────────────────────────────────

import crypto from "crypto";
import { cookies } from "next/headers";

/** The company's Google Workspace domains (one organization, primary mexicanreserve.com). */
export const ALLOWED_DOMAINS = ["beyondtravelingmx.com", "mexicanreserve.com"];
export const SESSION_COOKIE = "bt_concierge";
export const STATE_COOKIE = "bt_concierge_state";
const SESSION_DAYS = 30;

export type ConciergeSession = { email: string; name: string; exp: number };

const secret = () => process.env.CONCIERGE_SESSION_SECRET || "";
export const googleReady = () => !!(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && secret());

/** Local preview only: without Google set up, `npm run dev` lets you in as a test user. */
export const devBypass = () => process.env.NODE_ENV === "development" && !googleReady();

const b64 = (s: string) => Buffer.from(s).toString("base64url");
const hmac = (s: string) => crypto.createHmac("sha256", secret()).update(s).digest("base64url");

export function signSession(s: ConciergeSession): string {
  const body = b64(JSON.stringify(s));
  return `${body}.${hmac(body)}`;
}

function verify(token: string | undefined): ConciergeSession | null {
  if (!token || !secret()) return null;
  const [body, sig] = token.split(".");
  if (!body || !sig) return null;
  const good = hmac(body);
  if (good.length !== sig.length || !crypto.timingSafeEqual(Buffer.from(good), Buffer.from(sig))) return null;
  try {
    const s = JSON.parse(Buffer.from(body, "base64url").toString()) as ConciergeSession;
    return s.exp > Date.now() ? s : null;
  } catch {
    return null;
  }
}

export function getSession(): ConciergeSession | null {
  if (devBypass()) return { email: "prueba@local", name: "Modo local", exp: Date.now() + 3600_000 };
  return verify(cookies().get(SESSION_COOKIE)?.value);
}

export const newSession = (email: string, name: string): ConciergeSession => ({
  email,
  name,
  exp: Date.now() + SESSION_DAYS * 86400_000,
});

export const cookieOptions = (maxAgeSec: number) => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: maxAgeSec,
});
export const SESSION_MAX_AGE = SESSION_DAYS * 86400;

export const callbackUrl = (origin: string) => `${process.env.CONCIERGE_BASE_URL || origin}/api/concierge/auth/callback`;

export function googleAuthUrl(origin: string, state: string): string {
  const u = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  u.searchParams.set("client_id", process.env.GOOGLE_CLIENT_ID || "");
  u.searchParams.set("redirect_uri", callbackUrl(origin));
  u.searchParams.set("response_type", "code");
  u.searchParams.set("scope", "openid email profile");
  u.searchParams.set("prompt", "select_account");
  u.searchParams.set("state", state);
  return u.toString();
}

/** Who may sign in: a verified account of the company's Workspace (and on the optional list). */
export function isAllowed(email: string, hd?: string): boolean {
  const e = email.toLowerCase();
  const domain = e.split("@")[1] || "";
  if (!ALLOWED_DOMAINS.includes(domain)) return false;
  if (hd && !ALLOWED_DOMAINS.includes(hd.toLowerCase())) return false;
  const list = (process.env.CONCIERGE_ALLOWED_EMAILS || "").split(",").map((x) => x.trim().toLowerCase()).filter(Boolean);
  return !list.length || list.includes(e);
}
