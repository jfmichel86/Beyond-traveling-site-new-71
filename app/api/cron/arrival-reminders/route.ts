// Daily (vercel.json → crons): reminds guests who haven't sent their arrival guide.
// Vercel calls it with "Authorization: Bearer <CRON_SECRET>".
import { NextResponse } from "next/server";
import { conciergeReady, listReservations } from "@/lib/concierge";
import { dueReminder, sendReminder } from "@/lib/arrivalReminders";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) return NextResponse.json({ ok: false }, { status: 401 });
  if (!conciergeReady()) return NextResponse.json({ ok: false, error: "not-configured" }, { status: 503 });

  const sent: string[] = [];
  const failed: string[] = [];
  const list = await listReservations();
  for (const r of list) {
    const due = dueReminder(r);
    if (!due) continue;
    try {
      await sendReminder(r, due.kind, due.tag, "automático");
      sent.push(`${r.id} (${due.tag})`);
    } catch (err) {
      console.error(err);
      failed.push(r.id);
    }
    if (sent.length + failed.length >= 40) break;
  }
  return NextResponse.json({ ok: true, sent, failed });
}
