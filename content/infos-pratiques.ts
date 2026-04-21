import {
  Clock,
  Car,
  Coffee,
  UserPlus,
  Shield,
  Accessibility,
  Moon,
  Dumbbell,
  Plane,
  Briefcase,
  HeartHandshake,
  Baby,
  Salad,
} from "lucide-react";
import { site } from "@/lib/site";

export const infosBlocks = [
  {
    icon: Clock,
    title: "Horaires des séances",
    items: [
      ...site.hours.sessions.map((s) => `${s.label} : ${s.range}`),
      "3 séances par semaine selon prescription",
      site.hours.note,
    ],
  },
  {
    icon: Moon,
    title: "Horaires Ramadan",
    items: [
      "Créneaux adaptés après f'tour et avant s'hour",
      "Reprogrammation en concertation avec votre néphrologue",
      "Prise en charge adaptée pour les patients qui jeûnent",
      "Équipe disponible pour répondre à vos questions",
    ],
  },
  {
    icon: Car,
    title: "Accès & stationnement",
    items: [
      "Places réservées près de l'entrée",
      "Accès direct pour ambulance",
    ],
  },
  {
    icon: Accessibility,
    title: "Accessibilité PMR",
    items: [
      "Deux rampes d'accès pour fauteuils roulants",
      "Places de stationnement PMR signalées",
      "Fauteuil roulant disponible à l'accueil",
      "Toilettes adaptées",
      "Aide au brancardage sur demande",
    ],
  },
  {
    icon: Coffee,
    title: "Collations",
    items: [
      "Collation offerte pendant la séance",
      "Eau et boissons à disposition",
    ],
  },
  {
    icon: UserPlus,
    title: "Accompagnants",
    items: [
      "Un accompagnant peut être présent lors des premières séances",
      "Salle d'attente confortable",
      "Café et thé à disposition",
    ],
  },
  {
    icon: Shield,
    title: "Sécurité & qualité",
    items: [
      "Équipements certifiés et contrôlés",
      "Protocoles d'hygiène stricts",
      "Médecin présent en permanence",
    ],
  },
];

