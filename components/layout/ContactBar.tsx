import { Phone, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site, waUrl } from "@/lib/site";

export function ContactBar() {
  const t = useTranslations();
  return (
    <aside
      aria-label={t("common.contactBarLabel")}
      className="hidden md:block bg-primary-800 text-primary-50 text-sm"
    >
      <div className="container-custom flex justify-between items-center py-2.5 gap-6">
        <div className="flex items-center gap-5 min-w-0">
          <a
            href={site.contact.phoneHref}
            aria-label={t("common.callAria", { phone: site.contact.phone })}
            className="inline-flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-primary-300" aria-hidden="true" />
            <span className="font-medium tabular-nums" dir="ltr">{site.contact.phone}</span>
          </a>
          <span aria-hidden="true" className="h-4 w-px bg-white/15" />
          <a
            href={waUrl(t("common.whatsappInfoMessage"))}
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
            <span className="text-primary-100">
              <span className="hidden lg:inline">{t("hours.openDaysLong")} · </span>
              <span dir="ltr">05h–19h</span>
            </span>
          </span>
        </div>
        <Link
          href="/rendez-vous"
          className="group inline-flex items-center gap-1.5 text-accent-200 hover:text-white font-semibold whitespace-nowrap transition-colors"
        >
          {t("common.bookAppointment")}
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100"
            aria-hidden="true"
          />
        </Link>
      </div>
    </aside>
  );
}
