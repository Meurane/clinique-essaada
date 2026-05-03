import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  Droplets,
  Shield,
  Sparkles,
  Eye,
  ArrowRight,
  MessageCircle,
  Quote,
  ClipboardCheck,
  Users,
  Stethoscope,
  Building2,
  Armchair,
} from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card, CardIcon } from "@/components/ui/Card";
import { site, waUrl } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Notre centre · 37 lits à Sidi Bel Abbès",
  description:
    "Découvrez la Clinique ESSAADA : 37 lits, équipements récents, eau ultra-pure, équipe pluridisciplinaire à Sidi Bel Abbès.",
  alternates: { canonical: `${site.url}/la-clinique` },
};

const engagements = [
  {
    icon: Stethoscope,
    title: "Des professionnels de santé à votre service",
    text: "Néphrologues, infirmiers spécialisés, personnel d'accompagnement — une équipe pluridisciplinaire formée à la prise en charge des patients dialysés.",
  },
  {
    icon: Shield,
    title: "Matériel géré selon normes qualité & sécurité",
    text: "Installation, maintenance, traçabilité complète. Récupération du matériel et des déchets d'activité de soins (DASRI) selon les protocoles.",
  },
  {
    icon: Users,
    title: "Approche globale et personnalisée",
    text: "Formation, dossier de soins personnalisé, prise en charge des formalités administratives. Chaque patient est suivi comme un dossier unique, pas comme un numéro.",
  },
  {
    icon: ClipboardCheck,
    title: "Engagement envers les médecins prescripteurs",
    text: "Retour d'information régulier au médecin traitant, collaboration permanente avec les professionnels de santé référents. La continuité des soins est un engagement.",
  },
];

const equipements = [
  {
    icon: Droplets,
    title: "Générateurs dernière génération",
    text: "Traçabilité des paramètres, contrôle continu de la qualité de la séance.",
  },
  {
    icon: Sparkles,
    title: "Eau de dialyse ultra-pure",
    text: "Traitement de l'eau conforme aux standards internationaux, contrôles réguliers.",
  },
  {
    icon: Activity,
    title: "Lits 3 positions",
    text: "Positionnement adapté pendant les 4 heures de séance.",
  },
  {
    icon: Shield,
    title: "Protocoles qualité",
    text: "Hygiène stricte, équipements certifiés, médecin présent en permanence.",
  },
];

