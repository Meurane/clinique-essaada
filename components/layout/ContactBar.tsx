import Link from "next/link";
import { Phone, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { site, waUrl } from "@/lib/site";

export function ContactBar() {
  return (
    <aside
      aria-label="Bandeau de contact rapide"
      className="hidden md:block bg-primary-800 text-primary-50 text-sm"
    >
      <div className="container-custom flex justify-between items-center py-2.5 gap-6">
        <div className="flex items-center gap-5 min-w-0">
          <a
            href={site.contact.phoneHref}
            className="inline-flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-primary-300" aria-hidden="true" />
            <span className="font-medium tabular-nums">{site.contact.phone}</span>
          </a>
          <span aria-hidden="true" className="h-4 w-px bg-white/15" />
          <a
            href={waUrl("Bonjour, j'aimerais des informations sur la Clinique ESSAADA.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-primary-300" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
          <span aria-hidden="true" className="h-4 w-px bg-white/15" />
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            <Clock className="w-4 h-4 text-primary-300" aria-hidden="true" />
            <span className="text-primary-100">{site.hours.opening} · 05h–19h</span>
          </span>
        </div>
        <Link
          href="/rendez-vous"
          className="group inline-flex items-center gap-1.5 text-accent-200 hover:text-white font-semibold whitespace-nowrap transition-colors"
        >
          Prendre rendez-vous
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </aside>
  );
}
