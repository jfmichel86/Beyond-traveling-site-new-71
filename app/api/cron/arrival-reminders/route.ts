// Daily (vercel.json → crons): reminds guests who haven't sent their arrival guide,
// and guests who asked for groceries but haven't sent their grocery list.
// Vercel calls it with "Authorization: Bearer <CRON_SECRET>".
import { NextResponse } from "next/server";
import { conciergeReady, listReservations } from "@/lib/concierge";
import { dueReminder, sendReminder, groceryReminderDue, sendGroceryReminder } from "@/lib/arrivalReminders";

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

  // Grocery lists still missing (daily, from 10 days before arrival)
  for (const r of list) {
    if (sent.length + failed.length >= 60) break;
    if (!groceryReminderDue(r)) continue;
    try {
      await sendGroceryReminder(r, "automático");
      sent.push(`${r.id} (grocery)`);
    } catch (err) {
      console.error(err);
      failed.push(`${r.id} (grocery)`);
    }
  }
  return NextResponse.json({ ok: true, sent, failed });
}
