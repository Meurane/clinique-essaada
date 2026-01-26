import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clinique ESSAADA | Centre d'Hémodialyse - Sidi Bel Abbès",
  description:
    "Clinique ESSAADA - Centre d'hémodialyse moderne à Sidi Bel Abbès. Équipements de nouvelle génération, équipe médicale qualifiée. Prise en charge personnalisée de l'insuffisance rénale.",
  keywords: [
    "hémodialyse",
    "clinique",
    "Sidi Bel Abbès",
    "insuffisance rénale",
    "néphrologie",
    "dialyse",
    "ESSAADA",
  ],
  openGraph: {
    title: "Clinique ESSAADA | Centre d'Hémodialyse",
    description:
      "Centre d'hémodialyse moderne à Sidi Bel Abbès. Soins de qualité et accompagnement personnalisé.",
    type: "website",
    locale: "fr_DZ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans">{children}</body>
    </html>
  );
}
