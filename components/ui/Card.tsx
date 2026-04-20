import { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 md:p-8 border border-neutral-150 shadow-sm transition-shadow duration-200 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

export function CardIcon({ children }: { children: ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center mb-4 shrink-0">
      {children}
    </div>
  );
}
