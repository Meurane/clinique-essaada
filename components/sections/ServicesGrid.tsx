import Link from "next/link";
import { ArrowRight, Droplets, Stethoscope, HeartPulse } from "lucide-react";
import { Card, CardIcon } from "@/components/ui/Card";

const services = [
  {
    href: "/services/hemodialyse",
    icon: Droplets,
    title: "Hémodialyse",
    description:
      "Traitement de suppléance rénale. 37 lits, générateurs dernière génération, eau de dialyse ultra-pure, lits 3 positions.",
  },
  {
    href: "/services/consultation-nephrologie",
    icon: Stethoscope,
    title: "Consultation néphrologie",
    description:
      "Diagnostic, suivi et prévention des maladies rénales à tous les stades. Préparation à la dialyse.",
  },
  {
    href: "/services/premiere-seance",
    icon: HeartPulse,
    title: "Votre 1ʳᵉ séance",
    description:
      "Un parcours balisé pour votre première dialyse. Accompagnement, repères et réassurance à chaque étape.",
  },
];

export function ServicesGrid() {
  return (
    <ul className="grid md:grid-cols-3 gap-6">
      {services.map((s) => (
        <li key={s.href}>
          <Link
            href={s.href}
            aria-label={s.title}
            className="block group h-full"
          >
            <Card className="h-full flex flex-col transition-transform duration-200 group-hover:-translate-y-0.5">
              <CardIcon>
                <s.icon className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                {s.title}
              </h3>
              <p className="text-neutral-700 text-base leading-relaxed flex-1">
                {s.description}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 font-semibold text-primary-700 group-hover:gap-2.5 transition-all">
                En savoir plus
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
