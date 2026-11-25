"use client";

import React from "react";

export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="min-h-[44px] bg-bt-navy px-5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white print:hidden"
    >
      {label}
    </button>
  );
}
