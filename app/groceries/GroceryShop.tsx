"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { isEsPath } from "@/lib/locale";
import {
  GROCERY_EMAIL,
  GROCERY_WHATSAPP,
  UNIT_LABELS,
  type GroceryCategory,
  type GroceryData,
  type GroceryItem,
  type GrocerySide,
} from "@/lib/groceries";
import { fieldClass, submitClass } from "@/components/contact/fields";
import "@/app/properties/villa.css";
import "./groceries.css";
import { trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "bt-groceries-v1";
const OTHER_VILLA = "__other";

type Saved = {
  qty: Record<string, number>;
  notes: Record<string, string>;
  name: string;
  villa: string;
  arrival: string;
  guests: string; // no longer used (kept so older saved lists still load)
  party: { adults: number; children: number; infants: number };
  allergies: string;
  requests: string;
};

const EMPTY: Saved = {
  qty: {},
  notes: {},
  name: "",
  villa: "",
  arrival: "",
  guests: "",
  party: { adults: 0, children: 0, infants: 0 },
  allergies: "",
  requests: "",
};

/** Lower-case, accent-free text for searching. */
const fold = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** Every category that holds items, groups' sub-categories included, in page order. */
const leavesOf = (cats: GroceryCategory[]): GroceryCategory[] =>
  cats.flatMap((c) => [...(c.items.length ? [c] : []), ...(c.children || [])]);

/** All items shown in a section (its own, its sub-categories', and copies). */
const itemsIn = (c: GroceryCategory): GroceryItem[] => [
  ...c.items,
  ...(c.children || []).flatMap((k) => k.items),
];

const SIDES: { key: GrocerySide; en: string; es: string; subEn: string; subEs: string; img: string }[] = [
  {
    key: "enjoy",
    en: "Ready to Enjoy",
    es: "Listo para Disfrutar",
    subEn: "Snacks, drinks, the bar & essentials",
    subEs: "Botanas, bebidas, el bar y lo esencial",
    img: "/groceries/ready-to-enjoy.jpg",
  },
  {
    key: "cooking",
    en: "Cooking for Yourself",
    es: "Si Vas a Cocinar",
    subEn: "Ingredients, only if you plan to cook",
    subEs: "Ingredientes, solo si piensas cocinar",
    img: "/groceries/cooking.jpg",
  },
];

const fmtQty = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

function formatDate(iso: string, es: boolean) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(es ? "es-MX" : "en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function GroceryShop({
  data,
  villas,
}: {
  data: GroceryData;
  villas: string[];
}) {
  const catalog = data.catalog;
  const es = isEsPath(usePathname() || "/");
  const t = (en: string, esText: string) => (es ? esText : en);

  const [s, setS] = useState<Saved>(EMPTY);
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [sheet, setSheet] = useState(false);
  const [today, setToday] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState<"" | "whatsapp" | "email">("");
  const [copied, setCopied] = useState(false);
  const [otherVilla, setOtherVilla] = useState("");
  const [open, setOpen] = useState<Record<string, boolean>>({});
  // Villa / arrival / guests pickers — same look as the villa pages' inquiry card
  const [panel, setPanel] = useState<null | "villa" | "dates" | "guests">(null);
  const [calY, setCalY] = useState(new Date().getFullYear());
  const [calM, setCalM] = useState(new Date().getMonth());
  const togglePanel = (p: "villa" | "dates" | "guests") => setPanel((cur) => (cur === p ? null : p));
  const [side, setSide] = useState<GrocerySide>("enjoy");
  const sideCats = useMemo(
    () => catalog.filter((c) => (c.side || "enjoy") === side),
    [catalog, side]
  );

  const leaves = useMemo(() => leavesOf(catalog), [catalog]);
  const toggle = (id: string) => setOpen((o) => ({ ...o, [id]: !o[id] }));

  const itemName = useCallback(
    (it: GroceryItem) => (es ? it.nameEs || it.name : it.name),
    [es]
  );
  const unitLabel = (it: GroceryItem, n: number) =>
    UNIT_LABELS[it.unit]?.[es ? "es" : "en"][n === 1 ? 0 : 1] ?? it.unit;

  // id → item + its category, for building the list
  const index = useMemo(() => {
    const m = new Map<string, { item: GroceryItem; cat: GroceryCategory }>();
    // The item's own category wins over "Also Show In" copies
    for (const cat of leaves) for (const item of cat.items) if (!item.alsoListed) m.set(item.id, { item, cat });
    for (const cat of leaves) for (const item of cat.items) if (!m.has(item.id)) m.set(item.id, { item, cat });
    return m;
  }, [leaves]);

  // Restore a list in progress, then apply ?name=&villa=&arrival= from a
  // personal link the concierge sends (those win over the saved values).
  useEffect(() => {
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    setToday(`${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`);

    let saved: Saved = EMPTY;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) saved = { ...EMPTY, ...JSON.parse(raw) };
      if (!saved.party) saved.party = EMPTY.party;
    } catch {
      /* storage unavailable: start empty */
    }
    // Drop items that no longer exist in the catalog
    saved.qty = Object.fromEntries(
      Object.entries(saved.qty || {}).filter(([id, n]) => index.has(id) && n > 0)
    );

    const p = new URLSearchParams(window.location.search);
    if (p.get("side") === "cooking") setSide("cooking");
    const pName = p.get("name");
    const pVilla = p.get("villa");
    const pArrival = p.get("arrival");
    if (pName) saved.name = pName;
    if (pArrival && /^\d{4}-\d{2}-\d{2}$/.test(pArrival)) saved.arrival = pArrival;
    if (pVilla) {
      const match = villas.find((v) => fold(v) === fold(pVilla) || fold(v).replace(/\s+/g, "-") === fold(pVilla));
      if (match) saved.villa = match;
      else {
        saved.villa = OTHER_VILLA;
        setOtherVilla(pVilla);
      }
    }
    setS(saved);
    setLoaded(true);
  }, [index, villas]);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    } catch {
      /* ignore */
    }
  }, [s, loaded]);

  // Close an open picker when clicking anywhere outside it
  useEffect(() => {
    if (!panel) return;
    const onDown = (e: MouseEvent) => {
      if (!(e.target as Element)?.closest?.(".iq-field")) setPanel(null);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [panel]);

  // Lock page scroll behind the phone list sheet
  useEffect(() => {
    document.body.style.overflow = sheet ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheet]);

  const set = <K extends keyof Saved>(key: K, value: Saved[K]) => {
    setS((prev) => ({ ...prev, [key]: value }));
    setSent("");
    setError("");
  };

  const setQty = (id: string, n: number) => {
    setS((prev) => {
      const qty = { ...prev.qty };
      if (n <= 0) delete qty[id];
      else qty[id] = Math.round(n * 10) / 10;
      return { ...prev, qty };
    });
    setSent("");
  };

  const setNote = (id: string, note: string) =>
    setS((prev) => ({ ...prev, notes: { ...prev.notes, [id]: note } }));

  const step = (it: GroceryItem) => (it.unit === "kg" ? 0.5 : 1);

  // Items in the list, in catalog order
  const chosen = useMemo(() => {
    const out: { item: GroceryItem; cat: GroceryCategory; n: number }[] = [];
    for (const cat of leaves)
      for (const item of cat.items) {
        const n = s.qty[item.id];
        if (n > 0 && !item.alsoListed) out.push({ item, cat, n });
      }
    return out;
  }, [leaves, s.qty]);

  const count = chosen.length;
  const estimate = chosen.reduce((sum, c) => sum + (c.item.price ? c.item.price * c.n : 0), 0);

  // Search
  const q = fold(query.trim());
  const visible = useMemo(() => {
    if (!q) return sideCats;
    const match = (it: GroceryItem) =>
      !it.alsoListed && (fold(it.name).includes(q) || fold(it.nameEs || "").includes(q));
    return catalog
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(match),
        children: (cat.children || [])
          .map((k) => ({ ...k, items: k.items.filter(match) }))
          .filter((k) => k.items.length),
      }))
      .filter((cat) => cat.items.length || cat.children.length);
  }, [catalog, sideCats, q]);

  // ── The message sent to the concierge ──────────────────────────────────
  const villaName = s.villa === OTHER_VILLA ? otherVilla.trim() : s.villa;

  const buildMessage = () => {
    const lines: string[] = [
      t("Pre-arrival grocery request – Beyond Traveling", "Lista de despensa antes de la llegada – Beyond Traveling"),
      "",
      `${t("Name", "Nombre")}: ${s.name.trim()}`,
      `Villa: ${villaName}`,
      `${t("Arrival", "Llegada")}: ${formatDate(s.arrival, es)}`,
    ];
    if (partyLabel()) lines.push(`${t("Guests", "Huéspedes")}: ${partyLabel()}`);
    if (s.allergies.trim()) lines.push(`${t("Allergies / dietary needs", "Alergias / dieta")}: ${s.allergies.trim()}`);

    let lastCat = "";
    for (const { item, cat, n } of chosen) {
      if (cat.id !== lastCat) {
        lines.push("", (es ? cat.titleEs || cat.title : cat.title).toUpperCase());
        lastCat = cat.id;
      }
      // English lists also carry the Spanish name, for the personal shopper
      const name = es
        ? itemName(item)
        : item.nameEs && item.nameEs !== item.name
          ? `${item.name} (${item.nameEs})`
          : item.name;
      const note = (s.notes[item.id] || "").trim();
      lines.push(`• ${fmtQty(n)} ${unitLabel(item, n)} – ${name}${note ? ` – ${note}` : ""}`);
    }

    if (s.requests.trim()) {
      lines.push("", t("OTHER REQUESTS", "OTRAS SOLICITUDES"), s.requests.trim());
    }
    lines.push("", t(`${count} items. Thank you!`, `${count} artículos. ¡Gracias!`));
    return lines.join("\n");
  };

  const party = s.party || EMPTY.party;
  const partyLabel = () => {
    const out: string[] = [];
    const add = (n: number, en: [string, string], esw: [string, string]) => {
      if (n) out.push(`${n} ${(es ? esw : en)[n === 1 ? 0 : 1]}`);
    };
    add(party.adults, ["adult", "adults"], ["adulto", "adultos"]);
    add(party.children, ["child", "children"], ["niño", "niños"]);
    add(party.infants, ["infant", "infants"], ["bebé", "bebés"]);
    return out.join(", ");
  };
  const stepParty = (k: keyof Saved["party"], d: number) =>
    set("party", { ...party, [k]: Math.max(0, party[k] + d) });

  const calNav = (dir: 1 | -1) => {
    let m = calM + dir, y = calY;
    if (m < 0) { m = 11; y -= 1; }
    if (m > 11) { m = 0; y += 1; }
    setCalM(m); setCalY(y);
  };

  const renderMonth = () => {
    const first = new Date(calY, calM, 1);
    const days = new Date(calY, calM + 1, 0).getDate();
    const name = first.toLocaleString(es ? "es-MX" : "en-US", { month: "long" });
    const label = name.charAt(0).toUpperCase() + name.slice(1) + " " + calY;
    const now = new Date();
    const isCurrent = calY === now.getFullYear() && calM === now.getMonth();
    const cells: React.ReactNode[] = [];
    for (let i = 0; i < first.getDay(); i++) cells.push(<div key={`e${i}`} className="dp-day dp-day-empty" />);
    for (let d = 1; d <= days; d++) {
      const ds = `${calY}-${String(calM + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const past = !!today && ds < today;
      let cls = "dp-day";
      if (past) cls += " dp-day-past";
      if (ds === today && s.arrival !== ds) cls += " dp-day-today";
      if (s.arrival === ds) cls += " dp-day-start dp-day-end";
      cells.push(
        <div
          key={d}
          className={cls}
          role="button"
          tabIndex={past ? -1 : 0}
          aria-label={formatDate(ds, es)}
          onClick={past ? undefined : () => { set("arrival", ds); setTimeout(() => setPanel(null), 250); }}
          onKeyDown={past ? undefined : (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); set("arrival", ds); setPanel(null); } }}
        >
          {d}
        </div>
      );
    }
    return (
      <div>
        <div className="dp-month-header">
          {isCurrent ? <div style={{ width: 28 }} /> : (
            <button className="dp-nav-btn" type="button" onClick={() => calNav(-1)} aria-label={t("Previous month", "Mes anterior")}>
              <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
          )}
          <div className="dp-month-title">{label}</div>
          <button className="dp-nav-btn" type="button" onClick={() => calNav(1)} aria-label={t("Next month", "Mes siguiente")}>
            <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18" /></svg>
          </button>
        </div>
        <div className="dp-day-names">
          {(es ? ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"] : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]).map((n) => (
            <div className="dp-day-name" key={n}>{n}</div>
          ))}
        </div>
        <div className="dp-days-grid">{cells}</div>
      </div>
    );
  };

  const arrivalLabel = () => {
    if (!s.arrival) return "";
    const [y, m, d] = s.arrival.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString(es ? "es-MX" : "en-US", { month: "long", day: "numeric", year: "numeric" });
  };

  const Arrow = () => (
    <svg className="iq-dd-arrow" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
  );

  const validate = () => {
    if (!s.name.trim() || !villaName || !s.arrival) {
      setError(t("Please add your name, villa and arrival date.", "Agrega tu nombre, villa y fecha de llegada."));
      return false;
    }
    if (!count && !s.requests.trim()) {
      setError(t("Your list is empty. Add a few items first.", "Tu lista está vacía. Agrega algunos artículos primero."));
      return false;
    }
    setError("");
    return true;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    const url = `https://wa.me/${GROCERY_WHATSAPP}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    trackEvent("generate_lead", { lead_type: "grocery", method: "whatsapp" });
    setSent("whatsapp");
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject = `${t("Grocery list", "Lista de despensa")} – ${villaName} – ${s.name.trim()}`;
    window.location.href = `mailto:${GROCERY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage())}`;
    trackEvent("generate_lead", { lead_type: "grocery", method: "email" });
    setSent("email");
  };

  const copyList = async () => {
    try {
      await navigator.clipboard.writeText(buildMessage());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard blocked */
    }
  };

  const clearList = () => {
    if (!window.confirm(t("Clear your whole list?", "¿Borrar toda tu lista?"))) return;
    setS((prev) => ({ ...prev, qty: {}, notes: {}, requests: "" }));
    setSent("");
  };

  // ── Pieces ──────────────────────────────────────────────────────────────
  const stepper = (it: GroceryItem) => {
    const n = s.qty[it.id] || 0;
    const name = itemName(it);
    if (!n) {
      return (
        <button
          type="button"
          onClick={() => setQty(it.id, 1)}
          aria-label={t(`Add ${name}`, `Agregar ${name}`)}
          className="inline-flex h-9 min-w-[76px] items-center justify-center border border-bt-navy/30 px-4 text-[11px] font-medium uppercase tracking-[0.14em] text-bt-navy transition hover:border-bt-navy hover:bg-bt-navy/[0.03] focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
        >
          {t("Add", "Agregar")}
        </button>
      );
    }
    return (
      <div className="inline-flex h-9 items-center bg-bt-navy text-white">
        <button
          type="button"
          onClick={() => setQty(it.id, n - step(it))}
          aria-label={t(`One less ${name}`, `Uno menos de ${name}`)}
          className="flex h-9 w-9 items-center justify-center text-lg leading-none transition hover:bg-bt-navy-light"
        >
          −
        </button>
        <span className="min-w-[2.25rem] text-center text-[14px] font-medium tabular-nums" aria-live="polite">
          {fmtQty(n)}
        </span>
        <button
          type="button"
          onClick={() => setQty(it.id, n + step(it))}
          aria-label={t(`One more ${name}`, `Uno más de ${name}`)}
          className="flex h-9 w-9 items-center justify-center text-lg leading-none transition hover:bg-bt-navy-light"
        >
          +
        </button>
      </div>
    );
  };

  const listPanel = (inSheet = false) => (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-[28px] font-light text-bt-navy">{t("Your List", "Tu Lista")}</h2>
        {count > 0 && (
          <button type="button" onClick={clearList} className="text-[12px] font-medium text-bt-navy/70 underline-offset-4 hover:underline">
            {t("Clear", "Borrar")}
          </button>
        )}
      </div>

      {count === 0 ? (
        <p className="mt-4 text-[14.5px] leading-[1.7] text-bt-charcoal/80">
          {t(
            "Nothing here yet. Tap “Add” next to anything you’d like waiting at the villa.",
            "Aún no hay nada. Toca “Agregar” junto a lo que quieras encontrar en la villa."
          )}
        </p>
      ) : (
        <ul className={`mt-4 divide-y divide-bt-navy/10 border-y border-bt-navy/10 ${inSheet ? "" : "max-h-[34vh] overflow-y-auto"}`}>
          {chosen.map(({ item, n }) => (
            <li key={item.id} className="flex items-start justify-between gap-3 py-2.5">
              <div className="min-w-0 text-[14px] leading-snug text-bt-charcoal">
                <span className="font-medium text-bt-navy tabular-nums">
                  {fmtQty(n)} {unitLabel(item, n)}
                </span>{" "}
                · {itemName(item)}
                {s.notes[item.id]?.trim() && (
                  <span className="block truncate text-[12.5px] italic text-bt-charcoal/70">{s.notes[item.id]}</span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setQty(item.id, 0)}
                aria-label={t(`Remove ${itemName(item)}`, `Quitar ${itemName(item)}`)}
                className="shrink-0 px-1 text-[18px] leading-none text-bt-navy/50 hover:text-bt-navy"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      {estimate > 0 && (
        <p className="mt-3 text-[13px] text-bt-charcoal/75">
          {t("Approximate groceries", "Despensa aproximada")}: ≈ ${Math.round(estimate).toLocaleString("en-US")} USD
        </p>
      )}

      {/* Details — same fields and pickers as the villa pages' inquiry card */}
      <div className="mr-villa gro-details mt-8">
        <p className="gro-section-label">{t("Your Details", "Tus Datos")}</p>

        <div className="iq-field">
          <label htmlFor={`g-name${inSheet ? "-m" : ""}`} className="iq-label">{t("Name", "Nombre")}</label>
          <input
            id={`g-name${inSheet ? "-m" : ""}`}
            type="text"
            autoComplete="name"
            value={s.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder={t("Your name", "Tu nombre")}
            className="iq-input"
          />
        </div>

        <div className="iq-field">
          <span className="iq-label">Villa</span>
          <button
            type="button"
            className={`iq-dd-trigger${panel === "villa" ? " is-open" : ""}`}
            onClick={() => togglePanel("villa")}
            aria-expanded={panel === "villa"}
          >
            <span className={`iq-dd-val${s.villa ? "" : " ph"}`}>
              {s.villa === OTHER_VILLA ? t("Another property", "Otra propiedad") : s.villa || t("Select your villa", "Elige tu villa")}
            </span>
            <Arrow />
          </button>
          {panel === "villa" && (
            <div className="iq-dd-panel gro-options" role="listbox">
              {[...villas, OTHER_VILLA].map((v) => (
                <button
                  key={v}
                  type="button"
                  role="option"
                  aria-selected={s.villa === v}
                  className={`iq-opt${s.villa === v ? " is-selected" : ""}`}
                  onClick={() => { set("villa", v); setPanel(null); }}
                >
                  {v === OTHER_VILLA ? t("Another property", "Otra propiedad") : v}
                </button>
              ))}
            </div>
          )}
          {s.villa === OTHER_VILLA && (
            <input
              type="text"
              value={otherVilla}
              onChange={(e) => setOtherVilla(e.target.value)}
              placeholder={t("Property name", "Nombre de la propiedad")}
              aria-label={t("Property name", "Nombre de la propiedad")}
              className="iq-input mt-2"
            />
          )}
        </div>

        <div className="iq-field">
          <span className="iq-label">{t("Arrival date", "Fecha de llegada")}</span>
          <button
            type="button"
            className={`iq-dd-trigger${panel === "dates" ? " is-open" : ""}`}
            onClick={() => togglePanel("dates")}
            aria-expanded={panel === "dates"}
          >
            <span className={`iq-dd-val${s.arrival ? "" : " ph"}`}>{arrivalLabel() || t("Select date", "Elige la fecha")}</span>
            <Arrow />
          </button>
          {panel === "dates" && (
            <div className="iq-dd-panel iq-date-panel">
              <div className="dp-cal-body dp-active">
                {renderMonth()}
                <div className="dp-panel-footer">
                  <button className="dp-clear-btn" type="button" onClick={() => set("arrival", "")}>
                    {t("Clear date", "Borrar fecha")}
                  </button>
                  <button className="dp-done-btn" type="button" onClick={() => setPanel(null)}>
                    {t("Done", "Listo")}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="iq-field">
          <span className="iq-label">{t("Guests", "Huéspedes")}</span>
          <button
            type="button"
            className={`iq-dd-trigger${panel === "guests" ? " is-open" : ""}`}
            onClick={() => togglePanel("guests")}
            aria-expanded={panel === "guests"}
          >
            <span className={`iq-dd-val${partyLabel() ? "" : " ph"}`}>{partyLabel() || t("Select guests", "Elige huéspedes")}</span>
            <Arrow />
          </button>
          {panel === "guests" && (
            <div className="iq-dd-panel iq-guest-panel">
              {([
                ["adults", t("Adults", "Adultos"), t("Ages 13+", "13 años o más")],
                ["children", t("Children", "Niños"), t("Ages 2–12", "2 a 12 años")],
                ["infants", t("Infants", "Bebés"), t("Under 2", "Menores de 2")],
              ] as const).map(([key, label, age]) => (
                <div className="g-row" key={key}>
                  <div className="g-info">
                    <div className="g-type">{label}</div>
                    <div className="g-age">{age}</div>
                  </div>
                  <div className="g-counter">
                    <button className="ctr-btn" type="button" disabled={party[key] === 0} onClick={() => stepParty(key, -1)} aria-label={`${label} −1`}>&#8722;</button>
                    <span className="ctr-val">{party[key]}</span>
                    <button className="ctr-btn" type="button" onClick={() => stepParty(key, 1)} aria-label={`${label} +1`}>+</button>
                  </div>
                </div>
              ))}
              <div className="g-done-row">
                <button className="g-clear-btn" type="button" onClick={() => set("party", { adults: 0, children: 0, infants: 0 })}>
                  {t("Clear", "Borrar")}
                </button>
                <button className="g-done-btn" type="button" onClick={() => setPanel(null)}>
                  {t("Done", "Listo")}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="iq-field">
          <label htmlFor={`g-allergies${inSheet ? "-m" : ""}`} className="iq-label">
            {t("Allergies or dietary needs", "Alergias o dieta especial")}
            <span className="gro-optional">{t("optional", "opcional")}</span>
          </label>
          <input
            id={`g-allergies${inSheet ? "-m" : ""}`}
            type="text"
            value={s.allergies}
            onChange={(e) => set("allergies", e.target.value)}
            placeholder={t("Nut allergy, gluten-free, vegan…", "Alergia a nueces, sin gluten, vegano…")}
            className="iq-input"
          />
        </div>

        <div className="iq-field">
          <label htmlFor={`g-requests${inSheet ? "-m" : ""}`} className="iq-label">
            {t("Anything not on the list?", "¿Algo que no está en la lista?")}
            <span className="gro-optional">{t("optional", "opcional")}</span>
          </label>
          <textarea
            id={`g-requests${inSheet ? "-m" : ""}`}
            rows={3}
            value={s.requests}
            onChange={(e) => set("requests", e.target.value)}
            placeholder={t(
              "Favorite brands, birthday cake, flowers… we’ll do our best to find it.",
              "Marcas favoritas, pastel de cumpleaños, flores… haremos lo posible por conseguirlo."
            )}
            className="iq-input resize-y"
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-[13.5px] font-medium text-[#9B2C2C]">
          {error}
        </p>
      )}

      {sent ? (
        <div className="mt-6 border-l-2 border-bt-gold bg-bt-cream px-5 py-4">
          <p className="text-[14.5px] font-medium text-bt-navy">
            {sent === "whatsapp"
              ? t("WhatsApp opened with your list.", "Se abrió WhatsApp con tu lista.")
              : t("Your email app opened with your list.", "Se abrió tu correo con tu lista.")}
          </p>
          <p className="mt-1 text-[13.5px] leading-[1.7] text-bt-charcoal/85">
            {t(
              "Just tap send there. Your concierge will confirm everything with you.",
              "Solo dale enviar ahí. Tu concierge te confirmará todo."
            )}
          </p>
          <button type="button" onClick={() => setSent("")} className="mt-2 text-[12.5px] font-medium text-bt-navy underline underline-offset-4">
            {t("Didn’t open? Try again", "¿No se abrió? Intenta de nuevo")}
          </button>
        </div>
      ) : null}

      <div className="mt-6 space-y-3">
        <button type="button" onClick={sendWhatsApp} className={submitClass}>
          {t("Send by WhatsApp", "Enviar por WhatsApp")}
        </button>
        <button
          type="button"
          onClick={sendEmail}
          className="inline-flex min-h-11 w-full items-center justify-center border border-bt-navy/30 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-bt-navy transition hover:border-bt-navy hover:bg-bt-navy/[0.03] focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2"
        >
          {t("Send by Email", "Enviar por Correo")}
        </button>
        {count > 0 && (
          <button type="button" onClick={copyList} className="block w-full pt-1 text-center text-[12.5px] font-medium text-bt-navy/75 hover:text-bt-navy">
            {copied ? t("Copied ✓", "Copiada ✓") : t("Copy list", "Copiar lista")}
          </button>
        )}
      </div>
    </div>
  );

  const itemRow = (it: GroceryItem) => {
    const n = s.qty[it.id] || 0;
    return (
      <li key={it.id} className="border-b border-bt-navy/10 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[15px] leading-snug text-bt-navy">{itemName(it)}</p>
            <p className="mt-0.5 text-[12px] text-bt-charcoal/70">
              {t("per", "por")} {unitLabel(it, 1)}
              {it.price ? ` · ≈ $${it.price} USD` : ""}
              {it.seasonal && <span className="ml-2 text-bt-gold-text">· {t("seasonal", "de temporada")}</span>}
            </p>
          </div>
          {stepper(it)}
        </div>
        {n > 0 && (
          <input
            type="text"
            value={s.notes[it.id] || ""}
            onChange={(e) => setNote(it.id, e.target.value)}
            placeholder={t("Brand or note (optional)", "Marca o nota (opcional)")}
            aria-label={t(`Brand or note for ${itemName(it)}`, `Marca o nota para ${itemName(it)}`)}
            className="mt-2 w-full border-0 border-b border-dashed border-bt-navy/20 bg-transparent px-0 py-1.5 text-[13.5px] text-bt-navy outline-none placeholder:text-bt-navy/55 focus:border-bt-navy"
          />
        )}
      </li>
    );
  };

  /** A collapsible category (depth 0) or a sub-category inside a group (depth 1). */
  const section = (cat: GroceryCategory, depth: number): React.ReactNode => {
    const isOpen = !!q || !!open[cat.id];
    const all = itemsIn(cat);
    const inList = new Set(all.filter((it) => s.qty[it.id]).map((it) => it.id)).size;
    const title = es ? cat.titleEs || cat.title : cat.title;
    const panelId = `panel-${cat.slug}`;
    const Heading = depth ? "h3" : "h2";
    return (
      <section key={cat.id} id={`cat-${cat.slug}`} className={`scroll-mt-[150px] ${depth ? "" : "border-b border-bt-navy/15"}`}>
        <Heading className={depth ? "border-b border-bt-navy/10" : ""}>
          <button
            type="button"
            onClick={() => toggle(cat.id)}
            aria-expanded={isOpen}
            aria-controls={panelId}
            disabled={!!q}
            className={`group flex w-full items-center justify-between gap-4 text-left ${depth ? "py-3.5 pl-1" : "py-5"}`}
          >
            <span className="min-w-0">
              <span className={`font-serif font-light text-bt-navy ${depth ? "text-[21px] md:text-[22px]" : "text-[26px] md:text-[30px]"}`}>
                {title}
              </span>
              <span className="ml-3 whitespace-nowrap text-[12px] text-bt-charcoal/60">
                {all.length} {t("items", "artículos")}
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-3">
              {inList > 0 && (
                <span className="bg-bt-navy px-2 py-0.5 text-[11.5px] font-medium tabular-nums text-white">
                  {inList} {t("in list", "en lista")}
                </span>
              )}
              {!q && (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 text-bt-navy/70 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
            </span>
          </button>
        </Heading>
        {isOpen && (
          <div id={panelId} className={depth ? "pb-6 pl-1" : "pb-8"}>
            {cat.items.length > 0 && <ul className="grid gap-x-10 md:grid-cols-2">{cat.items.map(itemRow)}</ul>}
            {cat.children && cat.children.length > 0 && (
              <div className="border-l-2 border-bt-gold/40 pl-4 md:pl-6">
                {cat.children.map((k) => section(k, 1))}
              </div>
            )}
          </div>
        )}
      </section>
    );
  };

  // ── Page ────────────────────────────────────────────────────────────────
  return (
    <div translate="no">
      {/* Which side: Ready to Enjoy / Cooking for Yourself */}
      <div className="mx-auto w-full max-w-[1280px] px-6 pt-10 md:px-12 md:pt-14">
        <div role="tablist" aria-label={t("Grocery list sections", "Secciones de la lista")} className="grid grid-cols-2 gap-3 md:gap-6">
          {SIDES.map((sd) => {
            const active = side === sd.key;
            return (
              <button
                key={sd.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setSide(sd.key);
                  setQuery("");
                }}
                className={`group flex flex-col bg-white text-left transition focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2 ${
                  active ? "border-2 border-bt-gold" : "border-2 border-transparent opacity-75 hover:opacity-100"
                }`}
              >
                {/* Whole photo, never cropped or darkened */}
                <Image
                  src={sd.img}
                  alt=""
                  width={1672}
                  height={941}
                  sizes="(min-width: 1280px) 600px, 50vw"
                  className="block h-auto w-full"
                />
                <span className={`block px-3 pb-3 pt-3 md:px-5 md:pb-5 md:pt-4 ${active ? "bg-bt-cream" : "bg-white"}`}>
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="block font-serif text-[19px] font-light leading-tight text-bt-navy md:text-[28px]">
                      {es ? sd.es : sd.en}
                    </span>
                    {active && (
                      <span className="hidden shrink-0 text-[10px] font-medium uppercase tracking-[0.16em] text-bt-gold-text sm:inline">
                        {t("Viewing", "Viendo")}
                      </span>
                    )}
                  </span>
                  <span className="mt-1 block text-[11.5px] leading-snug text-bt-charcoal/80 md:text-[13.5px]">{es ? sd.subEs : sd.subEn}</span>
                </span>
              </button>
            );
          })}
        </div>

        {side === "cooking" && (
          <div className="mt-6 border-l-2 border-bt-gold bg-bt-cream px-5 py-4">
            <p className="text-[14.5px] leading-[1.7] text-bt-charcoal/90">
              <span className="font-medium text-bt-navy">{t("Only if you plan to cook yourself.", "Solo si piensas cocinar tú.")}</span>{" "}
              {t(
                "If our cook prepares your meals, skip this part. The cook takes care of those groceries.",
                "Si nuestro cocinero prepara tus comidas, no necesitas esta parte; el cocinero se encarga de esas compras."
              )}
            </p>
          </div>
        )}

      </div>

      {/* Search + category shortcuts */}
      <div className="sticky top-[60px] z-20 border-b border-bt-navy/10 bg-white/95 backdrop-blur md:top-[64px]">
        <div className="mx-auto w-full max-w-[1280px] px-6 py-3 md:px-12">
          <div className="relative">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-bt-navy/60">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("Search groceries — e.g. avocado, Corona, oat milk", "Busca — ej. aguacate, Corona, leche de avena")}
              aria-label={t("Search groceries", "Buscar en la despensa")}
              className={`${fieldClass} pl-7`}
            />
          </div>
          {!q && (
            <nav aria-label={t("Categories", "Categorías")} className="-mx-6 mt-2 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] md:-mx-12 md:px-12">
              {sideCats.map((cat) => (
                <a
                  key={cat.id}
                  href={`#cat-${cat.slug}`}
                  onClick={() => setOpen((o) => ({ ...o, [cat.id]: true }))}
                  className="shrink-0 border border-bt-navy/15 px-3 py-1.5 text-[12px] text-bt-navy transition hover:border-bt-navy/40 hover:bg-bt-cream"
                >
                  {es ? cat.titleEs || cat.title : cat.title}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-6 pb-32 pt-10 md:px-12 lg:grid lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16 lg:pb-24">
        {/* Catalog */}
        <div>
          {visible.length === 0 && (
            <div className="py-16 text-center">
              <p className="font-serif text-2xl font-light text-bt-navy">{t("No matches", "Sin resultados")}</p>
              <p className="mt-3 text-[14.5px] text-bt-charcoal/80">
                {t(
                  "Add it to “Anything not on the list?” and we’ll find it for you.",
                  "Agrégalo en “¿Algo que no está en la lista?” y lo buscamos por ti."
                )}
              </p>
            </div>
          )}

          {!q && (
            <div className="mb-4 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  const anyOpen = Object.values(open).some(Boolean);
                  setOpen(
                    anyOpen
                      ? {}
                      : Object.fromEntries(
                          sideCats.flatMap((c) => [c.id, ...(c.children || []).map((k) => k.id)]).map((id) => [id, true])
                        )
                  );
                }}
                className="text-[12.5px] font-medium text-bt-navy/75 underline-offset-4 hover:text-bt-navy hover:underline"
              >
                {Object.values(open).some(Boolean) ? t("Close all", "Cerrar todo") : t("Open all", "Abrir todo")}
              </button>
            </div>
          )}

          <div className="border-t border-bt-navy/15">
            {visible.map((cat) => section(cat, 0))}
          </div>
        </div>

        {/* Computer: list beside the catalog */}
        <aside className="hidden lg:block">
          <div className="sticky top-[170px] max-h-[calc(100vh-190px)] overflow-y-auto border border-bt-navy/10 bg-white p-7">
            {listPanel()}
          </div>
        </aside>
      </div>

      {/* Phone: bottom bar + full-screen list */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-bt-navy/10 bg-white/95 p-3 backdrop-blur lg:hidden">
        <button type="button" onClick={() => setSheet(true)} className={`${submitClass} mt-0`}>
          {count > 0
            ? t(`Review & Send · ${count} ${count === 1 ? "item" : "items"}`, `Revisar y Enviar · ${count} ${count === 1 ? "artículo" : "artículos"}`)
            : t("Your List · Send to Concierge", "Tu Lista · Enviar al Concierge")}
        </button>
      </div>

      {sheet && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white lg:hidden" role="dialog" aria-modal="true" aria-label={t("Your list", "Tu lista")}>
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-bt-navy/10 bg-white px-6 py-3">
            <button type="button" onClick={() => setSheet(false)} className="text-[13px] font-medium text-bt-navy">
              ← {t("Keep shopping", "Seguir eligiendo")}
            </button>
          </div>
          <div className="px-6 pb-12 pt-6">
            {listPanel(true)}
          </div>
        </div>
      )}
    </div>
  );
}
