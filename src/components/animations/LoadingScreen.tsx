"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/utils/gsap";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          y: "-100%",
          duration: 0.8,
          ease: "power3.inOut",
          onComplete,
        });
      },
    });

    tl.to(
      {},
      {
        duration: 2,
        onUpdate: function () {
          const prog = Math.round(this.progress() * 100);
          setProgress(prog);
        },
      }
    );

    gsap.to(progressRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.inOut",
    });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Loading</h2>
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-blue-500 rounded-full"
            style={{ width: "0%" }}
          />
        </div>
        <p className="text-white mt-4 text-2xl">{progress}%</p>
      </div>
    </div>
  );
};
