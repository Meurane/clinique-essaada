import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap, Users, BookOpen } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PullQuote } from "@/components/ui/PullQuote";
import { Card, CardIcon } from "@/components/ui/Card";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Consultation néphrologie — diagnostic, prévention, suivi",
  description:
    "Consultation avec un néphrologue à Sidi Bel Abbès : diagnostic précoce, ralentissement de la maladie rénale, éducation thérapeutique. 10% des insuffisances rénales sont évitables, 30% peuvent être retardées.",
  alternates: { canonical: `${site.url}/services/consultation-nephrologie` },
};

const bullets = [
  "Diagnostic précoce des maladies rénales",
  "Suivi de l'insuffisance rénale chronique",
  "Préparation à la dialyse le moment venu",
  "Conseils nutritionnels adaptés",
  "Coordination avec votre médecin traitant",
];

const etpPiliers = [
  {
    icon: BookOpen,
    title: "Sensibilisation",
    text: "Comprendre sa maladie, ses traitements, les signaux à surveiller.",
  },
  {
    icon: Users,
    title: "Conseils adaptés",
    text: "Hygiène de vie, alimentation, activité physique — calés sur votre quotidien.",
  },
  {
    icon: GraduationCap,
    title: "Suivi régulier",
    text: "Autonomie progressive pour mieux vivre avec la maladie, sans la subir.",
  },
];

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Service · Consultation"
        title="Consultation néphrologie"
        subtitle="Pour le diagnostic, le suivi et la prévention des maladies rénales à tous les stades."
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[
            { name: "Accueil", url: "/" },
            { name: "Services", url: "/services" },
            { name: "Consultation néphrologie", url: "/services/consultation-nephrologie" },
          ]}
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Services", url: "/services" },
              { name: "Consultation néphrologie", url: "/services/consultation-nephrologie" },
            ]),
          ),
        }}
      />
      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-4 text-neutral-700 leading-relaxed">
            <p>
              Une consultation avec un néphrologue est recommandée lorsqu'un
              médecin traitant identifie des anomalies rénales, ou en cas de
              pathologie à risque (diabète, hypertension, antécédents
              familiaux).
            </p>
            <p>
              Le néphrologue vous écoute, examine votre dossier, prescrit
              éventuellement des bilans complémentaires, puis construit avec
              vous un plan de suivi clair. L'objectif : ralentir l'évolution
              de la maladie, anticiper l'éventuel recours à la dialyse, et
              préserver votre qualité de vie.
            </p>
          </div>
          <div className="md:col-span-2 bg-sand-50 rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold text-neutral-900 mb-4">
              Ce que nous prenons en charge
            </h3>
            <ul className="space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-accent-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-neutral-800">{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/rendez-vous"
              className="mt-6 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-full font-semibold min-h-[48px]"
            >
              Prendre rendez-vous
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-700 text-white">
        <div className="container-custom">
          <PullQuote
            eyebrow="Le diagnostic précoce change la trajectoire"
            quote={
              <>
                « 10 % des insuffisances rénales peuvent être évitées,
                <br className="hidden md:inline" />
                et 30 % peuvent être retardées de plusieurs années. »
              </>
            }
            caption="C'est pourquoi nous développons la consultation néphrologique au plus près des patients : pour porter un diagnostic précoce, ralentir la progression de la maladie, et vous maintenir en bonne santé le plus longtemps possible avant qu'un traitement de suppléance ne devienne nécessaire."
          />
          <div className="mt-8 flex justify-center">
            <Link
              href="/comprendre-l-insuffisance-renale"
              className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 px-6 py-3.5 rounded-full font-semibold min-h-[52px] transition-colors"
            >
              Comprendre l'insuffisance rénale
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Éducation thérapeutique (ETP)"
            title="Apprendre à vivre avec la maladie, pas contre elle"
            subtitle="En complément des traitements, l'éducation thérapeutique renforce votre autonomie : vous devenez acteur de votre suivi, pas spectateur."
          />
          <ul className="grid md:grid-cols-3 gap-5">
            {etpPiliers.map((e) => (
              <li key={e.title}>
                <Card className="h-full">
                  <CardIcon>
                    <e.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {e.title}
                  </h3>
                  <p className="text-neutral-700">{e.text}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
