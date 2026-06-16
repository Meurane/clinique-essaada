import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

type Dict = { [key: string]: unknown };

/**
 * Fusion profonde : la base FR fournit toutes les clés, la langue cible
 * écrase celles qu'elle traduit. Toute clé non encore traduite retombe
 * donc proprement sur le français (repli gracieux pour les phases 2-3).
 */
function deepMerge(base: Dict, override: Dict): Dict {
  const out: Dict = { ...base };
  for (const key of Object.keys(override)) {
    const o = override[key];
    const b = out[key];
    if (
      o &&
      typeof o === "object" &&
      !Array.isArray(o) &&
      b &&
      typeof b === "object" &&
      !Array.isArray(b)
    ) {
      out[key] = deepMerge(b as Dict, o as Dict);
    } else {
      out[key] = o;
    }
  }
  return out;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const fr = (await import("../messages/fr.json")).default as Dict;
  const messages =
    locale === "fr"
      ? fr
      : deepMerge(fr, (await import(`../messages/${locale}.json`)).default as Dict);

  return { locale, messages };
});
