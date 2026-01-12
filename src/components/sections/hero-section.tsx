"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroContent } from "@/content";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { InfiniteTicker } from "@/components/shared/ticker";
import { Badge } from "@/components/ui/badge";
import { ParticleField } from "@/components/interactive/particle-field";

const floatingCards = [
  { label: "React", detail: "App Router + RSC" },
  { label: "Nuxt 3", detail: "Nitro · Hybrid" },
  { label: "Firebase", detail: "Auth + Functions" },
];

export function HeroSection() {
  return (
    <section className="container relative pt-32 pb-32" id="hero">
      <div className="container md:grid gap-12 md:grid-cols-2 px-4 lg:px-6">
        <div className="space-y-8">
          <Badge variant="glow">{heroContent.eyebrow}</Badge>
          <h1 className="font-display text-4xl leading-tight text-white dark:text-white md:text-5xl">
            {heroContent.title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {heroContent.description}
            <br />
            {heroContent.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {heroContent.ctas.map((cta) => {
              const variant =
                cta.variant === "secondary"
                  ? "outline"
                  : cta.variant === "ghost"
                  ? "ghost"
                  : "default";
              return (
                <MagneticButton key={cta.label} asChild variant={variant}>
                  <a href={cta.href}>{cta.label}</a>
                </MagneticButton>
              );
            })}
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroContent.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-3xl border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 p-4 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-gray-700 dark:text-white/60">
                  {highlight.label}
                </p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {highlight.value}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {highlight.helper}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
            <span>📍 {heroContent.location}</span>
            <span>🟢 {heroContent.availability}</span>
            <InfiniteTicker items={heroContent.ticker} />
          </div>
        </div>
        <div className="relative md:flex hidden items-center justify-center min-w-0 lg:px-20">
          <ParticleField />
          <motion.div
            className="relative h-[480px] w-[360px] flex-shrink-0 rounded-[40px] border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/10 shadow-2xl backdrop-blur"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute inset-4 rounded-[32px] bg-white dark:bg-gray-950/40" />
            <Image
              src="/media/projects/laboratory/cover.svg"
              alt="Mayowa abstract avatar"
              fill
              sizes="(min-width: 1024px) 360px, 80vw"
              className="rounded-[40px] object-cover opacity-60 mix-blend-screen"
            />
          </motion.div>
          {floatingCards.map((card, index) => (
            <motion.div
              key={card.label}
              className="absolute rounded-3xl border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-950/80 px-4 py-3 shadow-lg backdrop-blur hidden lg:block"
              style={{
                top: `${index * 120}px`,
                right: index % 2 === 0 ? "-80px" : undefined,
                left: index % 2 !== 0 ? "-60px" : undefined,
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {card.label}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {card.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-brand-500/5"
      />
    </section>
  );
}
