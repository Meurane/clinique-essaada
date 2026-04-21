import { User } from "lucide-react";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

/**
 * Carte membre équipe.
 * Portrait 4/5 + nom + rôle + mini-bio optionnelle.
 * Usage : /equipe grille 3-4 colonnes, sections "notre équipe" homepage.
 */
export function PortraitCard({
  name,
  role,
  bio,
  photoSrc,
  photoAlt,
  credentials,
}: {
  name: string;
  role: string;
  bio?: string;
  photoSrc?: string;
  photoAlt?: string;
  credentials?: string[];
}) {
  return (
    <article className="group">
      <PhotoPlaceholder
        src={photoSrc}
        alt={photoAlt ?? `Portrait de ${name}`}
        aspectRatio="4/5"
        icon={User}
        label={name}
        subtitle="Portrait à venir"
        variant="light"
        rounded="2xl"
        className="mb-4 transition-transform duration-300 group-hover:-translate-y-0.5"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="space-y-1">
        <h3 className="font-display text-lg font-semibold text-neutral-900 leading-tight">
          {name}
        </h3>
        <p className="text-primary-700 font-medium text-sm">{role}</p>
        {credentials && credentials.length > 0 && (
          <p className="text-neutral-500 text-xs">{credentials.join(" · ")}</p>
        )}
        {bio && (
          <p className="text-neutral-700 text-sm leading-relaxed pt-2 max-w-prose">
            {bio}
          </p>
        )}
      </div>
    </article>
  );
}
