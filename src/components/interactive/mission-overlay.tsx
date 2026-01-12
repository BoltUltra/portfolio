"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useKonami } from "@/hooks/use-konami";

const roadmap = [
  {
    phase: "Now",
    focus: "Nuxt 3 mastery, scale design systems, teach frontend craft."
  },
  {
    phase: "Next",
    focus: "Deep dive into backend runtimes (Node, tRPC, Supabase edge)."
  },
  {
    phase: "Later",
    focus: "Ship a full-stack product solo—badass engineer unlocked."
  }
];

export function MissionOverlay() {
  const [open, setOpen] = React.useState(false);
  useKonami(() => setOpen(true));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/95 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative max-w-2xl rounded-3xl border border-brand-400/30 bg-gray-900/60 p-8 text-white shadow-lg"
          >
            <button
              className="absolute right-4 top-4 rounded-full border border-white/10 p-1"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-300">
              Konami unlocked
            </p>
            <h3 className="mt-2 font-display text-3xl">
              Developer Mission Statement
            </h3>
            <p className="mt-4 text-gray-300">
              Building resilient African-born products with cinematic motion,
              accessible UX, and full-stack confidence. This mission terminal
              reveals where I am on that journey.
            </p>
            <div className="mt-6 space-y-4">
              {roadmap.map((item) => (
                <div
                  key={item.phase}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm text-brand-200">{item.phase}</p>
                  <p className="text-lg font-semibold">{item.focus}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

