import { Phone, Clock, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function ContactBar() {
  return (
    <div className="hidden md:block bg-primary-800 text-primary-50 text-sm">
      <div className="container-custom flex justify-between items-center py-2 gap-4">
        <div className="flex items-center gap-6">
          <a
            href={site.contact.phoneHref}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="font-medium">{site.contact.phone}</span>
          </a>
          <a
            href={site.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" aria-hidden="true" />
          <span>{site.hours.opening}</span>
        </div>
      </div>
    </div>
  );
}
