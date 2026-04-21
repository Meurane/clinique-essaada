import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { glossaire, findTerm } from "@/content/glossaire";
import { site } from "@/lib/site";
import { breadcrumbSchema, definedTermSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossaire.map((t) => ({ slug: t.slug }));
}

const questionTitles: Record<string, string> = {
  "acces-vasculaire": "Qu'est-ce qu'un accès vasculaire ?",
  ase: "Qu'est-ce qu'un ASE en dialyse ?",
  catheter: "Qu'est-ce qu'un cathéter de dialyse ?",
  "centre-hemodialyse": "Qu'est-ce qu'un centre d'hémodialyse ?",
  creatinine: "Qu'est-ce que la créatinine ?",
  diabete: "Qu'est-ce que le diabète ?",
  dialyse: "Qu'est-ce que la dialyse ?",
  "dialyse-a-domicile": "Qu'est-ce que la dialyse à domicile ?",
  "dialyse-peritoneale": "Qu'est-ce que la dialyse péritonéale ?",
  dialyseur: "Qu'est-ce qu'un dialyseur ?",
  dpa: "Qu'est-ce que la DPA ?",
  dpca: "Qu'est-ce que la DPCA ?",
  epo: "Qu'est-ce que l'EPO ?",
  erythropoietine: "Qu'est-ce que l'érythropoïétine ?",
  "fistule-arterio-veineuse": "Qu'est-ce qu'une fistule artério-veineuse ?",
  "greffe-de-rein": "Qu'est-ce que la greffe de rein ?",
  hemodialyse: "Qu'est-ce que l'hémodialyse ?",
  hemoglobine: "Qu'est-ce que l'hémoglobine ?",
  "insuffisance-renale-aigue": "Qu'est-ce que l'insuffisance rénale aiguë ?",
  "insuffisance-renale-chronique-terminale":
    "Qu'est-ce que l'insuffisance rénale terminale ?",
  "maladie-renale-chronique": "Qu'est-ce que la maladie rénale chronique ?",
  "medicaments-immunosuppresseurs":
    "Qu'est-ce qu'un médicament immunosuppresseur ?",
  "pression-arterielle": "Qu'est-ce que la pression artérielle ?",
  "solution-de-dialyse": "Qu'est-ce que la solution de dialyse ?",
  "temps-de-stase": "Qu'est-ce que le temps de stase ?",
  ultrafiltration: "Qu'est-ce que l'ultrafiltration ?",
  "unite-auto-dialyse": "Qu'est-ce qu'une unité d'auto-dialyse (UAD) ?",
  "unite-dialyse-medicalisee":
    "Qu'est-ce qu'une unité de dialyse médicalisée ?",
  uree: "Qu'est-ce que l'urée ?",
};

type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const term = findTerm(slug);
  if (!term) return { title: "Terme introuvable" };

  const rawDesc = term.definition.replace(/\s+/g, " ").trim();
  const description =
    rawDesc.length > 160 ? rawDesc.slice(0, 157).trimEnd() + "…" : rawDesc;

  const canonical = `${site.url}/glossaire/${term.slug}`;
  const title = questionTitles[term.slug] ?? `${term.term} — Définition`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: `${title} — Glossaire ESSAADA`,
      description,
    },
  };
}

export default async function GlossaireTermPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const term = findTerm(slug);
  if (!term) notFound();

  const relatedEntries = (term.relatedTerms ?? [])
    .map((s) => findTerm(s))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  const crumbs = [
    { name: "Accueil", url: "/" },
    { name: "Glossaire", url: "/glossaire" },
    { name: term.term, url: `/glossaire/${term.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Glossaire · Définition"
        title={term.term}
        subtitle="Définition claire, sans jargon, vérifiée par l'équipe médicale de la Clinique ESSAADA."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            definedTermSchema({
              name: term.term,
              description: term.definition,
              slug: term.slug,
            }),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-primary-600 text-white grid place-items-center shrink-0">
              <BookOpen className="w-6 h-6" aria-hidden="true" />
            </div>
            <p className="text-lg md:text-xl text-neutral-800 leading-relaxed">
              {term.definition}
            </p>
          </div>

          {relatedEntries.length > 0 && (
            <aside className="mt-12 pt-8 border-t border-neutral-150">
              <h2 className="font-display text-xl font-semibold text-neutral-900 mb-4">
                Termes liés
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {relatedEntries.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/glossaire/${r.slug}`}
                      className="flex items-start gap-3 p-4 rounded-xl border border-neutral-150 bg-white hover:border-primary-300 hover:bg-primary-50/30 transition-colors"
                    >
                      <BookOpen
                        className="w-5 h-5 text-primary-700 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="font-display font-semibold text-neutral-900">
                          {r.term}
                        </div>
                        <div className="text-sm text-neutral-600 line-clamp-2 mt-1">
                          {r.definition.slice(0, 110).trim()}…
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div className="mt-10 pt-6 border-t border-neutral-150">
            <Link
              href="/glossaire"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Retour au glossaire complet
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-50">
        <div className="container-narrow text-center">
          <SectionHeader
            eyebrow="Aller plus loin"
            title="Une question sur votre parcours&nbsp;?"
            subtitle="Notre équipe néphrologie répond à vos questions en consultation."
            align="center"
          />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/services/consultation-nephrologie"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
            >
              Voir la consultation néphrologie
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/rendez-vous"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
