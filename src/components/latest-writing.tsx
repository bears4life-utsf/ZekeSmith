import Link from "next/link";
import {
  articleHref,
  getLatestPublishedArticles,
} from "@/content/articles";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function LatestWriting() {
  const essays = getLatestPublishedArticles(3);

  return (
    <section
      id="latest-writing"
      aria-labelledby="latest-writing-heading"
      className="scroll-mt-24 border-t border-border"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={site.latestWriting.eyebrow}
            id="latest-writing-heading"
            title={site.latestWriting.title}
          />
          <Link
            href={site.latestWriting.allHref}
            className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors duration-300 hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            {site.latestWriting.allLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {essays.map((essay) => (
            <li key={essay.slug}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-background-elevated/50 px-6 py-6 transition-[border-color,box-shadow] duration-500 ease-out hover:border-foreground/12 hover:shadow-soft sm:px-7 sm:py-7">
                <h3 className="text-balance font-serif text-[1.25rem] leading-[1.25] tracking-tight text-foreground/90 transition-colors duration-500 group-hover:text-foreground sm:text-[1.35rem]">
                  <Link
                    href={articleHref(essay.slug)}
                    className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    {essay.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-2 text-pretty text-sm leading-[1.7] text-muted">
                  {essay.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-5">
                  <span className="text-[0.8125rem] text-muted/75">
                    {essay.readingTime} read
                  </span>
                  <Link
                    href={articleHref(essay.slug)}
                    className="inline-flex items-center gap-1.5 text-sm text-muted/80 transition-colors duration-500 group-hover:text-foreground/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    Read essay
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
