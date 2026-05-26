import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Services | AgroGrow",
  description:
    "Weather forecast, soil testing, pest management, modern equipment, loans and quality seeds — everything for the modern farmer.",
};

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Our Services</SectionTitle>
        <ServicesGrid />
      </div>
    </main>
  );
}
