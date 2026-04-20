export type RouteEntry = {
  href: string;
  label: string;
  inNav?: boolean;
  inFooter?: boolean;
  priority?: number;
};

export const routes: RouteEntry[] = [
  { href: "/", label: "Accueil", inNav: true, inFooter: true, priority: 1 },
  { href: "/la-clinique", label: "Le centre", inNav: true, inFooter: true, priority: 0.9 },
  { href: "/la-clinique/equipement-hygiene", label: "Équipement & hygiène", inFooter: true, priority: 0.8 },
  { href: "/services", label: "Votre traitement", inNav: true, inFooter: true, priority: 0.9 },
  { href: "/services/hemodialyse", label: "Hémodialyse", inFooter: true, priority: 0.95 },
  { href: "/services/consultation-nephrologie", label: "Consultation néphrologie", inFooter: true, priority: 0.8 },
  { href: "/services/premiere-seance", label: "Votre 1ʳᵉ séance", inFooter: true, priority: 0.85 },
  { href: "/patients-de-passage", label: "Patients de passage", inNav: true, inFooter: true, priority: 0.95 },
  { href: "/patients-de-passage/depuis-la-france", label: "Je viens de France (CPAM)", inFooter: true, priority: 0.9 },
  { href: "/comprendre-l-insuffisance-renale", label: "Comprendre l'insuffisance rénale", inFooter: true, priority: 0.85 },
  { href: "/glossaire", label: "Glossaire", inFooter: true, priority: 0.6 },
  { href: "/equipe", label: "Équipe", inNav: true, inFooter: true, priority: 0.85 },
  { href: "/informations-pratiques", label: "Vivre avec la dialyse", inFooter: true, priority: 0.85 },
  { href: "/ramadan-et-dialyse", label: "Ramadan & dialyse", inFooter: true, priority: 0.75 },
  { href: "/faq", label: "FAQ", inFooter: true, priority: 0.7 },
  { href: "/contact", label: "Contact", inNav: true, inFooter: true, priority: 0.9 },
  { href: "/rendez-vous", label: "Prendre rendez-vous", inFooter: true, priority: 0.95 },
  { href: "/mentions-legales", label: "Mentions légales", inFooter: true, priority: 0.3 },
  { href: "/confidentialite", label: "Confidentialité", inFooter: true, priority: 0.3 },
];

export const navRoutes = routes.filter((r) => r.inNav);
export const footerRoutes = routes.filter((r) => r.inFooter);
export const sitemapRoutes = routes.filter((r) => !r.href.includes("#") && r.href !== "/rendez-vous");
