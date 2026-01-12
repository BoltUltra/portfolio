"use client";

import { motion } from "framer-motion";
import { cn, gradientText } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className={cn(
        "max-w-3xl space-y-3",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.4em] text-brand-600 dark:text-brand-300">
          {eyebrow}
        </p>
      )}
      <h2 className={cn("font-display text-3xl md:text-4xl", gradientText)}>
        {title}
      </h2>
      {description && (
        <p className="text-base text-gray-700 dark:text-gray-300/90">{description}</p>
      )}
    </motion.div>
  );
}

