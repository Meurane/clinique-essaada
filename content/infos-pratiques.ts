import { Clock, Car, Wifi, Coffee, UserPlus, Shield, Accessibility, Moon } from "lucide-react";
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
      "Parking patients sur place",
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
    icon: Wifi,
    title: "WiFi gratuit",
    items: [
      "Connexion haut débit disponible",
      "Code remis à l'accueil",
      "Apportez votre tablette ou téléphone",
    ],
  },
  {
    icon: Coffee,
    title: "Repas & collations",
    items: [
      "Collation offerte pendant la séance",
      "Eau et boissons à disposition",
      "Repas adaptés sur demande",
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
      `Numéro d'urgence 24h/24 : ${site.contact.urgence.phone}`,
    ],
  },
];
