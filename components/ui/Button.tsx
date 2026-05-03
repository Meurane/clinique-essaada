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

const PROTOCOL_LINK = /^(tel:|mailto:|sms:)/i;
const DANGEROUS_PROTOCOL = /^(javascript:|data:|vbscript:|file:)/i;
const HTTP_PROTOCOL = /^https?:\/\//i;

type LinkClass = "internal" | "protocol" | "external" | "unsafe";

function classifyHref(href: string): LinkClass {
  if (DANGEROUS_PROTOCOL.test(href)) return "unsafe";
  if (PROTOCOL_LINK.test(href)) return "protocol";
  if (href.startsWith("/") || href.startsWith("#")) return "internal";
  if (HTTP_PROTOCOL.test(href) || href.startsWith("//")) return "external";
  return "unsafe";
}

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
  const kind = classifyHref(href);

  if (kind === "unsafe") {
    if (process.env.NODE_ENV !== "production") {
      console.error(`[Button] refused unsafe href: ${href}`);
    }
    return (
      <span className={classes} role="link" aria-disabled="true">
        {children}
      </span>
    );
  }

  const treatAsExternal = external ?? kind === "external";

  if (treatAsExternal || kind === "protocol") {
    const externalProps = treatAsExternal
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
