import { Phone, MessageCircle } from "lucide-react";
import { site, waUrl } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function MobileActionBar() {
  return (
    <nav
      aria-label="Actions rapides"
      className="min-[1080px]:hidden fixed bottom-0 inset-x-0 z-30 bg-primary-800 border-t border-primary-900/40"
    >
      <div className="flex items-center gap-3 px-4 py-3 safe-area-inset-bottom">
        <Button
          href={site.contact.phoneHref}
          variant="light"
          size="md"
          className="flex-1"
          aria-label={`Appeler la clinique au ${site.contact.phone}`}
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          <span>Appeler</span>
        </Button>
        <Button
          href={waUrl("Bonjour, j'aimerais des informations sur la Clinique ESSAADA.")}
          variant="whatsapp"
          size="md"
          className="shrink-0 w-12 px-0"
          aria-label="Contacter la clinique sur WhatsApp"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
        </Button>
      </div>
    </nav>
  );
}
