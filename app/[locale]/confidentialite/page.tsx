import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de la Clinique ESSAADA, conforme à la loi 18-07 relative à la protection des données personnelles.",
  alternates: { canonical: `${site.url}/confidentialite` },
};

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero eyebrow="Informations" title="Politique de confidentialité" />
      <div className="container-custom py-5">
        <Breadcrumb
          items={[{ name: "Accueil", url: "/" }, { name: "Confidentialité", url: "/confidentialite" }]}
        />
      </div>
      <section className="section-padding">
        <div className="container-narrow space-y-8 text-neutral-700">
          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              Données collectées
            </h2>
            <p>
              Le formulaire de demande de rendez-vous collecte uniquement les
              informations nécessaires pour vous recontacter :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nom</li>
              <li>Numéro de téléphone</li>
              <li>Motif de la demande (facultatif)</li>
              <li>Créneau souhaité (facultatif)</li>
              <li>Message libre (facultatif)</li>
            </ul>
            <p className="mt-2">
              Aucune donnée médicale sensible n'est collectée via ce site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              Finalité du traitement
            </h2>
            <p>
              Les données sont utilisées exclusivement pour vous recontacter au
              sujet de votre demande de rendez-vous. Elles ne sont ni vendues,
              ni louées, ni transmises à des tiers à des fins commerciales.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              Base légale
            </h2>
            <p>
              Votre consentement explicite, recueilli via la case à cocher du
              formulaire, au sens de la loi n° 18-07 du 10 juin 2018 relative à
              la protection des personnes physiques dans le traitement des
              données à caractère personnel.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              Durée de conservation
            </h2>
            <p>
              Les demandes reçues par email sont conservées pour une durée
              maximale de 6 mois après la dernière interaction avec vous, puis
              supprimées.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              Vos droits
            </h2>
            <p>
              Conformément à la loi 18-07, vous disposez d'un droit d'accès, de
              rectification et de suppression des données qui vous concernent.
              Pour exercer ces droits, contactez-nous à&nbsp;:
              <br />
              <a href={site.contact.emailHref} className="text-primary-700 underline">
                {site.contact.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-900 mb-2">
              Cookies et traceurs
            </h2>
            <p>
              Ce site ne dépose aucun cookie de suivi publicitaire. Des
              statistiques de consultation agrégées et anonymes peuvent être
              collectées pour améliorer le service. Aucune donnée identifiante
              n'est transmise à des tiers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
