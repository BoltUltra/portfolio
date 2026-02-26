"use client";
import { useEffect, useRef, ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/utils/gsap";

interface StaggerContainerProps {
  children: ReactNode;
  stagger?: number;
  childSelector?: string;
}

export const StaggerContainer = ({
  children,
  stagger = 0.1,
  childSelector = "> *",
}: StaggerContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.from(element.querySelectorAll(childSelector), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 75%",
      },
    });
  }, [stagger, childSelector]);

  return <div ref={ref}>{children}</div>;
};
