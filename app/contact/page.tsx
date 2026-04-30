"use client";

import React, { useState } from "react";
import Container from "@/components/Container";

export const metadata = {
  title: "Contact Property Management Punta Mita",
  description:
    "Get in touch with Beyond Traveling for luxury property management in Punta Mita. Direct communication and fast response.",
};

/* Shared */
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-3xl md:text-4xl leading-[1.12] tracking-tight text-slate-900">
    {children}
  </h2>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[17px] text-slate-900/75 leading-[1.7]">
    {children}
  </p>
);

/* INTRO */
const ContactIntro = () => (
  <section className="bg-white">
    <Container>
     <div className="py-16 md:py-24 text-center max-w-[760px] mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.08] text-slate-900 max-w-[800px] mx-auto">   Let’s Have a Conversation </h1>

        <p className="mt-6 text-[17px] leading-[1.7] text-slate-900/70">
          Whether you’re actively looking for a new management team or just want to understand your options, we’re happy to talk.
        </p>
      </div>
    </Container>
  </section>
);

/* CONTACT + FORM */
const ContactSection = () => {
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
    <section className="bg-[#f1f4f8] overflow-hidden">
  <div className="mx-auto max-w-[1100px] px-6 py-16 md:py-24">
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">

        {/* LEFT — TEXT */}
        <div className="md:col-span-6 space-y-6 max-w-full md:max-w-[520px] min-w-0">

          <SectionTitle>Get in Touch</SectionTitle>

          <Body>
            We keep communication simple and direct. You can reach us through any of the options below.
          </Body>

          <div className="text-[16px] leading-[1.7] text-slate-900/80 space-y-2 break-words">
            <p>Email: contact@beyondtraveling.com</p>
            <p>Phone / WhatsApp: +52 33 1361 9889</p>
           <p>
  <a
    href="https://wa.me/523313619889"
    className="inline-flex max-w-full items-center gap-2 underline underline-offset-4 hover:opacity-80 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-5 h-5"
      fill="currentColor"
    >
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.638.858 5.077 2.313 7.06L4 29l7.153-2.252A11.937 11.937 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.872 0-3.644-.5-5.184-1.374l-.37-.22-4.247 1.337 1.388-4.136-.241-.387A9.958 9.958 0 0 1 6 15c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.393-7.382c-.294-.147-1.737-.857-2.007-.955-.27-.098-.467-.147-.664.147-.197.294-.762.955-.934 1.152-.172.197-.344.221-.638.074-.294-.147-1.24-.457-2.363-1.457-.873-.779-1.462-1.74-1.634-2.034-.172-.294-.018-.453.129-.6.132-.131.294-.344.441-.516.147-.172.197-.294.294-.49.098-.197.049-.369-.025-.516-.074-.147-.664-1.602-.91-2.193-.24-.577-.485-.498-.664-.507-.172-.009-.369-.011-.566-.011-.197 0-.516.074-.787.369-.27.294-1.033 1.01-1.033 2.459 0 1.449 1.058 2.847 1.205 3.044.147.197 2.083 3.183 5.043 4.464.705.304 1.254.485 1.683.621.707.225 1.35.193 1.86.117.567-.084 1.737-.71 1.982-1.396.245-.686.245-1.274.172-1.396-.074-.123-.27-.197-.566-.344z"/>
    </svg>
    Message us on WhatsApp
  </a>
</p>
          </div>

          <Body>
            We’ll get back to you as soon as possible.
          </Body>

        </div>

        {/* RIGHT — FORM */}
        <div className="md:col-span-6 min-w-0">
          <div className="w-full overflow-hidden bg-white rounded-2xl border border-slate-200/70 p-6 md:p-8 shadow-sm">

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

          </div>
        </div>

          </div>
        </div>
</section>
  );
};

/* CLOSING */
const ContactClosing = () => (
  <section className="bg-white">
    <Container>
      <div className="py-16 md:py-24 text-center max-w-[680px] mx-auto space-y-4">

        <h3 className="font-serif text-3xl md:text-4xl leading-[1.12] tracking-tight text-slate-900">
          No Pressure. No Sales Pitch
        </h3>

        <p className="text-[17px] text-slate-900/75">
          Just an honest conversation about your property.
        </p>

      </div>
    </Container>
  </section>
);

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ContactIntro />
      <ContactSection />
      <ContactClosing />
    </div>
  );
}
