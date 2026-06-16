export type RouteEntry = {
  href: string;
  label: string;
  priority?: number;
};

export const routes: RouteEntry[] = [
  { href: "/", label: "Accueil", priority: 1 },
  { href: "/la-clinique", label: "Le centre", priority: 0.9 },
  { href: "/la-clinique/equipement-hygiene", label: "Équipement & hygiène", priority: 0.8 },
  { href: "/la-clinique/composition-corporelle", label: "Mesure du poids sec & hydratation", priority: 0.8 },
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
  /** Clé i18n du libellé (namespace `nav`). Repli sur `label` si absente. */
  key?: string;
  /** Clé i18n de la description (namespace `nav`). Repli sur `description`. */
  descKey?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  items: NavLink[];
  /** Clé i18n du libellé du groupe (namespace `nav`). */
  key?: string;
};

export type NavEntry = NavLink | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return (entry as NavGroup).items !== undefined;
}

export const primaryNav: NavEntry[] = [
  {
    label: "La clinique",
    key: "clinic.label",
    href: "/la-clinique",
    items: [
      {
        href: "/la-clinique",
        label: "Le centre",
        key: "clinic.center.label",
        description: "37 lits, équipements récents, équipe pluridisciplinaire",
        descKey: "clinic.center.desc",
      },
      {
        href: "/la-clinique/equipement-hygiene",
        label: "Équipement & hygiène",
        key: "clinic.equipment.label",
        description: "Générateurs, eau ultra-pure, protocoles stricts",
        descKey: "clinic.equipment.desc",
      },
      {
        href: "/la-clinique/composition-corporelle",
        label: "Mesure poids sec & hydratation",
        key: "clinic.bodyComposition.label",
        description: "Bio-impédance multi-fréquence, ajustement personnalisé",
        descKey: "clinic.bodyComposition.desc",
      },
      {
        href: "/equipe",
        label: "Équipe médicale",
        key: "clinic.team.label",
        description: "Néphrologue et infirmiers spécialisés",
        descKey: "clinic.team.desc",
      },
      {
        href: "/informations-pratiques",
        label: "Infos pratiques",
        key: "clinic.practical.label",
        description: "Horaires, accès, accompagnants, repas",
        descKey: "clinic.practical.desc",
      },
    ],
  },
  {
    label: "Votre traitement",
    key: "treatment.label",
    href: "/services",
    items: [
      {
        href: "/services/hemodialyse",
        label: "Hémodialyse",
        key: "treatment.hemodialysis.label",
        description: "Séances, déroulé, engagements qualité",
        descKey: "treatment.hemodialysis.desc",
      },
      {
        href: "/services/consultation-nephrologie",
        label: "Consultation néphrologie",
        key: "treatment.consultation.label",
        description: "Diagnostic, suivi, prévention",
        descKey: "treatment.consultation.desc",
      },
      {
        href: "/services/premiere-seance",
        label: "Votre 1ʳᵉ séance",
        key: "treatment.firstSession.label",
        description: "Documents, étapes, ce qu'il faut savoir",
        descKey: "treatment.firstSession.desc",
      },
      {
        href: "/ramadan-et-dialyse",
        label: "Ramadan & dialyse",
        key: "treatment.ramadan.label",
        description: "Créneaux adaptés pendant le jeûne",
        descKey: "treatment.ramadan.desc",
      },
    ],
  },
  {
    label: "Patients de passage",
    key: "visiting.label",
    href: "/patients-de-passage",
    items: [
      {
        href: "/patients-de-passage",
        label: "Organiser mon séjour",
        key: "visiting.organize.label",
        description: "Confirmation sous 72h, 3 étapes simples",
        descKey: "visiting.organize.desc",
      },
      {
        href: "/patients-de-passage/depuis-la-france",
        label: "Je viens de France (CPAM)",
        key: "visiting.fromFrance.label",
        description: "Accord préalable, formulaires SE 352-05, remboursement",
        descKey: "visiting.fromFrance.desc",
      },
    ],
  },
  {
    label: "Ressources",
    key: "resources.label",
    items: [
      {
        href: "/blog",
        label: "Blog",
        key: "resources.blog.label",
        description: "Articles, guides et conseils pratiques",
        descKey: "resources.blog.desc",
      },
      {
        href: "/comprendre-l-insuffisance-renale",
        label: "L'insuffisance rénale",
        key: "resources.understanding.label",
        description: "Guide pédagogique complet",
        descKey: "resources.understanding.desc",
      },
      {
        href: "/glossaire",
        label: "Glossaire",
        key: "resources.glossary.label",
        description: "29 termes clés de la dialyse",
        descKey: "resources.glossary.desc",
      },
      {
        href: "/faq",
        label: "FAQ",
        key: "resources.faq.label",
        description: "Questions fréquentes des patients",
        descKey: "resources.faq.desc",
      },
    ],
  },
  {
    href: "/contact",
    label: "Contact",
    key: "contact.label",
  },
];
