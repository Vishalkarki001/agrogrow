import { SchemesGrid } from "@/components/sections/SchemesGrid";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Government Schemes | AgroGrow",
  description:
    "PM-KISAN, PM Fasal Bima, PM Krishi Sinchayee and more — all the government schemes for Indian farmers.",
};

export default function SchemesPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Govt. Schemes</SectionTitle>
        <SchemesGrid />
      </div>
    </main>
  );
}
