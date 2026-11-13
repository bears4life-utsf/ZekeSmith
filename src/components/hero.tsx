"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { useEnableMotion } from "@/lib/motion";

export function Hero() {
  const enableMotion = useEnableMotion();

  // Never SSR with opacity: 0 — if animate never fires, content stays readable.
  const fadeUp = (delay = 0) => ({
    initial: enableMotion ? { opacity: 1, y: 14 } : false,
    animate: { opacity: 1, y: 0 },
    transition: enableMotion
      ? {
          duration: 0.55,
          delay,
          ease: [0.22, 1, 0.36, 1] as const,
        }
      : { duration: 0 },
  });

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      <div className="hero-atmosphere absolute inset-0 -z-20" aria-hidden="true" />
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto w-full max-w-6xl px-5 pt-32 sm:px-8 lg:pt-36">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="max-w-3xl">
            <motion.p
              {...fadeUp(0)}
              className="text-xs font-medium uppercase tracking-[0.18em] text-accent"
            >
              {site.hero.eyebrow}
            </motion.p>

            <motion.h1
              id="hero-heading"
              {...fadeUp(0.08)}
              className="mt-5 text-balance text-4xl font-medium leading-[1.12] tracking-tight text-foreground sm:mt-6 sm:text-5xl lg:text-[3.15rem]"
            >
              {site.hero.headline}
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="mt-7 max-w-2xl text-pretty text-lg leading-[1.7] text-muted sm:mt-8 sm:text-xl sm:leading-[1.7]"
            >
              {site.hero.supporting}
            </motion.p>

            <motion.div
              {...fadeUp(0.24)}
              className="mt-9 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
            >
              <Link
                href={site.hero.primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity duration-300 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {site.hero.primaryCta.label}
              </Link>
              <a
                href={site.hero.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-border bg-background-elevated/70 px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-foreground/20 hover:bg-background-elevated focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {site.hero.secondaryCta.label}
              </a>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.2)}
            className="mx-auto w-40 sm:w-44 lg:mx-0 lg:w-full lg:justify-self-end"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-[#efeee9] shadow-soft">
              <Image
                src={site.hero.headshot.src}
                alt={site.hero.headshot.alt}
                fill
                sizes="(max-width: 1024px) 176px, 288px"
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none mt-5 h-5 bg-gradient-to-b from-transparent to-[color-mix(in_srgb,var(--background-elevated)_55%,var(--background))] sm:mt-6 sm:h-6"
      />
    </section>
  );
}
