import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SolarAssistant from "@/components/SolarAssistant";

export const metadata: Metadata = {
  title: { default: "RICO Luxury Solar Energy", template: "%s | RICO Luxury Solar Energy" },
  description: "Cape Town solar matching and lead-generation platform for residential and commercial customers.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <SolarAssistant />
      </body>
    </html>
  );
}
