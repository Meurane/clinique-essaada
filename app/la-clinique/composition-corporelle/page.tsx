import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Droplets,
  HeartPulse,
  Microscope,
  CheckCircle2,
  ShieldCheck,
  Clock3,
  ArrowRight,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardIcon } from "@/components/ui/Card";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Mesure du poids sec & hydratation · Bio-impédance",
  description:
    "Bio-impédance multi-fréquence (BIS) : mesure objective du poids sec, de l'hydratation et de la composition corporelle. Un outil de précision pour personnaliser chaque séance d'hémodialyse à la Clinique ESSAADA, Sidi Bel Abbès.",
  alternates: { canonical: `${site.url}/la-clinique/composition-corporelle` },
  openGraph: {
    title: "Mesure précise du poids sec & hydratation — Clinique ESSAADA",
    description:
      "Bio-impédance multi-fréquence : un outil de précision pour ajuster votre poids sec et suivre votre composition corporelle, intégré au protocole de dialyse.",
  },
};

const piliers = [
  {
    icon: Droplets,
    title: "Ajuster le poids sec",
    text: "La mesure objective de l'eau corporelle (totale, intracellulaire, extracellulaire) aide votre néphrologue à affiner votre poids sec, au-delà de la seule évaluation clinique. Objectif : limiter les hypotensions per-dialyse et la surcharge entre deux séances.",
  },
  {
    icon: Activity,
    title: "Suivre la composition corporelle",
    text: "Masse maigre, masse musculaire squelettique, masse grasse, suivies dans le temps pour détecter une fonte musculaire (sarcopénie) ou une dénutrition, fréquentes en insuffisance rénale terminale.",
  },
  {
    icon: HeartPulse,
    title: "Lire l'angle de phase",
    text: "L'angle de phase reflète l'intégrité de vos cellules. Marqueur reconnu dans la littérature néphrologique, il enrichit l'évaluation nutritionnelle et l'état général du patient dialysé.",
  },
];

const deroule = [
  {
    n: "1",
    title: "Installation",
    text: "Vous êtes allongé·e confortablement, habillé·e. Pas besoin de jeûne, pas d'injection.",
  },
  {
    n: "2",
    title: "Pose des électrodes",
    text: "Quatre électrodes adhésives (deux à la main, deux au pied), comme un ECG. Indolore.",
  },
  {
    n: "3",
    title: "Mesure",
    text: "Le dispositif envoie un courant imperceptible à plusieurs fréquences (5 à 1000 kHz). Durée : environ deux minutes.",
  },
  {
    n: "4",
    title: "Lecture & décision",
    text: "Le néphrologue interprète les résultats avec vous, et ajuste si besoin votre prescription de dialyse.",
  },
];

const quand = [
  {
    icon: CheckCircle2,
    title: "À votre première séance",
    text: "Pour établir un point de départ clair : poids sec initial, état d'hydratation, composition corporelle de référence.",
  },
  {
    icon: Clock3,
    title: "En suivi régulier",
    text: "Mesures périodiques pour réajuster votre poids sec et détecter précocement une dénutrition ou une fonte musculaire.",
  },
  {
    icon: ShieldCheck,
    title: "Patients de passage",
    text: "Sur séjour prolongé (deux semaines ou plus), une mesure peut être proposée pour personnaliser votre prise en charge, sans surcoût pour les affiliés CNAS / CASNOS.",
  },
];

