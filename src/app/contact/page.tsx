import { ContactSection } from "@/components/sections/ContactSection";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Contact | AgroGrow",
  description:
    "Get in touch with AgroGrow — helpline, head office, email and working hours.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle>Contact Us</SectionTitle>
        <ContactSection />
      </div>
    </main>
  );
}
