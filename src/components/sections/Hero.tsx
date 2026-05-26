"use client";

import Link from "next/link";
import { FaLeaf, FaHandHoldingDollar, FaChartLine } from "react-icons/fa6";

const stats = [
  { value: "50,000+", label: "Connected Farmers" },
  { value: "500+", label: "Mandi Prices" },
  { value: "24/7", label: "Weather Updates" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
      <div className="max-w-3xl">
        <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium tracking-wide mb-6 border backdrop-blur-md text-primary bg-[rgba(45,106,79,0.12)] border-[rgba(45,106,79,0.3)] dark:text-mint-2 dark:bg-[rgba(45,106,79,0.4)] dark:border-[rgba(45,106,79,0.6)]">
          <FaLeaf className="text-accent" />
          India&apos;s Trusted Agriculture Portal
        </p>

        <h1 className="font-display text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[1.15] mb-6 text-text">
          Grow Smart in
          <br />
          <span className="relative inline-block text-accent">
            Your Fields
            <span className="absolute left-0 bottom-1 w-full h-2 bg-accent opacity-25 rounded-sm -z-10" />
          </span>
          ,
          <br />
          Earn Big in Markets
        </h1>

        <p className="text-base md:text-lg text-text-muted mb-9 font-light leading-[1.8] max-w-2xl mx-auto">
          Modern techniques, government schemes, weather updates, and live
          market prices—all in one place.
          <br className="hidden md:block" />
          Our goal is the prosperity of every farmer.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <Link
            href="/schemes"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#0b1a0f] transition-all duration-300 bg-gradient-to-br from-accent to-[var(--color-accent-dark)] shadow-[0_4px_20px_rgba(245,158,11,0.35)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(245,158,11,0.5)]"
          >
            <FaHandHoldingDollar /> View Schemes
          </Link>
          <Link
            href="/mandi"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-text bg-glass backdrop-blur-md border-2 border-glass-border hover:border-accent hover:bg-[rgba(245,158,11,0.06)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaChartLine /> Today&apos;s Prices
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-accent leading-tight">
                {s.value}
              </h3>
              <p className="text-xs text-text-dim uppercase tracking-widest mt-1.5">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 hidden md:flex flex-col items-center gap-2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-[var(--color-glass-border)] rounded-xl flex justify-center pt-1.5">
          <div className="scroll-wheel w-[3px] h-2 bg-accent rounded-sm" />
        </div>
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-text-dim">
          Scroll Down
        </span>
      </div>
    </section>
  );
}
