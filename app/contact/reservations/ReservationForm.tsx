"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import {
  Field,
  SelectInput,
  fieldClass,
  submitClass,
} from "@/components/contact/fields";

const VILLAS = [
  { slug: "villa-amore", name: "Villa Amore" },
  { slug: "villa-brezza", name: "Villa Brezza" },
  { slug: "villa-llamas", name: "Villa Llamas" },
  { slug: "las-palmas-28", name: "Las Palmas 28" },
];

const NOT_SURE = "not-sure";
const GUESTS = Array.from({ length: 14 }, (_, i) => String(i + 1)).concat(
  "15 or more"
);

function formatDate(iso: string, es: boolean) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(es ? "es-MX" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ReservationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [villa, setVilla] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [today, setToday] = useState("");
  const { language } = useLanguage();

  // Set after mount so server and client markup match (no date at render time),
  // and preselect the villa when arriving from a property page
  // (/contact/reservations?villa=villa-amore).
  useEffect(() => {
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    setToday(`${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`);

    const wanted = new URLSearchParams(window.location.search).get("villa");
    if (wanted && VILLAS.some((v) => v.slug === wanted)) setVilla(wanted);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (checkOut <= checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }
    setError("");

    const es = language === "es";
    const villaName =
      VILLAS.find((v) => v.slug === villa)?.name ??
      (es ? "Aún no lo sé, ayúdenme a elegir" : "Not sure yet, help me choose");

    const lines = [
      es
        ? "Solicitud de estancia desde el sitio web de Beyond Traveling:"
        : "Stay inquiry from the Beyond Traveling website:",
      "",
      `${es ? "Nombre" : "Name"}: ${name}`,
      `${es ? "Correo" : "Email"}: ${email}`,
      `Villa: ${villaName}`,
      `${es ? "Llegada" : "Check-in"}: ${formatDate(checkIn, es)}`,
      `${es ? "Salida" : "Check-out"}: ${formatDate(checkOut, es)}`,
      `${es ? "Huéspedes" : "Guests"}: ${guests}`,
      message ? `\n${es ? "Comentarios" : "Notes"}:\n${message}` : "",
    ].filter((line, i) => line !== "" || i === 1);

    const url = `https://wa.me/523313619889?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field id="res-name" label="Name">
        <input
          id="res-name"
          type="text"
          placeholder="Your name"
          value={name}
          required
          autoComplete="name"
          onChange={(e) => setName(e.target.value)}
          className={fieldClass}
        />
      </Field>

      <Field id="res-email" label="Email">
        <input
          id="res-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          required
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
        />
      </Field>

      <Field id="res-villa" label="Which villa?">
        <SelectInput id="res-villa" value={villa} onChange={setVilla} required>
          <option value="" disabled>
            Select a villa
          </option>
          {VILLAS.map((v) => (
            <option key={v.slug} value={v.slug}>
              {v.name}
            </option>
          ))}
          <option value={NOT_SURE}>Not sure yet, help me choose</option>
        </SelectInput>
      </Field>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
        <Field id="res-checkin" label="Check-in">
          <input
            id="res-checkin"
            type="date"
            value={checkIn}
            min={today || undefined}
            required
            onChange={(e) => {
              setCheckIn(e.target.value);
              setError("");
            }}
            className={fieldClass}
          />
        </Field>

        <Field id="res-checkout" label="Check-out">
          <input
            id="res-checkout"
            type="date"
            value={checkOut}
            min={checkIn || today || undefined}
            required
            onChange={(e) => {
              setCheckOut(e.target.value);
              setError("");
            }}
            className={fieldClass}
          />
        </Field>
      </div>

      <Field id="res-guests" label="Guests">
        <SelectInput id="res-guests" value={guests} onChange={setGuests} required>
          <option value="" disabled>
            Number of guests
          </option>
          {GUESTS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </SelectInput>
      </Field>

      <Field id="res-message" label="Anything we should know?" optional>
        <textarea
          id="res-message"
          placeholder="Flexible dates, a special occasion, or anything you would like us to arrange."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </Field>

      {error && (
        <p role="alert" className="text-[13.5px] font-medium text-[#9B2C2C]">
          {error}
        </p>
      )}

      <button type="submit" className={submitClass}>
        Send via WhatsApp
      </button>

      <p className="text-center text-[13px] font-normal leading-6 text-bt-charcoal/85">
        This opens WhatsApp with your request ready to send.
      </p>
    </form>
  );
}
