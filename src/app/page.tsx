import Link from "next/link";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProductTradeoffEngine } from "@/components/product-tradeoff-engine";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ProductTradeoffEngine />
        <About />
        <p className="mx-auto w-full max-w-6xl px-5 pb-16 pt-2 sm:px-8 sm:pb-20">
          <Link
            href="/projects"
            className="text-sm text-muted/80 underline decoration-border underline-offset-[0.2em] transition-colors duration-300 hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Experiments &amp; side projects
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
