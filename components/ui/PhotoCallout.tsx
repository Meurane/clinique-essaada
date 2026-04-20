import { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

/**
 * Photo carrée + bloc texte à droite.
 * Compact — pour astuces, moments-clés, encadrés visuels.
 * Plus léger qu'un PhotoStory, plus riche qu'un Callout pur texte.
 */
export function PhotoCallout({
  title,
  children,
  photoSrc,
  photoAlt,
  photoIcon,
  photoLabel,
  align = "left",
}: {
  title?: string;
  children: ReactNode;
  photoSrc?: string;
  photoAlt?: string;
  photoIcon?: LucideIcon;
  photoLabel?: string;
  align?: "left" | "right";
}) {
  const photoOrder = align === "right" ? "md:order-2" : "";
  const textOrder = align === "right" ? "md:order-1" : "";
  return (
    <div className="grid md:grid-cols-[minmax(180px,240px)_1fr] gap-6 md:gap-8 items-center">
      <div className={photoOrder}>
        <PhotoPlaceholder
          src={photoSrc}
          alt={photoAlt}
          aspectRatio="1/1"
          icon={photoIcon}
          label={photoLabel ?? "Photo à venir"}
          variant="warm"
          rounded="xl"
          sizes="(max-width: 768px) 100vw, 240px"
        />
      </div>
      <div className={textOrder}>
        {title && (
          <h3 className="font-display text-xl font-semibold text-neutral-900 mb-2">
            {title}
          </h3>
        )}
        <div className="text-neutral-700 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
