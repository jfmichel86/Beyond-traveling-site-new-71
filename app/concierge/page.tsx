import React from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/conciergeAuth";
import PanelTop from "./PanelTop";
import ConciergeList from "./ConciergeList";
import { isDemo, loadAll, rowOf } from "./data";

export const dynamic = "force-dynamic";

export default async function ConciergeHome() {
  const session = getSession();
  if (!session) redirect("/concierge/login");
  const rows = (await loadAll()).map(rowOf);
  return (
    <>
      <PanelTop email={session.email} />
      <ConciergeList rows={rows} demo={isDemo()} />
    </>
  );
}
