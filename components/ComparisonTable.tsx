"use client";

import React from "react";

/**
 * Interactive version of the service-comparison table. Hovering highlights
 * the whole column (header + cells) for the service under the cursor,
 * rather than the row — the point is to help a visitor compare "this plan
 * vs. that plan" down a column, not scan sideways across one feature.
 */

const CheckMark = () => (
  <svg
    role="img"
    aria-label="Included"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1E3A5F"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mx-auto"
  >
    <polyline points="4 12 10 18 20 6" />
  </svg>
);

export default function ComparisonTable({
  columns,
  rows,
}: {
  columns: { tag: string; name: string; highlight?: boolean }[];
  rows: { feature: string; values: boolean[] }[];
}) {
  const [hoverCol, setHoverCol] = React.useState<number | null>(null);

  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse">
          <caption className="sr-only">
            Comparison of Beyond Traveling&rsquo;s five services and what each includes
          </caption>
          <thead>
            <tr>
              <th scope="col" className="border-b border-bt-navy/30 py-3 pr-4 text-left">
                <span className="sr-only">Feature</span>
              </th>
              {columns.map((col, j) => (
                <th
                  key={col.name}
                  scope="col"
                  onMouseEnter={() => setHoverCol(j)}
                  onMouseLeave={() => setHoverCol(null)}
                  className={`px-2 py-3 text-center transition-colors duration-200 ${
                    col.highlight ? "border-b-2 border-bt-gold" : "border-b border-bt-navy/30"
                  } ${hoverCol === j ? "bg-bt-navy/[0.09]" : ""}`}
                >
                  <p
                    className={`text-[10px] font-medium uppercase tracking-[0.2em] ${
                      col.highlight ? "text-[#8A6228]" : "text-bt-navy/80"
                    }`}
                  >
                    {col.tag}
                  </p>
                  <p className="font-serif mt-2 text-[16px] font-medium text-bt-navy">
                    {col.name}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.feature} className={i % 2 === 0 ? "bg-bt-navy/[0.05]" : ""}>
                <th
                  scope="row"
                  className="border-b border-bt-navy/15 py-4 pr-4 text-left text-[14px] font-medium text-bt-navy"
                >
                  {row.feature}
                </th>
                {row.values.map((included, j) => (
                  <td
                    key={j}
                    onMouseEnter={() => setHoverCol(j)}
                    onMouseLeave={() => setHoverCol(null)}
                    className={`border-b border-bt-navy/15 px-2 py-4 text-center text-[14px] text-bt-navy/35 transition-colors duration-200 ${
                      hoverCol === j ? "bg-bt-navy/[0.09]" : ""
                    }`}
                  >
                    {included ? (
                      <CheckMark />
                    ) : (
                      <span role="img" aria-label="Not included">
                        &ndash;
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bt-cream to-transparent md:hidden" />
    </div>
  );
}
