"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `New inquiry from Beyond Traveling website:

Name: ${name}
Email: ${email}

Message:
${message}`
    );

    const whatsappUrl = `https://wa.me/523313619889?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-[15px]"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-[15px]"
      />

      <textarea
        placeholder="Message"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border border-slate-300 rounded-lg px-4 py-3 text-[15px]"
      />

      <button
        type="submit"
        className="w-full bg-slate-900 text-white py-3 rounded-lg text-[15px] hover:bg-slate-800 transition"
      >
        Start a Conversation
      </button>
    </form>
  );
}
