"use client";

import React from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

const bars = Array.from({ length: 12 });

export function MusicVisualizer() {
  const [active, setActive] = React.useState(false);
  const [levels, setLevels] = React.useState(() =>
    bars.map(() => Math.random())
  );

  React.useEffect(() => {
    if (!active) return;
    let frame: number;
    const loop = () => {
      setLevels((prev) =>
        prev.map(() => Number((Math.random() * 0.8 + 0.2).toFixed(2)))
      );
      frame = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(frame);
  }, [active]);

  return (
    <button
      onClick={() => setActive((prev) => !prev)}
      className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 transition hover:border-white/30"
    >
      <div className="flex items-end gap-1">
        {levels.map((level, idx) => (
          <motion.span
            key={idx}
            animate={{ height: active ? level * 20 + 6 : 6 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "w-1 rounded-full bg-brand-400",
              !active && "opacity-50"
            )}
          />
        ))}
      </div>
      <span>{active ? "Visualizing" : "Visualizer Off"}</span>
      {active ? (
        <Volume2 className="h-4 w-4 text-brand-300" />
      ) : (
        <VolumeX className="h-4 w-4 text-gray-400" />
      )}
    </button>
  );
}

