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
      className={`
        bg-white rounded-2xl p-6 md:p-8
        border border-sand-200/70
        shadow-[0_1px_2px_0_rgb(10_71_93_/_0.04),0_4px_20px_-8px_rgb(10_71_93_/_0.06)]
        transition-[box-shadow,border-color,transform] duration-300 ease-out
        hover:shadow-[0_2px_4px_0_rgb(10_71_93_/_0.05),0_12px_32px_-8px_rgb(10_71_93_/_0.12)]
        hover:border-sand-300/80
        ${className}
      `.replace(/\s+/g, " ").trim()}
    >
      {children}
    </div>
  );
}

export function CardIcon({ children }: { children: ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center mb-4 shrink-0 shadow-sm shadow-primary-900/10">
      {children}
    </div>
  );
}
