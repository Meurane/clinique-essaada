import type { Metadata } from "next";
import { CheckCircle2, Clock, Shield, Handshake, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { RdvForm } from "@/components/sections/RdvForm";
import { site, waUrl } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Prendre rendez-vous dialyse — Sidi Bel Abbès",
  description:
    "Demandez un rendez-vous à la Clinique ESSAADA : consultation néphrologie, première dialyse, patient de passage. Formulaire conforme loi 18-07.",
  alternates: { canonical: `${site.url}/rendez-vous` },
};

const reassurance = [
  { icon: Clock, title: `Rappel ${site.rdv.rappelDelai}`, text: "Notre équipe vous recontacte rapidement." },
  { icon: Shield, title: "Données protégées", text: "Conforme loi 18-07. Aucun partage avec des tiers." },
  { icon: Handshake, title: "Sans engagement", text: "Demande d'information ou prise de contact simple." },
];

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
        subtitle={`Remplissez ce court formulaire. Nous vous rappelons ${site.rdv.rappelDelai} pour confirmer votre créneau.`}
      />
      <div className="container-custom py-5">
        <Breadcrumb items={[{ name: "Accueil", url: "/" }, { name: "Rendez-vous", url: "/rendez-vous" }]} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Rendez-vous", url: "/rendez-vous" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-narrow">
          {success ? (
            <div className="rounded-2xl bg-accent-50 border border-accent-600/40 p-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-accent-600 mx-auto mb-4" aria-hidden="true" />
              <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2">
                Demande bien reçue
              </h2>
              <p className="text-neutral-700 mb-6">
                Merci. Notre équipe vous rappelle {site.rdv.rappelDelai}. Pour toute
                urgence ou pour accélérer votre demande, contactez-nous directement.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={waUrl("Bonjour, je viens de soumettre une demande de rendez-vous sur le site et je souhaite accélérer son traitement.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb558] text-white px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  Accélérer sur WhatsApp
                </a>
                <a
                  href={site.contact.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Appeler maintenant
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <ul className="grid sm:grid-cols-3 gap-3">
                {reassurance.map((r) => (
                  <li
                    key={r.title}
                    className="p-4 rounded-xl bg-sand-50 border border-sand-100"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <r.icon className="w-5 h-5 text-primary-700 shrink-0" aria-hidden="true" />
                      <span className="font-display font-semibold text-neutral-900 text-base">
                        {r.title}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-700">{r.text}</p>
                  </li>
                ))}
              </ul>
              <RdvForm />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
