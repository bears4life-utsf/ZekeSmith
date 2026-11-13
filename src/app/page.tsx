import type { Metadata } from "next";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LatestWriting } from "@/components/latest-writing";
import { ProductTradeoffEngine } from "@/components/product-tradeoff-engine";
import { Speaking } from "@/components/speaking";
import { site } from "@/content/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 627,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <LatestWriting />
        <Speaking />
        <About />
        <div className="border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-5 pt-12 sm:px-8 sm:pt-14">
            <p className="max-w-2xl text-pretty font-serif text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
              {site.tradeoffs.leadIn}
            </p>
          </div>
          <ProductTradeoffEngine />
        </div>
      </main>
      <Footer />
    </>
  );
}
