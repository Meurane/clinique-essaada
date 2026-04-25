import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Info,
  Droplets,
  AlertCircle,
  Activity,
  Users,
  Stethoscope,
  ShieldCheck,
  Heart,
  ArrowRight,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Callout } from "@/components/ui/Callout";
import { PullQuote } from "@/components/ui/PullQuote";
import { Card, CardIcon } from "@/components/ui/Card";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Comprendre l'insuffisance rénale — guide pédagogique",
  description:
    "Le rôle des reins, les signes à repérer, les 5 stades, qui se faire dépister, comment ralentir l'évolution. 10% des insuffisances rénales peuvent être évitées, 30% retardées de plusieurs années.",
  alternates: { canonical: `${site.url}/comprendre-l-insuffisance-renale` },
  openGraph: {
    title: "Comprendre l'insuffisance rénale — Clinique ESSAADA",
    description:
      "Guide pédagogique sur la maladie rénale chronique : rôle des reins, signes, stades, dépistage, prévention.",
  },
};

const signesDebut = [
  "Une fatigue inhabituelle, qui apparaît dès un effort léger",
  "Une perte d'appétit",
  "Le besoin de se lever plusieurs fois la nuit pour uriner",
  "Une tension qui monte, ou des gonflements (chevilles, visage)",
];

const signesEvolution = [
  "Troubles digestifs : dégoût pour la viande, nausées, vomissements",
  "Un amincissement, une fatigue plus marquée",
  "Des crampes ou des jambes agitées, surtout la nuit",
  "Des démangeaisons, parfois intenses",
  "Un sommeil perturbé",
];

const stades = [
  { n: "1", label: "Fonction rénale normale", dfg: "> 90", color: "bg-accent-100 text-accent-800" },
  { n: "2", label: "Insuffisance rénale légère", dfg: "60 – 89", color: "bg-accent-50 text-accent-700" },
  { n: "3", label: "Insuffisance rénale modérée", dfg: "30 – 59", color: "bg-warning-50 text-warning-700" },
  { n: "4", label: "Insuffisance rénale sévère", dfg: "15 – 29", color: "bg-warning-100 text-warning-700" },
  { n: "5", label: "Insuffisance rénale terminale", dfg: "< 15", color: "bg-danger-50 text-danger-700" },
];

const facteursRisque = [
  "Vous êtes hypertendu ou diabétique",
  "Vous avez des antécédents cardiovasculaires (artères, cœur)",
  "Vous avez plus de 60 ans",
  "Vous avez des antécédents familiaux de maladie rénale ou génétique",
  "Vous avez eu plusieurs infections urinaires hautes ou calculs rénaux à répétition",
  "Vous prenez régulièrement certains médicaments agressifs pour les reins (anti-inflammatoires au long cours, lithium, certaines chimiothérapies…)",
];

