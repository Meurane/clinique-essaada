import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de la Clinique ESSAADA.",
  alternates: { canonical: `${site.url}/mentions-legales` },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero eyebrow="Informations" title="Mentions légales" />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[{ name: "Accueil", url: "/" }, { name: "Mentions légales", url: "/mentions-legales" }]}
        />
      </div>
      <section className="section-padding">
        <div className="container-narrow prose prose-neutral max-w-none space-y-8 text-neutral-700">
          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">Éditeur du site</h2>
            <p>
              Site édité et exploité par LumAI Consulting (
              <a
                href="https://lumai-consulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline"
              >
                lumai-consulting.com
              </a>
              ) pour le compte de la {site.name}.
            </p>
            <p>
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}, {site.address.country}
              <br />
              Téléphone&nbsp;: {site.contact.phone}
              <br />
              Email&nbsp;:{" "}
              <a href={site.contact.emailHref} className="text-primary-700 underline">
                {site.contact.email}
              </a>
            </p>
            <p>Responsable éditorial des contenus&nbsp;: {site.name}.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">Agrément</h2>
            <p>Délivré par le Ministère de la Santé&nbsp;: {site.legal.agrement}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">Hébergeur</h2>
            <p>
              Hébergeur&nbsp;: LumAI Consulting,{" "}
              <a
                href="https://lumai-consulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline"
              >
                lumai-consulting.com
              </a>
              <br />
              Site hébergé sur un serveur dédié.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus de ce site (textes, images, logos, structure)
              est la propriété exclusive de {site.name}, sauf mention contraire.
              Toute reproduction, représentation ou diffusion, totale ou partielle,
              sans autorisation écrite préalable, est interdite.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">Responsabilité</h2>
            <p>
              Les informations publiées sur ce site sont fournies à titre
              informatif et ne constituent en aucun cas un avis médical. Elles
              ne remplacent pas une consultation avec un professionnel de santé.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
