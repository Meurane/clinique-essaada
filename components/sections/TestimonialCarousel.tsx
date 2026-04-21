import { Quote, MessageSquareHeart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { testimonials, type Testimonial } from "@/content/testimonials";

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <Card className="h-full flex flex-col">
      <Quote className="w-7 h-7 text-primary-600 mb-4" aria-hidden="true" />
      <blockquote className="flex-1 text-neutral-800 text-lg leading-relaxed italic">
        « {t.citation} »
      </blockquote>
      <footer className="mt-5 pt-5 border-t border-neutral-150">
        <div className="font-display font-semibold text-neutral-900">{t.prenom}</div>
        {(t.ville || t.dureeAnnees) && (
          <div className="text-sm text-neutral-600 mt-0.5">
            {t.ville && <span>{t.ville}</span>}
            {t.ville && t.dureeAnnees ? " · " : ""}
            {t.dureeAnnees && (
              <span>
                {t.dureeAnnees} {t.dureeAnnees > 1 ? "ans" : "an"} de prise en charge
              </span>
            )}
          </div>
        )}
      </footer>
    </Card>
  );
}

function EmptyState() {
  return (
    <div className="max-w-2xl mx-auto text-center p-8 md:p-10 rounded-2xl bg-sand-50 border border-sand-200">
      <MessageSquareHeart
        className="w-10 h-10 text-primary-700 mx-auto mb-4"
        aria-hidden="true"
      />
      <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
        Témoignages en cours de collecte
      </h3>
      <p className="text-neutral-700 leading-relaxed">
        Nous recueillons les retours de nos patients — résidents comme de passage —
        dans le respect du secret médical et avec leur consentement écrit. Les
        premières voix seront publiées ici prochainement.
      </p>
    </div>
  );
}

export function TestimonialCarousel() {
  if (testimonials.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      aria-label="Témoignages de patients"
    >
      {testimonials.map((t, i) => (
        <li key={`${t.prenom}-${i}`}>
          <TestimonialCard t={t} />
        </li>
      ))}
    </ul>
  );
}
