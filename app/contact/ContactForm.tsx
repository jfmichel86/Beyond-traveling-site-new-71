"use client";

import React, { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

        const text = encodeURIComponent(
      language === "es"
        ? `Nueva consulta desde el sitio web de Beyond Traveling:

Nombre: ${name}
Correo: ${email}

Mensaje:
${message}`
        : `New inquiry from Beyond Traveling website:

Name: ${name}
Email: ${email}

Message:
${message}`
    );

    const whatsappUrl = `https://wa.me/523313619889?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  const fieldClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-[15px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/15";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-[14px] font-semibold text-slate-900"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="Your name"
          value={name}
          required
          autoComplete="name"
          onChange={(e) => setName(e.target.value)}
          className={fieldClass}
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-[14px] font-semibold text-slate-900"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          required
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          className={fieldClass}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-[14px] font-semibold text-slate-900"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          placeholder="Tell us a little about your property or what you need help with."
          rows={5}
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-slate-900 px-5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
      >
        Send via WhatsApp
      </button>

      <p className="text-center text-[13px] leading-6 text-slate-900/55">
        This opens WhatsApp with your message ready to send.
      </p>
    </form>
  );
}
