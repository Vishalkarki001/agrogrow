import { services } from "@/lib/data";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[500px] md:max-w-none mx-auto">
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <AnimateOnScroll
            key={service.title}
            animation={service.animation}
            delay={service.delay}
          >
            <div className="group h-full p-9 rounded-3xl bg-glass backdrop-blur-xl border border-glass-border transition-all duration-500 hover:-translate-y-2 hover:border-[rgba(45,106,79,0.5)] hover:shadow-[0_16px_48px_rgba(45,106,79,0.15)]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-5 text-2xl text-mint-2 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <Icon />
              </div>
              <h3 className="font-display text-xl text-text mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-text-muted leading-[1.7]">
                {service.description}
              </p>
            </div>
          </AnimateOnScroll>
        );
      })}
    </div>
  );
}
