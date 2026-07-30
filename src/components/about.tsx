"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { useEnableMotion } from "@/lib/motion";

export function About() {
  const enableMotion = useEnableMotion();
  const { buildingOutside } = site.about;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-border bg-[color-mix(in_srgb,var(--background-elevated)_40%,var(--background))]"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-28 sm:px-8 sm:py-32">
        <motion.blockquote
          initial={enableMotion ? { opacity: 1, y: 12 } : false}
          whileInView={enableMotion ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl border-l border-accent/40 pl-5 sm:pl-6"
        >
          <p className="font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl sm:leading-snug">
            {site.about.pullQuote}
          </p>
        </motion.blockquote>

        <motion.div
          initial={enableMotion ? { opacity: 1, y: 14 } : false}
          whileInView={enableMotion ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10 lg:gap-12"
        >
          <div className="relative mx-auto aspect-[4/5] w-40 shrink-0 overflow-hidden rounded-2xl border border-border bg-[#efeee9] shadow-soft sm:mx-0 sm:w-44 lg:w-48">
            <Image
              src="/images/zeke-headshot.jpg"
              alt="Professional portrait of Zeke S. Smith"
              fill
              sizes="(max-width: 640px) 160px, 192px"
              className="object-cover object-top"
              priority={false}
            />
          </div>

          <div className="min-w-0 max-w-2xl flex-1">
            <SectionHeading
              eyebrow="About"
              id="about-heading"
              title={site.about.title}
            />
            <div className="mt-8 space-y-5 text-pretty text-base leading-[1.7] text-muted sm:text-lg sm:leading-[1.7]">
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={enableMotion ? { opacity: 1, y: 14 } : false}
          whileInView={enableMotion ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.45,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 max-w-2xl border-t border-border pt-12 sm:mt-24 sm:pt-14"
        >
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
            {buildingOutside.eyebrow}
          </p>
          <p className="mt-6 font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-[1.75rem] sm:leading-snug">
            {buildingOutside.lead}
          </p>
          <p className="mt-5 text-pretty text-base leading-[1.7] text-muted sm:text-lg sm:leading-[1.7]">
            {buildingOutside.supporting}
          </p>
          <a
            href={site.bigSandLabs.url}
            className="mt-8 inline-flex text-sm font-medium text-accent transition-colors duration-300 hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            rel="noopener noreferrer"
            target="_blank"
          >
            {buildingOutside.ctaLabel}
            <span aria-hidden="true"> →</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
