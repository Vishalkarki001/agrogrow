"use client";

import { useEffect, useRef } from "react";

export function Background() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const scrolled = window.scrollY;
      const scale = 1.1 + scrolled * 0.0002;
      imgRef.current.style.transform = `scale(${Math.min(scale, 1.25)})`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-20">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=80"
        alt="Agriculture Background"
        className="bg-image w-full h-full object-cover transition-transform duration-100 ease-linear will-change-transform"
        style={{ transform: "scale(1.1)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, var(--color-overlay-from) 0%, var(--color-overlay-mid) 40%, var(--color-overlay-from) 70%, var(--color-overlay-to) 100%)",
        }}
      />
    </div>
  );
}
