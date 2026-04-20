import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { site } from "@/lib/site";
import { medicalProcedureSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Hémodialyse",
  description:
    "Séances d'hémodialyse à Sidi Bel Abbès : 40 postes, générateurs dernière génération, eau ultra-pure, suivi médical permanent. Conventionné CNAS/CASNOS.",
  alternates: { canonical: `${site.url}/services/hemodialyse` },
  openGraph: {
    title: "Hémodialyse — Clinique ESSAADA",
    description:
      "Centre d'hémodialyse à Sidi Bel Abbès. Équipements récents, lits 3 positions, équipe pluridisciplinaire.",
  },
};

const process = [
  { step: 1, title: "Accueil", text: "Vérification du dossier, contrôle des constantes (poids, tension)." },
  { step: 2, title: "Installation", text: "Poste attribué, ponction de la fistule, branchement au générateur." },
  { step: 3, title: "Séance", text: "Environ 4 heures de dialyse sous surveillance continue. Lecture, télé, repos autorisés." },
  { step: 4, title: "Sortie", text: "Contrôle poids et tension, programmation du prochain rendez-vous, collation." },
];

const qualite = [
  "Générateurs dernière génération",
  "Eau de dialyse ultra-pure",
  "Suivi médical permanent",
  "Lits 3 positions confortables",
  "Protocoles d'hygiène stricts",
  "Matériel à usage unique quand indiqué",
];

export default function HemodialysePage() {
  return (
    <>
      <PageHero
        eyebrow="Service · Hémodialyse"
        title="Hémodialyse à Sidi Bel Abbès"
        subtitle={`${site.stats.postes} postes. 3 créneaux par jour. Conventionnée CNAS et CASNOS.`}
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: "Accueil", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Hémodialyse", url: "/services/hemodialyse" },
          ]}
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalProcedureSchema({
              name: "Hémodialyse",
              description:
                "Traitement de suppléance rénale réalisé à la Clinique ESSAADA à Sidi Bel Abbès. 40 postes, générateurs dernière génération, eau ultra-pure, équipe pluridisciplinaire.",
              procedureType: "https://schema.org/TherapeuticProcedure",
            }),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow="Le traitement"
              title="L'hémodialyse : traiter le sang quand les reins ne le font plus"
            />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                Lorsque les reins ne parviennent plus à filtrer les déchets et
                l'eau en excès, l'hémodialyse prend le relais. Le sang est
                conduit vers le générateur (la machine de dialyse) par une
                fistule (accès vasculaire créé au bras), filtré dans un
                dialyseur (filtre artificiel), puis restitué.
              </p>
              <p>
                Chaque séance dure environ 4 heures. La plupart des patients
                viennent 3 fois par semaine selon la prescription du
                néphrologue. Pendant la séance, vous êtes installé·e
                confortablement sur un lit 3 positions, sous surveillance
                continue par nos infirmiers et un médecin présent sur site.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-neutral-900 mb-4">
              Nos engagements qualité
            </h3>
            <ul className="space-y-3">
              {qualite.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Déroulé"
            title="Une séance en 4 étapes"
            subtitle="Un cadre clair pour que chaque séance soit aussi simple que possible."
          />
          <ol className="grid md:grid-cols-4 gap-5">
            {process.map((p) => (
              <li key={p.step}>
                <Card>
                  <div className="w-10 h-10 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center mb-4">
                    {p.step}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                    {p.title}
                  </h3>
                  <p className="text-neutral-700 text-base">{p.text}</p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom grid md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-3">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Vous n'avez jamais dialysé&nbsp;?
            </h2>
            <p className="text-primary-100 text-lg leading-relaxed">
              Nous avons conçu un parcours dédié pour votre première séance,
              avec des repères clairs à chaque étape. Nous accompagnons aussi
              les patients de passage, sur réservation.
            </p>
          </div>
          <div className="md:col-span-2 flex md:justify-end">
            <Link
              href="/services/premiere-seance"
              className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 px-6 py-4 rounded-full font-semibold min-h-[56px]"
            >
              Préparer ma 1ʳᵉ séance
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
