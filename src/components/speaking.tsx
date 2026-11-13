import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function Speaking() {
  return (
    <section
      id="speaking"
      aria-labelledby="speaking-heading"
      className="scroll-mt-24 border-t border-border bg-[color-mix(in_srgb,var(--background-elevated)_40%,var(--background))]"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow={site.speaking.eyebrow}
          id="speaking-heading"
          title={site.speaking.title}
          description={site.speaking.intro}
        />

        <div className="mt-12 grid gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              {site.speaking.yearLabel}
            </p>
            <ul className="mt-5 space-y-3.5">
              {site.speaking.talks.map((talk) => (
                <li
                  key={talk}
                  className="border-l border-border pl-4 text-pretty text-base leading-[1.65] text-foreground/90 sm:pl-5"
                >
                  {talk}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
              {site.speaking.topicsLabel}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {site.speaking.topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full border border-border bg-background-elevated/70 px-3.5 py-1.5 text-sm text-muted"
                >
                  {topic}
                </li>
              ))}
            </ul>

            <a
              href={site.speaking.cta.href}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity duration-300 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {site.speaking.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
