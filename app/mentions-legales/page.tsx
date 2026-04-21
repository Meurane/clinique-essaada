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
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}, {site.address.country}
              <br />
              Téléphone : {site.contact.phone}
              <br />
              Email : {site.contact.email}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">Identifiants légaux</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Agrément Ministère de la Santé : {site.legal.agrement}</li>
              <li>Numéro RC : {site.legal.rc}</li>
              <li>NIF : {site.legal.nif}</li>
              <li>Directeur de la publication : {site.legal.directeurPublication}</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">Hébergeur</h2>
            <p>
              Vercel Inc.
              <br />
              340 S Lemon Ave #4133, Walnut, CA 91789, United States
              <br />
              https://vercel.com
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
