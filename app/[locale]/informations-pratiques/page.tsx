import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import { PhotoHero } from "@/components/ui/PhotoHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardIcon } from "@/components/ui/Card";
import { infosBlocks, viequotidienneBlocks } from "@/content/infos-pratiques";
import { ConversionFooterCTA } from "@/components/sections/ConversionFooterCTA";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Vivre avec la dialyse · Horaires, accès, repas",
  description:
    "Horaires, accès, café, accessibilité PMR, sécurité. Tout ce qu'il faut savoir avant de venir à la Clinique ESSAADA.",
  alternates: { canonical: `${site.url}/informations-pratiques` },
};

export default function InfosPratiquesPage() {
  return (
    <>
      <PhotoHero
        eyebrow="Vivre avec la dialyse"
        title="Tout ce qu'il faut savoir avant de venir"
        subtitle="Horaires, accès, services sur place : nous avons pensé aux détails qui comptent."
        photoIcon={BookOpenCheck}
        photoSrc="/images/clinique-hall-orientation.webp"
        photoAlt="Hall principal de la Clinique d'Hémodialyse ESSAADA à Sidi Bel Abbès, escalier en marbre et panneau d'orientation des services"
        photoLabel="Vie pratique"
        photoTag="Accès & services"
      />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[{ name: "Accueil", url: "/" }, { name: "Vivre avec la dialyse", url: "/informations-pratiques" }]}
        />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Vivre avec la dialyse", url: "/informations-pratiques" },
            ]),
          ),
        }}
      />
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="À la clinique"
            title="Votre confort, nos priorités"
            subtitle="Horaires, accès, accompagnants, sécurité — les détails concrets de votre venue."
          />
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {infosBlocks.map((b) => (
              <li key={b.title}>
                <Card className="h-full">
                  <CardIcon>
                    <b.icon className="w-6 h-6" aria-hidden="true" />
                  </CardIcon>
                  <h3 className="font-display text-lg font-semibold text-neutral-900 mb-2">
                    {b.title}
                  </h3>
                  <ul className="space-y-1.5 text-neutral-700 text-base">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2.5 shrink-0" aria-hidden="true" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Vie quotidienne"
            title="La dialyse, et la vie qui continue"
            subtitle="Sport, voyages, travail, intimité, parentalité, alimentation — la maladie rénale bouscule, mais elle n'efface pas. Voici ce qu'on peut en dire, sans tabou."
          />
          <ul className="space-y-5">
            {viequotidienneBlocks.map((b) => (
              <li key={b.title}>
                <Card className="bg-white">
                  <div className="grid md:grid-cols-[auto_1fr] gap-5 md:gap-8 items-start">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary-600 text-white grid place-items-center shrink-0">
                      <b.icon className="w-7 h-7 md:w-8 md:h-8" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-neutral-900 mb-2">
                        {b.title}
                      </h3>
                      <p className="text-primary-700 font-medium text-lg mb-4 leading-snug">
                        {b.lead}
                      </p>
                      <div className="space-y-3 text-neutral-700 leading-relaxed">
                        {b.body.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                      {b.tip && (
                        <div className="mt-4 flex items-start gap-2.5 p-3 rounded-xl bg-sand-50 border border-sand-200">
                          <span
                            className="inline-flex w-5 h-5 rounded-full bg-primary-600 text-white text-xs font-bold items-center justify-center shrink-0 mt-0.5"
                            aria-hidden="true"
                          >
                            !
                          </span>
                          <p className="text-neutral-800 text-sm md:text-base italic">
                            {b.tip}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link
              href="/comprendre-l-insuffisance-renale"
              className="inline-flex items-center gap-2 bg-white border-2 border-primary-600 text-primary-700 hover:bg-primary-50 px-6 py-3.5 rounded-full font-semibold min-h-[52px] transition-colors"
            >
              Comprendre l'insuffisance rénale
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ConversionFooterCTA
        variant="white"
        eyebrow="Préparer votre venue"
        title="Des questions avant votre première visite ?"
        subtitle="Horaires, accompagnants, documents à prévoir, repas — notre équipe vous explique tout à l'avance."
        waMessage="Bonjour, j'ai une question pratique pour préparer ma venue à la Clinique ESSAADA."
      />
    </>
  );
}
