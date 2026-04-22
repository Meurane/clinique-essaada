export const site = {
  name: "Clinique ESSAADA",
  tagline: "Centre d'hémodialyse — Sidi Bel Abbès",
  description:
    "Centre d'hémodialyse à Sidi Bel Abbès. 37 lits, équipements récents, équipe pluridisciplinaire. Patients résidents et de passage. Conventionnée CNAS et CASNOS.",
  url: "https://cliniquessaada.fr",
  locale: "fr_DZ",
  city: "Sidi Bel Abbès",
  country: "Algérie",
  countryCode: "DZ",
  address: {
    street: "Tranche N° 04 Plan Cadastral N° 241 CIV 12",
    postalCode: "22000",
    city: "Sidi Bel Abbès",
    country: "Algérie",
  },
  contact: {
    phone: "(+213) 48 70 25 70",
    phoneHref: "tel:+213487025700",
    whatsapp: "213487025700",
    whatsappUrl: "https://wa.me/213487025700",
    email: "cliniqueessaada22@gmail.com",
    emailHref: "mailto:cliniqueessaada22@gmail.com",
  },
  hours: {
    opening: "Du samedi au jeudi",
    sessions: [
      { label: "1ère séance", range: "05h00 — 09h00" },
      { label: "2ème séance", range: "09h30 — 13h30" },
      { label: "Soir", range: "14h00 — 19h00" },
    ],
    note: "Les horaires peuvent être ajustés pour optimiser la prise en charge.",
    ramadanNote:
      "Pendant le Ramadan, première séance à 4h du matin. Pas de séance après f'tour, pas de créneau nocturne. En concertation avec votre néphrologue.",
  },
  rdv: {
    rappelDelai: "sous 24 à 48 h (jours ouvrables)",
    reservationPassageMois: 1,
  },
  legal: {
    agrement: "N° 473",
    rc: "[À COMPLÉTER : numéro RC]",
    nif: "[À COMPLÉTER : NIF]",
    directeurPublication: "[À COMPLÉTER : directeur de la publication]",
    conventions: ["CNAS", "CASNOS"],
    conventionsLong: {
      CNAS: "Caisse Nationale des Assurances Sociales des travailleurs salariés",
      CASNOS: "Caisse Nationale de Sécurité Sociale des Non-Salariés",
    },
  },
  stats: {
    lits: 37,
    ouvertureAnnee: 2023,
    equipementsRecents: 2025,
    openDays: "sam. → jeu.",
  },
} as const;

export type Site = typeof site;

export function waUrl(message?: string): string {
  const base = site.contact.whatsappUrl;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
