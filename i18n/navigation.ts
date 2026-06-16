import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Navigation localisée. À utiliser À LA PLACE de `next/link` et
 * `next/navigation` dans tout le site : ces helpers ajoutent
 * automatiquement le préfixe de langue (`/en`, `/ar`) quand il le faut.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
