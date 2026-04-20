export type Testimonial = {
  prenom: string;
  ville?: string;
  dureeAnnees?: number;
  citation: string;
  type: "resident" | "passage";
};

/**
 * Témoignages patients — collecte en cours.
 * Chaque témoignage nécessite un consentement écrit (loi 18-07).
 * Format : prénom réel + ville + durée de prise en charge + citation 50-150 mots.
 */
export const testimonials: Testimonial[] = [];
