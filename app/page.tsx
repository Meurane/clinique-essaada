import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Droplets,
  Shield,
  Users,
  Clock,
  MessageCircle,
} from "lucide-react";
import { HomeHero } from "@/components/sections/HomeHero";
import { StatsRow } from "@/components/sections/StatsRow";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardIcon } from "@/components/ui/Card";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsRow />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Nos services"
            title="Une prise en charge complète de l'insuffisance rénale"
            subtitle="De la consultation à la séance de dialyse, notre équipe vous accompagne avec rigueur et attention."
          />
          <ServicesGrid />
        </div>
      </section>

      <section className="section-padding bg-sand-50">
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
                  text: "Néphrologues, infirmiers spécialisés, diététicien·ne, personnel d'accueil. Formés à la prise en charge des patients dialysés.",
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
              Patients de passage
            </h3>
            <p className="text-neutral-700 mb-5 leading-relaxed">
              Vous venez en vacances ou en voyage dans la région de Sidi Bel Abbès&nbsp;?
              Nous accueillons les patients dialysés de passage. Contactez-nous
              au moins 1 mois à l'avance avec votre dossier médical à jour.
            </p>
            <Link
              href="/services/premiere-seance"
              className="inline-flex items-center gap-1.5 font-semibold text-primary-700 hover:gap-2.5 transition-all"
            >
              Voir les documents requis
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </Card>
        </div>
      </section>

      <section className="section-padding">
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

      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
            Une question, un rendez-vous ?
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8">
            Notre équipe est joignable par téléphone et WhatsApp, du samedi au jeudi.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 hover:bg-primary-50 px-6 py-4 rounded-full font-semibold min-h-[56px]"
            >
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <a
              href={site.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb558] text-white px-6 py-4 rounded-full font-semibold min-h-[56px]"
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
