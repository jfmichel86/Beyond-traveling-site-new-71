"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import {
  Field,
  SelectInput,
  fieldClass,
  submitClass,
} from "@/components/contact/fields";

const BEDROOMS = ["1–2", "3", "4", "5", "6 or more"];
const SETUPS = [
  "I manage it myself",
  "I work with another company",
  "New property, not rented yet",
  "Something else",
];

export default function OwnerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [setup, setSetup] = useState("");
  const [message, setMessage] = useState("");
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const es = language === "es";

    const lines = [
      es
        ? "Nueva consulta de propietario desde el sitio web de Beyond Traveling:"
        : "New property owner inquiry from the Beyond Traveling website:",
      "",
      `${es ? "Nombre" : "Name"}: ${name}`,
      `${es ? "Correo" : "Email"}: ${email}`,
      `${es ? "Ubicación de la propiedad" : "Property location"}: ${location}`,
      bedrooms ? `${es ? "Recámaras" : "Bedrooms"}: ${bedrooms}` : "",
      setup ? `${es ? "Situación actual" : "Current setup"}: ${setup}` : "",
      message ? `\n${es ? "Mensaje" : "Message"}:\n${message}` : "",
    ].filter((line, i) => line !== "" || i === 1);

    const url = `https://wa.me/523313619889?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field id="owner-name" label="Name">
        <input
          id="owner-name"
          type="text"
          placeholder="Your name"
          value={name}
          required
          autoComplete="name"
          onChange={(e) => setName(e.target.value)}
          className={fieldClass}
        />
      </Field>

      <Field id="owner-email" label="Email">
        <input
          id="owner-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          required
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
        />
      </Field>

      <Field id="owner-location" label="Where is your property?">
        <input
          id="owner-location"
          type="text"
          placeholder="e.g. Punta Mita, Porta Fortuna, Las Palmas"
          value={location}
          required
          onChange={(e) => setLocation(e.target.value)}
          className={fieldClass}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
        <Field id="owner-bedrooms" label="Bedrooms" optional>
          <SelectInput id="owner-bedrooms" value={bedrooms} onChange={setBedrooms}>
            <option value="">Select</option>
            {BEDROOMS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </SelectInput>
        </Field>

        <Field id="owner-setup" label="Current setup" optional>
          <SelectInput id="owner-setup" value={setup} onChange={setSetup}>
            <option value="">Select</option>
            {SETUPS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </SelectInput>
        </Field>
      </div>

      <Field id="owner-message" label="Message" optional>
        <textarea
          id="owner-message"
          placeholder="Tell us what you are looking for, or what has not been working with your current setup."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </Field>

      <button type="submit" className={submitClass}>
        Send via WhatsApp
      </button>

      <p className="text-center text-[13px] font-normal leading-6 text-bt-charcoal/85">
        This opens WhatsApp with your message ready to send.
      </p>
    </form>
  );
}
