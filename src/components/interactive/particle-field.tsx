"use client";

import { motion } from "framer-motion";

const particles = [
  { id: 1, delay: 0, duration: 8, size: 12, x: 20, y: 10 },
  { id: 2, delay: 1.2, duration: 10, size: 10, x: 60, y: 15 },
  { id: 3, delay: 0.6, duration: 9, size: 8, x: 80, y: 30 },
  { id: 4, delay: 1.8, duration: 12, size: 14, x: 25, y: 40 },
  { id: 5, delay: 0.3, duration: 11, size: 9, x: 70, y: 55 },
  { id: 6, delay: 2.1, duration: 13, size: 16, x: 40, y: 65 },
  { id: 7, delay: 0.9, duration: 9, size: 8, x: 85, y: 70 },
  { id: 8, delay: 1.5, duration: 10, size: 11, x: 50, y: 85 },
  { id: 9, delay: 0.2, duration: 7, size: 9, x: 15, y: 75 },
  { id: 10, delay: 1.8, duration: 12, size: 13, x: 5, y: 30 },
  { id: 11, delay: 2.4, duration: 11, size: 10, x: 55, y: 5 },
  { id: 12, delay: 0.4, duration: 9, size: 7, x: 90, y: 15 }
];

export function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-brand-400 opacity-30 blur-[2px]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          animate={{
            y: ["0%", "-10%", "0%"],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  );
}

