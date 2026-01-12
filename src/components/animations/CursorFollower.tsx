import { useEffect, useRef, useState } from "react";
import { gsap } from "@/utils/gsap";

export const CursorFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Skip on mobile/touch devices
    if ("ontouchstart" in window) {
      setIsMobile(true);
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    setIsVisible(true);
    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(cursor, {
        x: mouseX - 4,
        y: mouseY - 4,
        duration: 0,
        overwrite: "auto",
      });

      gsap.to(follower, {
        x: mouseX - 16,
        y: mouseY - 16,
        duration: 0.2,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      gsap.to([cursor, follower], {
        scale: 1.8,
        duration: 0.3,
        overwrite: "auto",
      });
      gsap.to(follower, {
        borderColor: "#3b82f6",
        duration: 0.2,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
        overwrite: "auto",
      });
      gsap.to(follower, {
        borderColor: "#3b82f6",
        duration: 0.2,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", () => setIsVisible(true));
    document.addEventListener("mouseleave", () => setIsVisible(false));

    // Attach to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, [data-cursor-hover], [role="button"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      gsap.killTweensOf([cursor, follower]);
    };
  }, []);

  if (isMobile || !isVisible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] will-change-transform"
        style={{
          left: 0,
          top: 0,
          transform: "translate(0, 0)",
        }}
      />
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-[9998] will-change-transform"
        style={{
          left: 0,
          top: 0,
          transform: "translate(0, 0)",
        }}
      />
    </>
  );
};
