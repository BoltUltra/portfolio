import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const hasFramerMotion = (element: HTMLElement) => {
  return (
    element.hasAttribute("data-framer-motion") ||
    element.classList.contains("motion-") ||
    element.hasAttribute("data-motion") ||
    element.style.transform !== ""
  );
};

export const useGsapAnimation = (
  animationFn: (
    element: HTMLElement
  ) => gsap.core.Tween | gsap.core.Timeline | null,
  deps: any[] = []
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current && !hasFramerMotion(ref.current)) {
      const animation = animationFn(ref.current);
      return () => {
        if (animation) animation.kill();
      };
    }
  }, deps);

  return ref;
};

export const useScrollAnimation = (
  animationFn: (element: HTMLElement) => void,
  options = {}
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current && !hasFramerMotion(ref.current)) {
      const ctx = gsap.context(() => {
        animationFn(ref.current!);
      });

      return () => ctx.revert();
    }
  }, []);

  return ref;
};

// New hook for safe GSAP usage alongside Framer Motion
export const useGsapSafe = (
  element: HTMLElement | null,
  animationProps: gsap.TweenVars
) => {
  useEffect(() => {
    if (!element || hasFramerMotion(element)) return;

    const tween = gsap.to(element, {
      ...animationProps,
      overwrite: "auto",
    });

    return () => tween.kill();
  }, [element, animationProps]);
};
