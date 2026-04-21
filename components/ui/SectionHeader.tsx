import { Eyebrow } from "./Eyebrow";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /**
   * "dark" = titre neutral-900 sur fond clair (défaut)
   * "light" = titre blanc + subtitle primary-100 sur fond sombre (bg-primary-700 par ex.)
   */
  tone?: "dark" | "light";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const eyebrowAlign = align === "center" ? "justify-center" : "";
  const eyebrowTone = tone === "light" ? "light" : "primary";
  const titleColor = tone === "light" ? "text-white" : "text-neutral-900";
  const subtitleColor = tone === "light" ? "text-primary-100" : "text-neutral-600";
  return (
    <div className={`max-w-3xl ${alignClass} mb-10 md:mb-14`}>
      {eyebrow && (
        <Eyebrow tone={eyebrowTone} className={eyebrowAlign}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl font-bold leading-tight ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-prose ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
