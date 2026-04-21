import { ReactNode } from "react";

type Tone = "primary" | "light" | "sand";

export function Eyebrow({
  children,
  tone = "primary",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const textColor =
    tone === "light"
      ? "text-primary-100"
      : tone === "sand"
      ? "text-sand-700"
      : "text-primary-700";

  const ruleColor =
    tone === "light"
      ? "bg-sand-100/50"
      : tone === "sand"
      ? "bg-sand-500/70"
      : "bg-sand-500/70";

  return (
    <div className={`flex items-center gap-3 mb-4 ${className}`}>
      <span aria-hidden="true" className={`h-px w-8 shrink-0 ${ruleColor}`} />
      <span
        className={`text-sm font-semibold tracking-wide ${textColor}`}
      >
        {children}
      </span>
    </div>
  );
}
