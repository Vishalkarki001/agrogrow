"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSeedling } from "react-icons/fa6";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] flex items-center justify-between transition-all duration-300 ease-out ${
        scrolled
          ? "py-3 px-6 md:px-12 bg-glass backdrop-blur-2xl border-b border-glass-border shadow-[var(--shadow)]"
          : "py-5 px-6 md:px-12"
      }`}
    >
      <Link
        href="/"
        className="flex items-center gap-2.5 font-display text-2xl font-bold text-text"
      >
        <FaSeedling className="text-accent text-2xl" />
        <span>AgroGrow</span>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-sm font-medium tracking-wide py-1 transition-colors duration-300 ${
                  active ? "text-text" : "text-text-muted hover:text-text"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  } group-hover:w-full`}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile hamburger */}
      <div className="flex md:hidden items-center z-[1001]">
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col gap-1.5 cursor-pointer"
        >
          <span
            className={`block w-7 h-0.5 bg-text rounded-sm transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-text rounded-sm transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-text rounded-sm transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <ul
        className={`fixed top-0 right-0 w-72 h-screen bg-bg-2 border-l border-glass-border flex flex-col items-center justify-center gap-8 transition-all duration-400 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-lg font-medium transition-colors ${
                  active ? "text-accent" : "text-text-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
