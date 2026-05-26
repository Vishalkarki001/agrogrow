import { MandiTable } from "@/components/sections/MandiTable";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Market Prices | AgroGrow",
  description:
    "Live mandi prices for wheat, mustard, basmati rice, red chili, potato and more from across India.",
};

export default function MandiPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Today&apos;s Market Prices</SectionTitle>
        <MandiTable />
      </div>
    </main>
  );
}
