import React from "react";

/**
 * Shared form primitives for the /contact/* pages — same quiet-boutique
 * underline-only inputs the original contact form used.
 */

export const fieldClass =
  "w-full border-0 border-b border-bt-navy/30 bg-transparent px-0 py-3 text-[15px] font-normal text-bt-navy outline-none transition placeholder:text-bt-navy/65 focus:border-bt-navy";

export const labelClass = "mb-2 block text-[14px] font-medium text-bt-navy";

export const submitClass =
  "mt-2 inline-flex min-h-11 w-full items-center justify-center bg-bt-navy px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-bt-navy-light focus:outline-none focus:ring-2 focus:ring-bt-navy focus:ring-offset-2 active:scale-[0.99]";

export function Field({
  id,
  label,
  optional = false,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {optional && (
          <span className="ml-2 text-[12px] font-normal text-bt-navy/80">
            (optional)
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

export function SelectInput({
  id,
  value,
  onChange,
  required = false,
  children,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldClass} appearance-none pr-7`}
      >
        {children}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-bt-navy/75"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
}
