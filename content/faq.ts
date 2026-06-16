// Données FAQ : seules les clés structurelles (id) sont conservées ici.
// Les valeurs d'affichage (question/answer) sont traduites côté page via
// t(`faq.<id>.question`) / t(`faq.<id>.answer`).

export type FaqEntry = { id: string };

export const faq: FaqEntry[] = [
  { id: "cost" },
  { id: "companion" },
  { id: "sessionDuration" },
  { id: "frequency" },
  { id: "painGeneral" },
  { id: "emergency" },
  { id: "work" },
  { id: "eating" },
  { id: "firstAppointment" },
  { id: "transfer" },
  { id: "cnasCasnos" },
  { id: "visiting" },
  { id: "ramadan" },
  { id: "accessibility" },
  { id: "firstSessionFear" },
  { id: "needlesPain" },
  { id: "emergencyVacation" },
  { id: "serologyAge" },
  { id: "companionDuringSession" },
  { id: "dataProtection" },
];
