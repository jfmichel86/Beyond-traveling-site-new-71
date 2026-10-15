"use client";

import { useState, type ReactNode } from "react";

/**
 * Horizontal scroll wrapper for the comparison table. The table itself is
 * passed in as children (so it stays server-rendered); this client piece only
 * tracks one thing: the "Swipe to compare" hint disappears after the visitor
 * first scrolls the table sideways.
 */
export default function SwipeScroller({ children }: { children: ReactNode }) {
  const [swiped, setSwiped] = useState(false);

  return (
    <div className="relative">
      <div
        className="overflow-x-auto"
        onScroll={(e) => {
          if (!swiped && e.currentTarget.scrollLeft > 8) setSwiped(true);
        }}
      >
        {children}
      </div>
      {!swiped && (
        <p className="mt-3 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-bt-navy/75 md:hidden">
          Swipe to compare &rarr;
        </p>
      )}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-bt-cream to-transparent md:hidden" />
    </div>
  );
}
