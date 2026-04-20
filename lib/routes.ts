export type RouteEntry = {
  href: string;
  label: string;
  inNav?: boolean;
  inFooter?: boolean;
  priority?: number;
};

export const routes: RouteEntry[] = [
  { href: "/", label: "Accueil", inNav: true, inFooter: true, priority: 1 },
  { href: "/la-clinique", label: "La clinique", inNav: true, inFooter: true, priority: 0.9 },
  { href: "/services", label: "Services", inNav: true, inFooter: true, priority: 0.9 },
  { href: "/services/hemodialyse", label: "Hémodialyse", inFooter: true, priority: 0.95 },
  { href: "/services/consultation-nephrologie", label: "Consultation néphrologie", inFooter: true, priority: 0.8 },
  { href: "/services/premiere-seance", label: "Votre 1ʳᵉ séance", inFooter: true, priority: 0.85 },
  { href: "/equipe", label: "Équipe", inNav: true, inFooter: true, priority: 0.85 },
  { href: "/informations-pratiques", label: "Infos pratiques", inFooter: true, priority: 0.85 },
  { href: "/faq", label: "FAQ", inFooter: true, priority: 0.7 },
  { href: "/contact", label: "Contact", inNav: true, inFooter: true, priority: 0.9 },
  { href: "/rendez-vous", label: "Prendre rendez-vous", inFooter: true, priority: 0.95 },
  { href: "/mentions-legales", label: "Mentions légales", inFooter: true, priority: 0.3 },
  { href: "/confidentialite", label: "Confidentialité", inFooter: true, priority: 0.3 },
];

export const navRoutes = routes.filter((r) => r.inNav);
export const footerRoutes = routes.filter((r) => r.inFooter);
export const sitemapRoutes = routes.filter((r) => !r.href.includes("#") && r.href !== "/rendez-vous");
