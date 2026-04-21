import { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

/**
 * Hero avec photo (alternative à PageHero).
 * Layout 2 colonnes : texte gauche (3/5), photo droite (2/5).
 * Photo en ratio 5/4 "landscape doux" — plus calme qu'un portrait 4/5,
 * plus éditorial qu'un 16/9 banner.
 */
export function PhotoHero({
  eyebrow,
  title,
  subtitle,
  children,
  photoSrc,
  photoAlt,
  photoIcon,
  photoLabel,
  photoTag,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  photoSrc?: string;
  photoAlt?: string;
  photoIcon?: LucideIcon;
  photoLabel?: string;
  photoTag?: string;
}) {
  return (
    <section className="bg-primary-700 text-white pt-24 pb-14 md:pt-28 md:pb-20">
      <div className="container-custom grid md:grid-cols-5 gap-10 md:gap-14 items-center">
        <div className="md:col-span-3">
          {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-xl text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg md:text-xl text-primary-100 max-w-xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
        <div className="md:col-span-2">
          <PhotoPlaceholder
            src={photoSrc}
            alt={photoAlt}
            aspectRatio="5/4"
            icon={photoIcon}
            label={photoLabel ?? "Photo à venir"}
            subtitle="Shooting photographique à venir"
            variant="warm"
            tag={photoTag}
            rounded="3xl"
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="ring-1 ring-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
