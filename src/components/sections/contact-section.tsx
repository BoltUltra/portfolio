"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Github, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/BoltUltra/",
    icon: Github,
    color: "group-hover:text-white",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/dami0la",
    icon: Twitter,
    color: "group-hover:text-blue-400",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mayowa-sunusi-04689b15b/",
    icon: Linkedin,
    color: "group-hover:text-blue-500",
  },
  {
    name: "Email",
    href: "mailto:mayowa.u.sunusi@gmail.com",
    icon: Mail,
    color: "group-hover:text-red-400",
  },
  {
    name: "Phone",
    href: "tel:+2349061858947",
    icon: Phone,
    color: "group-hover:text-green-400",
    label: "09061858947",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="container mt-32 space-y-16 pb-32">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great."
        description="Reach out to me directly via email or connect on social media."
        align="center"
      />

      <div className="mx-auto max-w-4xl relative">
        {/* Ambient background glow */}
        <div
          className="absolute inset-x-0 -top-12 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          ></div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={
                link.name !== "Email" && link.name !== "Phone"
                  ? "_blank"
                  : undefined
              }
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-[32px] border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-950/60 p-8 text-center shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gray-400 dark:hover:border-white/20 hover:shadow-xl dark:hover:bg-gray-900/80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 via-transparent to-brand-500/0 opacity-0 transition-opacity duration-500 group-hover:from-brand-500/5 group-hover:to-brand-500/10 group-hover:opacity-100" />

              <div
                className={`rounded-full bg-gray-100 dark:bg-white/5 p-4 text-gray-600 dark:text-gray-400 transition-colors ${link.color}`}
              >
                <link.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="font-display text-lg text-gray-900 dark:text-white">
                  {link.name}
                </h3>
                {link.label && (
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {link.label}
                  </p>
                )}
              </div>
            </motion.a>
          ))}

          {/* Decorative Card to balance 3x2 grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative hidden lg:flex flex-col items-center justify-center overflow-hidden rounded-[32px] border border-dashed border-gray-300 dark:border-white/20 bg-transparent p-8 text-center opacity-60"
          >
            <div className="h-2 w-2 rounded-full bg-brand-500 animate-ping mb-4" />
            <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">
              Available for Work
            </p>
            <p className="text-xs text-gray-400 mt-2">GMT+1 (WAT)</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
