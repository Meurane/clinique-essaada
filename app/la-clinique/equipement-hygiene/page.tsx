import type { Metadata } from "next";
import {
  Droplets,
  Cpu,
  Shield,
  Syringe,
  Users,
  BadgeCheck,
  Activity,
  FlaskConical,
  Gauge,
  Factory,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardIcon } from "@/components/ui/Card";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Équipement & hygiène · Transparence technique",
  description:
    "Générateurs, traitement d'eau en 5 étapes, osmose double passage, dialyseurs à usage unique, protocoles d'hygiène. La preuve technique derrière votre séance de dialyse à Sidi Bel Abbès.",
  alternates: { canonical: `${site.url}/la-clinique/equipement-hygiene` },
  openGraph: {
    title: "Équipement & hygiène — Clinique ESSAADA",
    description:
      "La qualité de votre dialyse commence par l'eau et le matériel. Schéma traitement d'eau, marque des générateurs, protocoles d'hygiène — toute la transparence technique.",
  },
};

const etapesEau = [
  {
    n: "1",
    title: "Filtre à sable",
    text: "Retient les particules en suspension (sable, boues, résidus).",
  },
  {
    n: "2",
    title: "Adoucisseur",
    text: "Élimine le calcium et le magnésium qui entartreraient les membranes.",
  },
  {
    n: "3",
    title: "Filtre à charbon actif",
    text: "Capte le chlore et ses dérivés, toxiques pour le sang.",
  },
  {
    n: "4",
    title: "Microfiltration 0,2 μm",
    text: "Barrière physique contre les bactéries résiduelles.",
  },
  {
    n: "5",
    title: "Osmose inverse double passage",
    text: "Étape finale qui produit une eau ultrapure aux normes de la dialyse.",
  },
];

const usageUnique = [
  {
    icon: Activity,
    title: "Dialyseur (le filtre)",
    text: "Biocompatible, membrane synthétique haute perméabilité, à usage unique strict.",
  },
  {
    icon: Syringe,
    title: "Lignes de sang & aiguilles",
    text: "Tubulures et aiguilles de fistule à usage unique. Aucune réutilisation, conformément aux standards internationaux.",
  },
];

const securite = [
  "Dépistage à l'admission : sérologies HVB, HVC, VIH systématiques",
  "Isolation stricte des patients porteurs (salle ou poste dédié, circuit de soins fermé)",
  "Revaccination HVB proposée si sérologie protectrice insuffisante",
  "Traçabilité complète : chaque séance, chaque dialyseur, chaque paramètre enregistré par patient",
];

const controles = [
  {
    icon: Droplets,
    title: "Analyses d'eau",
    text: "Prélèvements trimestriels — bactériologiques et biochimiques.",
  },
  {
    icon: Activity,
    title: "Efficacité de dialyse (Kt/V)",
    text: "Mesurée régulièrement et discutée avec vous lors de la consultation de suivi.",
  },
  {
    icon: Users,
    title: "Revue de morbidité",
    text: "Staff médical hebdomadaire — revue des incidents, des paramètres, des cas délicats.",
  },
  {
    icon: BadgeCheck,
    title: "Agréments",
    text: "Agrément DSP Sidi Bel Abbès, conventions CNAS et CASNOS.",
  },
];

