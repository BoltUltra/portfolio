"use client";

import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button, type ButtonProps } from "@/components/ui/button";

type MagneticButtonProps = ButtonProps & {
  intensity?: number;
};

export function MagneticButton({
  children,
  intensity = 30,
  ...props
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const xPos = event.clientX - rect.left - rect.width / 2;
    const yPos = event.clientY - rect.top - rect.height / 2;
    x.set((xPos / rect.width) * intensity);
    y.set((yPos / rect.height) * intensity);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Button
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={handleLeave}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
}

