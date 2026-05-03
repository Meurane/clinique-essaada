"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

const MIN_LENGTH = 40;

function isFormField(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") return true;
  return target.isContentEditable;
}

export function CopyAttribution() {
  useEffect(() => {
    const handleCopy = (event: ClipboardEvent) => {
      if (isFormField(event.target)) return;

      const selection = window.getSelection()?.toString() ?? "";
      if (selection.length < MIN_LENGTH) return;

      const { origin, pathname } = window.location;
      const sourceUrl = `${origin}${pathname}`;
      const enriched = `${selection}\n\n---\nSource : ${site.name} — ${sourceUrl}`;

      event.clipboardData?.setData("text/plain", enriched);
      event.preventDefault();
    };

    document.addEventListener("copy", handleCopy);
    return () => document.removeEventListener("copy", handleCopy);
  }, []);

  return null;
}
