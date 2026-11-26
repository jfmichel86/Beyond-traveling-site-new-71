import React from "react";
import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/conciergeAuth";
import { fmtDate } from "@/lib/arrival";
import type { GroceryLine } from "@/lib/groceryList";
import PanelTop from "../../PanelTop";
import PrintButton from "../cuenta/PrintButton";
import { loadOne } from "../../data";

export const dynamic = "force-dynamic";

const qtyText = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

/** The guest's grocery list, in Spanish, ready to print or save as PDF for whoever does the shopping. */
export default async function GroceryListPage({ params }: { params: { id: string } }) {
  const session = getSession();
  if (!session) redirect("/concierge/login");
  const id = decodeURIComponent(params.id);
  const r = await loadOne(id);
  if (!r) notFound();

  const guest = r.answers?.main.name || r.guestName;
  const g = r.grocery;
  const groups: { cat: string; items: GroceryLine[] }[] = [];
  for (const i of g?.list.items || []) {
    const cat = i.catEs || i.cat || "Otros";
    const last = groups[groups.length - 1];
    if (last && last.cat === cat) last.items.push(i);
    else groups.push({ cat, items: [i] });
  }

  return (
    <>
      <PanelTop email={session.email} back={{ href: `/concierge/${encodeURIComponent(id)}`, label: "Volver a la renta" }} />
      <div className="mx-auto max-w-[820px] px-5 pb-16 pt-8 print:max-w-none print:p-0">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <p className="m-0 text-[14px] text-bt-charcoal-light">Usa “Imprimir” y elige “Guardar como PDF” para compartirla.</p>
          {g && <PrintButton label="Imprimir / PDF" />}
        </div>

        <div className="border border-bt-sand bg-white print:border-0">
          <div className="bg-bt-navy px-8 py-7 text-white">
            <p className="m-0 text-[11px] font-semibold tracking-[0.28em] text-bt-gold-light">BEYOND TRAVELING · CONCIERGE</p>
            <p className="m-0 mt-2 font-serif text-[32px]">Lista de despensa</p>
          </div>
          <div className="flex flex-wrap justify-between gap-4 border-b border-bt-sand px-8 py-6">
            <div>
              <p className="m-0 font-serif text-[24px] text-bt-navy">{guest}</p>
              <p className="m-0 text-[14px]">{r.villa}</p>
            </div>
            <div className="text-right text-[14px]">
              <p className="m-0">Llegada: {fmtDate(r.checkIn, true, true)}</p>
              {g && (
                <p className="m-0 text-bt-charcoal-light">
                  Recibida {fmtDate(g.sentAt.slice(0, 10), true)}
                  {g.times > 1 ? ` · versión ${g.times}` : ""}
                </p>
              )}
            </div>
          </div>

          {!g ? (
            <p className="px-8 py-10 text-[15px] text-bt-charcoal-light">El huésped todavía no envía su lista de despensa.</p>
          ) : (
            <div className="px-8 py-5">
              {(g.list.party || g.list.allergies) && (
                <div className="mb-5 flex flex-col gap-1 bg-bt-cream px-4 py-3 text-[14px]">
                  {g.list.party && <span><b>Huéspedes:</b> {g.list.party}</span>}
                  {g.list.allergies && <span className="text-[#8A4B12]"><b>Alergias / dieta:</b> {g.list.allergies}</span>}
                </div>
              )}

              {groups.map((grp) => (
                <div key={grp.cat} className="mb-5 break-inside-avoid">
                  <p className="m-0 border-b border-bt-navy pb-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-bt-gold-text">{grp.cat}</p>
                  {grp.items.map((i, n) => (
                    <div key={`${i.id}-${n}`} className="grid grid-cols-[22px_88px_1fr] items-start gap-3 border-b border-bt-sand py-2.5 text-[14px]">
                      <span className="mt-0.5 inline-block h-[16px] w-[16px] border border-bt-charcoal-light" aria-hidden="true" />
                      <span className="tabular-nums font-semibold text-bt-navy">{qtyText(i.qty)} {i.unitEs || i.unit}</span>
                      <span className="flex flex-col">
                        <span>{i.nameEs || i.name}{i.name && i.name !== i.nameEs && <span className="text-bt-charcoal-light"> ({i.name})</span>}</span>
                        {i.note && <span className="text-[13px] italic text-bt-charcoal-light">{i.note}</span>}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              {g.list.requests && (
                <div className="mb-2 break-inside-avoid">
                  <p className="m-0 border-b border-bt-navy pb-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-bt-gold-text">Otras solicitudes</p>
                  <p className="m-0 whitespace-pre-wrap py-3 text-[14px]">{g.list.requests}</p>
                </div>
              )}
              <p className="mt-4 text-[13px] text-bt-charcoal-light">{g.list.items.length} artículos</p>
            </div>
          )}
          <p className="border-t border-bt-sand px-8 py-5 text-center text-[12px] text-bt-charcoal-light">
            Beyond Traveling Concierge · Punta Mita, Nayarit · concierge@beyondtravelingmx.com
          </p>
        </div>
      </div>
    </>
  );
}
