import type { LucideIcon } from "lucide-react";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

type PhotoItem = {
  src?: string;
  alt?: string;
  caption?: string;
  icon?: LucideIcon;
  label?: string;
  aspectRatio?: "4/5" | "1/1" | "3/2" | "16/9" | "5/4";
  tag?: string;
};

/**
 * Galerie éditoriale responsive.
 * Aspect-ratios mixtes autorisés (masonry-feel via grid-auto-rows).
 * Captions discrètes sous chaque photo.
 */
export function PhotoGrid({
  items,
  columns = 3,
  gap = "5",
}: {
  items: PhotoItem[];
  columns?: 2 | 3 | 4;
  gap?: "4" | "5" | "6" | "8";
}) {
  const colClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  }[columns];
  const gapClass = `gap-${gap}`;

  return (
    <ul className={`grid ${colClass} ${gapClass}`}>
      {items.map((item, idx) => (
        <li key={item.src ?? item.label ?? idx}>
          <figure>
            <PhotoPlaceholder
              src={item.src}
              alt={item.alt ?? item.caption}
              aspectRatio={item.aspectRatio ?? "4/5"}
              icon={item.icon}
              label={item.label ?? "Photo à venir"}
              tag={item.tag}
              variant="warm"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {item.caption && (
              <figcaption className="mt-3 text-sm text-neutral-600 leading-relaxed">
                {item.caption}
              </figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  );
}
