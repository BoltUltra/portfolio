"use client";
import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "@/utils/gsap";

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(overlayRef.current, {
      scaleY: 1,
      duration: 0.5,
      ease: "power3.inOut",
      transformOrigin: "top",
    })
      .to(overlayRef.current, {
        scaleY: 0,
        duration: 0.5,
        ease: "power3.inOut",
        transformOrigin: "bottom",
      })
      .from(
        contentRef.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3"
      );
  }, []);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-50 origin-top"
        style={{ scaleY: 0 }}
      />
      <div ref={contentRef}>{children}</div>
    </>
  );
};
