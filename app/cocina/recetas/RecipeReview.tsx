"use client";

// Phone-first page where a villa cook reviews the breakfast recipes, one dish at a
// time: big – / + buttons, "Quitar", "¿Falta algo?", then one WhatsApp message
// with only what changed. Spanish only (tú). Progress is kept on the phone.

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { KitchenDish } from "@/lib/kitchenRecipes";

const STORAGE_KEY = "bt-cocina-recetas-desayuno-v1";

type DishState = {
  qty: Record<number, number>; // ingredient index → new amount
  removed: Record<number, boolean>;
  missing: string;
  done: boolean;
};
type Saved = { cook: string; step: number; dishes: Record<string, DishState> };

const emptyDish = (): DishState => ({ qty: {}, removed: {}, missing: "", done: false });

const FRACTIONS: [number, string][] = [
  [0.25, "¼"],
  [1 / 3, "⅓"],
  [0.5, "½"],
  [2 / 3, "⅔"],
  [0.75, "¾"],
];

/** 1.5 → "1½", 0.25 → "¼", 3 → "3" */
function fmt(x: number): string {
  if (x <= 0) return "0";
  const whole = Math.floor(x + 1e-9);
  const rest = x - whole;
  const frac = FRACTIONS.find(([v]) => Math.abs(rest - v) < 0.02)?.[1] ?? "";
  if (!frac && rest > 0.02) return (Math.round(x * 10) / 10).toString();
  return `${whole || ""}${frac}` || "0";
}

const unitFor = (unit: [string, string], qty: number) => (qty > 1 ? unit[1] : unit[0]);

/** Amounts a cook would actually use, for each kind of step. */
const LADDERS: Record<string, number[]> = (() => {
  const upTo = (max: number, parts: number[]) => {
    const out = new Set<number>();
    for (let n = 0; n <= max; n++) for (const p of parts) out.add(Math.round((n + p) * 1000) / 1000);
    return Array.from(out).sort((x, y) => x - y);
  };
  return {
    whole: [0, 0.25, 0.5, 0.75, ...Array.from({ length: 30 }, (_, i) => i + 1)], // pieces, slices…
    half: upTo(20, [0, 0.5]), // spoons
    quarter: upTo(10, [0, 0.25, 1 / 3, 0.5, 2 / 3, 0.75]), // cups
  };
})();

/** Next amount up/down: pieces by whole units (quarters below one), cups by ¼ and ⅓, spoons by ½, grams by 10. */
function stepQty(qty: number, step: number, dir: 1 | -1): number {
  if (step >= 10) return Math.max(0, Math.round((qty + dir * step) / step) * step);
  const ladder = step >= 1 ? LADDERS.whole : step >= 0.5 ? LADDERS.half : LADDERS.quarter;
  if (dir === 1) return ladder.find((v) => v > qty + 1e-6) ?? qty + step;
  const lower = ladder.filter((v) => v < qty - 1e-6);
  return lower.length ? lower[lower.length - 1] : 0;
}

