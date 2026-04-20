import { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

/**
 * Bloc photo + texte côte à côte, alterné.
 * Pattern "storytelling éditorial" : photo d'un côté, contenu de l'autre.
 * Réutilisable sur pages services, la-clinique, patients-de-passage.
 */
export function PhotoStory({
  eyebrow,
  title,
  children,
  align = "left",
  photoSrc,
  photoAlt,
  photoIcon,
  photoLabel,
  photoTag,
  photoAspect = "4/5",
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  align?: "left" | "right";
  photoSrc?: string;
  photoAlt?: string;
  photoIcon?: LucideIcon;
  photoLabel?: string;
  photoTag?: string;
  photoAspect?: "4/5" | "5/4" | "1/1" | "3/2";
}) {
  const textOrder = align === "right" ? "md:order-2" : "";
  const photoOrder = align === "right" ? "md:order-1" : "";
  return (
    <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
      <div className={textOrder}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-5">
          {title}
        </h2>
        <div className="text-neutral-700 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
      <div className={photoOrder}>
        <PhotoPlaceholder
          src={photoSrc}
          alt={photoAlt}
          aspectRatio={photoAspect}
          icon={photoIcon}
          label={photoLabel ?? "Photo à venir"}
          variant="warm"
          tag={photoTag}
          rounded="2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
