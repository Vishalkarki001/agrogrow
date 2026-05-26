"use client";

import { useEffect, useState } from "react";

type Particle = {
  left: string;
  duration: string;
  delay: string;
  size: string;
};

export function Particles({ count = 30 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items: Particle[] = Array.from({ length: count }).map(() => ({
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 15}s`,
      delay: `${Math.random() * 10}s`,
      size: `${3 + Math.random() * 4}px`,
    }));
    setParticles(items);
  }, [count]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}
