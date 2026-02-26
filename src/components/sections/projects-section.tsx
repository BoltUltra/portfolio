"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/client";

interface ProjectData {
  title: string;
  description: string;
  projectLink?: string;
  codeLink?: string;
  imgUrl?: string;
  tags?: string[];
}

interface ProjectsSectionProps {
  projects: ProjectData[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const allTags = new Set<string>();
    projects.forEach((p) => {
      p.tags?.forEach((t) => {
        if (t.toLowerCase() !== "all") allTags.add(t);
      });
    });
    return ["All", ...Array.from(allTags)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.tags?.includes(activeTag));
  }, [projects, activeTag]);

  if (!projects || projects.length === 0) {
    return (
      <div className="container mt-32 p-10 bg-red-900/50 text-white rounded-2xl border border-red-500">
        <h2 className="text-2xl font-bold mb-4">Debugging ProjectsSection</h2>
        <p className="mb-4">No projects found or data is empty.</p>
        <pre className="bg-black/50 p-4 rounded-xl overflow-auto text-sm">
          {JSON.stringify({ projects }, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <section id="projects" className="container mt-32 space-y-12">
      <SectionHeading
        eyebrow="Projects"
        title="Featured engineering work."
        description="A curated selection of scalable applications, complex interfaces, and technical solutions."
      />

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-5 py-2 text-sm transition-all duration-300 ${
              activeTag === tag
                ? "bg-gray-900 text-white dark:bg-white dark:text-black font-medium shadow-md"
                : "border border-gray-300 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-gray-800 dark:hover:border-white/50"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-8 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const slug = project.title
              ? project.title.toLowerCase().replace(/\s+/g, "-")
              : `project-${index}`;
            const coverImg = project.imgUrl
              ? urlFor(project.imgUrl).url()
              : "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500";

            return (
              <motion.article
                key={slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gray-950/70 p-6 shadow-card backdrop-blur flex flex-col h-full"
              >
                <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-white/5 mb-6 shrink-0">
                  <Image
                    src={coverImg}
                    alt={project.title || "Project Image"}
                    fill
                    sizes="(min-width: 1024px) 320px, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-brand-600 dark:text-brand-200">
                      WEB PROJECT
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-gray-900 dark:text-white">
                      {project.title || "Untitled Project"}
                    </h3>
                    <p>{project.description}</p>
                    {/* <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 bg-black/50 p-2 rounded">
                    <strong>Raw Item:</strong>{" "}
                    <pre className="text-[10px] break-words whitespace-pre-wrap">
                      {JSON.stringify(project)}
                    </pre>
                  </div> */}
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-400">
                    {project.tags?.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-gray-300 dark:border-white/10 px-3 py-1"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.projectLink && (
                      <Button asChild>
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Link
                        </a>
                      </Button>
                    )}
                    {project.codeLink && (
                      <Button asChild variant="outline">
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
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
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
