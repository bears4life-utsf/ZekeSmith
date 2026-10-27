export type ArticleStatus = "published" | "draft" | "comingSoon";

export type WritingCategory =
  | "Understand Constraints"
  | "Organize People"
  | "Make and Explain Decisions"
  | "Lead When AI Changes the Economics of Software";

export type Article = {
  slug: string;
  title: string;
  category: string;
  description: string;
  readingTime: string;
  status: ArticleStatus;
  /** Order on the Writing page. Null keeps the essay out of the public collection. */
  writingOrder: number | null;
  relatedEssaySlugs: readonly string[];
  /** Short essay-specific note shown on the placeholder article page. */
  placeholderNote: string;
};

export type ContinueExploringItem = {
  slug: string;
  type: string;
  description: string;
};

export type WritingCollectionSection = {
  category: WritingCategory;
  articles: Article[];
};

/** Essays that extend the Tradeoff Model and Writing library. */
export const articles: Article[] = [
  {
    slug: "the-iron-triangle-still-wins",
    title: "The Iron Triangle Still Wins",
    category: "Understand Constraints",
    description:
      "Why software leaders never escape the tradeoff between scope, speed, and quality.",
    readingTime: "7 min",
    status: "published",
    writingOrder: 1,
    relatedEssaySlugs: [
      "when-frameworks-become-the-problem",
      "understanding-and-explaining-tradeoffs",
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
    writingOrder: null,
    relatedEssaySlugs: [
      "when-frameworks-become-the-problem",
      "the-iron-triangle-still-wins",
      "the-product-operating-model-actually-works",
    ],
    placeholderNote:
      "It will show how added people can increase coordination cost faster than they increase delivery capacity — especially under unclear ownership.",
  },
  {
    slug: "when-frameworks-become-the-problem",
    title: "When Frameworks Become the Problem",
    category: "Organize People",
    description:
      "How coordination gradually became more expensive than the value it created.",
    readingTime: "13 min",
    status: "published",
    writingOrder: 2,
    relatedEssaySlugs: [
      "the-iron-triangle-still-wins",
      "understanding-and-explaining-tradeoffs",
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
    writingOrder: null,
    relatedEssaySlugs: [
      "when-frameworks-become-the-problem",
      "understanding-and-explaining-tradeoffs",
      "ai-doesnt-eliminate-tradeoffs",
    ],
    placeholderNote:
      "It will focus on what changes when teams own outcomes end to end — and what leadership has to give up for that ownership to be real.",
  },
  {
    slug: "understanding-and-explaining-tradeoffs",
    title: "Understanding and Explaining Tradeoffs",
    category: "Make and Explain Decisions",
    description:
      "Leadership isn’t about finding the perfect answer. It’s about making the tradeoffs clear.",
    readingTime: "12 min",
    status: "published",
    writingOrder: 3,
    relatedEssaySlugs: [
      "the-iron-triangle-still-wins",
      "when-frameworks-become-the-problem",
    ],
    placeholderNote:
      "It will look closely at how leaders frame constraints, make costs visible, and build support without pretending the hard parts disappear.",
  },
  {
    slug: "when-building-gets-cheap-choosing-gets-expensive",
    title: "When Building Gets Cheap, Choosing Gets Expensive",
    category: "Lead When AI Changes the Economics of Software",
    description:
      "AI makes producing software cheaper and faster, increasing the importance of deciding what is worth building.",
    readingTime: "4 min",
    status: "published",
    writingOrder: 4,
    relatedEssaySlugs: [
      "the-iron-triangle-still-wins",
      "understanding-and-explaining-tradeoffs",
      "when-frameworks-become-the-problem",
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
    writingOrder: null,
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
    writingOrder: null,
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
    writingOrder: null,
    relatedEssaySlugs: [
      "understanding-and-explaining-tradeoffs",
      "the-product-manager-after-the-factory",
      "ai-doesnt-eliminate-tradeoffs",
    ],
    placeholderNote:
      "It will ask which decisions stay with people — the ones that still need judgment, accountability, and ownership.",
  },
  {
    slug: "ai-doesnt-eliminate-tradeoffs",
    title: "AI Doesn’t Eliminate Tradeoffs",
    category: "Lead When AI Changes the Economics of Software",
    description:
      "AI removes some constraints but creates others around quality, verification, trust, and accountability.",
    readingTime: "8 min",
    status: "comingSoon",
    writingOrder: 5,
    relatedEssaySlugs: [
      "understanding-and-explaining-tradeoffs",
      "the-iron-triangle-still-wins",
      "when-building-gets-cheap-choosing-gets-expensive",
    ],
    placeholderNote:
      "It will argue that AI rearranges the economics of building software without removing the leadership judgments that still decide what ships.",
  },
];

/** Quiet pathway from the Tradeoff Model into the Writing library. */
export const continueExploring: ContinueExploringItem[] = [
  {
    slug: "the-iron-triangle-still-wins",
    type: "Understand Constraints",
    description:
      "Every software organization eventually discovers the same three constraints.",
  },
  {
    slug: "when-frameworks-become-the-problem",
    type: "Organize People",
    description:
      "How coordination can become more expensive than the value it creates.",
  },
  {
    slug: "understanding-and-explaining-tradeoffs",
    type: "Make and Explain Decisions",
    description:
      "Leadership isn't choosing perfect answers—it's helping others understand the cost of every decision.",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getWritingCollection(): Article[] {
  return articles
    .filter((article) => article.writingOrder !== null)
    .sort((a, b) => (a.writingOrder ?? 0) - (b.writingOrder ?? 0));
}

export function getWritingCollectionSections(): WritingCollectionSection[] {
  const sections: WritingCollectionSection[] = [];

  for (const article of getWritingCollection()) {
    const category = article.category as WritingCategory;
    const current = sections[sections.length - 1];
    if (current && current.category === category) {
      current.articles.push(article);
    } else {
      sections.push({ category, articles: [article] });
    }
  }

  return sections;
}

export function getPublishedArticles(): Article[] {
  return articles.filter((article) => article.status === "published");
}

export function getRelatedArticles(article: Article): Article[] {
  return article.relatedEssaySlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((related): related is Article => related?.status === "published");
}

export function articleHref(slug: string): string {
  return `/writing/${slug}`;
}

export function isReadableArticle(article: Article): boolean {
  return article.status === "published";
}
