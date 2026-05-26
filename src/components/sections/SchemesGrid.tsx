"use client";

import { useState } from "react";
import {
  FaArrowRight,
  FaCircleCheck,
  FaUserCheck,
  FaListCheck,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { schemes, type Scheme } from "@/lib/data";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Modal } from "@/components/ui/Modal";

export function SchemesGrid() {
  const [active, setActive] = useState<Scheme | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[500px] md:max-w-none mx-auto">
        {schemes.map((scheme) => {
          const Icon = scheme.icon;
          return (
            <AnimateOnScroll
              key={scheme.id}
              animation="zoom-in"
              delay={scheme.delay}
            >
              <div className="group relative h-full overflow-hidden p-9 rounded-3xl bg-glass backdrop-blur-xl border border-glass-border text-center transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(245,158,11,0.4)] hover:shadow-[0_20px_60px_rgba(45,106,79,0.18)]">
                <div
                  className="scheme-badge"
                  style={{ background: scheme.badgeColor }}
                >
                  {scheme.badge}
                </div>
                <div
                  className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 text-2xl text-accent border-2"
                  style={{
                    background: "rgba(245, 158, 11, 0.12)",
                    borderColor: "rgba(245, 158, 11, 0.25)",
                  }}
                >
                  <Icon />
                </div>
                <h3 className="font-display text-xl text-text mb-3">
                  {scheme.title}
                </h3>
                <p className="text-sm text-text-muted mb-6 leading-[1.7]">
                  {scheme.description}
                </p>
                <button
                  type="button"
                  onClick={() => setActive(scheme)}
                  className="text-sm font-semibold text-accent inline-flex items-center gap-1.5 transition-all duration-300 hover:gap-3"
                >
                  Read More <FaArrowRight />
                </button>
              </div>
            </AnimateOnScroll>
          );
        })}
      </div>

      <Modal
        open={active !== null}
        onClose={() => setActive(null)}
        ariaLabel={active?.title}
      >
        {active && <SchemeDetailContent scheme={active} />}
      </Modal>
    </>
  );
}

function SchemeDetailContent({ scheme }: { scheme: Scheme }) {
  const Icon = scheme.icon;
  return (
    <div className="p-8 md:p-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-accent border-2 flex-shrink-0"
          style={{
            background: "rgba(245, 158, 11, 0.12)",
            borderColor: "rgba(245, 158, 11, 0.25)",
          }}
        >
          <Icon />
        </div>
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text leading-tight">
            {scheme.title}
          </h2>
          <span
            className="inline-block mt-1 px-3 py-0.5 text-[10px] font-bold tracking-wide uppercase rounded-full text-white"
            style={{ background: scheme.badgeColor }}
          >
            {scheme.badge}
          </span>
        </div>
      </div>

      <p className="text-sm md:text-base text-text-muted leading-[1.8] mb-7">
        {scheme.details.overview}
      </p>

      <DetailBlock
        icon={<FaCircleCheck className="text-[var(--color-green)]" />}
        title="Benefits"
        items={scheme.details.benefits}
      />

      <DetailBlock
        icon={<FaUserCheck className="text-accent" />}
        title="Eligibility"
        items={scheme.details.eligibility}
      />

      <DetailBlock
        icon={<FaListCheck className="text-primary-light" />}
        title="How to Apply"
        items={scheme.details.howToApply}
        ordered
      />

      <a
        href={scheme.details.officialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#0b1a0f] bg-gradient-to-br from-accent to-[var(--color-accent-dark)] shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,158,11,0.5)] transition-all duration-300"
      >
        Visit Official Website <FaArrowUpRightFromSquare className="text-xs" />
      </a>
    </div>
  );
}

function DetailBlock({
  icon,
  title,
  items,
  ordered = false,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  ordered?: boolean;
}) {
  return (
    <div className="mb-6">
      <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-text mb-3">
        {icon} {title}
      </h3>
      <ul className="space-y-2 pl-1">
        {items.map((item, i) => (
          <li
            key={i}
            className="text-sm text-text-muted leading-[1.7] flex gap-3"
          >
            {ordered ? (
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(45,106,79,0.15)] text-primary-light text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
            ) : (
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2.5" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
