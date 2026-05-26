"use client";

import { useEffect, useRef, useState } from "react";

type Animation = "fade-up" | "fade-left" | "fade-right" | "zoom-in";

type Props = {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
};

export function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`animate-init ${animation} ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
