"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  return (
    <section id="projects" className="container mt-32 space-y-12">
      <SectionHeading
        eyebrow="Projects"
        title="Case studies with depth, parallax, and craft."
        description="Hover, flip, and explore 6+ project archetypes with live links, repos, and case study entries."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gray-950/70 p-6 shadow-card backdrop-blur"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative h-56 flex-1 overflow-hidden rounded-2xl border border-white/5">
                <Image
                  src={project.media.cover}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 320px, 90vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-brand-600 dark:text-brand-200">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.summary}</p>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-400">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-gray-300 dark:border-white/10 px-3 py-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 p-3 text-sm text-gray-700 dark:text-gray-300"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-700 dark:text-white/60">
                    {metric.label}
                  </p>
                  <p className="text-lg text-gray-900 dark:text-white">{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.actions.live && (
                <Button asChild>
                  <a href={project.actions.live} target="_blank" rel="noreferrer">
                    Live Link
                  </a>
                </Button>
              )}
              {project.actions.github && (
                <Button asChild variant="outline">
                  <a
                    href={project.actions.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </Button>
              )}
              {project.actions.caseStudy && (
                <Button asChild variant="ghost">
                  <a href={project.actions.caseStudy}>Case Study</a>
                </Button>
              )}
            </div>
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-brand-400/5 opacity-0 transition group-hover:opacity-100"
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <span className="absolute right-6 top-6 text-sm text-white/40">
              {String(index + 1).padStart(2, "0")}
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

