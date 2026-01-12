"use client";

import { motion } from "framer-motion";
import { skillsContent } from "@/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SkillsSection() {
  return (
    <section id="skills" className="container mt-32 space-y-12">
      <SectionHeading
        eyebrow="Skills"
        title="A multi-runtime toolkit with motion-first thinking."
        description="React, Next.js, Vue, Nuxt 3, Tailwind, Firebase, REST APIs, auth, and the tooling that keeps things premium."
        align="center"
      />
      <div className="flex flex-wrap justify-center gap-3">
        {skillsContent.badges.map((badge) => (
          <motion.span
            key={badge}
            whileHover={{ scale: 1.05 }}
            className="rounded-full border border-gray-300 dark:border-white/10 px-4 py-2 text-sm text-gray-800 dark:text-white/80"
          >
            {badge}
          </motion.span>
        ))}
      </div>
      <div className="flex justify-center">
        <Tabs
          defaultValue={skillsContent.categories[0]?.label ?? ""}
          className="w-full max-w-3xl"
        >
          <TabsList className="w-full">
            {skillsContent.categories.map((category) => (
              <TabsTrigger key={category.label} value={category.label}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {skillsContent.categories.map((category) => (
            <TabsContent key={category.label} value={category.label}>
              <p className="text-gray-700 dark:text-gray-300">
                {category.description}
              </p>
              <div className="mt-6 space-y-4">
                {category.stack.map((stack) => (
                  <div
                    key={stack.title}
                    className="rounded-3xl border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-gray-900 dark:text-white">
                        {stack.title}
                      </p>
                    </div>
                    {stack.tagline && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {stack.tagline}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
