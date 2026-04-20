import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Card } from "@/components/ui/Card";
import {
  glossaire,
  glossaireByLetter,
  glossaireLetters,
  findTerm,
} from "@/content/glossaire";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Glossaire — Comprendre les termes de la dialyse",
  description:
    "29 termes clés de la néphrologie et de la dialyse expliqués simplement : accès vasculaire, créatinine, DFG, fistule, hémodialyse, greffe, urée. Par la Clinique ESSAADA.",
  alternates: { canonical: `${site.url}/glossaire` },
  openGraph: {
    title: "Glossaire néphrologie — Clinique ESSAADA",
    description:
      "Le vocabulaire de la dialyse et de l'insuffisance rénale, défini simplement. 29 entrées, des plus techniques aux plus familières.",
  },
};

export default function GlossairePage() {
  const crumbs = [
    { name: "Accueil", url: "/" },
    { name: "Glossaire", url: "/glossaire" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Comprendre"
        title="Glossaire — les mots de la dialyse, expliqués simplement"
        subtitle="29 termes que vous rencontrerez en consultation, sur votre carnet de dialyse, ou dans les échanges avec l'équipe. Pas de jargon : des définitions accessibles, vérifiables, sans alarmisme."
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

      <section className="section-padding">
        <div className="container-custom">
          <nav
            aria-label="Index alphabétique"
            className="mb-10 flex flex-wrap gap-2 items-center p-4 rounded-2xl bg-sand-50 border border-sand-200"
          >
            <span className="text-sm font-semibold text-neutral-700 mr-2">
              Aller à :
            </span>
            {glossaireLetters.map((letter) => (
              <a
                key={letter}
                href={`#lettre-${letter}`}
                className="w-9 h-9 grid place-items-center rounded-lg bg-white border border-neutral-200 text-primary-700 font-display font-semibold hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-colors"
                aria-label={`Termes commençant par ${letter}`}
              >
                {letter}
              </a>
            ))}
            <span className="ml-auto text-sm text-neutral-600 hidden sm:inline">
              {glossaire.length} entrées
            </span>
          </nav>

          <div className="space-y-12">
            {glossaireLetters.map((letter) => (
              <section
                key={letter}
                id={`lettre-${letter}`}
                className="scroll-mt-24"
                aria-labelledby={`heading-${letter}`}
              >
                <h2
                  id={`heading-${letter}`}
                  className="font-display text-5xl md:text-6xl font-bold text-sand-500 mb-6"
                  aria-hidden="true"
                >
                  {letter}
                </h2>
                <ul className="grid md:grid-cols-2 gap-5">
                  {glossaireByLetter[letter].map((entry) => (
                    <li key={entry.slug} id={entry.slug} className="scroll-mt-24">
                      <Card className="h-full flex flex-col">
                        <div className="flex items-start gap-3 mb-3">
                          <BookOpen
                            className="w-5 h-5 text-primary-700 shrink-0 mt-1"
                            aria-hidden="true"
                          />
                          <h3 className="font-display text-xl font-semibold text-neutral-900 leading-tight">
                            {entry.term}
                          </h3>
                        </div>
                        <p className="text-neutral-700 leading-relaxed flex-1">
                          {entry.definition}
                        </p>
                        {entry.relatedTerms && entry.relatedTerms.length > 0 && (
                          <div className="mt-5 pt-5 border-t border-neutral-150">
                            <div className="text-xs font-semibold tracking-wide text-neutral-500 mb-2">
                              Termes liés
                            </div>
                            <ul className="flex flex-wrap gap-2">
                              {entry.relatedTerms.map((slug) => {
                                const rel = findTerm(slug);
                                if (!rel) return null;
                                return (
                                  <li key={slug}>
                                    <a
                                      href={`#${slug}`}
                                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sand-50 text-primary-700 text-sm hover:bg-sand-100 transition-colors"
                                    >
                                      {rel.term}
                                      <ArrowUpRight
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                      />
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                      </Card>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-16 p-6 rounded-2xl bg-primary-700 text-white max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl font-semibold mb-3">
              Un terme vous intrigue encore ?
            </h2>
            <p className="text-primary-100 mb-5 leading-relaxed">
              Ce glossaire ne remplace pas l'échange avec votre néphrologue. En
              consultation, posez toutes vos questions — aucune n'est déplacée,
              aucune n'est trop simple.
            </p>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 px-5 py-3 rounded-full font-semibold min-h-[48px] transition-colors"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
