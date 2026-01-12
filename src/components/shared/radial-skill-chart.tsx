"use client";

import { motion } from "framer-motion";

type Datum = {
  label: string;
  value: number;
};

type Props = {
  data: Datum[];
};

const size = 320;
const center = size / 2;
const maxRadius = center - 16;

function polarToCartesian(angle: number, value: number) {
  const radians = (angle - 90) * (Math.PI / 180);
  const radius = (value / 100) * maxRadius;
  return {
    x: center + radius * Math.cos(radians),
    y: center + radius * Math.sin(radians)
  };
}

export function RadialSkillChart({ data }: Props) {
  const points = data.map((item, index) => {
    const angle = (360 / data.length) * index;
    const { x, y } = polarToCartesian(angle, item.value);
    return `${x},${y}`;
  });

  return (
    <div className="relative flex flex-col items-center gap-4">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-72 w-72 rounded-full border border-white/10 bg-gray-950/60 p-6 shadow-inner"
      >
        {[0.25, 0.5, 0.75, 1].map((fraction) => (
          <circle
            key={fraction}
            cx={center}
            cy={center}
            r={maxRadius * fraction}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1}
          />
        ))}
        <motion.polygon
          points={points.join(" ")}
          fill="url(#radialGradient)"
          stroke="#2BD6FF"
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        />
        <defs>
          <radialGradient id="radialGradient">
            <stop offset="0%" stopColor="#2BD6FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8E2DE2" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        {data.map((item, index) => {
          const angle = (360 / data.length) * index;
          const { x, y } = polarToCartesian(angle, 110);
          return (
            <text
              key={item.label}
              x={x}
              y={y}
              textAnchor="middle"
              fill="white"
              fontSize={12}
            >
              {item.label}
            </text>
          );
        })}
      </svg>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300/80">
        {data.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1"
          >
            <span className="text-gray-400">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

