import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Votre 1ʳᵉ séance",
  description:
    "Préparer votre première séance d'hémodialyse : documents à apporter, déroulé minute par minute, ce qu'il faut savoir avant de venir.",
  alternates: { canonical: `${site.url}/services/premiere-seance` },
};

const avant = [
  "Votre dernier bilan biologique (analyses de sang récentes, moins de 1 mois)",
  "Vos sérologies à jour (hépatites B, C et VIH)",
  "Votre ordonnance de dialyse signée par votre néphrologue",
  "Votre carte Chifa (CNAS ou CASNOS)",
  "Une pièce d'identité",
];

const etapes = [
  {
    k: "1",
    title: "À votre arrivée",
    items: [
      "L'accueil vous guide vers votre poste",
      "Contrôle des constantes (poids, tension)",
      "Le médecin néphrologue vous examine",
      "Installation confortable sur votre lit",
    ],
  },
  {
    k: "2",
    title: "Pendant la séance",
    items: [
      "Durée : 4 heures en moyenne",
      "Vous pouvez lire, regarder la TV, dormir",
      "Surveillance continue par l'équipe",
      "Collation disponible pendant la séance",
    ],
  },
  {
    k: "3",
    title: "Après la séance",
    items: [
      "Repos de quelques minutes avant de vous lever",
      "Contrôle du poids et de la tension",
      "Prochain rendez-vous confirmé",
      "Contact d'urgence fourni",
    ],
  },
];

export default function PremiereSeancePage() {
  return (
    <>
      <PageHero
        eyebrow="Votre 1ʳᵉ séance"
        title="Un parcours balisé pour préparer votre première séance"
        subtitle="Nous savons que la première fois peut générer de l'inquiétude. Voici tout ce que vous devez savoir avant de venir."
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: "Accueil", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Votre 1ʳᵉ séance", url: "/services/premiere-seance" },
          ]}
        />
      </div>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <SectionHeader
              eyebrow="Avant de venir"
              title="Les documents à apporter"
            />
            <ul className="space-y-3">
              {avant.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{a}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-neutral-700 leading-relaxed">
              Astuce&nbsp;: prenez un repas léger 2 heures avant la séance.
              Apportez de quoi vous occuper (livre, écouteurs). Un
              accompagnant peut rester avec vous pour les premières séances.
            </p>
          </div>

          <div className="md:col-span-2 bg-sand-50 rounded-2xl p-6">
            <div className="flex items-start gap-3 mb-3">
              <ClipboardList className="w-6 h-6 text-primary-700 shrink-0" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-neutral-900">
                Patients de passage
              </h3>
            </div>
            <p className="text-neutral-700">
              Vous venez en vacances à {site.city} ou sur la côte oranaise ?
              Contactez-nous au moins 1 mois à l'avance avec les mêmes
              documents. Nous confirmons la disponibilité d'un poste.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-primary-700 hover:gap-2.5 transition-all"
            >
              Nous contacter
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader eyebrow="Déroulé" title="Le jour J, en 3 temps" />
          <ul className="grid md:grid-cols-3 gap-5">
            {etapes.map((e) => (
              <li
                key={e.k}
                className="bg-white rounded-2xl p-6 border border-neutral-150 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center mb-3">
                  {e.k}
                </div>
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-3">
                  {e.title}
                </h3>
                <ul className="space-y-2 text-neutral-700 text-base">
                  {e.items.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
