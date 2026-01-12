"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="container mt-32 space-y-12">
      <SectionHeading
        eyebrow="About"
        title="High-end craft rooted in Nigeria."
        description="Complex layouts, glassmorphism, smooth scroll stories, and premium vibes for forward-looking teams."
      />
      <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
        <motion.div
          className="relative flex flex-col gap-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[420px] overflow-hidden rounded-[40px] border border-gray-300 dark:border-white/10 bg-brand-500/10 p-6">
            <div className="absolute inset-4 rounded-[32px] border border-gray-200 dark:border-white/5" />
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-700 dark:text-white/70">
                  Lagos, Nigeria
                </p>
                <h3 className="mt-4 font-display text-3xl text-gray-900 dark:text-white">
                  Premium frontend craftsmanship.
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-800 dark:text-gray-200">
                <p>🕹️ Loves music, gaming, and adventure epics.</p>
                <p>🧑‍🏫 Teaches frontend craft.</p>
                <p>🛠️ Works inside WebStorm.</p>
              </div>
            </div>
          </div>
          <Card className="p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-brand-600 dark:text-brand-200">
              Mission
            </p>
            <p className="mt-2 text-lg text-gray-900 dark:text-white">{aboutContent.mission}</p>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {aboutContent.narrative.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-700 dark:text-gray-300">
              {paragraph}
            </p>
          ))}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-700 dark:text-white/60">
                Experience
              </p>
              <ul className="mt-4 space-y-3 text-sm text-gray-800 dark:text-white/80">
                {aboutContent.experiences.map((exp) => (
                  <li key={exp}>{exp}</li>
                ))}
              </ul>
            </Card>
            <Card>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-700 dark:text-white/60">
                Fun facts
              </p>
              <ul className="mt-4 space-y-3 text-sm text-gray-800 dark:text-white/80">
                {aboutContent.funFacts.map((fact) => (
                  <li key={fact.label}>
                    <span className="text-gray-900 dark:text-white">{fact.label}</span> ·{" "}
                    {fact.value}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="flex flex-wrap gap-3">
            {aboutContent.tooling.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-gray-300 dark:border-white/10 px-4 py-2 text-sm text-gray-800 dark:text-white/80"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

