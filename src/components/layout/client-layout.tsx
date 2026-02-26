"use client";

import { useEffect, useState } from "react";
import { initSmoothScroll } from "@/utils/gsap";
import { LoadingScreen } from "@/components/animations/LoadingScreen";
import { CursorFollower } from "@/components/animations/CursorFollower";
import { Navigation } from "@/components/Navigation";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [smoothScrollEnabled, setSmoothScrollEnabled] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Wait for DOM to be ready
      setTimeout(() => {
        const smoother = initSmoothScroll();
        setSmoothScrollEnabled(!!smoother);
      }, 100);
    }
  }, [loading]);

  // Disable GSAP animations if Framer Motion is detected
  useEffect(() => {
    const framerElements = document.querySelectorAll("[data-framer-motion]");
    if (framerElements.length > 0) {
      document.body.setAttribute("data-prefer-framer", "true");
    }
  }, []);

  return (
    <>
      <CursorFollower />
      <Navigation />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && <div data-gsap-container="true">{children}</div>}
    </>
  );
}
