"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { site } from "@/lib/site";

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
    <section className="min-h-[70vh] flex items-center justify-center bg-neutral-50 px-4 py-20">
      <div className="text-center max-w-lg">
        <div className="w-16 h-16 rounded-full bg-danger-100 grid place-items-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-danger-600" aria-hidden="true" />
        </div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
          Une erreur est survenue
        </h1>
        <p className="text-neutral-600 mb-8 text-lg">
          Nous nous en excusons. Essayez à nouveau ou revenez à l&apos;accueil.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3.5 rounded-full font-semibold min-h-[48px]"
          >
            <RefreshCw className="w-5 h-5" aria-hidden="true" />
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-700 hover:bg-primary-50 px-6 py-3.5 rounded-full font-semibold min-h-[48px]"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            Accueil
          </Link>
        </div>
        <p className="text-neutral-500 text-sm mt-8">
          Si le problème persiste, appelez-nous au{" "}
          <a href={site.contact.phoneHref} className="text-primary-700 underline">
            {site.contact.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
