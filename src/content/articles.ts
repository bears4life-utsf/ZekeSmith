export type ArticleStatus = "draft" | "published";

export type Article = {
  slug: string;
  title: string;
  category: string;
  description: string;
  readingTime: string;
  status: ArticleStatus;
  featured: boolean;
  relatedEssaySlugs: readonly string[];
  /** Short essay-specific note shown on the placeholder article page. */
  placeholderNote: string;
};

export type ContinueExploringItem = {
  slug: string;
  type: string;
  description: string;
};

/** Essays that extend the Tradeoff Model and Writing library. */
export const articles: Article[] = [
  {
    slug: "the-iron-triangle-still-wins",
    title: "The Iron Triangle Still Wins",
    category: "Leadership Foundations",
    description:
      "Why software leaders never escape the tradeoff between scope, speed, and quality.",
    readingTime: "7 min",
    status: "draft",
    featured: true,
    relatedEssaySlugs: [
      "the-art-of-explaining-tradeoffs",
      "why-more-people-often-slow-delivery",
      "ai-doesnt-eliminate-tradeoffs",
    ],
    placeholderNote:
      "It will return to the durable relationship between scope, speed, and quality — and why new methods rarely dissolve that triangle.",
  },
  {
    slug: "why-more-people-often-slow-delivery",
    title: "Why More People Often Slow Delivery",
    category: "Organizational Design",
    description:
      "A practical explanation of Brooks’s Law for modern software organizations.",
    readingTime: "7 min",
    status: "draft",
    featured: false,
    relatedEssaySlugs: [
      "when-safe-stops-scaling",
      "the-iron-triangle-still-wins",
      "the-product-operating-model-actually-works",
    ],
    placeholderNote:
      "It will show how added people can increase coordination cost faster than they increase delivery capacity — especially under unclear ownership.",
  },
  {
    slug: "when-safe-stops-scaling",
    title: "When SAFe Stops Scaling",
    category: "Organizational Design",
    description:
      "How coordination gradually became more expensive than the value it created.",
    readingTime: "10 min",
    status: "draft",
    featured: false,
    relatedEssaySlugs: [
      "why-more-people-often-slow-delivery",
      "the-product-operating-model-actually-works",
      "the-art-of-explaining-tradeoffs",
    ],
    placeholderNote:
      "It will examine the moment a scaling framework stops clarifying work and starts protecting the coordination structure itself.",
  },
  {
    slug: "the-product-operating-model-actually-works",
    title: "The Product Operating Model Actually Works",
    category: "Product Leadership",
    description:
      "Why empowered teams outperform feature factories when leaders trust the system.",
    readingTime: "9 min",
    status: "draft",
    featured: false,
    relatedEssaySlugs: [
      "when-safe-stops-scaling",
      "the-art-of-explaining-tradeoffs",
      "ai-doesnt-eliminate-tradeoffs",
    ],
    placeholderNote:
      "It will focus on what changes when teams own outcomes end to end — and what leadership has to give up for that ownership to be real.",
  },
  {
    slug: "the-art-of-explaining-tradeoffs",
    title: "The Art of Explaining Tradeoffs",
    category: "Leadership Communication",
    description:
      "Leadership isn’t about finding the perfect answer. It’s about making the tradeoffs clear.",
    readingTime: "12 min",
    status: "published",
    featured: false,
    relatedEssaySlugs: [
      "the-iron-triangle-still-wins",
      "why-more-people-often-slow-delivery",
      "ai-doesnt-eliminate-tradeoffs",
    ],
    placeholderNote:
      "It will look closely at how leaders frame constraints, make costs visible, and build support without pretending the hard parts disappear.",
  },
  {
    slug: "when-building-gets-cheap-choosing-gets-expensive",
    title: "When Building Gets Cheap, Choosing Gets Expensive",
    category: "AI Leadership",
    description:
      "AI lowers the cost of producing software, making product judgment more valuable.",
    readingTime: "8 min",
    status: "draft",
    featured: false,
    relatedEssaySlugs: [
      "more-code-is-not-more-progress",
      "the-product-manager-after-the-factory",
      "ai-doesnt-eliminate-tradeoffs",
    ],
    placeholderNote:
      "It will look at what happens to product judgment when producing software is no longer the expensive part of the work.",
  },
  {
    slug: "more-code-is-not-more-progress",
    title: "More Code Is Not More Progress",
    category: "AI Leadership",
    description:
      "AI can dramatically increase software output without necessarily increasing customer or business value.",
    readingTime: "7 min",
    status: "draft",
    featured: false,
    relatedEssaySlugs: [
      "when-building-gets-cheap-choosing-gets-expensive",
      "what-should-humans-still-decide",
      "ai-doesnt-eliminate-tradeoffs",
    ],
    placeholderNote:
      "It will separate output from progress — and why a faster factory can still move a product in the wrong direction.",
  },
  {
    slug: "the-product-manager-after-the-factory",
    title: "The Product Manager After the Factory",
    category: "AI Leadership",
    description:
      "When feature production becomes abundant, the role of product management moves upstream toward judgment, discovery, and deciding what matters.",
    readingTime: "9 min",
    status: "draft",
    featured: false,
    relatedEssaySlugs: [
      "the-product-operating-model-actually-works",
      "what-should-humans-still-decide",
      "when-building-gets-cheap-choosing-gets-expensive",
    ],
    placeholderNote:
      "It will trace how product management shifts when feature production is no longer the scarce skill.",
  },
  {
    slug: "what-should-humans-still-decide",
    title: "What Should Humans Still Decide?",
    category: "AI Leadership",
    description:
      "As AI takes on more work, leaders must decide which decisions still require human judgment, accountability, and ownership.",
    readingTime: "8 min",
    status: "draft",
    featured: false,
    relatedEssaySlugs: [
      "the-art-of-explaining-tradeoffs",
      "the-product-manager-after-the-factory",
      "ai-doesnt-eliminate-tradeoffs",
    ],
    placeholderNote:
      "It will ask which decisions stay with people — the ones that still need judgment, accountability, and ownership.",
  },
  {
    slug: "ai-doesnt-eliminate-tradeoffs",
    title: "AI Doesn’t Eliminate Tradeoffs",
    category: "AI Leadership",
    description:
      "Artificial intelligence changes how we build software, but not the decisions leaders must make.",
    readingTime: "8 min",
    status: "draft",
    featured: false,
    relatedEssaySlugs: [
      "the-art-of-explaining-tradeoffs",
      "the-product-operating-model-actually-works",
      "the-iron-triangle-still-wins",
    ],
    placeholderNote:
      "It will argue that AI rearranges the economics of building software without removing the leadership judgments that still decide what ships.",
  },
];

/** Quiet pathway from the Tradeoff Model into the Writing library. */
export const continueExploring: ContinueExploringItem[] = [
  {
    slug: "the-iron-triangle-still-wins",
    type: "Leadership Foundation",
    description:
      "Every software organization eventually discovers the same three constraints.",
  },
  {
    slug: "why-more-people-often-slow-delivery",
    type: "Organizational Principle",
    description:
      "Why adding people often creates more coordination than capacity.",
  },
  {
    slug: "the-art-of-explaining-tradeoffs",
    type: "Leadership Communication",
    description:
      "Leadership isn't choosing perfect answers—it's helping others understand the cost of every decision.",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: Article): Article[] {
  return article.relatedEssaySlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((related): related is Article => Boolean(related));
}

export function articleHref(slug: string): string {
  return `/writing/${slug}`;
}

export const featuredArticle =
  articles.find((article) => article.featured) ?? articles[0];

export const supportingArticles = articles.filter((article) => !article.featured);
