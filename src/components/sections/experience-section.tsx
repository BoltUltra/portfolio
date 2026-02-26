"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/shared/section-heading";

export function ExperienceSection({
  experiences = [],
}: {
  experiences?: any[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".experience-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="container mt-32 space-y-12">
      <SectionHeading
        eyebrow="Experience"
        title="Impact & engineering history."
        description="Delivering scalable solutions, premium interfaces, and quantifiable results across startups and enterprise teams."
        align="center"
      />
      <div ref={containerRef} className="relative">
        <div className="absolute left-6 top-4 bottom-4 hidden w-px bg-brand-400/60 lg:block" />
        <div className="space-y-8">
          {[...experiences]
            .sort((a, b) => {
              // Extract the first year from duration string (e.g., "2024 - Present" -> 2024)
              const yearA = parseInt(a.duration.match(/\d{4}/)?.[0] || "0", 10);
              const yearB = parseInt(b.duration.match(/\d{4}/)?.[0] || "0", 10);
              // Fallback to string comparison if years can't be parsed
              if (yearB === yearA) return b.duration.localeCompare(a.duration);
              return yearB - yearA; // sort descending (newest first)
            })
            .map((experience, index) => (
              <div
                key={experience.company}
                className="experience-card relative rounded-3xl border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-950/70 p-6 shadow-card backdrop-blur"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
                  {/* <img
                  src={experience.logo}
                  alt={experience.company}
                  className="h-16 w-32 rounded-2xl border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 object-contain p-3"
                /> */}
                  <div className="flex-1 space-y-1">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-700 dark:text-white/60">
                      {experience.duration}
                    </p>
                    <h3 className="font-display text-2xl text-gray-900 dark:text-white">
                      {experience.role} · {experience.company}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {(experience.technologies || []).join(" · ")}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 list-disc space-y-3 pl-5 text-gray-700 dark:text-gray-300">
                  {experience.achievements?.map((achievement: string) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
                <div className="absolute left-0 top-8 hidden h-4 w-4 -translate-x-2 rounded-full bg-brand-400 lg:block" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
