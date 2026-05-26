import { AnimateOnScroll } from "./AnimateOnScroll";

type Props = {
  children: React.ReactNode;
};

export function SectionTitle({ children }: Props) {
  return (
    <AnimateOnScroll animation="fade-up">
      <h2 className="font-display text-[clamp(1.8rem,4vw,2.4rem)] font-bold text-text text-center mb-14 flex items-center justify-center gap-4">
        <span className="block w-12 h-0.5 bg-accent" />
        {children}
        <span className="block w-12 h-0.5 bg-accent" />
      </h2>
    </AnimateOnScroll>
  );
}
