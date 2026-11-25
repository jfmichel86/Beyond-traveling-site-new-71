import React from "react";
import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/conciergeAuth";
import { fmtDate } from "@/lib/arrival";
import { serviceTotals } from "@/lib/conciergeServices";
import PanelTop from "../../PanelTop";
import PrintButton from "./PrintButton";
import { loadOne, nights, servicesOf } from "../../data";

export const dynamic = "force-dynamic";

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/** Statement for the guest at check-out: what's charged, in their language. Print or save as PDF. */
export default async function StatementPage({ params }: { params: { id: string } }) {
  const session = getSession();
  if (!session) redirect("/concierge/login");
  const id = decodeURIComponent(params.id);
  const r = await loadOne(id);
  if (!r) notFound();

  const es = r.draftLang === "es" || (!r.draftLang && r.language === "es");
  const t = (en: string, esText: string) => (es ? esText : en);
  const list = servicesOf(r).filter((s) => s.charge && (s.cost ?? 0) > 0 && s.status !== "unavailable" && !s.guestRemoved);
  const totals = serviceTotals(list, r.addVat);
  const guest = r.answers?.main.name || r.guestName;

  return (
    <>
      <PanelTop email={session.email} back={{ href: `/concierge/${encodeURIComponent(id)}`, label: "Volver a la renta" }} />
      <div className="mx-auto max-w-[820px] px-5 pb-16 pt-8 print:max-w-none print:p-0">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 print:hidden">
          <p className="m-0 text-[14px] text-bt-charcoal-light">
            {t("Shown in English (the guest's language).", "Se muestra en español (el idioma del huésped).")} Usa “Imprimir” y elige “Guardar como PDF”.
          </p>
          <PrintButton label="Imprimir / PDF" />
        </div>

        <div className="border border-bt-sand bg-white print:border-0">
          <div className="bg-bt-navy px-8 py-7 text-white print:bg-bt-navy">
            <p className="m-0 text-[11px] font-semibold tracking-[0.28em] text-bt-gold-light">BEYOND TRAVELING</p>
            <p className="m-0 mt-2 font-serif text-[32px]">{t("Statement", "Estado de cuenta")}</p>
          </div>
          <div className="flex flex-wrap justify-between gap-4 border-b border-bt-sand px-8 py-6">
            <div>
              <p className="m-0 font-serif text-[24px] text-bt-navy">{guest}</p>
              <p className="m-0 text-[14px]">{r.villa}</p>
            </div>
            <div className="text-right text-[14px]">
              <p className="m-0">{fmtDate(r.checkIn, es, true)} → {fmtDate(r.checkOut, es, true)}</p>
              <p className="m-0 text-bt-charcoal-light">{nights(r.checkIn, r.checkOut)} {t("nights", "noches")}</p>
            </div>
          </div>

          <div className="px-8 py-4">
            <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-bt-sand py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-bt-charcoal-light">
              <span>{t("Service", "Servicio")}</span><span>MXN</span>
            </div>
            {list.length === 0 && <p className="py-6 text-[14px] text-bt-charcoal-light">{t("No additional services.", "Sin servicios adicionales.")}</p>}
            {list.map((s) => (
              <div key={s._key} className="grid grid-cols-[1fr_auto] gap-4 border-b border-bt-sand py-3">
                <span className="flex flex-col">
                  <span className="text-[14px] font-semibold text-bt-navy">{(!es && s.nameEn) || s.name}</span>
                  <span className="text-[13px] text-bt-charcoal-light">{[(!es && s.whenEn) || s.when, (!es && s.detailEn) || s.detail].filter(Boolean).join(" · ")}</span>
                </span>
                <span className="text-[14px] tabular-nums">{money(s.cost ?? 0)}</span>
              </div>
            ))}
            <div className="ml-auto mt-4 flex max-w-[320px] flex-col gap-2 text-[14px]">
              <div className="flex justify-between"><span>Subtotal</span><span className="tabular-nums">{money(totals.subtotal)}</span></div>
              {r.addVat && <div className="flex justify-between"><span>{t("VAT 16%", "IVA 16%")}</span><span className="tabular-nums">{money(totals.vat)}</span></div>}
              <div className="flex items-baseline justify-between border-t border-bt-navy pt-2">
                <span className="font-semibold">Total</span>
                <span className="font-serif text-[28px] text-bt-navy">MXN {money(totals.total)}</span>
              </div>
            </div>
          </div>
          <p className="border-t border-bt-sand px-8 py-5 text-center text-[12px] text-bt-charcoal-light">
            Beyond Traveling Concierge · Punta Mita, Nayarit · concierge@beyondtravelingmx.com
          </p>
        </div>
      </div>
    </>
  );
}