export default function CompositionCorporellePage() {
  const crumbs = [
    { name: "Accueil", url: "/" },
    { name: "Le centre", url: "/la-clinique" },
    { name: "Mesure du poids sec & hydratation", url: "/la-clinique/composition-corporelle" },
  ];

  return (
    <>
      <PhotoHero
        eyebrow="Plateau technique"
        title="Mesurer précisément votre poids sec et votre hydratation"
        subtitle="Bio-impédance multi-fréquence, la même technologie de mesure qu'en centre néphrologique européen, intégrée à votre suivi de dialyse."
        photoIcon={Activity}
        photoSrc="/images/bodystat-multiscan-5000.webp"
        photoAlt="Bodystat Multiscan 5000 — analyseur médical de composition corporelle par bio-impédance multi-fréquence, écran tactile montrant le menu New Test / Recall Data / Options / Information"
        photoTag="Bio-impédance multi-fréquence"
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
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow="Pourquoi cette mesure"
              title="Aller au-delà du simple pèse-personne"
            />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                En hémodialyse, le poids n'est qu'une partie de l'histoire. Ce qui
                compte vraiment, c'est la <strong>répartition</strong> entre l'eau, la
                masse maigre et la masse grasse. Une balance ordinaire ne fait pas
                cette différence.
              </p>
              <p>
                La <strong>bio-impédance multi-fréquence (BIS)</strong> envoie un
                courant électrique imperceptible à plusieurs fréquences à travers
                votre corps. Selon la fréquence, ce courant traverse plus ou moins
                les membranes cellulaires, ce qui permet de séparer l'eau totale,
                l'eau intracellulaire, l'eau extracellulaire, la masse maigre et la
                masse grasse.
              </p>
              <p>
                C'est un outil <strong>complémentaire</strong> de l'évaluation
                clinique du néphrologue. Il ne remplace pas son jugement, il
                l'enrichit avec des données objectives, suivies dans le temps.
              </p>
            </div>
          </div>

          <Card className="bg-sand-50 border-sand-200">
            <CardIcon>
              <Microscope className="w-6 h-6" aria-hidden="true" />
            </CardIcon>
            <h3 className="font-display text-lg font-semibold text-neutral-900 mb-3">
              L'appareil utilisé
            </h3>
            <ul className="space-y-2.5 text-neutral-700 text-base">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                <span>
                  <strong>Bodystat Multiscan 5000</strong>, dispositif médical CE
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                <span>Bio-impédance à 6 fréquences (5 à 1000 kHz)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                <span>Mesure non invasive, indolore, deux minutes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                <span>Lecture par votre néphrologue</span>
              </li>
            </ul>
            <p className="mt-5 text-sm text-neutral-600 italic leading-relaxed">
              La bio-impédance multi-fréquence est utilisée en routine dans
              certains centres néphrologiques européens. Elle reste un équipement
              de niveau supérieur, encore peu répandu en Algérie.
            </p>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="À quoi ça sert pour vous"
            title="Trois apports concrets pour votre suivi"
            subtitle="Ce que cet outil permet à votre néphrologue de faire mieux, et ce qu'il ne prétend pas faire."
          />
          <ul className="grid md:grid-cols-3 gap-5">
            {piliers.map((p) => (
              <li key={p.title}>
                <Card className="h-full">
                  <CardIcon>
                    <p.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-neutral-700 text-base leading-relaxed">{p.text}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Comment ça se passe"
            title="Une mesure intégrée à votre venue, en quatre temps"
            subtitle="Pas de rendez-vous séparé : la mesure s'effectue avant ou après une séance, dans le service."
          />
          <ol className="grid md:grid-cols-4 gap-5">
            {deroule.map((d) => (
              <li key={d.n}>
                <Card className="h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center mb-4 shrink-0">
                    {d.n}
                  </div>
                  <h3 className="font-display text-base font-semibold text-neutral-900 mb-1.5">
                    {d.title}
                  </h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">{d.text}</p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-primary-50/40">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Aperçu d'un rapport"
            title="À quoi ressemble le rapport remis à votre néphrologue"
            subtitle="Chaque indicateur est positionné sur une échelle visuelle (rouge / orange / vert) qui montre où vous vous situez par rapport aux normes. Le néphrologue commente chaque zone avec vous."
          />
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
            <figure className="bg-white rounded-2xl p-3 md:p-4 ring-1 ring-sand-200/80 shadow-[0_2px_8px_-2px_rgb(10_71_93_/_0.08),0_12px_32px_-12px_rgb(10_71_93_/_0.12)] flex flex-col">
              <Image
                src="/images/composition-corporelle-rapport-1.webp"
                alt="Rapport Bodystat — résultats de l'analyse de l'eau corporelle (TBW, ICW, ECW, OHY) et de la composition (poids, masse grasse, masse maigre, masse musculaire), avec barres colorées rouge / orange / vert positionnant chaque valeur par rapport aux normes."
                width={961}
                height={1280}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="w-full h-auto rounded-xl"
              />
              <figcaption className="text-center text-xs text-neutral-600 mt-auto pt-3 font-medium tracking-wide">
                Page 1 — Hydratation & composition corporelle
              </figcaption>
            </figure>
            <figure className="bg-white rounded-2xl p-3 md:p-4 ring-1 ring-sand-200/80 shadow-[0_2px_8px_-2px_rgb(10_71_93_/_0.08),0_12px_32px_-12px_rgb(10_71_93_/_0.12)] flex flex-col">
              <Image
                src="/images/composition-corporelle-rapport-2.webp"
                alt="Rapport Bodystat — santé cellulaire (angle de phase, capacitance membranaire), métabolisme de base, mesures d'impédance multi-fréquence et conclusion synthétique du rapport."
                width={962}
                height={1280}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="w-full h-auto rounded-xl"
              />
              <figcaption className="text-center text-xs text-neutral-600 mt-auto pt-3 font-medium tracking-wide">
                Page 2 — Santé cellulaire & conclusion
              </figcaption>
            </figure>
          </div>
          <p className="mt-6 text-center text-sm text-neutral-600 italic max-w-2xl mx-auto leading-relaxed">
            Exemple de rapport — données anonymisées. Votre rapport est toujours commenté par votre néphrologue, jamais remis brut sans interprétation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Pour qui, et quand"
            title="Trois moments où cette mesure prend tout son sens"
          />
          <ul className="grid md:grid-cols-3 gap-5">
            {quand.map((q) => (
              <li key={q.title}>
                <Card className="h-full">
                  <CardIcon>
                    <q.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {q.title}
                  </h3>
                  <p className="text-neutral-700 text-base leading-relaxed">{q.text}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="Honnêteté médicale"
            title="Ce que cet outil fait — et ne fait pas"
          />
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="bg-white border-sand-200">
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent-600" aria-hidden="true" />
                Ce qu'il fait
              </h3>
              <ul className="space-y-2.5 text-neutral-700 text-base">
                <li>Aide à <strong>ajuster</strong> le poids sec, en complément du jugement clinique</li>
                <li>Suit la <strong>composition corporelle</strong> dans le temps</li>
                <li>Repère précocement une <strong>fonte musculaire</strong> ou une dénutrition</li>
                <li>Fournit l'<strong>angle de phase</strong>, marqueur d'intégrité cellulaire</li>
              </ul>
            </Card>
            <Card className="bg-sand-50 border-sand-300">
              <h3 className="font-display text-base font-semibold text-neutral-900 mb-3">
                Ce qu'il ne fait pas
              </h3>
              <ul className="space-y-2.5 text-neutral-700 text-base">
                <li>Il ne <strong>détermine pas</strong> seul votre poids sec, il aide votre médecin à le faire</li>
                <li>Il ne <strong>diagnostique pas</strong> à lui seul une dénutrition</li>
                <li>Il ne <strong>remplace pas</strong> les bilans biologiques ni l'examen clinique</li>
                <li>Il ne mesure ni cancer, ni maladie cardiaque, il n'est pas un dépistage</li>
              </ul>
            </Card>
          </div>
          <p className="mt-6 text-sm text-neutral-600 italic text-center leading-relaxed">
            La bio-impédance est un outil d'aide à la décision médicale. L'interprétation
            relève du néphrologue, qui l'intègre à votre dossier clinique.
          </p>
        </div>
      </section>

      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Cette mesure fait-elle partie de mon suivi&nbsp;?
            </h2>
            <p className="text-primary-100 text-lg leading-relaxed">
              Si vous êtes patient·e à la Clinique ESSAADA ou si vous préparez un
              séjour de dialyse, parlez-en à votre néphrologue lors de la prochaine
              consultation. Nous vous expliquerons quand et comment l'utiliser dans
              votre cas.
            </p>
          </div>
          <div className="md:col-span-2 flex md:justify-end">
            <Link
              href="/services/hemodialyse"
              className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
            >
              Voir le service hémodialyse
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ConversionFooterCTA
        variant="sand"
        eyebrow="Une question médicale"
        title="Une question sur votre suivi ou cette mesure&nbsp;?"
        subtitle="Notre équipe néphrologique répond en consultation, par téléphone ou via WhatsApp, du samedi au jeudi."
        waMessage="Bonjour, j'aimerais en savoir plus sur la mesure de la composition corporelle à la Clinique ESSAADA."
      />
    </>
  );
}
