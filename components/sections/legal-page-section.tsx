import type { ReactNode } from "react";

export type LegalSection = {
  title: string;
  content: ReactNode;
};

export function LegalPageSection({
  lastUpdatedLabel,
  lastUpdated,
  sections,
  title,
}: {
  lastUpdatedLabel: string;
  lastUpdated: string;
  sections: LegalSection[];
  title: string;
}) {
  return (
    <section className="page-shell pt-12">
      <h1 className="page-title">{title}</h1>
      <p className="mt-4 text-sm text-black/55">{lastUpdatedLabel}: {lastUpdated}</p>
      <div className="mt-12 border-t border-black/20">
        {sections.map((section) => (
          <section className="grid gap-6 border-b border-black/20 py-12 md:grid-cols-[1fr_1.6fr] md:gap-16" key={section.title}>
            <h2 className="card-title">{section.title}</h2>
            <div className="prose-measure text-black/75">{section.content}</div>
          </section>
        ))}
      </div>
    </section>
  );
}
