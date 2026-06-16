import { useTranslations } from "next-intl";
import { Quote, MessageSquareHeart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { testimonials, type Testimonial } from "@/content/testimonials";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const t = useTranslations("home");
  return (
    <Card className="h-full flex flex-col">
      <Quote className="w-7 h-7 text-primary-600 mb-4" aria-hidden="true" />
      <blockquote className="flex-1 text-neutral-800 text-lg leading-relaxed italic">
        « {testimonial.citation} »
      </blockquote>
      <footer className="mt-5 pt-5 border-t border-neutral-150">
        <div className="font-display font-semibold text-neutral-900">
          {testimonial.prenom}
        </div>
        {(testimonial.ville || testimonial.dureeAnnees) && (
          <div className="text-sm text-neutral-600 mt-0.5">
            {testimonial.ville && <span>{testimonial.ville}</span>}
            {testimonial.ville && testimonial.dureeAnnees ? " · " : ""}
            {testimonial.dureeAnnees && (
              <span>
                {t("testimonialCard.duration", { years: testimonial.dureeAnnees })}
              </span>
            )}
          </div>
        )}
      </footer>
    </Card>
  );
}

function EmptyState() {
  const t = useTranslations("home");
  return (
    <div className="max-w-2xl mx-auto text-center p-8 md:p-10 rounded-2xl bg-sand-50 border border-sand-200">
      <MessageSquareHeart
        className="w-10 h-10 text-primary-700 mx-auto mb-4"
        aria-hidden="true"
      />
      <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
        {t("testimonialsEmpty.title")}
      </h3>
      <p className="text-neutral-700 leading-relaxed">
        {t("testimonialsEmpty.text")}
      </p>
    </div>
  );
}

export function TestimonialCarousel() {
  const t = useTranslations("home");
  if (testimonials.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      aria-label={t("testimonialsAria")}
    >
      {testimonials.map((testimonial, i) => (
        <li key={`${testimonial.prenom}-${i}`}>
          <TestimonialCard testimonial={testimonial} />
        </li>
      ))}
    </ul>
  );
}
