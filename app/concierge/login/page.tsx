import React from "react";
import PanelTop from "../PanelTop";

export const dynamic = "force-dynamic";

const ERRORS: Record<string, string> = {
  domain: "Esa cuenta no tiene acceso. Entra con tu cuenta de la empresa (@beyondtravelingmx.com o @mexicanreserve.com).",
  state: "La sesión tardó demasiado. Intenta de nuevo.",
  google: "Google no pudo confirmar tu cuenta. Intenta de nuevo.",
  setup: "El inicio de sesión todavía no está configurado (faltan las claves de Google en Vercel).",
};

export default function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  const error = searchParams.error ? ERRORS[searchParams.error] || "No se pudo iniciar sesión." : "";
  return (
    <>
      <PanelTop />
      <div className="mx-auto flex max-w-[440px] flex-col gap-5 px-6 pb-20 pt-16">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-bt-gold-text">Solo para el equipo</p>
        <h1 className="m-0 font-serif text-[44px] font-medium leading-tight text-bt-navy">Panel del concierge</h1>
        <p className="text-[16px] leading-relaxed">Entra con tu cuenta de Google de Beyond Traveling (@beyondtravelingmx.com).</p>
        {error && <p className="border-l-2 border-[#8A4B12] bg-[#F6E0CF] px-4 py-3 text-[14px] text-[#6B3A0E]">{error}</p>}
        <a
          href="/api/concierge/auth/login"
          className="flex min-h-[52px] items-center justify-center gap-3 bg-bt-navy px-6 text-[14px] font-semibold uppercase tracking-[0.14em] text-white no-underline hover:bg-bt-navy-light"
        >
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l3 2" />
          </svg>
          Entrar con Google
        </a>
      </div>
    </>
  );
}
