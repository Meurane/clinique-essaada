import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; url: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  if (items.length < 2) return null;
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(items)),
        }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-neutral-600">
        {items.map((it, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={it.url} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight className="w-4 h-4 text-neutral-400" aria-hidden="true" />
              )}
              {isLast ? (
                <span className="text-neutral-900 font-medium">{it.name}</span>
              ) : (
                <Link href={it.url} className="underline underline-offset-2 hover:text-primary-700">
                  {it.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
