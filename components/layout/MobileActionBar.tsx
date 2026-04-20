import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function MobileActionBar() {
  return (
    <nav
      aria-label="Actions rapides"
      className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-neutral-200 shadow-[0_-4px_12px_rgba(0,0,0,0.04)]"
    >
      <div className="grid grid-cols-[2fr_3fr] gap-2 p-2 safe-area-inset-bottom">
        <a
          href={site.contact.phoneHref}
          className="flex items-center justify-center gap-2 bg-primary-600 text-white font-semibold py-3 rounded-xl min-h-[52px]"
          aria-label={`Appeler la clinique au ${site.contact.phone}`}
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          Appeler
        </a>
        <a
          href={site.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl min-h-[52px]"
          aria-label="Contacter la clinique sur WhatsApp"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
