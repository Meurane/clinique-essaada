import { Eyebrow } from "./Eyebrow";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const eyebrowAlign = align === "center" ? "justify-center" : "";
  return (
    <div className={`max-w-3xl ${alignClass} mb-10 md:mb-14`}>
      {eyebrow && <Eyebrow className={eyebrowAlign}>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-600 max-w-prose">{subtitle}</p>
      )}
    </div>
  );
}
