import Link from "next/link";
import { Home, Search, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-display font-bold text-primary-600 mb-4">
          404
        </div>

        <h1 className="font-display text-2xl font-bold text-neutral-800 mb-4">
          Page non trouvée
        </h1>

        <p className="text-neutral-600 mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Home className="w-5 h-5" />
            Retour à l&apos;accueil
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Phone className="w-5 h-5" />
            Nous contacter
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-neutral-500 text-sm mb-4">
            Vous cherchez peut-être :
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              href="/#services"
              className="text-primary-600 hover:underline text-sm"
            >
              Nos services
            </Link>
            <span className="text-neutral-300">•</span>
            <Link
              href="/#premiere-seance"
              className="text-primary-600 hover:underline text-sm"
            >
              Première séance
            </Link>
            <span className="text-neutral-300">•</span>
            <Link
              href="/#equipe"
              className="text-primary-600 hover:underline text-sm"
            >
              Notre équipe
            </Link>
            <span className="text-neutral-300">•</span>
            <Link
              href="/#contact"
              className="text-primary-600 hover:underline text-sm"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
