import type { Metadata } from "next";
import Link from "next/link";
import {
  Moon,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  UtensilsCrossed,
  Droplets,
  Apple,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardIcon } from "@/components/ui/Card";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import { site, waUrl } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Ramadan & dialyse · Créneaux adaptés",
  description:
    "Créneaux d'hémodialyse adaptés au Ramadan à Sidi Bel Abbès : première séance à 4h du matin (pas de séance après f'tour, pas de créneau nocturne), en concertation avec votre néphrologue.",
  alternates: { canonical: `${site.url}/ramadan-et-dialyse` },
  openGraph: {
    title: "Ramadan & dialyse — Clinique ESSAADA",
    description:
      "Pendant le Ramadan, nos créneaux sont adaptés en concertation avec votre néphrologue.",
  },
};

const principes = [
  {
    title: "Décision médicale individualisée",
    text: "Le jeûne pendant le Ramadan est une décision qui appartient à vous — en concertation avec votre néphrologue. Certains patients peuvent jeûner, d'autres non. Nous respectons votre choix et adaptons le suivi.",
  },
  {
    title: "Première séance à 4h du matin",
    text: "Pendant le Ramadan, nous ouvrons une seule série de créneaux avec une première séance à 4h du matin, avant s'hour. Pas de séance après f'tour, pas de créneau nocturne. Le planning est ajusté en concertation avec votre néphrologue.",
  },
  {
    title: "Vigilance renforcée",
    text: "Le personnel est sensibilisé : surveillance accrue de la tension, de l'hydratation, du bilan entrée-sortie. Tout signe d'alerte = rupture du jeûne recommandée par le médecin.",
  },
];

const alimentation = [
  {
    icon: UtensilsCrossed,
    title: "Trois repas structurés",
    text: "F'tour, dîner léger en soirée, s'hour consistant. Évitez le grignotage continu : c'est ce qui protège votre glycémie et votre prise de poids interdialytique.",
  },
  {
    icon: Droplets,
    title: "Hydratation maîtrisée",
    text: "Votre quota hydrique reste le même qu'en dehors du Ramadan. Répartissez-le entre f'tour et s'hour. Pas de sodas, peu d'aliments très salés.",
  },
  {
    icon: Apple,
    title: "Dattes et douceurs dosées",
    text: "Deux dattes au f'tour, une chorba équilibrée, une demi-portion de pâtisserie plutôt qu'un défilé. Attention au potassium des dattes et au phosphore des douceurs.",
  },
  {
    icon: AlertTriangle,
    title: "Rompre sans hésiter",
    text: "Fatigue inhabituelle, malaise, signe d'hypo ou d'hyperglycémie : rompez immédiatement. La loi religieuse l'autorise pour raisons médicales.",
  },
];

const faqRamadan = [
  {
    q: "Puis-je jeûner pendant la dialyse ?",
    a: "Cette décision appartient à votre néphrologue. Pour beaucoup de patients dialysés, le jeûne reste possible à condition d'un suivi rapproché. D'autres ne peuvent pas jeûner pour des raisons médicales. Venez en consulter avant le Ramadan pour faire le point.",
  },
  {
    q: "Que faire pour mes médicaments ?",
    a: "Votre néphrologue adapte la prise (avant f'tour, entre f'tour et s'hour, ou après s'hour selon le médicament). Ne modifiez jamais une prescription de votre propre initiative. Listez tous vos traitements et parlons-en ensemble.",
  },
  {
    q: "Comment gérer l'hydratation et la prise de poids ?",
    a: "C'est le point critique. Entre f'tour et s'hour, respecter strictement votre volume de boisson autorisé (généralement 500 ml + diurèse résiduelle). Évitez les aliments très salés à la rupture. La prise de poids interdialytique reste la limite à ne pas dépasser.",
  },
  {
    q: "Que faire en cas de malaise ou de baisse de tension ?",
    a: "Rompez le jeûne immédiatement — la loi religieuse autorise la rupture pour raisons médicales. Appelez-nous au plus tôt. En cas d'urgence, rendez-vous au service d'urgence le plus proche.",
  },
  {
    q: "Le café en séance est-il servi pendant le Ramadan ?",
    a: "La séance unique de 4h du matin a lieu avant s'hour, donc avant le jeûne. Le café peut être servi au moment du s'hour en fin de séance, selon votre souhait et votre état clinique.",
  },
];

