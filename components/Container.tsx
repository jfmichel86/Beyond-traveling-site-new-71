import React from "react";

export default function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-7 sm:px-8 md:px-12 lg:px-24 ${className}`}>{children}</div>;
}
