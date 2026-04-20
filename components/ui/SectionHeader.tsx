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
  return (
    <div className={`max-w-3xl ${alignClass} mb-10 md:mb-14`}>
      {eyebrow && (
        <div className="text-primary-600 uppercase tracking-widest text-sm font-semibold mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-600">{subtitle}</p>
      )}
    </div>
  );
}
