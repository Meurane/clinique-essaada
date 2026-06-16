import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight, Droplets, Stethoscope, HeartPulse } from "lucide-react";
import { Card, CardIcon } from "@/components/ui/Card";

const services = [
  {
    href: "/services/hemodialyse",
    icon: Droplets,
    key: "hemodialysis",
  },
  {
    href: "/services/consultation-nephrologie",
    icon: Stethoscope,
    key: "nephrologyConsultation",
  },
  {
    href: "/services/premiere-seance",
    icon: HeartPulse,
    key: "firstSession",
  },
] as const;

export function ServicesGrid() {
  const t = useTranslations("servicesGrid");
  return (
    <ul className="grid md:grid-cols-3 gap-6">
      {services.map((s) => (
        <li key={s.href}>
          <Link
            href={s.href}
            aria-label={t(`${s.key}.title`)}
            className="block group h-full"
          >
            <Card className="h-full flex flex-col transition-transform duration-200 group-hover:-translate-y-0.5">
              <CardIcon>
                <s.icon className="w-6 h-6" aria-hidden="true" />
              </CardIcon>
              <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
                {t(`${s.key}.title`)}
              </h3>
              <p className="text-neutral-700 text-base leading-relaxed flex-1">
                {t(`${s.key}.description`)}
              </p>
              <div className="mt-5 inline-flex items-center gap-1.5 font-semibold text-primary-700 group-hover:gap-2.5 transition-all">
                {t("learnMore")}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </div>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