export const viequotidienneBlocks = [
  {
    icon: Dumbbell,
    title: "Sport et activité physique",
    lead: "Bouger fait du bien au corps, au moral, et au traitement lui-même — c'est vivement encouragé.",
    body: [
      "La marche, la natation, le vélo, le jardinage, les étirements : toute activité physique régulière est bénéfique pendant le parcours en dialyse. Elle aide à garder du tonus musculaire, protège le cœur, améliore le sommeil et l'humeur les jours sans séance. Il n'y a aucune raison de se mettre entre parenthèses.",
      "Pour une reprise du sport plus soutenue — course, musculation, sports collectifs, randonnée en altitude — un mot avec le néphrologue permet d'ajuster en fonction de votre fistule, de votre tension et de votre forme générale. L'objectif n'est jamais d'interdire, mais d'adapter.",
    ],
    tip: "Protégez votre bras de fistule des chocs et des charges lourdes — le reste du corps reste libre.",
  },
  {
    icon: Plane,
    title: "Voyages et déplacements",
    lead: "Partir en vacances, rendre visite à la famille en France ou au bled, faire la omra : tout cela reste possible.",
    body: [
      "Un séjour se prépare avec l'équipe quelques semaines à l'avance. Nous aidons à trouver un centre d'accueil à destination — en Algérie comme à l'étranger — et à transmettre votre dossier médical pour que vos séances continuent sans interruption. Les centres d'hémodialyse existent partout : Alger, Oran, Marseille, Lyon, Paris, La Mecque, Istanbul.",
      "Pensez à anticiper les démarches administratives (accord de prise en charge, assurance voyage, ordonnances traduites si besoin). Pour les patients de la diaspora qui reviennent passer l'été à Sidi Bel Abbès, l'organisation se fait dans les deux sens avec le même soin.",
    ],
    tip: "Prévenez-nous idéalement 4 à 6 semaines avant le départ pour caler tranquillement les séances sur place.",
  },
  {
    icon: Briefcase,
    title: "Vie professionnelle",
    lead: "Continuer à travailler est souvent possible, et c'est un vrai appui — financier, social, personnel.",
    body: [
      "Les séances de dialyse rythment la semaine, mais beaucoup de patients conservent une activité professionnelle. Les créneaux du matin tôt ou de fin de journée permettent de libérer une grande partie de la journée de travail. Nous essayons, dans la mesure du possible, de caler vos séances sur vos contraintes d'emploi du temps.",
      "En Algérie, une reconnaissance de travailleur handicapé peut être demandée auprès des services sociaux : elle ouvre parfois à des aménagements (horaires, poste) ou à une pension selon la situation. Le médecin traitant et l'assistante sociale peuvent vous orienter dans les démarches, sans garantie de résultat mais cela vaut la peine d'en parler.",
    ],
    tip: "Parlez-nous de vos horaires de travail dès le premier rendez-vous — on construit le planning ensemble.",
  },
  {
    icon: HeartHandshake,
    title: "Intimité et vie de couple",
    lead: "La maladie rénale touche aussi la vie intime — c'est fréquent, et cela se parle sans gêne en consultation.",
    body: [
      "Baisse du désir, fatigue, difficultés d'érection chez l'homme, sécheresse ou irrégularités du cycle chez la femme : ces changements concernent plus d'un patient sur deux. Ils mêlent le poids psychologique de la maladie, les traitements, et des modifications hormonales bien réelles. Ce n'est ni dans la tête, ni une fatalité.",
      "Le néphrologue est là pour en parler, sans jugement et en toute confidentialité — au même titre que la tension ou le sommeil. Des solutions existent, parfois simples : ajustement de traitements, avis d'un confrère spécialisé, soutien psychologique pour le couple. En parler, c'est déjà soulager une part du poids.",
    ],
    tip: "Aucune question n'est déplacée en consultation. L'intimité fait partie de la santé globale.",
  },
  {
    icon: Baby,
    title: "Grossesse et parentalité",
    lead: "La fertilité est réduite en insuffisance rénale, mais une grossesse reste possible — cela se prépare de près.",
    body: [
      "Pour une femme en dialyse, mener une grossesse comporte des risques réels pour la mère et l'enfant : retard de croissance du fœtus, accouchement prématuré, complications maternelles. Ce n'est pas interdit, mais cela demande un suivi rapproché entre néphrologue, gynécologue et maternité, avec des séances de dialyse souvent renforcées pendant les neuf mois.",
      "Quand un projet d'enfant est en tête, le plus souvent on recommande une contraception fiable le temps d'en discuter sereinement, et si possible de reporter la grossesse après une greffe de rein : la transplantation améliore nettement la fertilité et diminue les risques. Parlez-en tôt avec votre néphrologue — c'est une conversation importante, à aborder comme telle.",
    ],
    tip: "Un projet de bébé, une contraception à revoir : notre accompagnement inclut ces questions.",
  },
  {
    icon: Salad,
    title: "Alimentation",
    lead: "Bien manger en dialyse, c'est surtout bien s'adapter — il n'existe pas un régime unique qui convient à tous.",
    body: [
      "Les besoins évoluent tout au long du parcours : avant la dialyse, il s'agit souvent de ralentir l'aggravation de la maladie rénale. Une fois les séances commencées, les priorités changent — corriger les excès d'eau, de potassium ou de phosphore, mais aussi prévenir la dénutrition, car manger suffisamment reste essentiel. Un diabète, une hypertension ou d'autres soucis associés modifient encore les équilibres.",
      "Le néphrologue fait le lien avec vos bilans sanguins et ajuste les recommandations à votre situation réelle — vos habitudes, votre cuisine, ce que vous aimez — plutôt qu'à une liste théorique d'aliments interdits. L'objectif est un équilibre tenable dans le temps, pas un régime impossible à suivre.",
    ],
    tip: "Parlez de votre alimentation en consultation dès que vous en ressentez le besoin — c'est pensé pour vous, pas contre vous.",
  },
];
