import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md",
  secondary:
    "bg-white text-primary-700 border-2 border-primary-600 hover:bg-primary-50",
  ghost: "text-primary-700 hover:bg-primary-50",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1fb558] shadow-sm",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-base min-h-[48px]",
  lg: "px-6 py-4 text-lg min-h-[56px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:ring-4 focus-visible:ring-primary-200";

export function ButtonLink({
  href,
  external,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  children,
  className = "",
  ...rest
}: BaseProps & {
  href: string;
  external?: boolean;
  "aria-label"?: string;
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {icon}
        <span>{children}</span>
        {iconRight}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {icon}
      <span>{children}</span>
      {iconRight}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  children,
  className = "",
  type = "button",
  ...rest
}: BaseProps & {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} disabled:opacity-50 disabled:cursor-not-allowed ${className}`;
  return (
    <button type={type} className={classes} {...rest}>
      {icon}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}
