import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  FileText,
  CheckCircle2,
  Clock,
  Plane,
  Pill,
  Hotel,
  Car,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardIcon } from "@/components/ui/Card";
import { site, waUrl } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Patients de passage · Dialyse vacances à Sidi Bel Abbès",
  description:
    "Diaspora algérienne ou résident en voyage : dialysez en toute sérénité pendant votre séjour à Sidi Bel Abbès. Confirmation sous 72h ouvrées, tiers-payant CNAS/CASNOS, accompagnement personnalisé.",
  alternates: { canonical: `${site.url}/patients-de-passage` },
  openGraph: {
    title: "Patients de passage — Clinique ESSAADA",
    description:
      "Dialyse vacances à Sidi Bel Abbès. Confirmation sous 72h ouvrées. Conventionnée CNAS et CASNOS.",
  },
};

const etapes = [
  {
    num: "1",
    icon: MessageCircle,
    title: "Nous contacter",
    text: "Envoyez-nous un message WhatsApp ou un email avec vos dates de séjour, votre destination en Algérie et les coordonnées de votre néphrologue traitant.",
  },
  {
    num: "2",
    icon: FileText,
    title: "Transmission médicale",
    text: "Vous nous transmettez votre dossier (dernier bilan, sérologies, ordonnance). Notre néphrologue l'étudie et prépare votre séjour dialyse.",
  },
  {
    num: "3",
    icon: CheckCircle2,
    title: "Confirmation sous 72h",
    text: "Réponse sous 72h ouvrées avec votre créneau confirmé, les infos pratiques pour l'arrivée et le contact WhatsApp direct de l'équipe.",
  },
];

const docsRequis = [
  "Dernier bilan biologique — FNS + Biochimie (moins d'1 mois)",
  "Sérologies à jour : hépatites B, C et VIH de moins de 6 mois",
  "Ordonnance de dialyse signée par votre néphrologue traitant",
  "Coordonnées de votre néphrologue traitant (pour liaison)",
  "Pièce d'identité (passeport ou CIN)",
  "Attestation CNAS, CASNOS ou mutuelle complémentaire",
];

const logistique = [
  {
    icon: Plane,
    title: "Depuis l'aéroport",
    text: "Aéroport Oran Es-Senia à environ 1h de la clinique. Service de taxi ou location de voiture sur place. Nous pouvons vous recommander des partenaires.",
  },
  {
    icon: Hotel,
    title: "Hébergement",
    text: "Sidi Bel Abbès dispose d'hôtels à courte distance de la clinique. Liste fournie à la confirmation de votre créneau.",
  },
  {
    icon: Pill,
    title: "Pharmacies",
    text: "Plusieurs pharmacies de garde à proximité immédiate. Apportez votre traitement pour la durée du séjour, avec ordonnance lisible.",
  },
  {
    icon: Car,
    title: "Accès clinique",
    text: "Places PMR près de l'entrée, accès direct ambulance. Chauffeur de taxi autorisé à vous attendre.",
  },
];

