"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { urlFor } from "@/sanity/client";

interface SkillData {
  name: string;
  bgColor: string;
  icon: string;
}

interface SkillsSectionProps {
  skills: SkillData[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills || skills.length === 0) return null;

  const half = Math.ceil((skills.length || 1) / 2);
  const row1 = skills.slice(0, half);
  const row2 = skills.slice(half);

  return (
    <section id="skills" className="container mt-32 space-y-12">
      <SectionHeading
        eyebrow="Tools"
        title="A comprehensive frontend toolkit."
        description="Leveraging modern ecosystems including React, Next.js, Vue, and Nuxt 3 to build scalable, high-performance applications from the ground up."
        align="center"
      />
      <div className="mt-12 flex flex-col gap-6 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1 - Moving Left */}
        <motion.div
          className="flex min-w-max shrink-0 items-center gap-10 py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...row1, ...row1, ...row1, ...row1].map((skill, index) => (
            <div
              key={`row1-${skill.name}-${index}`}
              className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-950/60 shadow-sm backdrop-blur transition-colors hover:border-gray-400 dark:hover:border-white/30"
            >
              {skill.icon && (
                <img
                  src={urlFor(skill.icon).height(48).url()}
                  alt={skill.name}
                  className="h-10 w-10 object-contain opacity-80 transition hover:opacity-100 dark:opacity-70 dark:hover:opacity-100"
                  title={skill.name}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Moving Right */}
        <motion.div
          className="flex min-w-max shrink-0 items-center gap-10 py-2"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...row2, ...row2, ...row2, ...row2].map((skill, index) => (
            <div
              key={`row2-${skill.name}-${index}`}
              className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-950/60 shadow-sm backdrop-blur transition-colors hover:border-gray-400 dark:hover:border-white/30"
            >
              {skill.icon && (
                <img
                  src={urlFor(skill.icon).height(48).url()}
                  alt={skill.name}
                  className="h-10 w-10 object-contain opacity-80 transition hover:opacity-100 dark:opacity-70 dark:hover:opacity-100"
                  title={skill.name}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
