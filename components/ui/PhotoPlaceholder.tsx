import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

type AspectRatio = "4/5" | "1/1" | "3/2" | "16/9" | "9/16" | "5/4";

const aspectClasses: Record<AspectRatio, string> = {
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-[16/9]",
  "9/16": "aspect-[9/16]",
  "5/4": "aspect-[5/4]",
};

/**
 * Primitive visuelle pour emplacement photo.
 * — Si `src` fourni : rend l'image via next/image (optimisée, responsive).
 * — Sinon : placeholder "clean clinique européenne + chaleur" (gradient sand
 *   discret, pattern de points très léger, icône center, label).
 *
 * Direction visuelle : neutre-blanc dominant, touche sand pour la chaleur,
 * accent teal en ombres. Lit comme "emplacement professionnel qui attend
 * sa photo", pas comme un trou.
 */
export function PhotoPlaceholder({
  src,
  alt = "",
  aspectRatio = "4/5",
  icon: Icon = ImageIcon,
  label = "Photo à venir",
  subtitle,
  variant = "warm",
  tag,
  rounded = "2xl",
  priority = false,
  sizes,
  className = "",
}: {
  src?: string;
  alt?: string;
  aspectRatio?: AspectRatio;
  icon?: LucideIcon;
  label?: string;
  subtitle?: string;
  variant?: "warm" | "clean" | "light";
  tag?: string;
  rounded?: "xl" | "2xl" | "3xl";
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const aspect = aspectClasses[aspectRatio];
  const roundClass =
    rounded === "3xl" ? "rounded-3xl" : rounded === "xl" ? "rounded-xl" : "rounded-2xl";

  const bgClass =
    variant === "warm"
      ? "bg-gradient-to-br from-sand-50 via-white to-sand-100"
      : variant === "light"
      ? "bg-gradient-to-br from-white via-sand-50/60 to-sand-100/80"
      : "bg-gradient-to-br from-neutral-50 via-white to-neutral-100";

  // Image réelle
  if (src) {
    return (
      <figure
        className={`relative ${aspect} ${roundClass} overflow-hidden bg-sand-50 ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
          className="object-cover"
        />
        {tag && (
          <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/85 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-primary-800 ring-1 ring-primary-800/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-600" aria-hidden="true" />
            {tag}
          </figcaption>
        )}
      </figure>
    );
  }

  // Placeholder
  return (
    <figure
      className={`relative ${aspect} ${roundClass} overflow-hidden ring-1 ring-sand-200/70 shadow-sm ${bgClass} ${className}`}
      aria-label={alt || label}
    >
      {/* pattern points très discret — ancrage éditorial */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(10, 71, 93, 0.07) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* vignettage subtil pour profondeur */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-sand-200/30"
        aria-hidden="true"
      />
      <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6 text-primary-800/70">
        <Icon className="w-9 h-9" aria-hidden="true" strokeWidth={1.4} />
        <span className="font-display text-sm font-semibold tracking-wide">
          {label}
        </span>
        {subtitle && (
          <span className="text-xs text-primary-800/50">{subtitle}</span>
        )}
      </figcaption>
      {tag && (
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-primary-800 ring-1 ring-primary-800/10">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-600" aria-hidden="true" />
          {tag}
        </div>
      )}
    </figure>
  );
}
