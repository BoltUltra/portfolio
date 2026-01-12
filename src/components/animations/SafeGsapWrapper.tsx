import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "@/utils/gsap";

interface SafeGsapWrapperProps {
  children: ReactNode;
  className?: string;
  useGsap?: boolean;
}

export const SafeGsapWrapper = ({
  children,
  className = "",
  useGsap = true,
}: SafeGsapWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !useGsap) return;

    // Mark as GSAP-controlled
    ref.current.setAttribute("data-gsap-animation", "true");

    return () => {
      if (ref.current) {
        gsap.killTweensOf(ref.current);
      }
    };
  }, [useGsap]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
