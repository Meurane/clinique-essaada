import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, Heart } from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

const timeline = [
  {
    time: "T − 1h",
    title: "Vous arrivez à la clinique",
    text: "Parking patient à proximité, accès PMR. Prenez votre temps — nos créneaux sont pensés pour que vous ne soyez jamais pressé.",
  },
  {
    time: "T − 45 min",
    title: "Accueil et constantes",
    text: "Pesée, tension artérielle, température. L'infirmière note votre état du moment. Un proche peut rester avec vous à cette étape.",
  },
  {
    time: "T − 30 min",
    title: "Consultation rapide avec le néphrologue",
    text: "Le médecin vérifie votre dossier, ajuste si besoin les paramètres de séance, répond à vos questions. Vous décidez ensemble.",
  },
  {
    time: "T − 15 min",
    title: "Installation et pose des aiguilles",
    text: "Fauteuil inclinable, couverture, oreiller. Pose des aiguilles de fistule (ou connexion du cathéter) — 2 à 3 minutes. L'infirmière vous explique chaque geste.",
  },
  {
    time: "T + 0",
    title: "Début de la séance",
    text: "Le générateur se met en route. Vous pouvez lire, dormir, regarder votre téléphone, écouter de la musique. Bluetooth et Wi-Fi disponibles.",
  },
  {
    time: "T + 1h à T + 3h",
    title: "Surveillance continue",
    text: "La machine mesure votre tension automatiquement. Une infirmière passe vous voir toutes les 15 minutes. Un néphrologue est dans le service. Collation servie en milieu de séance.",
  },
  {
    time: "T + 4h",
    title: "Fin de séance",
    text: "Retrait des aiguilles, compression, pansement. Pesée de sortie, dernière tension, dernier échange avec l'infirmière. Remise du prochain rendez-vous.",
  },
  {
    time: "T + 4h15",
    title: "Vous repartez",
    text: "Un peu de repos si besoin dans la salle d'attente. Votre proche peut vous raccompagner. Contact d'urgence fourni pour la nuit.",
  },
];

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
      <PhotoHero
        eyebrow="Votre 1ʳᵉ séance"
        title="Un parcours balisé pour préparer votre première séance"
        subtitle="Nous savons que la première fois peut générer de l'inquiétude. Voici tout ce que vous devez savoir avant de venir."
        photoIcon={ClipboardList}
        photoLabel="Préparation séance"
        photoTag="Dossier & accueil"
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Services", url: "/services" },
              { name: "Votre 1ʳᵉ séance", url: "/services/premiere-seance" },
            ]),
          ),
        }}
      />

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

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Déroulé heure par heure"
            title="Votre première séance, minute par minute"
            subtitle="Parce que l'inconnu angoisse plus que le connu, voici exactement ce qui se passe — dans l'ordre, sans surprise."
          />
          <ol className="relative max-w-3xl mx-auto border-l-2 border-primary-200 pl-6 md:pl-8 space-y-8">
            {timeline.map((t) => (
              <li key={t.time} className="relative">
                <span
                  className="absolute -left-[34px] md:-left-[42px] w-9 h-9 rounded-full bg-primary-600 text-white grid place-items-center border-4 border-white shadow-sm"
                  aria-hidden="true"
                >
                  <Heart className="w-4 h-4" />
                </span>
                <div className="text-sm font-semibold tracking-wide text-primary-700 mb-1">
                  {t.time}
                </div>
                <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1.5">
                  {t.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">{t.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-center text-neutral-600 italic max-w-2xl mx-auto">
            Vous n'êtes jamais seul, à aucun moment. C'est la règle chez nous.
          </p>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader eyebrow="Résumé rapide" title="Le jour J, en 3 temps" />
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
