import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

// Check if element has Framer Motion
const hasFramerMotion = (element: Element) => {
  return (
    element.hasAttribute("data-framer-motion") ||
    element.classList.contains("motion-") ||
    element.hasAttribute("data-motion")
  );
};

// Safe query that excludes Framer Motion elements
export const querySafe = (
  selector: string,
  context: Document | Element = document
) => {
  const elements = context.querySelectorAll(selector);
  return Array.from(elements).filter((el) => !hasFramerMotion(el));
};

export const initSmoothScroll = () => {
  // Disable if Framer Motion scroll is detected
  if (document.querySelector("[data-framer-scroll]")) {
    return null;
  }

  return ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1,
    ignoreMobileResize: true,
  });
};

export const fadeIn = (element: string | Element, options = {}) => {
  const target =
    typeof element === "string" ? document.querySelector(element) : element;
  if (!target || hasFramerMotion(target)) return null;

  return gsap.from(target, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    overwrite: "auto",
    ...options,
  });
};

export const staggerFadeIn = (elements: string | Element[], delay = 0.1) => {
  const targets = typeof elements === "string" ? querySafe(elements) : elements;
  const safeTargets = Array.isArray(targets)
    ? targets.filter((el) => !hasFramerMotion(el as Element))
    : targets;

  if (!safeTargets || (Array.isArray(safeTargets) && safeTargets.length === 0))
    return null;

  return gsap.from(safeTargets, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: delay,
    ease: "power2.out",
    overwrite: "auto",
  });
};

export const revealText = (element: string | Element) => {
  const target =
    typeof element === "string" ? document.querySelector(element) : element;
  if (!target || hasFramerMotion(target)) return null;

  const split = new SplitText(target, { type: "chars,words" });
  return gsap.from(split.chars, {
    opacity: 0,
    y: 50,
    rotateX: -90,
    stagger: 0.02,
    duration: 0.8,
    ease: "back.out(1.7)",
    overwrite: "auto",
  });
};

export const scaleIn = (element: string | Element, options = {}) => {
  const target =
    typeof element === "string" ? document.querySelector(element) : element;
  if (!target || hasFramerMotion(target)) return null;

  return gsap.from(target, {
    scale: 0,
    duration: 0.6,
    ease: "back.out(1.7)",
    overwrite: "auto",
    ...options,
  });
};

export const slideIn = (element: string | Element, direction = "left") => {
  const target =
    typeof element === "string" ? document.querySelector(element) : element;
  if (!target || hasFramerMotion(target)) return null;

  const x = direction === "left" ? -100 : direction === "right" ? 100 : 0;
  const y = direction === "top" ? -100 : direction === "bottom" ? 100 : 0;

  return gsap.from(target, {
    x,
    y,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    overwrite: "auto",
  });
};

export const magneticEffect = (element: HTMLElement) => {
  if (hasFramerMotion(element)) return;

  const strength = 50;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x / strength,
      y: y / strength,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
      overwrite: "auto",
    });
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
    gsap.killTweensOf(element);
  };
};

// Kill all GSAP animations on an element
export const killAnimations = (element: string | Element) => {
  const target =
    typeof element === "string" ? document.querySelector(element) : element;
  if (target) {
    gsap.killTweensOf(target);
    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === target) st.kill();
    });
  }
};

export { gsap, ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText };
