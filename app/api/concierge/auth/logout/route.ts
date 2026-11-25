// Signs the concierge out of the panel.
import { NextResponse } from "next/server";
import { SESSION_COOKIE, cookieOptions } from "@/lib/conciergeAuth";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const res = NextResponse.redirect(`${new URL(req.url).origin}/concierge/login`);
  res.cookies.set(SESSION_COOKIE, "", cookieOptions(0));
  return res;
}
