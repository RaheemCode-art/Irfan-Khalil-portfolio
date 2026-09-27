"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleEnter = () => dotRef.current?.classList.add("scale-[2.5]");
    const handleLeave = () => dotRef.current?.classList.remove("scale-[2.5]");

    window.addEventListener("mousemove", handleMove);

    const interactiveEls = document.querySelectorAll("a, button");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    let frame;
    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.18;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x - 8}px, ${posRef.current.y - 8}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 h-4 w-4 rounded-full bg-[var(--color-accent)] mix-blend-difference pointer-events-none z-[999] transition-transform duration-200 ease-out hidden sm:block"
    />
  );
}