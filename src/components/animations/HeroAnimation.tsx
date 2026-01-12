import { useEffect, useRef } from "react";
import { gsap, querySafe } from "@/utils/gsap";

export const HeroAnimation = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", overwrite: "auto" },
        });

        const titleElements =
          containerRef.current?.querySelectorAll(".hero-title");
        const subtitleElements =
          containerRef.current?.querySelectorAll(".hero-subtitle");
        const ctaElements = containerRef.current?.querySelectorAll(".hero-cta");
        const scrollElements = containerRef.current?.querySelectorAll(
          ".hero-scroll-indicator"
        );
        const floatElements =
          containerRef.current?.querySelectorAll(".hero-float");

        if (titleElements && titleElements.length) {
          tl.from(titleElements, {
            opacity: 0,
            y: 100,
            duration: 1,
            stagger: 0.2,
          });
        }

        if (subtitleElements && subtitleElements.length) {
          tl.from(
            subtitleElements,
            {
              opacity: 0,
              y: 50,
              duration: 0.8,
            },
            "-=0.5"
          );
        }

        if (ctaElements && ctaElements.length) {
          tl.from(
            ctaElements,
            {
              opacity: 0,
              scale: 0.8,
              duration: 0.6,
            },
            "-=0.3"
          );
        }

        if (scrollElements && scrollElements.length) {
          tl.from(scrollElements, {
            opacity: 0,
            y: -20,
            duration: 0.5,
          });
        }

        // Floating animation
        if (floatElements && floatElements.length) {
          gsap.to(floatElements, {
            y: -20,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            overwrite: false,
          });
        }
      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return <div ref={containerRef}>{children}</div>;
};
