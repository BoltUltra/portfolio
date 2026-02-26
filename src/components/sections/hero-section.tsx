"use client";

import { motion } from "framer-motion";
import { heroContent } from "@/content";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { ParticleField } from "@/components/interactive/particle-field";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-gray-950 pt-20"
      id="hero"
    >
      {/* Immersive Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
        {/* Glow spots */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-600/20 blur-[150px]" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 px-4 lg:px-6">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Centered Typography & CTAs */}
          <div className="space-y-10 flex flex-col items-center">
            {/* Massive Typography Lockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-4 flex flex-col items-center"
            >
              <h1 className="font-display text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-[5.5rem]">
                Creative
                <br className="sm:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-400 to-purple-400">
                  {" "}
                  Frontend
                </span>{" "}
                Engineer.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
                {heroContent.description} {heroContent.subtitle}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {heroContent.ctas.map((cta, index) => {
                if (index === 0) {
                  return (
                    <MagneticButton key={cta.label} asChild>
                      <a
                        href={cta.href}
                        className="group flex items-center gap-2 text-gray-950 hover:bg-gray-200 px-8 py-4 rounded-full font-semibold transition-all"
                      >
                        {cta.label}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </MagneticButton>
                  );
                }
                return (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className="group flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors"
                  >
                    <Sparkles className="h-4 w-4 text-brand-400" />
                    {cta.label}
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
