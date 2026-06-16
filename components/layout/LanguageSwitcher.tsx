"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Globe, Check, ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { routing, localeConfig, type Locale } from "@/i18n/routing";

/**
 * Sélecteur de langue. Conserve la page courante en changeant de langue
 * (le pathname est déjà dé-préfixé par `usePathname` de next-intl).
 */
export function LanguageSwitcher({ variant = "bar" }: { variant?: "bar" | "drawer" }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // En tiroir mobile : liste de liens directe, sans dropdown.
  if (variant === "drawer") {
    return (
      <div className="flex items-center gap-2" role="group" aria-label={t("label")}>
        <Globe className="w-5 h-5 text-neutral-500 shrink-0" aria-hidden="true" />
        {routing.locales.map((l) => (
          <Link
            key={l}
            href={pathname}
            locale={l}
            hrefLang={l}
            aria-current={l === locale ? "true" : undefined}
            className={`px-3 py-2 rounded-lg text-base font-medium ${
              l === locale
                ? "bg-primary-50 text-primary-700"
                : "text-neutral-700 hover:bg-neutral-50"
            }`}
          >
            {localeConfig[l].label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t("label")}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm xl:text-base font-medium text-neutral-700 hover:text-primary-700 hover:bg-neutral-50 transition-colors"
      >
        <Globe className="w-4 h-4" aria-hidden="true" />
        <span>{localeConfig[locale].label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div
          role="menu"
          aria-label={t("label")}
          className="absolute top-full end-0 mt-2 z-50 min-w-[160px] bg-white rounded-xl shadow-xl ring-1 ring-neutral-150 p-2"
        >
          <ul className="space-y-0.5">
            {routing.locales.map((l) => (
              <li key={l}>
                <Link
                  href={pathname}
                  locale={l}
                  hrefLang={l}
                  role="menuitem"
                  aria-current={l === locale ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    l === locale
                      ? "bg-primary-50 text-primary-700 font-semibold"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <span>{localeConfig[l].label}</span>
                  {l === locale && (
                    <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
