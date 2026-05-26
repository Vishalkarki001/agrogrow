"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { FaCircleCheck } from "react-icons/fa6";

type ToastContextValue = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), 3500);
    return () => clearTimeout(t);
  }, [visible, message]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && (
        <div
          className={`fixed bottom-8 right-8 z-[9999] flex items-center gap-3 px-6 py-4 rounded-xl bg-bg-2 border border-glass-border border-l-4 border-l-[var(--color-green)] text-text shadow-[var(--shadow)] text-sm transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            visible ? "translate-x-0 opacity-100" : "translate-x-[120%] opacity-0"
          }`}
        >
          <FaCircleCheck className="text-lg text-[var(--color-green)]" />
          <span>{message}</span>
        </div>
      )}
    </ToastContext.Provider>
  );
}
