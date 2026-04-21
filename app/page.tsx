import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Heart,
  Droplets,
  Shield,
  Users,
  Clock,
  MessageCircle,
  Compass,
  ClipboardCheck,
  Plane,
} from "lucide-react";
import { HomeHero } from "@/components/sections/HomeHero";
import { StatsRow } from "@/components/sections/StatsRow";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card, CardIcon } from "@/components/ui/Card";
import { site, waUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hémodialyse à Sidi Bel Abbès — Clinique ESSAADA",
  description:
    "Centre d'hémodialyse à Sidi Bel Abbès : 37 lits, équipements récents, équipe néphrologue présente. Conventionné CNAS et CASNOS — tiers-payant intégral. Patients résidents et de passage (diaspora France / CPAM).",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hémodialyse à Sidi Bel Abbès — Clinique ESSAADA",
    description:
      "37 lits, conventionné CNAS/CASNOS, patients de passage accueillis. L'hémodialyse pensée pour continuer à vivre.",
    url: "/",
    type: "website",
  },
};

const journeyStages = [
  {
    href: "/services/consultation-nephrologie",
    icon: Compass,
    title: "Je viens d'apprendre que j'ai une maladie rénale",
    description:
      "Consultation néphrologie, diagnostic, suivi. Vous êtes au début — on vous explique chaque étape.",
    cta: "Consulter un néphrologue",
  },
  {
    href: "/services/premiere-seance",
    icon: ClipboardCheck,
    title: "Je me prépare à la dialyse",
    description:
      "Votre première séance, étape par étape. Documents à apporter, déroulé, ce qu'il faut savoir.",
    cta: "Préparer ma 1ʳᵉ séance",
  },
  {
    href: "/patients-de-passage",
    icon: Plane,
    title: "Je dialyse déjà et je cherche un centre",
    description:
      "Transfert, vacances, séjour en Algérie. Confirmation de votre créneau sous 72h ouvrées.",
    cta: "Patients de passage",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsRow />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Par où commencer"
            title="À quelle étape de votre parcours êtes-vous ?"
            subtitle="Chaque patient arrive à un moment différent. Dites-nous le vôtre — nous adaptons."
          />
          <ul className="grid md:grid-cols-3 gap-5">
            {journeyStages.map((s, i) => (
              <li key={s.href}>
                <Link href={s.href} aria-label={s.title} className="block group h-full">
                  <Card className="h-full flex flex-col transition-transform duration-200 group-hover:-translate-y-0.5">
                    <div className="flex items-center gap-3 mb-5" aria-hidden="true">
                      <span className="font-display text-sm font-semibold text-sand-700 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-sand-300/70" />
                    </div>
                    <CardIcon>
                      <s.icon className="w-6 h-6" aria-hidden="true" />
                    </CardIcon>
                    <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-neutral-700 text-base leading-relaxed flex-1">
                      {s.description}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1.5 font-semibold text-primary-700 group-hover:gap-2.5 transition-all">
                      {s.cta}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Nos services"
            title="Une prise en charge complète de l'insuffisance rénale"
            subtitle="De la consultation à la séance de dialyse, notre équipe vous accompagne avec rigueur et attention."
          />
          <ServicesGrid />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="Pourquoi ESSAADA"
              title="Confiance, rigueur médicale, chaleur humaine"
              subtitle="Une clinique pensée pour les patients dialysés, leurs proches et les médecins prescripteurs."
            />
            <ul className="space-y-4">
              {[
                {
                  icon: Heart,
                  title: "Accompagnement personnalisé",
                  text: "Chaque patient bénéficie d'un suivi dédié : éducation thérapeutique, conseils diététiques, soutien psychologique.",
                },
                {
                  icon: Shield,
                  title: "Qualité & sécurité",
                  text: "Eau de dialyse ultra-pure, protocoles d'hygiène stricts, équipements contrôlés, médecin présent en permanence.",
                },
                {
                  icon: Users,
                  title: "Équipe pluridisciplinaire",
                  text: "Néphrologues, infirmiers spécialisés, personnel d'accueil. Formés à la prise en charge des patients dialysés.",
                },
              ].map((b) => (
                <li key={b.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary-600 text-white grid place-items-center shrink-0">
                    <b.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-neutral-900 mb-1">
                      {b.title}
                    </h3>
                    <p className="text-neutral-700">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <Card className="bg-white">
            <CardIcon>
              <Droplets className="w-6 h-6" aria-hidden="true" />
            </CardIcon>
            <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-3">
              Diaspora & patients de passage
            </h3>
            <p className="text-neutral-700 mb-5 leading-relaxed">
              Vous rentrez en vacances à Sidi Bel Abbès ou dans la région de
              l'Ouest algérien ? Nous accueillons les patients dialysés de
              passage. Confirmation de votre créneau sous 72h ouvrées.
            </p>
            <Link
              href="/patients-de-passage"
              className="inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:gap-2.5 transition-all"
            >
              Organiser mon séjour dialyse
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Card>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Horaires"
            title="Trois créneaux par jour, du samedi au jeudi"
            subtitle={site.hours.note}
          />
          <ul className="grid md:grid-cols-3 gap-5">
            {site.hours.sessions.map((s) => (
              <li key={s.label}>
                <Card>
                  <CardIcon>
                    <Clock className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <div className="font-display font-semibold text-lg text-neutral-900">
                    {s.label}
                  </div>
                  <div className="text-primary-700 font-medium text-xl mt-1">
                    {s.range}
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Paroles de patients"
            title="Ce que nous disent celles et ceux que nous accompagnons"
            subtitle="Résidents et patients de passage — nous recueillons leurs retours dans le respect du secret médical et avec leur consentement."
            align="center"
          />
          <TestimonialCarousel />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <Eyebrow className="justify-center">Rendez-vous</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5 text-neutral-900">
            Une question, un rendez-vous ?
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 mb-8">
            Notre équipe est joignable par WhatsApp et téléphone, du samedi au jeudi.
          </p>
          <div className="flex flex-col-reverse sm:flex-row gap-3 justify-center">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
            >
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <a
              href={waUrl("Bonjour, j'aimerais prendre rendez-vous à la Clinique ESSAADA.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb558] text-white px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
