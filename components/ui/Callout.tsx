import { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type Variant = "info" | "warning" | "success";

const styles: Record<Variant, { wrap: string; icon: string }> = {
  info: {
    wrap: "bg-sand-50 border-sand-200",
    icon: "text-primary-700",
  },
  warning: {
    wrap: "bg-warning-50 border-warning-100",
    icon: "text-warning-700",
  },
  success: {
    wrap: "bg-accent-50 border-accent-100",
    icon: "text-accent-700",
  },
};

export function Callout({
  children,
  icon: Icon,
  variant = "info",
  title,
  className = "",
}: {
  children: ReactNode;
  icon?: LucideIcon;
  variant?: Variant;
  title?: string;
  className?: string;
}) {
  const v = styles[variant];
  return (
    <div
      role={variant === "warning" ? "note" : undefined}
      className={`flex items-start gap-3 p-4 md:p-5 rounded-xl border ${v.wrap} ${className}`}
    >
      {Icon && (
        <Icon
          className={`w-5 h-5 shrink-0 mt-0.5 ${v.icon}`}
          aria-hidden="true"
        />
      )}
      <div className="flex-1 min-w-0 text-neutral-700 leading-relaxed">
        {title && (
          <div className="font-semibold text-neutral-900 mb-1">{title}</div>
        )}
        {children}
      </div>
    </div>
  );
}