export default function LaCliniquePage() {
  return (
    <>
      <PhotoHero
        eyebrow="La clinique"
        title="Un centre dédié à la dialyse, pensé pour vous"
        subtitle={`${site.stats.lits} lits, une équipe pluridisciplinaire, un plateau technique récent. À ${site.city}, ${site.country}.`}
        photoIcon={Building2}
        photoSrc="/images/clinique-facade.webp"
        photoAlt="Façade extérieure de la Clinique ESSAADA, bâtiment de deux étages avec rampe d'accès, à Sidi Bel Abbès"
        photoLabel="Façade & accueil"
        photoTag="Sidi Bel Abbès"
      />
      <div className="container-custom py-5">
        <Breadcrumb items={[{ name: "Accueil", url: "/" }, { name: "Le centre", url: "/la-clinique" }]} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Le centre", url: "/la-clinique" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <SectionHeader eyebrow="Notre mission" title="Soigner, rassurer, accompagner" />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                La Clinique ESSAADA est un centre d'hémodialyse privé à {site.city}.
                Elle accueille patients résidents et patients de passage avec la
                même exigence : une prise en charge médicale rigoureuse dans un
                environnement serein.
              </p>
              <p>
                Nos équipes combinent compétences néphrologiques, savoir-faire
                infirmier et accompagnement des patients. Chaque personne bénéficie
                d'un suivi personnalisé&nbsp;: éducation thérapeutique (apprendre à
                vivre avec la maladie), conseils diététiques, soutien psychologique,
                accompagnement des proches.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { k: "Capacité d'accueil", v: `${site.stats.lits} lits` },
              { k: "Créneaux par jour", v: "3" },
              { k: "Équipements", v: "Neufs" },
              { k: "Conventionnements", v: site.legal.conventions.join(" · ") },
            ].map((row) => (
              <div
                key={row.k}
                className="flex justify-between gap-4 bg-sand-50 rounded-xl px-5 py-4"
              >
                <span className="text-neutral-600">{row.k}</span>
                <span className="font-display font-semibold text-primary-700">
                  {row.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Équipements"
            title="Un plateau technique pensé pour la qualité de soin"
            subtitle="Traitement d'eau par osmose double passage, générateurs récents, dialyseurs à usage unique strict."
          />
          <ul className="grid md:grid-cols-2 gap-5">
            {equipements.map((e) => (
              <li key={e.title}>
                <Card>
                  <CardIcon>
                    <e.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                    {e.title}
                  </h3>
                  <p className="text-neutral-700">{e.text}</p>
                </Card>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link
              href="/la-clinique/equipement-hygiene"
              className="inline-flex items-center gap-2 bg-white border-2 border-primary-600 text-primary-700 hover:bg-primary-50 px-6 py-3.5 rounded-full font-semibold min-h-[52px] transition-colors"
            >
              Voir le détail équipement & hygiène
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="En images"
            title="Le centre, en quelques vues"
            subtitle="Quelques aperçus du centre. Reportage complet sur place à venir."
          />
          <PhotoGrid
            columns={2}
            items={[
              {
                src: "/images/salle-dialyse.webp",
                alt: "Salle d'hémodialyse de la Clinique ESSAADA, postes alignés équipés de générateurs et lits inclinables",
                icon: Armchair,
                label: "Salle d'hémodialyse",
                aspectRatio: "4/5",
                caption: "Vue large des postes de dialyse, lits 3 positions et générateurs.",
                tag: "Vue intérieure",
              },
              {
                src: "/images/clinique-reception.webp",
                alt: "Hall d'accueil de la Clinique ESSAADA avec comptoir de réception, escaliers en marbre et lustre",
                icon: Building2,
                label: "Accueil & réception",
                aspectRatio: "4/5",
                caption: "Espace d'accueil, circuit d'admission, signalétique.",
                tag: "Entrée",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-5 gap-10 md:gap-14 items-start">
          <div className="md:col-span-2">
            <div className="sticky top-24">
              <Eyebrow>Mot d'accueil</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-4">
                Un établissement de proximité
              </h2>
              <p className="lead">
                Créée pour accueillir les patients atteints d'insuffisance rénale
                à tous les stades de la maladie, la Clinique ESSAADA place
                l'écoute et la rigueur au cœur de chaque séance.
              </p>
            </div>
          </div>
          <Card className="md:col-span-3 bg-sand-50 border-sand-200">
            <Quote className="w-8 h-8 text-primary-600 mb-4" aria-hidden="true" />
            <div className="space-y-4 text-neutral-800 text-lg leading-relaxed italic">
              <p>
                Nous vous souhaitons la bienvenue et vous remercions de la
                confiance que vous nous accordez.
              </p>
              <p>
                Notre équipe médicale et l'ensemble du personnel mettent tout en
                œuvre pour vous apporter les meilleurs soins et rendre chacune
                de vos venues aussi confortable que possible.
              </p>
              <p>
                Sur ce site, vous trouverez les renseignements qui vous
                permettront de vous familiariser avec la vie de la clinique. Et
                si vous avez la moindre question, un avis à partager, un
                conseil à demander — n'hésitez pas. Vos suggestions nous aident
                à mieux vous accompagner.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-sand-300/70">
              <div className="font-display font-semibold text-neutral-900">
                La Direction et les équipes de la Clinique ESSAADA
              </div>
              <a
                href={site.contact.emailHref}
                className="mt-2 inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-medium"
              >
                {site.contact.email}
              </a>
            </div>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <SectionHeader
            tone="light"
            eyebrow="Nos engagements"
            title="Quatre promesses, tenues à chaque séance"
            subtitle="Ce ne sont pas des slogans — ce sont les quatre axes sur lesquels nous sommes évalués et sur lesquels nous nous engageons."
          />
          <ul className="grid md:grid-cols-2 gap-5">
            {engagements.map((e) => (
              <li key={e.title}>
                <div className="bg-primary-600/40 border border-primary-400/30 rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/15 grid place-items-center mb-4 shrink-0">
                    <e.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">
                    {e.title}
                  </h3>
                  <p className="text-primary-100 leading-relaxed">{e.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="visite-decouverte" className="section-padding scroll-mt-24">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Sans engagement"
              title="Venez visiter le centre avant votre première séance"
            />
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                Avant d'engager votre parcours chez nous, nous vous invitons —
                vous et un proche — à découvrir le centre. Rencontre avec un
                néphrologue, visite de la salle de dialyse, explication du
                déroulé d'une séance, questions libres.
              </p>
              <p>
                <strong className="text-neutral-900">Sans engagement, sans frais.</strong> Une
                trentaine de minutes qui changent beaucoup — surtout si c'est
                votre proche qui s'inquiète.
              </p>
            </div>
          </div>
          <Card className="bg-white">
            <CardIcon>
              <Eye className="w-6 h-6" aria-hidden="true" />
            </CardIcon>
            <h3 className="font-display text-xl font-semibold text-neutral-900 mb-3">
              Organiser votre visite
            </h3>
            <p className="text-neutral-700 mb-5">
              Appelez-nous ou envoyez un message WhatsApp — nous vous proposons
              un créneau sous 48h ouvrées.
            </p>
            <div className="flex flex-col lg:flex-row gap-3">
              <Link
                href="/rendez-vous"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-semibold min-h-[48px] transition-colors"
              >
                Demander une visite
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={waUrl("Bonjour, je souhaite visiter la Clinique ESSAADA.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb558] text-white px-5 py-3 rounded-full font-semibold min-h-[48px] transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
