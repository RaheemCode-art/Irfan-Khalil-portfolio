"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ value, duration = 1200 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("0");
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const numericMatch = value.match(/[\d.]+/);
          const suffix = value.replace(/[\d.]+/, "");
          const target = numericMatch ? parseFloat(numericMatch[0]) : 0;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const current = Math.floor(progress * target);
            setDisplay(`${current}${suffix}`);
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}