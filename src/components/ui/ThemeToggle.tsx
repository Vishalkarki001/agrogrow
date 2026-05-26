"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = mounted ? resolvedTheme ?? theme : "dark";
  const isDark = current === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full border border-glass-border bg-glass backdrop-blur-md flex items-center justify-center text-text hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
    >
      <span
        className={`absolute transition-all duration-500 ${
          isDark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
        }`}
      >
        <FaSun className="text-base" />
      </span>
      <span
        className={`absolute transition-all duration-500 ${
          isDark ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
        }`}
      >
        <FaMoon className="text-base" />
      </span>
    </button>
  );
}
