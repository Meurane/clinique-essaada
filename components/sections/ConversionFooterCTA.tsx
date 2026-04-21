import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { waUrl } from "@/lib/site";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  waMessage?: string;
  variant?: "primary" | "sand" | "white";
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
};

export function ConversionFooterCTA({
  eyebrow = "Rendez-vous",
  title,
  subtitle,
  waMessage,
  variant = "primary",
  primaryCtaLabel = "Prendre rendez-vous",
  primaryCtaHref = "/rendez-vous",
}: Props) {
  const isPrimary = variant === "primary";
  const sectionClass =
    variant === "primary"
      ? "section-padding bg-primary-700 text-white"
      : variant === "sand"
        ? "section-padding bg-sand-50"
        : "section-padding";

  const titleColor = isPrimary ? "text-white" : "text-neutral-900";
  const subtitleColor = isPrimary ? "text-primary-100" : "text-neutral-700";
  const primaryBtnClass = isPrimary
    ? "bg-white text-primary-700 hover:bg-primary-50"
    : "bg-primary-600 hover:bg-primary-700 text-white";

  return (
    <section className={sectionClass}>
      <div className="container-custom text-center max-w-2xl mx-auto">
        <Eyebrow className="justify-center" tone={isPrimary ? "light" : "primary"}>
          {eyebrow}
        </Eyebrow>
        <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg md:text-xl mb-8 leading-relaxed ${subtitleColor}`}>
            {subtitle}
          </p>
        )}
        <div className="flex flex-col-reverse sm:flex-row gap-3 justify-center">
          <Link
            href={primaryCtaHref}
            className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors ${primaryBtnClass}`}
          >
            {primaryCtaLabel}
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
          <a
            href={waUrl(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb558] text-white px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Écrire sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
