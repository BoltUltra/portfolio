"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { projects } from "@/content";
import { Button } from "@/components/ui/button";

export function FloatingAssistant() {
  const [open, setOpen] = React.useState(false);
  const highlightedProjects = projects.slice(0, 3);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-80 rounded-3xl border border-white/10 bg-gray-950/90 p-5 shadow-2xl backdrop-blur"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="font-semibold text-white">Mayowa Sidekick</p>
              <button
                className="rounded-full border border-white/10 p-1 text-white/70 hover:text-white"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-gray-300/90">
              Ask me about Mayowa’s experience or jump directly into highlighted
              case studies.
            </p>
            <div className="mt-3 space-y-2">
              {highlightedProjects.map((project) => (
                <button
                  key={project.slug}
                  className="w-full rounded-2xl border border-white/5 bg-white/5 px-3 py-2 text-left text-sm text-white/80 transition hover:border-white/20"
                >
                  <span className="block font-medium text-white">
                    {project.title}
                  </span>
                  <span className="text-xs text-gray-400">
                    {project.summary}
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <input
                aria-label="Ask the assistant"
                placeholder="Ask about projects…"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-brand-400 focus:outline-none"
              />
              <Button size="sm" variant="ghost" className="rounded-full p-2">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur transition hover:border-white/30"
      >
        <MessageCircle className="h-4 w-4 text-brand-300" />
        <span>Portfolio Assistant</span>
      </button>
    </div>
  );
}

