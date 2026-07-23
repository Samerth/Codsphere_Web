"use client";

import { Footer } from "@/components/aqua-fix/Footer";
import { Navbar } from "@/components/aqua-fix/Navbar";

export default function AquaFixLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
