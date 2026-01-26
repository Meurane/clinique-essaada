"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>

        <h1 className="font-display text-2xl font-bold text-neutral-800 mb-4">
          Une erreur est survenue
        </h1>

        <p className="text-neutral-600 mb-8">
          Nous nous excusons pour ce désagrément. Veuillez réessayer ou
          retourner à la page d&apos;accueil.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Réessayer
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Home className="w-5 h-5" />
            Accueil
          </Link>
        </div>

        <p className="text-neutral-400 text-sm mt-8">
          Si le problème persiste, contactez-nous au{" "}
          <a
            href="tel:+213000000000"
            className="text-primary-600 hover:underline"
          >
            +213 00 00 00 00 00
          </a>
        </p>
      </div>
    </div>
  );
}
