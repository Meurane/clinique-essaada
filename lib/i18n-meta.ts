import { site } from "./site";
import { routing } from "@/i18n/routing";

/**
 * Construit le chemin public d'une page pour une langue donnée, en respectant
 * `localePrefix: "as-needed"` (le français n'a pas de préfixe).
 */
export function localePath(locale: string, pathname: string): string {
  const clean = pathname === "/" ? "" : pathname;
  return locale === routing.defaultLocale ? clean : `/${locale}${clean}`;
}

/**
 * `alternates` Next.js pour une page traduite : canonical auto-référent dans
 * la langue courante + balises hreflang vers les autres langues (+ x-default
 * sur le français). À passer dans le `metadata.alternates` de la page.
 */
export function localizedAlternates(locale: string, pathname: string) {
  const url = (l: string) => `${site.url}${localePath(l, pathname)}`;
  return {
    canonical: url(locale),
    languages: {
      fr: url("fr"),
      en: url("en"),
      ar: url("ar"),
      "x-default": url("fr"),
    } as Record<string, string>,
  };
}