export default function RecipeReview({
  dishes,
  whatsapp,
  title,
}: {
  dishes: KitchenDish[];
  whatsapp: string;
  title: string;
}) {
  const [s, setS] = useState<Saved>({ cook: "", step: -1, dishes: {} });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setS({ cook: "", step: -1, dishes: {}, ...JSON.parse(raw) });
    } catch {
      /* start fresh */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    } catch {
      /* ignore */
    }
  }, [s, loaded]);

  const total = dishes.length;
  const step = s.step; // -1 = intro, 0..total-1 = dishes, total = summary
  const go = (n: number) => {
    setS((p) => ({ ...p, step: n }));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dishState = (id: string) => s.dishes[id] || emptyDish();
  const patchDish = (id: string, fn: (d: DishState) => DishState) =>
    setS((p) => ({ ...p, dishes: { ...p.dishes, [id]: fn(p.dishes[id] || emptyDish()) } }));

  const doneCount = dishes.filter((d) => dishState(d.id).done).length;

  // Only what changed, dish by dish
  const changes = useMemo(() => {
    const out: { dish: KitchenDish; lines: string[] }[] = [];
    for (const d of dishes) {
      const st = s.dishes[d.id];
      if (!st) continue;
      const lines: string[] = [];
      d.ingredients.forEach((ing, i) => {
        if (st.removed[i]) {
          lines.push(`Quitar: ${ing.name}`);
          return;
        }
        const nq = st.qty[i];
        if (nq !== undefined && Math.abs(nq - ing.qty) > 1e-9) {
          lines.push(
            `${ing.name}: ${fmt(ing.qty)} ${unitFor(ing.unit, ing.qty)} → ${fmt(nq)} ${unitFor(ing.unit, nq)}`
          );
        }
      });
      if (st.missing.trim()) lines.push(`Falta: ${st.missing.trim()}`);
      if (lines.length) out.push({ dish: d, lines });
    }
    return out;
  }, [dishes, s.dishes]);

  const message = () => {
    const head = [`Revisión de ${title}${s.cook.trim() ? ` – ${s.cook.trim()}` : ""}`, ""];
    if (!changes.length) return [...head, "Revisé todas las recetas. Todo está bien, no hay cambios. ✅"].join("\n");
    const body = changes.flatMap((c) => [`*${c.dish.name}*`, ...c.lines.map((l) => `• ${l}`), ""]);
    const ok = dishes.filter((d) => dishState(d.id).done && !changes.some((c) => c.dish.id === d.id)).length;
    return [...head, ...body, ok ? `Los otros ${ok} platillos están bien. ✅` : ""].join("\n").trim();
  };

  const send = () => {
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message())}`, "_blank", "noopener,noreferrer");
  };

  const restart = () => {
    if (!window.confirm("¿Borrar todo y empezar de nuevo?")) return;
    setS({ cook: s.cook, step: -1, dishes: {} });
  };

  if (!loaded) return <div className="min-h-[60vh]" />;

  // ── Intro ────────────────────────────────────────────────────────────────
  if (step < 0) {
    return (
      <div className="mx-auto max-w-[560px] px-5 pb-16 pt-10">
        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-bt-gold-text">Para la cocina</p>
        <h1 className="mt-3 font-serif text-[36px] font-light leading-tight text-bt-navy">¡Hola! 👋</h1>
        <p className="mt-4 text-[18px] leading-[1.6] text-bt-charcoal">
          Ayúdanos a revisar las recetas de <b className="font-semibold">{title.toLowerCase()}</b>. Son {total} platillos.
        </p>

        <ol className="mt-8 space-y-5">
          {[
            ["1", "Las cantidades son para 1 persona adulta."],
            ["2", "Si una cantidad no está bien, usa los botones – y +."],
            ["3", "Si algo no va, toca “Quitar”. Si falta algo, escríbelo."],
            ["4", "Al final, toca “Enviar por WhatsApp”."],
          ].map(([n, t]) => (
            <li key={n} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bt-navy text-[16px] font-medium text-white">{n}</span>
              <span className="pt-1 text-[17px] leading-[1.5] text-bt-charcoal">{t}</span>
            </li>
          ))}
        </ol>

        <label htmlFor="cook-name" className="mt-10 block text-[16px] font-medium text-bt-navy">
          ¿Cómo te llamas?
        </label>
        <input
          id="cook-name"
          type="text"
          autoComplete="given-name"
          value={s.cook}
          onChange={(e) => setS((p) => ({ ...p, cook: e.target.value }))}
          placeholder="Tu nombre"
          className="mt-2 w-full rounded-sm border border-bt-navy/25 bg-white px-4 py-3.5 text-[18px] text-bt-navy outline-none focus:border-bt-navy"
        />

        <button
          type="button"
          onClick={() => go(doneCount > 0 ? Math.min(dishes.findIndex((d) => !dishState(d.id).done), total) : 0)}
          className="mt-8 w-full rounded-sm bg-bt-navy px-6 py-4 text-[17px] font-medium text-white active:scale-[0.99]"
        >
          {doneCount > 0 ? `Continuar (${doneCount} de ${total} listos)` : "Empezar"}
        </button>
      </div>
    );
  }

  // ── Summary ──────────────────────────────────────────────────────────────
  if (step >= total) {
    return (
      <div className="mx-auto max-w-[560px] px-5 pb-16 pt-10">
        <h1 className="font-serif text-[34px] font-light leading-tight text-bt-navy">¡Gracias{s.cook.trim() ? `, ${s.cook.trim()}` : ""}! 🙌</h1>
        <p className="mt-3 text-[17px] leading-[1.6] text-bt-charcoal">
          {changes.length
            ? `Hiciste cambios en ${changes.length} ${changes.length === 1 ? "platillo" : "platillos"}:`
            : "No hiciste cambios. Todo está bien."}
        </p>

        {changes.length > 0 && (
          <div className="mt-6 space-y-4">
            {changes.map((c) => (
              <div key={c.dish.id} className="rounded-sm border border-bt-navy/12 bg-white p-4">
                <p className="text-[17px] font-semibold text-bt-navy">{c.dish.name}</p>
                <ul className="mt-2 space-y-1.5">
                  {c.lines.map((l, i) => (
                    <li key={i} className="text-[15.5px] leading-snug text-bt-charcoal">• {l}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => go(dishes.findIndex((d) => d.id === c.dish.id))}
                  className="mt-3 text-[14px] font-medium text-bt-navy underline underline-offset-4"
                >
                  Corregir
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={send}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-sm bg-[#1FA855] px-6 py-4 text-[18px] font-semibold text-white active:scale-[0.99]"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.659 1.438 5.168L2 22l4.985-1.402A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 11.999 2z" />
          </svg>
          Enviar por WhatsApp
        </button>

        <div className="mt-6 flex items-center justify-between">
          <button type="button" onClick={() => go(total - 1)} className="text-[15px] font-medium text-bt-navy">
            ← Volver a los platillos
          </button>
          <button type="button" onClick={restart} className="text-[13px] text-bt-charcoal/70 underline underline-offset-4">
            Empezar de nuevo
          </button>
        </div>
      </div>
    );
  }

  // ── One dish ─────────────────────────────────────────────────────────────
  const dish = dishes[step];
  const st = dishState(dish.id);

  const setQty = (i: number, q: number) =>
    patchDish(dish.id, (d) => ({ ...d, qty: { ...d.qty, [i]: q }, done: false }));
  const toggleRemoved = (i: number) =>
    patchDish(dish.id, (d) => ({ ...d, removed: { ...d.removed, [i]: !d.removed[i] }, done: false }));

  const next = () => {
    patchDish(dish.id, (d) => ({ ...d, done: true }));
    go(step + 1);
  };

  return (
    <div className="mx-auto max-w-[560px] pb-36">
      {/* Progress */}
      <div className="px-5 pt-5">
        <div className="flex items-center justify-between text-[14px] text-bt-charcoal/80">
          <span>
            Platillo <b className="font-semibold text-bt-navy">{step + 1}</b> de {total}
          </span>
          <button type="button" onClick={() => go(-1)} className="text-[13px] underline underline-offset-4">
            Instrucciones
          </button>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-bt-sand">
          <div className="h-full rounded-full bg-bt-gold transition-all" style={{ width: `${((step + 1) / total) * 100}%` }} />
        </div>
      </div>

      {/* Dish */}
      <div className="mt-5 px-5">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-bt-cream">
          <Image src={dish.img} alt={dish.name} fill sizes="(min-width: 600px) 560px, 100vw" className="object-cover" priority />
        </div>
        <h1 className="mt-4 font-serif text-[30px] font-light leading-tight text-bt-navy">{dish.name}</h1>
        <p className="mt-1 text-[15px] text-bt-charcoal/80">Cantidades para <b className="font-semibold">1 persona adulta</b></p>
      </div>

      {/* Ingredients */}
      <ul className="mt-5 divide-y divide-bt-navy/10 border-y border-bt-navy/10 bg-white">
        {dish.ingredients.map((ing, i) => {
          const removed = !!st.removed[i];
          const q = st.qty[i] ?? ing.qty;
          const changed = !removed && Math.abs(q - ing.qty) > 1e-9;
          return (
            <li key={i} className={`px-5 py-4 ${removed ? "bg-bt-cream/60" : ""}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className={`text-[18px] leading-snug ${removed ? "text-bt-charcoal/50 line-through" : "text-bt-navy"}`}>{ing.name}</p>
                  {ing.type === "opcion" && !removed && (
                    <p className="mt-0.5 text-[13.5px] text-bt-gold-text">Solo si lo piden así</p>
                  )}
                  {ing.type === "basico" && !removed && (
                    <p className="mt-0.5 text-[13.5px] text-bt-charcoal/70">Normalmente ya hay en la villa</p>
                  )}
                  {ing.note && !removed && <p className="mt-0.5 text-[13.5px] text-bt-charcoal/70">{ing.note}</p>}
                </div>
                <button
                  type="button"
                  onClick={() => toggleRemoved(i)}
                  className="shrink-0 rounded-sm border border-bt-navy/20 px-3 py-1.5 text-[13.5px] font-medium text-bt-navy"
                >
                  {removed ? "Regresar" : "Quitar"}
                </button>
              </div>

              {!removed && (
                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQty(i, stepQty(q, ing.step, -1))}
                    disabled={q <= 0}
                    aria-label={`Menos ${ing.name}`}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-bt-navy/30 text-[26px] leading-none text-bt-navy disabled:opacity-30 active:bg-bt-cream"
                  >
                    −
                  </button>
                  <div className={`flex-1 rounded-sm px-3 py-2 text-center ${changed ? "bg-bt-gold/15" : "bg-bt-cream"}`}>
                    <span className="text-[22px] font-semibold tabular-nums text-bt-navy">{fmt(q)}</span>{" "}
                    <span className="text-[16px] text-bt-charcoal">{unitFor(ing.unit, q)}</span>
                    {changed && <span className="block text-[12px] text-bt-gold-text">antes: {fmt(ing.qty)}</span>}
                  </div>
                  <button
                    type="button"
                    onClick={() => setQty(i, stepQty(q, ing.step, 1))}
                    aria-label={`Más ${ing.name}`}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-bt-navy/30 text-[26px] leading-none text-bt-navy active:bg-bt-cream"
                  >
                    +
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Missing */}
      <div className="mt-6 px-5">
        <label htmlFor={`missing-${dish.id}`} className="block text-[18px] font-medium text-bt-navy">
          ¿Falta algo?
        </label>
        <p className="mt-1 text-[14px] text-bt-charcoal/75">Escribe qué y cuánto. Ejemplo: “2 chiles guajillo”.</p>
        <textarea
          id={`missing-${dish.id}`}
          rows={3}
          value={st.missing}
          onChange={(e) => patchDish(dish.id, (d) => ({ ...d, missing: e.target.value, done: false }))}
          placeholder="Escribe aquí (o usa el micrófono del teclado)"
          className="mt-2 w-full rounded-sm border border-bt-navy/25 bg-white px-4 py-3 text-[17px] text-bt-navy outline-none focus:border-bt-navy"
        />
      </div>

      {/* Bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-bt-navy/10 bg-white/95 px-5 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-[560px] gap-3">
          <button
            type="button"
            onClick={() => go(step - 1)}
            className="rounded-sm border border-bt-navy/25 px-5 py-4 text-[16px] font-medium text-bt-navy"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="flex-1 rounded-sm bg-bt-navy px-5 py-4 text-[17px] font-medium text-white active:scale-[0.99]"
          >
            {step === total - 1 ? "Listo ✓ Terminar" : "Listo ✓ Siguiente"}
          </button>
        </div>
      </div>
    </div>
  );
}
