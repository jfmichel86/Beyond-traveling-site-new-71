// Google sends the person back here after signing in.
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  callbackUrl,
  cookieOptions,
  isAllowed,
  newSession,
  SESSION_COOKIE,
  SESSION_MAX_AGE,
  signSession,
  STATE_COOKIE,
} from "@/lib/conciergeAuth";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const origin = url.origin;
  const fail = (why: string) => NextResponse.redirect(`${origin}/concierge/login?error=${why}`);

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  if (!code || !state || state !== cookies().get(STATE_COOKIE)?.value) return fail("state");

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: process.env.GOOGLE_CLIENT_ID || "",
      client_secret: process.env.GOOGLE_CLIENT_SECRET || "",
      redirect_uri: callbackUrl(origin),
      grant_type: "authorization_code",
    }),
    cache: "no-store",
  });
  if (!tokenRes.ok) return fail("google");
  const { id_token } = (await tokenRes.json()) as { id_token?: string };
  if (!id_token) return fail("google");

  // The ID token comes straight from Google's token endpoint over HTTPS, so its claims can be read directly.
  let claims: { email?: string; email_verified?: boolean; hd?: string; name?: string; aud?: string; iss?: string };
  try {
    claims = JSON.parse(Buffer.from(id_token.split(".")[1], "base64url").toString());
  } catch {
    return fail("google");
  }
  const okIssuer = claims.iss === "https://accounts.google.com" || claims.iss === "accounts.google.com";
  if (!okIssuer || claims.aud !== process.env.GOOGLE_CLIENT_ID || !claims.email || !claims.email_verified) return fail("google");
  if (!isAllowed(claims.email, claims.hd)) return fail("domain");

  const res = NextResponse.redirect(`${origin}/concierge`);
  res.cookies.set(SESSION_COOKIE, signSession(newSession(claims.email, claims.name || claims.email)), cookieOptions(SESSION_MAX_AGE));
  res.cookies.set(STATE_COOKIE, "", cookieOptions(0));
  return res;
}
