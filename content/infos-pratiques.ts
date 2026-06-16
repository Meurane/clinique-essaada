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

type Translator = (key: string) => string;

export function getInfosBlocks(t: Translator) {
  return [
    {
      icon: Clock,
      title: t("infos.horaires.title"),
      items: [
        ...site.hours.sessions.map((s) => `${s.label} : ${s.range}`),
        t("infos.horaires.items.0"),
        site.hours.note,
      ],
    },
    {
      icon: Moon,
      title: t("infos.ramadan.title"),
      items: [
        t("infos.ramadan.items.0"),
        t("infos.ramadan.items.1"),
        t("infos.ramadan.items.2"),
        t("infos.ramadan.items.3"),
      ],
    },
    {
      icon: Car,
      title: t("infos.acces.title"),
      items: [t("infos.acces.items.0"), t("infos.acces.items.1")],
    },
    {
      icon: Accessibility,
      title: t("infos.pmr.title"),
      items: [
        t("infos.pmr.items.0"),
        t("infos.pmr.items.1"),
        t("infos.pmr.items.2"),
        t("infos.pmr.items.3"),
        t("infos.pmr.items.4"),
      ],
    },
    {
      icon: Coffee,
      title: t("infos.cafe.title"),
      items: [t("infos.cafe.items.0"), t("infos.cafe.items.1")],
    },
    {
      icon: UserPlus,
      title: t("infos.accompagnants.title"),
      items: [
        t("infos.accompagnants.items.0"),
        t("infos.accompagnants.items.1"),
        t("infos.accompagnants.items.2"),
      ],
    },
    {
      icon: Shield,
      title: t("infos.securite.title"),
      items: [
        t("infos.securite.items.0"),
        t("infos.securite.items.1"),
        t("infos.securite.items.2"),
      ],
    },
  ];
}

export function getViequotidienneBlocks(t: Translator) {
  return [
    {
      icon: Dumbbell,
      title: t("vie.sport.title"),
      lead: t("vie.sport.lead"),
      body: [t("vie.sport.body.0"), t("vie.sport.body.1")],
      tip: t("vie.sport.tip"),
    },
    {
      icon: Plane,
      title: t("vie.voyages.title"),
      lead: t("vie.voyages.lead"),
      body: [t("vie.voyages.body.0"), t("vie.voyages.body.1")],
      tip: t("vie.voyages.tip"),
    },
    {
      icon: Briefcase,
      title: t("vie.travail.title"),
      lead: t("vie.travail.lead"),
      body: [t("vie.travail.body.0"), t("vie.travail.body.1")],
      tip: t("vie.travail.tip"),
    },
    {
      icon: HeartHandshake,
      title: t("vie.intimite.title"),
      lead: t("vie.intimite.lead"),
      body: [t("vie.intimite.body.0"), t("vie.intimite.body.1")],
      tip: t("vie.intimite.tip"),
    },
    {
      icon: Baby,
      title: t("vie.grossesse.title"),
      lead: t("vie.grossesse.lead"),
      body: [t("vie.grossesse.body.0"), t("vie.grossesse.body.1")],
      tip: t("vie.grossesse.tip"),
    },
    {
      icon: Salad,
      title: t("vie.alimentation.title"),
      lead: t("vie.alimentation.lead"),
      body: [t("vie.alimentation.body.0"), t("vie.alimentation.body.1")],
      tip: t("vie.alimentation.tip"),
    },
  ];
}