const piliers = [
  {
    icon: Heart,
    title: "Adopter quelques bonnes habitudes",
    items: [
      "Arrêter le tabac",
      "Réduire l'alcool",
      "Bouger régulièrement (30 min de marche par jour)",
      "Garder ses vaccinations à jour",
      "Éviter l'automédication",
      "Voir son néphrologue au moins une fois par an si à risque",
    ],
  },
  {
    icon: Activity,
    title: "Bien contrôler sa tension",
    items: [
      "Mesurer sa tension à la maison quand c'est possible",
      "Réduire le sel",
      "Surveiller son poids",
      "Prendre son traitement régulièrement, sans sauter de prises",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Protéger ses reins",
    items: [
      "Éviter les médicaments qui fatiguent les reins (AINS sans avis)",
      "Modérer les apports en protéines animales selon conseils du néphrologue",
      "Bien équilibrer cholestérol, triglycérides et diabète",
    ],
  },
  {
    icon: Users,
    title: "Comprendre son traitement et y participer",
    items: [
      "Connaître ses médicaments et leur rôle",
      "Suivre l'évolution de ses bilans",
      "Échanger en consultation, sans retenue",
      "Un patient informé est un patient mieux soigné",
    ],
  },
];

export default function ComprendreIrcPage() {
  const crumbs = [
    { name: "Accueil", url: "/" },
    { name: "Comprendre l'insuffisance rénale", url: "/comprendre-l-insuffisance-renale" },
  ];

  return (
    <>
      <PhotoHero
        eyebrow="Guide pédagogique"
        title="Comprendre l'insuffisance rénale"
        subtitle="L'insuffisance rénale chronique est une maladie silencieuse. Repérée tôt, elle se ralentit, parfois considérablement. Voici, simplement, ce qu'il faut en savoir."
        photoSrc="/images/schema-rein-coupe.webp"
        photoAlt="Coupe anatomique d'un rein humain montrant le cortex en périphérie, la médulla avec les pyramides de Malpighi, les calices et le bassinet qui collectent l'urine, ainsi que l'artère et la veine rénales pénétrant au niveau du hile et l'uretère."
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
        <div className="container-custom max-w-4xl">
          <Callout icon={Info} className="mb-10">
            Cette page a une vocation informative. Elle ne remplace pas l'avis
            de votre médecin traitant ou de votre néphrologue, qui reste votre
            meilleur interlocuteur pour évaluer votre situation.
          </Callout>

          <SectionHeader eyebrow="En deux mots" title="Pourquoi cette page" />
          <p className="lead">
            L'insuffisance rénale chronique s'installe doucement, souvent sans
            bruit, et beaucoup de personnes l'ignorent pendant des années. La
            bonne nouvelle, c'est qu'avec un <strong className="font-semibold text-neutral-900">simple bilan sanguin</strong> on
            peut la repérer tôt, et qu'il existe aujourd'hui de vrais leviers
            pour protéger ses reins, ralentir la maladie, et continuer à vivre
            pleinement.
          </p>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <SectionHeader eyebrow="Anatomie" title="Le rôle de vos reins" />
            <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
              <p>
                Vous avez deux reins, situés dans le bas du dos, de chaque côté
                de la colonne vertébrale. Chacun pèse à peine <strong>160 grammes</strong> —
                à peu près la taille d'un gros haricot.
              </p>
              <p>
                Imaginez-les comme <strong>deux filtres très fins</strong>. Jour
                et nuit, tout votre sang passe à travers eux pour y être nettoyé :
                ils retiennent ce qui est utile (protéines, globules), et laissent
                partir dans les urines ce dont le corps n'a plus besoin (eau en
                excès, sel, déchets comme l'urée et la créatinine).
              </p>
              <p>
                Les reins font aussi autre chose : ils aident à <strong>réguler la
                tension</strong>, à <strong>garder des os solides</strong> et à{" "}
                <strong>fabriquer les globules rouges</strong>. Quand ils fonctionnent
                bien, on ne les sent pas — et c'est justement pour ça qu'il faut
                parfois penser à vérifier qu'ils vont bien.
              </p>
            </div>
          </div>

          <Card className="bg-white">
            <CardIcon>
              <Droplets className="w-6 h-6" aria-hidden="true" />
            </CardIcon>
            <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3">
              L'insuffisance rénale chronique, qu'est-ce que c'est ?
            </h3>
            <div className="space-y-3 text-neutral-700 leading-relaxed">
              <p>
                Les reins sont composés de petits filtres microscopiques appelés{" "}
                <strong>néphrons</strong>. Quand certains sont abîmés durablement — par
                le diabète, l'hypertension, ou d'autres causes — ils ne se régénèrent pas.
                Le rein continue de fonctionner, mais un peu moins bien.
              </p>
              <p>
                On parle d'insuffisance rénale chronique lorsque cette perte de
                fonction s'installe dans la durée (plus de trois mois). Elle est
                souvent <strong>indolore et progressive</strong>, ce qui explique qu'on
                la découvre fréquemment à l'occasion d'un bilan de routine.{" "}
                <strong>Plus elle est repérée tôt, plus on peut agir.</strong>
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <figure className="m-0 md:order-1">
            <div className="rounded-2xl overflow-hidden bg-sand-50 border border-sand-200 p-3 md:p-5">
              <Image
                src="/images/schema-nephron.webp"
                alt="Schéma détaillé d'un néphron : à gauche le glomérule avec ses artérioles afférente et efférente entourées par la capsule de Bowman ; au centre les tubules — tube contourné proximal, anse de Henlé descendante puis ascendante, tube contourné distal ; à droite les canaux collecteurs cortical et médullaire."
                width={1214}
                height={864}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <figcaption className="mt-3 text-sm text-neutral-600 text-center italic">
              Le néphron — l'unité microscopique de filtration. Chaque rein en contient environ un million.
            </figcaption>
          </figure>

          <div className="md:order-2">
            <SectionHeader
              eyebrow="Zoom sur le néphron"
              title="Un million de filtres microscopiques par rein"
            />
            <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
              <p>
                Chaque rein contient environ <strong>un million de néphrons</strong>,
                ces unités microscopiques qui filtrent votre sang en continu. Sur
                le schéma, on voit le <strong>glomérule</strong> — le filtre proprement
                dit, où le sang passe à travers une fine membrane — puis tout le
                système de tubules qui ajuste la composition de l'urine en
                récupérant ce qui doit l'être (eau, sels, glucose) et en laissant
                filer les déchets vers le canal collecteur.
              </p>
              <p>
                Cette mécanique miniaturisée se répète <strong>un million de fois
                par rein</strong>. Tant qu'un nombre suffisant de néphrons fonctionne,
                le rein <strong>compense</strong> — c'est pour cela qu'on peut perdre
                une partie de sa fonction rénale sans rien sentir. Le piège : quand
                les premiers symptômes apparaissent, il reste souvent moins de
                30 % de néphrons fonctionnels.
              </p>
              <p>
                Comprendre le néphron, c'est comprendre pourquoi un{" "}
                <strong>simple bilan sanguin</strong> est si précieux : il mesure la
                créatinine, un déchet que les néphrons sains éliminent. Sa montée
                silencieuse dans le sang est le premier signal — bien avant que le
                corps ne se manifeste.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Les signes à repérer"
            title="Quels symptômes doivent alerter ?"
            subtitle="L'insuffisance rénale avance discrètement. Mais certains signaux peuvent mettre la puce à l'oreille."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-warning-600" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-neutral-900">
                  Au début, on peut remarquer
                </h3>
              </div>
              <ul className="space-y-3 text-neutral-700">
                {signesDebut.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-danger-600" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-neutral-900">
                  Plus tard, peuvent s'ajouter
                </h3>
              </div>
              <ul className="space-y-3 text-neutral-700">
                {signesEvolution.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <Callout title="Bon à savoir" className="mt-8 max-w-4xl">
            Même à un stade avancé, avant la dialyse, on continue à uriner
            normalement. <em>L'absence d'urines n'est donc pas un critère.</em>{" "}
            Si plusieurs de ces signes vous concernent, parlez-en à votre
            médecin — ce n'est pas forcément les reins, mais ça vaut la peine de
            vérifier.
          </Callout>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Les 5 stades"
            title="Où se situe-t-on sur la carte ?"
            subtitle="Les médecins évaluent le fonctionnement des reins grâce au débit de filtration glomérulaire (DFG), calculé à partir d'une simple prise de sang."
          />
          <div className="max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <table className="w-full">
                <thead className="bg-primary-700 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-display font-semibold">Stade</th>
                    <th className="px-4 py-3 text-left font-display font-semibold">Description</th>
                    <th className="px-4 py-3 text-right font-display font-semibold whitespace-nowrap">
                      DFG (ml/min/1,73 m²)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {stades.map((s, i) => (
                    <tr
                      key={s.n}
                      className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}
                    >
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex w-8 h-8 rounded-lg items-center justify-center font-display font-bold ${s.color}`}
                        >
                          {s.n}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-neutral-800">{s.label}</td>
                      <td className="px-4 py-4 text-right font-display font-semibold text-primary-700 whitespace-nowrap">
                        {s.dfg}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-neutral-700 leading-relaxed">
              Au <strong>stade 5</strong>, un traitement de suppléance devient nécessaire :{" "}
              dialyse ou greffe. Ce tableau n'est pas une fatalité : c'est surtout
              une <strong>carte pour se situer</strong>. Détecter la maladie aux
              stades 1, 2 ou 3, c'est se donner des années pour freiner son évolution,
              parfois très efficacement. C'est tout l'intérêt du dépistage.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow="Qui dépister ?"
              title="Faut-il se faire dépister ?"
              subtitle="Une vérification au moins une fois par an est une bonne habitude si vous êtes dans l'une de ces situations."
            />
            <ul className="space-y-3">
              {facteursRisque.map((f) => (
                <li key={f} className="flex items-start gap-3 p-3 rounded-xl bg-sand-50">
                  <Stethoscope
                    className="w-5 h-5 text-primary-700 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader
              eyebrow="Comment dépister"
              title="Simple, rapide, sans rien d'invasif"
            />
            <Card className="bg-white">
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center shrink-0">
                    1
                  </span>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-1">Prise de sang</div>
                    <p className="text-neutral-700">
                      Mesure de la créatinine (un déchet que les reins éliminent normalement).
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center shrink-0">
                    2
                  </span>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-1">Un petit calcul</div>
                    <p className="text-neutral-700">
                      À partir de la créatinine, de votre âge et de votre poids
                      (formules Cockcroft-Gault, MDRD, CKD-EPI). Le laboratoire ou
                      le médecin s'en charge.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center shrink-0">
                    3
                  </span>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-1">
                      Parfois, une analyse d'urines
                    </div>
                    <p className="text-neutral-700">
                      Pour repérer la présence d'albumine, un autre marqueur utile.
                    </p>
                  </div>
                </li>
              </ol>
              <p className="mt-5 text-sm text-neutral-600 italic">
                En cas de doute ou de résultat anormal, votre médecin vous orientera
                vers un néphrologue pour un avis spécialisé.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <div className="mb-12">
            <PullQuote
              eyebrow="Le message le plus important"
              quote={
                <>
                  « 10 % des insuffisances rénales peuvent être évitées, et 30 %
                  peuvent être retardées de plusieurs années — parfois plus
                  d'une décennie. »
                </>
              }
              caption="Agir tôt change la trajectoire. Les recommandations reposent sur quatre piliers."
            />
          </div>
          <div className="max-w-4xl mx-auto">

          <ol className="grid md:grid-cols-2 gap-5">
            {piliers.map((p, i) => (
              <li key={p.title}>
                <div className="bg-primary-600/40 border border-primary-400/30 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-lg bg-white/15 grid place-items-center shrink-0">
                      <p.icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="text-xs font-semibold tracking-wide text-primary-200">
                        Pilier {i + 1}
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-2 text-primary-100">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-200 mt-2.5 shrink-0" aria-hidden="true" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <SectionHeader
            eyebrow="Consultation néphrologie"
            title="Un doute ? Une question ? Parlons-en."
            subtitle={`La Clinique ESSAADA propose des consultations de néphrologie à ${site.city}, pour faire le point sur votre fonction rénale, interpréter vos examens, et construire avec vous un plan pour protéger vos reins dans la durée.`}
            align="center"
          />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/services/consultation-nephrologie"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3.5 rounded-full font-semibold min-h-[52px] transition-colors"
            >
              Consultation néphrologie
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/glossaire"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-700 hover:bg-primary-50 px-6 py-3.5 rounded-full font-semibold min-h-[52px] transition-colors"
            >
              Voir le glossaire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
