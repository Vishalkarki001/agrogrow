"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
};

export function Modal({ open, onClose, children, ariaLabel }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      className={`fixed inset-0 z-[9998] flex items-center justify-center p-4 transition-all duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-bg-2 border border-glass-border rounded-3xl shadow-[var(--shadow)] transition-all duration-300 ${
          open ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-glass border border-glass-border flex items-center justify-center text-text-muted hover:text-text hover:border-accent transition-all"
        >
          <FaXmark className="text-lg" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
