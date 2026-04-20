import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-primary-700 text-white pt-28 pb-14 md:pt-32 md:pb-20">
      <div className="container-custom">
        {eyebrow && (
          <div className="text-primary-200 uppercase tracking-widest text-sm font-semibold mb-3">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg md:text-xl text-primary-100 max-w-2xl">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
