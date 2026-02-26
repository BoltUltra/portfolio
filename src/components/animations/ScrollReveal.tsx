"use client";
import { useEffect, useRef, ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsap";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  disabled?: boolean;
}

export const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  disabled = false,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || disabled) return;

    // Check for Framer Motion
    const hasFramer =
      element.hasAttribute("data-framer-motion") ||
      element.querySelector("[data-framer-motion]");

    if (hasFramer) return;

    const getInitialPosition = () => {
      switch (direction) {
        case "up":
          return { y: 100 };
        case "down":
          return { y: -100 };
        case "left":
          return { x: 100 };
        case "right":
          return { x: -100 };
      }
    };

    const animation = gsap.from(element, {
      ...getInitialPosition(),
      opacity: 0,
      duration,
      delay,
      ease: "power3.out",
      overwrite: "auto",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === element) st.kill();
      });
    };
  }, [direction, delay, duration, disabled]);

  return <div ref={ref}>{children}</div>;
};
