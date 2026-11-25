import React from "react";

export const metadata = {
  title: { absolute: "Panel del concierge | Beyond Traveling" },
  robots: { index: false, follow: false },
};

export default function ConciergeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div translate="no" className="min-h-screen bg-bt-cream font-sans text-bt-charcoal">
      {children}
    </div>
  );
}
