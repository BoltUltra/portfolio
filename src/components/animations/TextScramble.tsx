"use client";
import { useState, useEffect, useRef } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number;
}

export const TextScramble = ({
  text,
  className = "",
  duration = 0.8,
}: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();
  const iterationRef = useRef(0);

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      iterationRef.current = 0;
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    const chars = "!<>-_\\/[]{}—=+*^?#________";
    iterationRef.current = 0;
    const totalIterations = text.length * 3;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (index < iterationRef.current) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayText(scrambled);

      if (iterationRef.current >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
      }

      iterationRef.current += 1 / 3;
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, text]);

  return (
    <span
      className={`cursor-pointer transition-all ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setDisplayText(text);
      }}
      style={{ display: "inline-block" }}
    >
      {displayText}
    </span>
  );
};
