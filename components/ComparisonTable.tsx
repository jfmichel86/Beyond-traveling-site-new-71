import SwipeScroller from "./SwipeScroller";

/**
 * Service-comparison table — rendered on the server (fully crawlable, no
 * client JS for the table itself). Hovering highlights the whole column
 * (header + cells) for the service under the cursor, using CSS only (see
 * `.cmp-table` in globals.css, keyed off each cell's data-col). The only
 * client piece is SwipeScroller, which hides the "swipe" hint after the
 * first sideways scroll.
 */

const CheckMark = () => (
  <svg
    role="img"
    aria-label="Included"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1E3A5F"
    strokeWidth={3.25}
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
  return (
    <SwipeScroller>
        <table className="cmp-table w-full min-w-[760px] border-collapse">
          <caption className="sr-only">
            Comparison of Beyond Traveling&rsquo;s five services and what each includes
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-20 w-[140px] min-w-[140px] border-b border-bt-navy/30 bg-bt-cream py-3 pr-3 text-left md:static md:w-auto md:min-w-0 md:pr-4"
              >
                <span className="sr-only">Feature</span>
              </th>
              {columns.map((col, j) => (
                <th
                  key={col.name}
                  scope="col"
                  data-col={j}
                  className={`px-2 py-3 text-center transition-colors duration-200 ${
                    col.highlight ? "border-b-2 border-bt-gold" : "border-b border-bt-navy/30"
                  }`}
                >
                  <p
                    className={`text-[11px] font-medium uppercase tracking-[0.2em] ${
                      col.highlight ? "text-bt-gold-text" : "text-bt-navy/80"
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
                  className={`sticky left-0 z-10 w-[140px] min-w-[140px] border-b border-r border-bt-navy/15 py-4 pr-3 text-left text-[14px] font-medium text-bt-navy md:static md:w-auto md:min-w-0 md:border-r-0 md:bg-transparent md:pr-4 ${
                    i % 2 === 0 ? "bg-[#EDEBE5]" : "bg-bt-cream"
                  }`}
                >
                  {row.feature}
                </th>
                {row.values.map((included, j) => (
                  <td
                    key={j}
                    data-col={j}
                    className="border-b border-bt-navy/15 px-2 py-4 text-center text-[14px] text-bt-navy/70 transition-colors duration-200"
                  >
                    {included ? (
                      <CheckMark />
                    ) : (
                      <span role="img" aria-label="Not included" className="text-[20px] font-medium leading-none">
                        &ndash;
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
    </SwipeScroller>
  );
}
