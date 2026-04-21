import type { Metadata } from "next";
import {
  FileCheck2,
  FileSignature,
  Send,
  ArrowRight,
  Phone,
  Plane,
  Wallet,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Callout } from "@/components/ui/Callout";
import { Card, CardIcon } from "@/components/ui/Card";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import { site } from "@/lib/site";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Je viens de France — prise en charge CPAM",
  description:
    "Dialysez en vacances à Sidi Bel Abbès, remboursement CPAM assuré. Étapes accord préalable, formulaires SE 352-05 I et II, plafond 86,95 €/séance. Accompagnement complet de la diaspora.",
  alternates: {
    canonical: `${site.url}/patients-de-passage/depuis-la-france`,
  },
  openGraph: {
    title: "Diaspora : dialyse en vacances à Sidi Bel Abbès, CPAM comprise",
    description:
      "Les 3 étapes pour faire rembourser votre dialyse par la CPAM : accord préalable, formulaires SE 352-05, factures acquittées. Clinique ESSAADA vous accompagne.",
  },
};

const etapesCpam = [
  {
    n: "1",
    icon: FileCheck2,
    title: "Accord préalable CPAM",
    semaine: "Semaines 1 à 2",
    text: "Connectez-vous à votre compte ameli ou prenez rendez-vous avec votre caisse. Demandez un accord administratif de prise en charge pour dialyse hors UE. Sans cet accord obtenu avant le départ, aucun remboursement ne sera possible.",
  },
  {
    n: "2",
    icon: FileSignature,
    title: "Formulaires SE 352-05 I et II",
    semaine: "Semaines 2 à 4",
    text: "Prévus par la convention bilatérale France-Algérie, à compléter avec votre néphrologue traitant (volet médical) et votre CPAM (volet administratif). Le I atteste de vos droits, le II formalise la demande de soins programmés.",
  },
  {
    n: "3",
    icon: Send,
    title: "Nous transmettre votre dossier",
    semaine: "Semaines 4 à 6",
    text: "Par email ou WhatsApp, au plus tard 3 semaines avant votre arrivée. Notre équipe médicale valide votre dossier sous 48h ouvrées et confirme vos créneaux.",
  },
];

const docsClinique = [
  "Ordonnance de dialyse à jour (fréquence, durée, dialyseur, anticoagulation)",
  "Sérologies HBV, HCV, HIV datées de moins de 3 mois",
  "Dernier bilan sanguin complet",
  "Carnet de dialyse des 3 derniers mois",
  "Dernier Kt/V et poids sec de référence",
  "Copie de votre accord CPAM et des formulaires SE 352-05",
];

const surPlace = [
  "Accueil bilingue français / arabe / kabyle à chaque séance",
  "Créneaux réservés aux patients de passage, adaptés à votre programme familial",
  "Poste de dialyse individualisé, eau ultrapure conforme aux normes internationales",
  "Transmission du compte-rendu à votre néphrologue en France à votre retour",
  "Facture acquittée originale remise en main propre, conforme CPAM",
  "Suivi téléphonique possible entre deux séances si besoin",
];

const diasporaFaq = [
  {
    question: "Puis-je dialyser chez vous si je n'ai pas encore l'accord CPAM ?",
    answer:
      "Oui, vous pouvez être pris en charge, mais aucun remboursement ne sera possible au retour sans l'accord préalable obtenu avant le départ. Nous vous recommandons vivement d'attendre la réponse de la CPAM avant de finaliser votre voyage.",
  },
  {
    question: "Ma mutuelle prend-elle en charge le dépassement de 86,95 € ?",
    answer:
      "Cela dépend de votre contrat. Beaucoup de mutuelles complètent le forfait CPAM pour les soins à l'étranger. Contactez-les avant le départ avec votre devis — nous en fournissons un nominatif après étude du dossier.",
  },
  {
    question: "Les sérologies et documents doivent-ils être traduits ?",
    answer:
      "Non. Les documents en français sont acceptés sans traduction. Les comptes rendus en anglais le sont également.",
  },
  {
    question: "Vos créneaux sont-ils flexibles si mon vol est retardé ?",
    answer:
      "Oui. Prévenez-nous dès que possible par WhatsApp : nous décalons votre séance sur le créneau disponible le plus proche, sans avance de frais supplémentaire.",
  },
  {
    question: "Comment régler la facture sur place ?",
    answer:
      "Une facture acquittée originale vous est systématiquement remise, au format exigé par la CPAM (détaillée, avec cachet, en français). Les moyens de paiement acceptés vous sont communiqués dans votre devis nominatif.",
  },
  {
    question: "Puis-je venir en urgence sans préavis ?",
    answer:
      "Nous privilégions les dossiers préparés en amont pour votre sécurité et pour l'organisation du service. En cas d'urgence vitale pendant votre séjour, contactez le 14 (SAMU Algérie). Nous faisons notre possible pour vous accueillir dès que votre état est stabilisé.",
  },
  {
    question: "Puis-je dialyser à domicile pendant mon séjour ?",
    answer:
      "La dialyse à domicile n'est pas proposée. Nous assurons l'hémodialyse en centre, dans des conditions sécurisées et encadrées, sur validation de votre néphrologue référent.",
  },
];

