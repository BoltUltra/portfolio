"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { services } from "@/content";
import { SectionHeading } from "@/components/shared/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="container mt-32 space-y-12">
      <SectionHeading
        eyebrow="Services"
        title="Floating cards showcasing premium capabilities."
        description="Frontend builds, dashboards, APIs, auth, UI upgrades, and performance engagements."
        align="center"
      />
      <div className="grid gap-8 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon =
            Icons[service.icon as keyof typeof Icons] ?? Icons.Activity;
          return (
            <motion.div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur"
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/20 bg-white/5 p-3">
                  <Icon className="h-6 w-6 text-brand-300" />
                </div>
                <span className="text-sm uppercase tracking-[0.3em] text-white/50">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl text-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400">{service.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {service.outcomes.map((outcome) => (
                  <li key={outcome}>• {outcome}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

