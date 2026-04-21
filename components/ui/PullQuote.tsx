import { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

export function PullQuote({
  eyebrow,
  quote,
  caption,
  align = "center",
}: {
  eyebrow?: string;
  quote: ReactNode;
  caption?: ReactNode;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-4xl ${alignClass}`}>
      {eyebrow && (
        <Eyebrow
          tone="light"
          className={align === "center" ? "justify-center" : ""}
        >
          {eyebrow}
        </Eyebrow>
      )}
      <blockquote className="font-display text-2xl md:text-4xl font-semibold leading-[1.2] text-white">
        {quote}
      </blockquote>
      {caption && (
        <p
          className={`mt-6 text-lg text-primary-100 leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {caption}
        </p>
      )}
    </div>
  );
}