export default function PatientsDePassagePage() {
  return (
    <>
      <PhotoHero
        eyebrow="Patients de passage"
        title="Dialysez en toute sérénité pendant votre séjour à Sidi Bel Abbès"
        subtitle="Diaspora algérienne en vacances, résident en voyage, patient en transfert : nous accueillons les patients dialysés de passage. Confirmation de votre créneau sous 72h ouvrées."
        photoIcon={Plane}
        photoSrc="/images/clinique-facade-enseigne.webp"
        photoAlt="Façade extérieure de la Clinique ESSAADA à Sidi Bel Abbès — enseigne « CLINIQUE ESSAADA », rampe d'accès patients et entrée principale"
        photoLabel="Accueil patients de passage"
        photoTag="Diaspora & voyageurs"
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: "Accueil", url: "/" },
            { name: "Patients de passage", url: "/patients-de-passage" },
          ]}
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Patients de passage", url: "/patients-de-passage" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <Link
            href="/patients-de-passage/depuis-la-france"
            className="group block mb-12 max-w-3xl mx-auto p-5 md:p-6 rounded-2xl bg-gradient-to-br from-primary-700 to-primary-800 text-white shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/15 grid place-items-center shrink-0">
                <Plane className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold tracking-wide text-primary-200 mb-1">
                  Diaspora France
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-2 text-white">
                  Vous rentrez de France ? Guide CPAM complet
                </h3>
                <p className="text-primary-100 leading-relaxed">
                  Accord préalable, formulaires SE 352-05, plafond 86,95 €/séance,
                  factures acquittées — toutes les démarches, étape par étape.
                </p>
              </div>
              <ArrowRight
                className="w-6 h-6 mt-2 shrink-0 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </div>
          </Link>

          <SectionHeader
            eyebrow="Comment ça marche"
            title="Trois étapes, une confirmation sous 72h"
            subtitle="Nous avons conçu un parcours sans friction pour que votre séjour commence détendu."
          />
          <ol className="grid md:grid-cols-3 gap-5">
            {etapes.map((e) => (
              <li key={e.num}>
                <Card className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-600 text-white font-display font-bold grid place-items-center shrink-0">
                      {e.num}
                    </div>
                    <e.icon className="w-6 h-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {e.title}
                  </h3>
                  <p className="text-neutral-700 text-base leading-relaxed">{e.text}</p>
                </Card>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <a
              href={waUrl("Bonjour, je suis patient dialysé et je souhaite venir en séjour à Sidi Bel Abbès. Voici mes dates approximatives : ")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb558] text-white px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Démarrer sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader
              eyebrow="Documents à préparer"
              title="Ce dont nous avons besoin pour valider votre créneau"
            />
            <ul className="space-y-3">
              {docsRequis.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-white border border-sand-200">
              <Clock className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-neutral-700 text-base">
                <strong>Délai conseillé :</strong> contactez-nous au minimum
                1 mois avant votre séjour. Les réservations de dernière minute
                restent possibles mais ne sont pas conseillées — elles dépendent
                de la disponibilité d'un poste.
              </p>
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Combien ça coûte" title="Prise en charge transparente" />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                <strong className="text-neutral-900">Si vous êtes affilié CNAS ou CASNOS</strong> —
                vos séances sont prises en charge intégralement en tiers-payant.
                Aucune avance de frais. Apportez simplement votre carte Chifa et
                votre attestation.
              </p>
              <p>
                <strong className="text-neutral-900">Si vous êtes de la diaspora avec une mutuelle européenne</strong> —
                nous vous communiquons un devis clair avant votre séjour. Beaucoup
                de mutuelles françaises, belges ou canadiennes remboursent la
                dialyse à l'étranger sur justificatif.
              </p>
              <p>
                <strong className="text-neutral-900">Si vous êtes non affilié</strong> —
                tarif transparent communiqué par écrit avant votre arrivée.
                Pas de surprise à la sortie.
              </p>
            </div>
            <Link
              href="/rendez-vous"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary-700 hover:gap-2.5 transition-all"
            >
              Demander un devis personnalisé
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Sur place"
            title="Tout ce qu'il faut savoir pour votre séjour"
            subtitle="Logistique, accès, hébergement, pharmacies — nous vous communiquons la liste détaillée à la confirmation."
          />
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {logistique.map((l) => (
              <li key={l.title}>
                <Card className="h-full">
                  <CardIcon>
                    <l.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                    {l.title}
                  </h3>
                  <p className="text-neutral-700 text-base">{l.text}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom grid md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-3">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
              Prêt à organiser votre séjour dialyse&nbsp;?
            </h2>
            <p className="text-neutral-700 text-lg leading-relaxed">
              Notre équipe secrétariat est joignable du samedi au jeudi, en
              français et en arabe. WhatsApp privilégié pour la diaspora.
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row md:justify-end gap-3">
            <a
              href={waUrl("Bonjour, je suis patient dialysé et je souhaite organiser un séjour à Sidi Bel Abbès.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb558] text-white px-5 py-3 rounded-full font-semibold min-h-[52px] transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-semibold min-h-[52px] transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Appeler
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
