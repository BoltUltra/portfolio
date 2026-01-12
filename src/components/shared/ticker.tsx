"use client";

import { motion, useAnimationControls } from "framer-motion";
import React from "react";

type Props = {
  items: string[];
};

export function InfiniteTicker({ items }: Props) {
  const controls = useAnimationControls();
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 20
      }
    });
  }, [controls]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-full border border-white/10 bg-white/5 py-3 backdrop-blur"
    >
      <motion.div
        animate={controls}
        className="flex min-w-max gap-6 uppercase tracking-[0.3em] text-xs text-white/60"
      >
        {[...items, ...items].map((item, idx) => (
          <span key={`${item}-${idx}`} className="px-4">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

