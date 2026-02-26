"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { urlFor } from "@/sanity/client";
import { MapPin, Code, Zap, Layers } from "lucide-react";

interface AboutData {
  title: string;
  description: string;
  imgUrl?: string;
}

export function AboutSection({ abouts = [] }: { abouts?: AboutData[] }) {
  if (!abouts || abouts.length === 0) return null;

  return (
    <section id="about" className="container mt-32 space-y-12">
      <SectionHeading
        eyebrow="About"
        title="Engineering ambitious web experiences."
        description="Combining technical expertise with creative problem-solving to build clean, scalable, and high-performing digital products."
      />
      <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
        <motion.div
          className="relative flex flex-col gap-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Profile Card Upgrade */}
          <div className="group relative h-[420px] overflow-hidden rounded-[40px] border border-white/10 bg-gray-950/40 p-1 shadow-2xl backdrop-blur-xl">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-transparent to-blue-600/20 opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

            <div className="absolute inset-1 rounded-[36px] bg-gray-950/80 p-8 shadow-inner backdrop-blur-md flex flex-col justify-between overflow-hidden">
              {/* Decorative corner glow */}
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand-500/20 blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 px-4 backdrop-blur-md">
                  <MapPin className="h-4 w-4 text-brand-400" />
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-300">
                    Lagos, Nigeria
                  </span>
                </div>
                <h3 className="mt-8 font-display text-4xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Frontend, Creative Developer.
                </h3>
              </div>

              <div className="relative z-10 space-y-4 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-brand-400">
                    <Code className="h-4 w-4" />
                  </div>
                  <p>Specializes in crafting immersive web ecosystems.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-blue-400">
                    <Zap className="h-4 w-4" />
                  </div>
                  <p>Focused on web performance & accessibility.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-purple-400">
                    <Layers className="h-4 w-4" />
                  </div>
                  <p>Architecting scalable, user-centric solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="relative overflow-hidden border-white/10 bg-gray-950/40 p-6 backdrop-blur-xl transition-all hover:bg-gray-900/60 shadow-lg">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-brand-500 to-blue-500 opacity-50" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              Mission
            </p>
            <p className="mt-3 text-lg leading-relaxed text-gray-300">
              To build accessible, fast, and visually striking web experiences
              that solve real user problems and elevate brands.
            </p>
          </Card>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2">
          {abouts.map((about, index) => (
            <motion.div
              key={about.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col overflow-hidden rounded-[32px] border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-gray-900 shadow-sm"
            >
              <div className="relative h-40 w-full overflow-hidden">
                {about.imgUrl && (
                  <img
                    src={urlFor(about.imgUrl).url()}
                    alt={about.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 bg-white dark:bg-gray-950/50">
                <h4 className="font-display text-xl text-gray-900 dark:text-white">
                  {about.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                  {about.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
