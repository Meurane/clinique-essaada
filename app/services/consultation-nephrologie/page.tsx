import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consultation néphrologie",
  description:
    "Consultation avec un néphrologue à Sidi Bel Abbès : diagnostic, suivi de l'insuffisance rénale, préparation à la dialyse, conseils nutritionnels.",
  alternates: { canonical: `${site.url}/services/consultation-nephrologie` },
};

const bullets = [
  "Diagnostic précoce des maladies rénales",
  "Suivi de l'insuffisance rénale chronique",
  "Préparation à la dialyse le moment venu",
  "Conseils nutritionnels adaptés",
  "Coordination avec votre médecin traitant",
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
    </>
  );
}
