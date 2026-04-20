import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faq } from "@/content/faq";
import { site } from "@/lib/site";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Toutes les réponses à vos questions sur l'hémodialyse, les séances, les prises en charge et les modalités pratiques à la Clinique ESSAADA.",
  alternates: { canonical: `${site.url}/faq` },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Vos questions, nos réponses"
        subtitle="Les informations essentielles pour comprendre l'hémodialyse et votre parcours."
      />
      <div className="container-custom py-5">
        <Breadcrumb items={[{ name: "Accueil", url: "/" }, { name: "FAQ", url: "/faq" }]} />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqPageSchema(faq.map((f) => ({ question: f.question, answer: f.answer }))),
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "FAQ", url: "/faq" },
            ]),
          ),
        }}
      />

      <section className="section-padding">
        <div className="container-narrow">
          <FaqAccordion items={faq} />
        </div>
      </section>
    </>
  );
}
