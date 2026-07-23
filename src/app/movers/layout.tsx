"use client";

import Navbar from "@/components/movers/Navbar";
import Footer from "@/components/movers/Footer";

export default function TradeDemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
