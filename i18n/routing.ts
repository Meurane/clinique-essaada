import { defineRouting } from "next-intl/routing";

/**
 * Configuration i18n du site Clinique ESSAADA.
 *
 * - `defaultLocale: "fr"` + `localePrefix: "as-needed"` → le français reste
 *   servi sur `/` SANS préfixe (les URLs existantes et le SEO ne bougent pas).
 *   L'anglais est servi sous `/en`, l'arabe sous `/ar`.
 */
export const routing = defineRouting({
  locales: ["fr", "en", "ar"],
  defaultLocale: "fr",
  localePrefix: "as-needed",
  // Pas de redirection auto selon la langue du navigateur : `/` sert toujours
  // le français. L'utilisateur choisit l'anglais/arabe via le sélecteur.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

/** Métadonnées d'affichage par langue (sélecteur, attribut lang, sens d'écriture). */
export const localeConfig: Record<
  Locale,
  { label: string; htmlLang: string; dir: "ltr" | "rtl" }
> = {
  fr: { label: "Français", htmlLang: "fr-DZ", dir: "ltr" },
  en: { label: "English", htmlLang: "en", dir: "ltr" },
  ar: { label: "العربية", htmlLang: "ar-DZ", dir: "rtl" },
};
