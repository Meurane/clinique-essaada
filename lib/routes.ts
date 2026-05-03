export type RouteEntry = {
  href: string;
  label: string;
  priority?: number;
};

export const routes: RouteEntry[] = [
  { href: "/", label: "Accueil", priority: 1 },
  { href: "/la-clinique", label: "Le centre", priority: 0.9 },
  { href: "/la-clinique/equipement-hygiene", label: "Équipement & hygiène", priority: 0.8 },
  { href: "/services", label: "Votre traitement", priority: 0.9 },
  { href: "/services/hemodialyse", label: "Hémodialyse", priority: 0.95 },
  { href: "/services/consultation-nephrologie", label: "Consultation néphrologie", priority: 0.8 },
  { href: "/services/premiere-seance", label: "Votre 1ʳᵉ séance", priority: 0.85 },
  { href: "/patients-de-passage", label: "Patients de passage", priority: 0.95 },
  { href: "/patients-de-passage/depuis-la-france", label: "Je viens de France (CPAM)", priority: 0.9 },
  { href: "/comprendre-l-insuffisance-renale", label: "Comprendre l'insuffisance rénale", priority: 0.85 },
  { href: "/glossaire", label: "Glossaire", priority: 0.6 },
  { href: "/equipe", label: "Équipe", priority: 0.85 },
  { href: "/informations-pratiques", label: "Vivre avec la dialyse", priority: 0.85 },
  { href: "/ramadan-et-dialyse", label: "Ramadan & dialyse", priority: 0.75 },
  { href: "/faq", label: "FAQ", priority: 0.7 },
  { href: "/blog", label: "Blog", priority: 0.8 },
  { href: "/contact", label: "Contact", priority: 0.9 },
  { href: "/rendez-vous", label: "Prendre rendez-vous", priority: 0.95 },
  { href: "/mentions-legales", label: "Mentions légales", priority: 0.3 },
  { href: "/confidentialite", label: "Confidentialité", priority: 0.3 },
];

export const sitemapRoutes = routes;

export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  items: NavLink[];
};

export type NavEntry = NavLink | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return (entry as NavGroup).items !== undefined;
}

export const primaryNav: NavEntry[] = [
  {
    label: "La clinique",
    href: "/la-clinique",
    items: [
      {
        href: "/la-clinique",
        label: "Le centre",
        description: "37 lits, équipements récents, équipe pluridisciplinaire",
      },
      {
        href: "/la-clinique/equipement-hygiene",
        label: "Équipement & hygiène",
        description: "Générateurs, eau ultra-pure, protocoles stricts",
      },
      {
        href: "/equipe",
        label: "Équipe médicale",
        description: "Néphrologues et infirmiers spécialisés",
      },
      {
        href: "/informations-pratiques",
        label: "Infos pratiques",
        description: "Horaires, accès, accompagnants, repas",
      },
    ],
  },
  {
    label: "Votre traitement",
    href: "/services",
    items: [
      {
        href: "/services/hemodialyse",
        label: "Hémodialyse",
        description: "Séances, déroulé, engagements qualité",
      },
      {
        href: "/services/consultation-nephrologie",
        label: "Consultation néphrologie",
        description: "Diagnostic, suivi, prévention",
      },
      {
        href: "/services/premiere-seance",
        label: "Votre 1ʳᵉ séance",
        description: "Documents, étapes, ce qu'il faut savoir",
      },
      {
        href: "/ramadan-et-dialyse",
        label: "Ramadan & dialyse",
        description: "Créneaux adaptés pendant le jeûne",
      },
    ],
  },
  {
    label: "Patients de passage",
    href: "/patients-de-passage",
    items: [
      {
        href: "/patients-de-passage",
        label: "Organiser mon séjour",
        description: "Confirmation sous 72h, 3 étapes simples",
      },
      {
        href: "/patients-de-passage/depuis-la-france",
        label: "Je viens de France (CPAM)",
        description: "Accord préalable, formulaires SE 352-05, remboursement",
      },
    ],
  },
  {
    label: "Ressources",
    items: [
      {
        href: "/blog",
        label: "Blog",
        description: "Articles, guides et conseils pratiques",
      },
      {
        href: "/comprendre-l-insuffisance-renale",
        label: "L'insuffisance rénale",
        description: "Guide pédagogique complet",
      },
      {
        href: "/glossaire",
        label: "Glossaire",
        description: "29 termes clés de la dialyse",
      },
      {
        href: "/faq",
        label: "FAQ",
        description: "Questions fréquentes des patients",
      },
    ],
  },
  {
    href: "/contact",
    label: "Contact",
  },
];
