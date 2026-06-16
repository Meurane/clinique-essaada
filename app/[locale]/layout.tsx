import type { Metadata } from "next";
import { Inter, Fraunces, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import "../globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ContactBar } from "@/components/layout/ContactBar";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CopyAttribution } from "@/components/layout/CopyAttribution";
import { site } from "@/lib/site";
import { localePath } from "@/lib/i18n-meta";
import { medicalClinicSchema } from "@/lib/schema";
import { routing, localeConfig, type Locale } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

// Police arabe lisible (UI/médical), pensée pour s'accorder avec un sans latin.
const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const tagline = t("tagline");
  const description = t("siteDescription");

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} | ${tagline}`,
      template: `%s | ${site.name}`,
    },
    description,
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: localeConfig[locale as Locale]?.htmlLang.replace("-", "_"),
      url: `${site.url}${localePath(locale, "/")}`,
      siteName: site.name,
      title: `${site.name} | ${tagline}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: site.name,
      description,
    },
    category: "health",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const { htmlLang, dir } = localeConfig[locale as Locale];
  const t = await getTranslations({ locale, namespace: "a11y" });

  return (
    <html
      lang={htmlLang}
      dir={dir}
      className={`${inter.variable} ${fraunces.variable} ${arabic.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0A475D" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalClinicSchema()),
          }}
        />
      </head>
      <body className="bg-white text-neutral-700 antialiased pb-24 min-[1080px]:pb-0">
        <NextIntlClientProvider>
          <a href="#main" className="skip-link">
            {t("skipToContent")}
          </a>
          <ContactBar />
          <Navigation />
          <main id="main">{children}</main>
          <Footer />
          <MobileActionBar />
          <WhatsAppButton />
          <CopyAttribution />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
