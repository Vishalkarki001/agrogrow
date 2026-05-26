import type { Metadata } from "next";
import { Baloo_2, Poppins } from "next/font/google";
import "./globals.css";

import { ToastProvider } from "@/components/ui/Toast";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Background } from "@/components/layout/Background";
import { Particles } from "@/components/layout/Particles";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AgroGrow — Empowering Farmers",
  description:
    "Modern techniques, government schemes, weather updates and live market prices for every Indian farmer.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`dark ${poppins.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-text">
        <ToastProvider>
          <Background />
          <Particles />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
