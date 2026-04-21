import { Plus } from "lucide-react";

export type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <details
          key={i}
          className="group bg-white border border-neutral-150 rounded-xl overflow-hidden open:shadow-sm transition-shadow"
        >
          <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-5 md:p-6 font-display font-semibold text-lg text-neutral-900 hover:bg-neutral-50">
            <span>{item.question}</span>
            <Plus
              className="w-5 h-5 text-primary-600 shrink-0 mt-1 transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <div className="px-5 pb-5 md:px-6 md:pb-6 text-neutral-700 leading-relaxed">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
