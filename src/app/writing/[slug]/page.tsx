import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/article-page";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  articleHref,
  articles,
  getArticleBySlug,
} from "@/content/articles";
import { site } from "@/content/site";
import { getEssayParagraphs } from "@/lib/essay";

type WritingArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: WritingArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "Essay" };
  }

  const path = articleHref(article.slug);

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      url: path,
      title: article.title,
      description: article.description,
      siteName: site.name,
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 627,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [site.ogImage],
    },
  };
}

export default async function WritingArticleRoute({
  params,
}: WritingArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main id="main">
        <ArticlePage
          article={article}
          paragraphs={getEssayParagraphs(article.slug)}
        />
      </main>
      <Footer />
    </>
  );
}
