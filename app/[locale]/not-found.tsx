import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-neutral-50 px-4 py-20">
      <div className="text-center max-w-lg">
        <div className="font-display text-7xl md:text-8xl font-bold text-primary-700 mb-4">
          404
        </div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
          Page introuvable
        </h1>
        <p className="text-neutral-600 mb-8 text-lg">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3.5 rounded-full font-semibold min-h-[48px]"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <a
            href={site.contact.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-700 hover:bg-primary-50 px-6 py-3.5 rounded-full font-semibold min-h-[48px]"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
