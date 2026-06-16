import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // On exclut l'API, les internes Next, et tout chemin avec extension
  // (images, sitemap.xml, robots.txt, fichiers de métadonnées…).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
