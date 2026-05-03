import Link from "next/link";
import type { ReactNode, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "light" | "outline" | "whatsapp";
type Size = "md" | "lg";

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors";

const variantClass: Record<Variant, string> = {
  primary: "bg-primary-600 hover:bg-primary-700 text-white",
  light: "bg-white hover:bg-primary-50 text-primary-700",
  outline:
    "border border-primary-300/50 text-white hover:bg-primary-600/40",
  whatsapp: "bg-[#25D366] hover:bg-[#1fb558] text-white",
};

const sizeClass: Record<Size, string> = {
  md: "px-4 py-3 min-h-[48px]",
  lg: "px-6 py-4 min-h-[56px]",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  external,
  ...rest
}: ButtonProps) {
  const classes = `${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${className}`;
  const isProtocolLink = /^(tel:|mailto:|sms:)/i.test(href);
  const isExternal = external ?? (!href.startsWith("/") && !href.startsWith("#") && !isProtocolLink);

  if (isExternal || isProtocolLink) {
    const externalProps = isExternal
      ? { target: rest.target ?? "_blank", rel: rest.rel ?? "noopener noreferrer" }
      : {};
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
