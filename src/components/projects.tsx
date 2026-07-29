"use client";

import { motion } from "framer-motion";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { site } from "@/content/site";
import { useEnableMotion } from "@/lib/motion";

export function Projects() {
  const enableMotion = useEnableMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto w-full max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-32"
    >
      <motion.header
        initial={enableMotion ? { opacity: 1, y: 12 } : false}
        whileInView={enableMotion ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {site.projects.eyebrow}
        </p>
        <h1
          id="projects-heading"
          className="mt-5 text-balance text-3xl font-medium tracking-tight text-foreground sm:mt-6 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]"
        >
          {site.projects.headline}
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base leading-[1.75] text-muted sm:mt-7 sm:text-lg sm:leading-[1.75]">
          {site.projects.intro}
        </p>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted/85">
          {site.projects.aside}
        </p>
      </motion.header>

      <div className="mt-16 grid gap-6 sm:mt-20 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