export default function RamadanDialysePage() {
  return (
    <>
      <PhotoHero
        eyebrow="Ramadan & dialyse"
        title="Vivre le Ramadan en dialyse, avec sérénité"
        subtitle="Pendant le Ramadan, nos créneaux sont adaptés en concertation avec votre néphrologue. Que vous jeûniez ou non, nous organisons votre suivi pour respecter votre choix et votre santé."
        photoIcon={Moon}
        photoLabel="Séances Ramadan"
        photoTag="Créneaux adaptés"
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: "Accueil", url: "/" },
            { name: "Ramadan & dialyse", url: "/ramadan-et-dialyse" },
          ]}
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Ramadan & dialyse", url: "/ramadan-et-dialyse" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12 flex items-start gap-4 p-5 rounded-2xl bg-warning-50 border border-warning-100">
            <AlertTriangle className="w-6 h-6 text-warning-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h2 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                Important — décision médicale individualisée
              </h2>
              <p className="text-neutral-700 text-base">
                Le jeûne du Ramadan en dialyse <strong>n'est pas recommandé pour tous les patients</strong>.
                Prenez rendez-vous avec votre néphrologue <strong>avant</strong> le début du Ramadan pour une
                évaluation personnalisée. Aucune information sur cette page ne remplace un avis médical.
              </p>
            </div>
          </div>

          <SectionHeader
            eyebrow="Nos principes"
            title="Trois engagements pendant le Ramadan"
          />
          <ul className="grid md:grid-cols-3 gap-5">
            {principes.map((p) => (
              <li key={p.title}>
                <Card className="h-full">
                  <CardIcon>
                    <Moon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-neutral-700 text-base">{p.text}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow="Planning type"
              title="Créneaux pendant le Ramadan"
            />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                Le planning précis est communiqué environ 3 semaines avant le
                début du Ramadan.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-neutral-900">Première séance à 4h du matin</strong> —
                    avant s'hour, pour l'ensemble des patients (jeûneurs ou non).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-neutral-900">Pas de séance après f'tour</strong> —
                    ni de créneau nocturne. Les créneaux suivants de la journée restent alignés sur
                    la cadence habituelle.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-sand-200">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-primary-700" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-neutral-900">
                Prendre rendez-vous avant le Ramadan
              </h3>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-5">
              Nous recommandons de consulter votre néphrologue <strong>au moins 2 semaines avant</strong> le
              début du Ramadan pour évaluer votre aptitude au jeûne, ajuster vos médicaments et
              programmer vos créneaux adaptés.
            </p>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-semibold min-h-[48px] transition-colors"
            >
              Prendre rendez-vous
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <p className="mt-5 text-sm text-neutral-600">
              Ou contactez-nous directement au <a href={site.contact.phoneHref} className="text-primary-700 underline">{site.contact.phone}</a> ou sur <a href={waUrl("Bonjour, je souhaite adapter mes séances pendant le Ramadan.")} target="_blank" rel="noopener noreferrer" className="text-primary-700 underline">WhatsApp</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Alimentation"
            title="Bien s'alimenter pendant le Ramadan"
          />
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-neutral-700 text-lg leading-relaxed text-center">
              Si votre néphrologue vous autorise à jeûner, l'organisation de vos repas
              devient déterminante. La règle d'or : trois repas structurés plutôt que
              du grignotage continu, une vigilance particulière sur l'hydratation et
              le sel, et des choix mesurés sur les douceurs orientales.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {alimentation.map((a) => (
              <li key={a.title}>
                <Card className="h-full">
                  <CardIcon>
                    <a.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {a.title}
                  </h3>
                  <p className="text-neutral-700 text-base">{a.text}</p>
                </Card>
              </li>
            ))}
          </ul>

          <div className="max-w-2xl mx-auto p-6 md:p-8 bg-sand-50 border border-sand-200 rounded-2xl text-center">
            <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
              Le guide complet
            </h3>
            <p className="text-neutral-700 mb-5">
              F'tour, s'hour, dattes, chorba, pâtisseries, hydratation, surveillance
              de la glycémie : retrouvez tous les conseils pratiques dans notre
              guide dédié.
            </p>
            <Link
              href="/blog/ramadan-alimentation-dialyse-sidi-bel-abbes"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-semibold min-h-[48px] transition-colors"
            >
              Lire le guide complet
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="FAQ Ramadan"
            title="Questions fréquentes"
          />
          <div className="space-y-3">
            {faqRamadan.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-neutral-150 rounded-xl overflow-hidden open:shadow-sm transition-shadow"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5 md:p-6 font-display font-semibold text-lg text-neutral-900 hover:bg-neutral-50">
                  <span>{f.q}</span>
                  <span className="w-5 h-5 shrink-0 mt-1 grid place-items-center text-primary-600 text-xl transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 md:px-6 md:pb-6 text-neutral-700 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ConversionFooterCTA
        variant="sand"
        eyebrow="Échangeons"
        title="Vos questions méritent une réponse personnelle"
        subtitle="Chaque patient est unique. Parlons-en ensemble — avant, pendant et après le Ramadan."
        waMessage="Bonjour, j'ai une question sur la dialyse pendant le Ramadan."
      />
    </>
  );
}
