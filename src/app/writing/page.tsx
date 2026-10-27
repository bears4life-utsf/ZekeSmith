import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getWritingCollectionSections } from "@/content/articles";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Writing",
  description: site.writing.intro,
};

export default function WritingPage() {
  const sections = getWritingCollectionSections();

  return (
    <>
      <Header />
      <main id="main">
        <section
          aria-labelledby="writing-heading"
          className="mx-auto w-full max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-32"
        >
          <header className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {site.writing.eyebrow}
            </p>
            <h1
              id="writing-heading"
              className="mt-5 text-balance text-3xl font-medium tracking-tight text-foreground sm:mt-6 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]"
            >
              {site.writing.headline}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-[1.75] text-muted sm:mt-7 sm:text-lg sm:leading-[1.75]">
              {site.writing.intro}
            </p>
          </header>

          <div className="mt-16 space-y-14 sm:mt-20 sm:space-y-16 lg:mt-24 lg:space-y-20">
            {sections.map((section, sectionIndex) => {
              const isFeaturedSection =
                sectionIndex === 0 && section.articles.length === 1;
              const useGrid = section.articles.length > 1;

              return (
                <section
                  key={section.category}
                  aria-labelledby={`writing-section-${sectionIndex}`}
                >
                  <h2
                    id={`writing-section-${sectionIndex}`}
                    className="text-xs font-medium uppercase tracking-[0.16em] text-accent"
                  >
                    {section.category}
                  </h2>

                  <div
                    className={
                      useGrid
                        ? "mt-6 grid gap-8 sm:mt-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:gap-x-10"
                        : "mt-6 sm:mt-7"
                    }
                  >
                    {section.articles.map((article) => (
                      <ArticleCard
                        key={article.slug}
                        article={article}
                        variant={
                          isFeaturedSection ? "featured" : "library"
                        }
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
