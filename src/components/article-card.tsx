import Link from "next/link";
import {
  EssayIllustration,
  essayIllustrationsBySlug,
  type EssayIllustrationSlug,
} from "@/components/essay-illustrations";
import type { Article } from "@/content/articles";
import { articleHref, isReadableArticle } from "@/content/articles";

type ArticleCardVariant = "featured" | "library";

export function ArticleReadingMeta({ article }: { article: Article }) {
  if (article.status === "comingSoon") {
    return (
      <span className="text-[0.8125rem] text-muted/75">Coming Soon</span>
    );
  }

  if (!isReadableArticle(article)) {
    return null;
  }

  return (
    <span className="text-[0.8125rem] text-muted/75">
      {article.readingTime} read
    </span>
  );
}

function isEssayIllustrationSlug(slug: string): slug is EssayIllustrationSlug {
  return Object.hasOwn(essayIllustrationsBySlug, slug);
}

function ArticleIllustration({
  slug,
  size,
}: {
  slug: string;
  size: ArticleCardVariant;
}) {
  if (!isEssayIllustrationSlug(slug)) return null;

  return (
    <figure
      aria-hidden
      className={
        size === "featured"
          ? "mx-auto w-full max-w-[18.75rem] max-h-[12.5rem] sm:max-w-[21rem] sm:max-h-[14rem] lg:mx-0 lg:max-w-[24rem] lg:max-h-[16rem]"
          : "mx-auto w-full max-w-[13.75rem] sm:max-w-[15rem]"
      }
    >
      <EssayIllustration
        slug={slug}
        className={
          size === "featured"
            ? "aspect-[240/160] h-full max-h-full w-full object-contain"
            : "aspect-[240/160] w-full"
        }
      />
    </figure>
  );
}

function ArticleTitle({
  article,
  className,
  clamp = false,
}: {
  article: Article;
  className: string;
  clamp?: boolean;
}) {
  const readable = isReadableArticle(article);
  const titleClassName = clamp ? `${className} line-clamp-2` : className;

  if (!readable) {
    return <span className={titleClassName}>{article.title}</span>;
  }

  return (
    <Link
      href={articleHref(article.slug)}
      className={`${titleClassName} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
    >
      {article.title}
    </Link>
  );
}

function ReadEssayLink({
  article,
  className,
}: {
  article: Article;
  className: string;
}) {
  if (!isReadableArticle(article)) return null;

  return (
    <Link
      href={articleHref(article.slug)}
      className={className}
    >
      Read essay
      <span
        aria-hidden
        className="transition-transform duration-500 ease-out group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}

export function ArticleCard({
  article,
  variant = "library",
}: {
  article: Article;
  variant?: ArticleCardVariant;
}) {
  if (variant === "featured") {
    const meta = (
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <ArticleReadingMeta article={article} />
        <ReadEssayLink
          article={article}
          className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors duration-500 hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        />
      </div>
    );

    return (
      <article className="group rounded-3xl border border-border bg-background-elevated px-7 pb-8 pt-8 transition-[border-color,box-shadow] duration-500 ease-out hover:border-foreground/12 hover:shadow-soft sm:px-9 sm:pb-10 sm:pt-9 lg:px-11 lg:pb-11 lg:pt-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-10 xl:gap-x-12">
          <div className="min-w-0">
            <h2 className="max-w-3xl text-balance font-serif text-[2.1rem] leading-[1.15] tracking-tight text-foreground sm:text-[2.55rem] sm:leading-[1.12] lg:text-[3.1rem] lg:leading-[1.1]">
              <ArticleTitle article={article} className="" />
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-[1.75] text-muted sm:mt-5 sm:text-lg sm:leading-[1.75]">
              {article.description}
            </p>
            <div className="mt-7 hidden sm:mt-8 lg:block">{meta}</div>
          </div>
          <div className="mt-7 sm:mt-8 lg:mt-0 lg:justify-self-end">
            <ArticleIllustration slug={article.slug} size="featured" />
          </div>
          <div className="mt-7 sm:mt-8 lg:hidden">{meta}</div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-background-elevated/50 px-6 pb-8 pt-7 transition-[border-color,box-shadow] duration-500 ease-out hover:border-foreground/12 hover:shadow-soft sm:px-7 sm:pb-9 sm:pt-8">
      <h3 className="min-h-[2.6em] text-balance font-serif text-[1.375rem] leading-[1.25] tracking-tight text-foreground/90 transition-colors duration-500 group-hover:text-foreground sm:min-h-[2.5em] sm:text-[1.5rem] sm:leading-[1.22]">
        <ArticleTitle
          article={article}
          className="text-inherit"
          clamp
        />
      </h3>
      <p className="mt-3.5 line-clamp-3 text-pretty text-[0.9375rem] leading-[1.7] text-muted sm:mt-4">
        {article.description}
      </p>
      <div className="mt-auto pt-6 sm:pt-7">
        <ArticleIllustration slug={article.slug} size="library" />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-7">
        <ArticleReadingMeta article={article} />
        <ReadEssayLink
          article={article}
          className="inline-flex items-center gap-1.5 text-sm text-muted/80 transition-colors duration-500 group-hover:text-foreground/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        />
      </div>
    </article>
  );
}
