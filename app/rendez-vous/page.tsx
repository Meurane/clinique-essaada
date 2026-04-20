import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { RdvForm } from "@/components/sections/RdvForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prendre rendez-vous",
  description:
    "Demandez un rendez-vous à la Clinique ESSAADA : consultation néphrologie, première dialyse, patient de passage. Formulaire conforme loi 18-07.",
  alternates: { canonical: `${site.url}/rendez-vous` },
};

export default async function RdvPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>;
}) {
  const { success } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Rendez-vous"
        title="Demander un rendez-vous"
        subtitle="Remplissez ce court formulaire. Nous vous rappelons sous 24 h ouvrées pour confirmer votre créneau."
      />
      <div className="container-custom py-5">
        <Breadcrumb items={[{ name: "Accueil", url: "/" }, { name: "Rendez-vous", url: "/rendez-vous" }]} />
      </div>

      <section className="section-padding">
        <div className="container-narrow">
          {success ? (
            <div className="rounded-2xl bg-accent-50 border border-accent-600/40 p-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-accent-600 mx-auto mb-4" aria-hidden="true" />
              <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2">
                Demande bien reçue
              </h2>
              <p className="text-neutral-700">
                Merci. Notre équipe vous rappelle sous 24 h ouvrées. Pour toute
                urgence, contactez-nous directement par téléphone ou WhatsApp.
              </p>
            </div>
          ) : (
            <RdvForm />
          )}
        </div>
      </section>
    </>
  );
}
