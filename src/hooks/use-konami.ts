import React from "react";

const sequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

export function useKonami(onTrigger: () => void) {
  const position = React.useRef(0);

  React.useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;
      const requiredKey = sequence[position.current];
      if (key === requiredKey) {
        position.current += 1;
        if (position.current === sequence.length) {
          onTrigger();
          position.current = 0;
        }
      } else {
        position.current = 0;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onTrigger]);
}