export default function DepuisLaFrancePage() {
  const crumbs = [
    { name: "Accueil", url: "/" },
    { name: "Patients de passage", url: "/patients-de-passage" },
    {
      name: "Je viens de France",
      url: "/patients-de-passage/depuis-la-france",
    },
  ];

  return (
    <>
      <PhotoHero
        eyebrow="Diaspora France"
        title="Dialyser en vacances à Sidi Bel Abbès, l'esprit tranquille"
        subtitle="Vous rentrez revoir la famille, profiter du soleil, retrouver vos racines. Votre traitement ne doit pas vous en empêcher. Nous accompagnons chaque année des patients de la diaspora — avec le même sérieux qu'en France, et un accompagnement complet des démarches CPAM."
        photoIcon={Plane}
        photoLabel="Diaspora — vacances dialyse"
        photoTag="France → Sidi Bel Abbès"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(diasporaFaq)),
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <Callout icon={AlertTriangle} className="mb-12 max-w-3xl">
            <strong className="text-neutral-900">Anticipez 6 à 8 semaines</strong>{" "}
            entre le début de vos démarches et votre départ. La CPAM ne traite pas
            les dossiers dans l'urgence, et aucune séance hors UE n'est remboursée
            sans accord préalable obtenu avant le départ.
          </Callout>

          <SectionHeader
            eyebrow="Avant votre départ"
            title="Les 3 étapes CPAM"
            subtitle="Un calendrier clair, des interlocuteurs connus. Nous vous accompagnons à chacune."
          />
          <ol className="grid md:grid-cols-3 gap-5">
            {etapesCpam.map((e) => (
              <li key={e.n}>
                <Card className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center shrink-0">
                      {e.n}
                    </div>
                    <e.icon className="w-6 h-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <div className="text-sm text-primary-700 font-semibold tracking-wide mb-1">
                    {e.semaine}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {e.title}
                  </h3>
                  <p className="text-neutral-700 text-base leading-relaxed">{e.text}</p>
                </Card>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <SectionHeader
              eyebrow="Étape 3 détaillée"
              title="Ce que nous attendons de votre néphrologue traitant"
            />
            <ul className="grid md:grid-cols-2 gap-3 max-w-4xl">
              {docsClinique.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow="Sur place à Sidi Bel Abbès"
              title="Notre accompagnement, séance après séance"
            />
            <ul className="space-y-3">
              {surPlace.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-neutral-600 italic">
              Toute adaptation du protocole reste sur validation de votre néphrologue référent.
            </p>
          </div>

          <div>
            <SectionHeader
              eyebrow="Au retour en France"
              title="Le remboursement CPAM, mode d'emploi"
            />
            <Card className="bg-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-600 text-white grid place-items-center">
                  <Wallet className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm text-neutral-600">Plafond CPAM 2026</div>
                  <div className="font-display text-2xl font-bold text-primary-700">
                    86,95 € / séance
                  </div>
                </div>
              </div>
              <ul className="space-y-2.5 text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Factures originales acquittées (pas de copies)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Preuve de paiement (reçu, relevé bancaire)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <AlertTriangle
                    className="w-5 h-5 text-danger-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>Médicaments et transport : non remboursés par la CPAM</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>
                    Dépôt sur ameli.fr : Démarches → Frais de santé → Soins à l'étranger
                  </span>
                </li>
              </ul>
              <p className="mt-5 text-sm text-neutral-600">
                Votre mutuelle peut compléter le forfait — vérifiez avec elle avant le
                départ, avec notre devis nominatif.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Arrivée en Algérie"
            title="D'Oran à Sidi Bel Abbès — 80 km, environ 1 heure"
            subtitle="L'aéroport d'arrivée principal est Oran Es-Senia (code ORN). L'autoroute A1 vous mène directement à Sidi Bel Abbès."
          />
          <div className="grid md:grid-cols-3 gap-5">
            <Card>
              <CardIcon>
                <Plane className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                Taxi aéroport
              </h3>
              <p className="text-neutral-700">
                Ordre de grandeur 4 000 — 5 000 DZD. À négocier au forfait avant le départ.
              </p>
            </Card>
            <Card>
              <CardIcon>
                <Phone className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                Navette sur demande
              </h3>
              <p className="text-neutral-700">
                Organisation possible si vous nous prévenez au moins 48h à l'avance. Tarif
                communiqué avec le devis.
              </p>
            </Card>
            <Card>
              <CardIcon>
                <ArrowRight className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                Location de voiture
              </h3>
              <p className="text-neutral-700">
                Disponible à l'aéroport d'Oran si vous préférez l'autonomie pendant votre séjour.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom max-w-4xl">
          <SectionHeader
            eyebrow="FAQ diaspora"
            title="Les questions concrètes qu'on se pose avant de venir"
          />
          <FaqAccordion items={diasporaFaq} />
        </div>
      </section>

      <ConversionFooterCTA
        variant="sand"
        eyebrow="Organiser votre venue"
        title="Prêt à organiser votre séjour dialyse ?"
        subtitle="Notre équipe répond en français, de la France comme d'Algérie. WhatsApp privilégié pour la diaspora — pas d'appel international à votre charge."
        primaryCtaLabel="Réserver mon passage"
        waMessage="Bonjour, je dialyse en France et je souhaite organiser un séjour dialyse avec prise en charge CPAM."
      />
    </>
  );
}
