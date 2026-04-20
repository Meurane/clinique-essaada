export type Member = {
  slug: string;
  name: string;
  role: string;
  specialty?: string;
  bio?: string;
};

export const team: Member[] = [
  {
    slug: "nephrologue-1",
    name: "[À COMPLÉTER — Nom Prénom]",
    role: "Néphrologue",
    specialty: "Insuffisance rénale chronique",
  },
  {
    slug: "nephrologue-2",
    name: "[À COMPLÉTER — Nom Prénom]",
    role: "Néphrologue",
    specialty: "Hémodialyse et maladies rénales",
  },
  {
    slug: "infirmier-chef",
    name: "[À COMPLÉTER — Nom Prénom]",
    role: "Infirmier·e chef",
    specialty: "Hémodialyse",
  },
];

export const departments = [
  {
    title: "Néphrologie",
    description: "Consultation, diagnostic, suivi des maladies rénales.",
  },
  {
    title: "Hémodialyse",
    description: "Séances personnalisées, surveillance continue.",
  },
  {
    title: "Paramédical & accompagnement",
    description:
      "Infirmiers spécialisés, diététicien·ne, soutien patients et familles.",
  },
  {
    title: "Administration & accueil",
    description: "Prise de rendez-vous, accompagnement dossier CNAS/CASNOS.",
  },
];
