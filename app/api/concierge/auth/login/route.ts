// Starts "Sign in with Google" for the concierge panel.
import { NextResponse } from "next/server";
import crypto from "crypto";
import { googleAuthUrl, googleReady, STATE_COOKIE, cookieOptions, devBypass } from "@/lib/conciergeAuth";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const origin = new URL(req.url).origin;
  if (devBypass()) return NextResponse.redirect(`${origin}/concierge`);
  if (!googleReady()) return NextResponse.redirect(`${origin}/concierge/login?error=setup`);
  const state = crypto.randomBytes(16).toString("hex");
  const res = NextResponse.redirect(googleAuthUrl(origin, state));
  res.cookies.set(STATE_COOKIE, state, cookieOptions(600));
  return res;
}
