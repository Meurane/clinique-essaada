import { Phone, MessageCircle } from "lucide-react";
import { site, waUrl } from "@/lib/site";

export function MobileActionBar() {
  return (
    <nav
      aria-label="Actions rapides"
      className="min-[1080px]:hidden fixed bottom-0 inset-x-0 z-30 bg-primary-800 border-t border-primary-900/40"
    >
      <div className="flex items-center gap-3 px-4 py-3 safe-area-inset-bottom">
        <a
          href={site.contact.phoneHref}
          aria-label={`Appeler la clinique au ${site.contact.phone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-primary-50 text-primary-800 font-semibold py-3 px-4 rounded-full min-h-[48px] transition-colors"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          <span>Appeler</span>
        </a>
        <a
          href={waUrl("Bonjour, j'aimerais des informations sur la Clinique ESSAADA.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter la clinique sur WhatsApp"
          className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#1fb558] text-white transition-colors"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
}
