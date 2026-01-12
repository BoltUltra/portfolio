"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader() {
  const [progress, setProgress] = React.useState(0);
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 160);
    const timeout = setTimeout(() => setDone(true), 2600);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="h-24 w-24 rounded-full border-2 border-white/10 border-t-brand-400"
            />
            <p className="font-display text-lg text-white">
              Calibrating interface…
            </p>
            <div className="h-2 w-64 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-brand-500"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />
            </div>
            <span className="text-xs uppercase tracking-[0.4em] text-white/50">
              {Math.min(100, Math.round(progress))}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

