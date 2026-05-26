import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { SchemesGrid } from "@/components/sections/SchemesGrid";
import { MandiTable } from "@/components/sections/MandiTable";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section id="services" className="py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle>Our Services</SectionTitle>
          <ServicesGrid />
        </div>
      </section>

      <section id="schemes" className="py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle>Govt. Schemes</SectionTitle>
          <SchemesGrid />
        </div>
      </section>

      <section id="mandi" className="py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle>Today&apos;s Market Prices</SectionTitle>
          <MandiTable />
        </div>
      </section>

      <section id="contact" className="py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle>Contact Us</SectionTitle>
          <ContactSection />
        </div>
      </section>
    </main>
  );
}
