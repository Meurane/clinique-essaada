import { MessageCircle } from "lucide-react";
import { waUrl } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <div role="complementary" aria-label="Contact WhatsApp">
      <a
        href={waUrl("Bonjour, j'aimerais des informations sur la Clinique ESSAADA.")}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden min-[1080px]:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-[#25D366] hover:bg-[#1fb558] text-white px-5 py-3.5 rounded-full shadow-lg font-semibold transition-colors"
        aria-label="Nous contacter sur WhatsApp"
      >
        <MessageCircle className="w-5 h-5" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
