"use client";

import React from "react";
import { motion } from "framer-motion";
import { contactContent } from "@/content";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(contactContent.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="container mt-32 space-y-10">
      <SectionHeading
        eyebrow="Contact"
        title={contactContent.title}
        description={contactContent.subtitle}
        align="center"
      />
      <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-3xl border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 p-6 shadow-card">
          <form className="space-y-4">
            <label className="block">
              <span className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-white/60">
                Name
              </span>
              <input
                type="text"
                className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-950/60 px-4 py-3 text-gray-900 dark:text-white focus:border-brand-400 focus:outline-none"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-white/60">
                Email
              </span>
              <input
                type="email"
                className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-950/60 px-4 py-3 text-gray-900 dark:text-white focus:border-brand-400 focus:outline-none"
                placeholder="you@email.com"
              />
            </label>
            <label className="block">
              <span className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-white/60">
                Message
              </span>
              <textarea
                className="mt-2 w-full rounded-2xl border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-950/60 px-4 py-3 text-gray-900 dark:text-white focus:border-brand-400 focus:outline-none"
                rows={5}
                placeholder="Project details, timeline, dreams…"
              />
            </label>
            <Button className="w-full">Send Message</Button>
          </form>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-gray-300 dark:border-white/10 bg-gray-100 dark:bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.4em] text-gray-700 dark:text-white/60">
            Connect
          </p>
          <p className="mt-3 text-3xl text-gray-900 dark:text-white">{contactContent.email}</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-4"
            onClick={handleCopy}
          >
            {copied ? "Copied 🎉" : "Copy email"}
          </Button>
          <div className="mt-6 flex flex-wrap gap-3">
            {contactContent.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-gray-300 dark:border-white/10 px-4 py-2 text-sm text-gray-800 dark:text-white/80 hover:border-gray-400 dark:hover:border-white/30"
              >
                {social.label}
              </a>
            ))}
          </div>
          <div className="mt-10 grid gap-3 text-sm text-gray-700 dark:text-gray-300">
            <p>Timezone · GMT+1 (WAT)</p>
            <p>Availability · Select collaborations</p>
          </div>
          <div className="pointer-events-none absolute inset-0">
            {contactContent.orbiting.map((label, index) => (
              <motion.span
                key={label}
                className="absolute rounded-full border border-gray-300 dark:border-white/10 px-3 py-1 text-xs text-gray-700 dark:text-white/70"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20 + index * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  top: `${20 + index * 6}%`,
                  left: index % 2 === 0 ? "60%" : "10%"
                }}
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