export default function EquipementHygienePage() {
  const crumbs = [
    { name: "Accueil", url: "/" },
    { name: "Le centre", url: "/la-clinique" },
    { name: "Équipement & hygiène", url: "/la-clinique/equipement-hygiene" },
  ];

  return (
    <>
      <PhotoHero
        eyebrow="Transparence technique"
        title="La qualité de votre dialyse commence par l'eau et le matériel"
        subtitle="Une séance d'hémodialyse met votre sang en contact avec environ 120 litres d'eau traitée. À ce volume, chaque détail compte. Voici ce que nous mettons en œuvre, sans simplification."
        photoIcon={Factory}
        photoSrc="/images/generateur-dialyse.webp"
        photoAlt="Générateur de dialyse SWS-4000A en fonctionnement à la Clinique ESSAADA, écran affichant les paramètres de séance"
        photoLabel="Plateau technique"
        photoTag="Générateur en séance"
      />
      <div className="container-custom py-5">
        <Breadcrumb items={crumbs} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(crumbs)),
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Générateurs de dialyse"
            title={`${site.stats.lits} lits, un générateur par poste`}
            subtitle="Chaque poste de dialyse dispose de son propre générateur, avec traçabilité des paramètres de séance."
          />
          <div className="grid md:grid-cols-3 gap-5">
            <Card>
              <CardIcon>
                <Cpu className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                Marque et modèle
              </h3>
              <p className="text-neutral-700 text-base">
                Générateurs neufs.
                <span className="block mt-2 text-neutral-500 text-sm italic">
                  [Marque et modèle : informations techniques détaillées communiquées sur demande.]
                </span>
              </p>
            </Card>
            <Card>
              <CardIcon>
                <Shield className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                Maintenance
              </h3>
              <p className="text-neutral-700 text-base">
                Contrôle technique préventif régulier par prestataire agréé, avec
                traçabilité des interventions poste par poste. Un technicien
                biomédical est présent pendant les séances.
              </p>
            </Card>
            <Card>
              <CardIcon>
                <Activity className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                Traçabilité
              </h3>
              <p className="text-neutral-700 text-base">
                Paramètres de chaque séance enregistrés — pression, débits,
                conductivité, durée effective de dialyse.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Traitement de l'eau"
            title="Cinq étapes, une eau ultrapure"
            subtitle="L'eau du réseau passe par une chaîne de traitement avant d'entrer dans le générateur. Réseau de distribution bouclé, stérilisable, sans bras morts."
          />
          <ol className="grid md:grid-cols-5 gap-4">
            {etapesEau.map((e) => (
              <li key={e.n}>
                <Card className="h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center mb-4 shrink-0">
                    {e.n}
                  </div>
                  <h3 className="font-display text-base font-semibold text-neutral-900 mb-1.5">
                    {e.title}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">{e.text}</p>
                </Card>
              </li>
            ))}
          </ol>
          <div className="mt-8 p-5 rounded-xl bg-white border border-sand-200">
            <div className="flex items-start gap-3">
              <Droplets className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-neutral-700">
                <strong className="text-neutral-900">Contrôles réguliers :</strong>{" "}
                prélèvements trimestriels — bactériologiques et biochimiques.
                Résultats disponibles sur demande au secrétariat médical.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Galerie technique"
            title="Ce que voit notre équipe biomédicale"
            subtitle="Quelques vues du plateau technique. Reportage complet à venir."
          />
          <PhotoGrid
            columns={3}
            items={[
              {
                src: "/images/generateur-dialyse.webp",
                alt: "Générateur de dialyse SWS-4000A en séance — écran affichant les paramètres en temps réel",
                icon: Cpu,
                label: "Générateur — panneau",
                aspectRatio: "1/1",
                caption: "Interface de contrôle — paramètres de séance affichés en temps réel.",
                tag: "Détail",
              },
              {
                icon: Factory,
                label: "Osmose double passage",
                aspectRatio: "1/1",
                caption: "Cuves inox, pression contrôlée, production d'eau ultrapure.",
                tag: "Traitement eau",
              },
              {
                icon: Gauge,
                label: "Tableau de contrôle",
                aspectRatio: "1/1",
                caption: "Manomètres, conductivité, traçabilité chaque séance.",
                tag: "Monitoring",
              },
              {
                icon: Activity,
                label: "Dialyseur (filtre)",
                aspectRatio: "1/1",
                caption: "Membrane synthétique haute perméabilité — à usage unique strict.",
                tag: "Consommable",
              },
              {
                icon: FlaskConical,
                label: "Analyses d'eau",
                aspectRatio: "1/1",
                caption: "Prélèvements trimestriels — bactériologiques & biochimiques.",
                tag: "Qualité",
              },
              {
                src: "/images/poste-dialyse.webp",
                alt: "Postes de dialyse propres prêts pour les patients — lits préparés et générateurs en attente",
                icon: Shield,
                label: "Postes dialyse",
                aspectRatio: "1/1",
                caption: "Bionettoyage entre chaque patient, matériel à usage unique systématique.",
                tag: "Hygiène",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow="Dialyseurs & circuits"
              title="Usage unique strict"
              subtitle="Aucune réutilisation de matériel, conformément aux standards internationaux actuels."
            />
            <ul className="space-y-4">
              {usageUnique.map((u) => (
                <li key={u.title}>
                  <Card>
                    <CardIcon>
                      <u.icon className="w-6 h-6" aria-hidden="true" />
                    </CardIcon>
                    <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                      {u.title}
                    </h3>
                    <p className="text-neutral-700">{u.text}</p>
                  </Card>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-neutral-600 italic">
              C'est un point important pour nos patients de la diaspora, habitués
              à ce standard en Europe et en Amérique du Nord.
            </p>
          </div>

          <div>
            <SectionHeader
              eyebrow="Protocoles de sécurité"
              title="Protéger chaque patient à chaque séance"
            />
            <ul className="space-y-3">
              {securite.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 p-4 rounded-xl bg-sand-50"
                >
                  <Shield
                    className="w-5 h-5 text-primary-700 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Ratio soignants"
            title="Une équipe dense et présente pendant toute la séance"
          />
          <div className="grid md:grid-cols-4 gap-5">
            <Card>
              <CardIcon>
                <Users className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-1">
                Infirmiers
              </h3>
              <p className="text-neutral-700 text-sm">
                Présents en continu, formés à la dialyse et aux protocoles d'urgence.
              </p>
            </Card>
            <Card>
              <CardIcon>
                <BadgeCheck className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-1">
                Néphrologue
              </h3>
              <p className="text-neutral-700 text-sm">
                Présence continue pendant toute la durée des séances — pas une
                astreinte téléphonique.
              </p>
            </Card>
            <Card>
              <CardIcon>
                <Cpu className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-1">
                Technicien biomédical
              </h3>
              <p className="text-neutral-700 text-sm">
                Présent sur site pour intervention immédiate en cas d'alarme générateur.
              </p>
            </Card>
            <Card>
              <CardIcon>
                <Shield className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-1">
                Hygiène
              </h3>
              <p className="text-neutral-700 text-sm">
                Aides-soignants et agent d'hygiène dédiés à chaque salle, bionettoyage
                entre chaque patient.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Contrôle qualité"
            title="Vérifier, mesurer, améliorer — en continu"
          />
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {controles.map((c) => (
              <li key={c.title}>
                <Card className="h-full">
                  <CardIcon>
                    <c.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-base font-semibold text-neutral-900 mb-1">
                    {c.title}
                  </h3>
                  <p className="text-neutral-700 text-sm">{c.text}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ConversionFooterCTA
        variant="sand"
        eyebrow="Questions techniques"
        title="Une question technique précise ?"
        subtitle="Qualité d'eau, type de dialyseur, résultats de vos dernières analyses — notre équipe médicale répond en consultation ou par téléphone."
        waMessage="Bonjour, j'aimerais plus d'informations sur vos équipements et protocoles d'hygiène."
      />
    </>
  );
}
