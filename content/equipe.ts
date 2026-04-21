export type Member = {
  slug: string;
  name: string;
  role: string;
  specialty?: string;
  bio?: string;
};

// Les fiches individuelles seront publiées dès réception des informations
// (noms et photos) par la clinique. Tant que les données ne sont pas
// disponibles, la page affiche uniquement les équipes par département —
// pas de cartes fantômes en production.
export const team: Member[] = [];

export const departments = [
  {
    title: "Néphrologie",
    description:
      "Médecins néphrologues pour la consultation, le diagnostic et le suivi des maladies rénales à tous les stades.",
  },
  {
    title: "Hémodialyse",
    description:
      "Infirmiers spécialisés en hémodialyse, techniciens biomédicaux et médecins présents en permanence pendant les séances.",
  },
  {
    title: "Paramédical & accompagnement",
    description:
      "Aide-soignant·e·s et personnel de soutien pour l'éducation thérapeutique et l'accompagnement des familles.",
  },
  {
    title: "Administration & accueil",
    description:
      "Prise de rendez-vous, accompagnement dans le dossier CNAS / CASNOS, liaison avec les organismes de transport patient.",
  },
];
