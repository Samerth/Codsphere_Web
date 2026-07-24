import HeroSection from "@/components/start-free-trial/hero-section";
import FeaturesSection from "@/components/start-free-trial/features-section";
import WalkThroughSection1 from "@/components/start-free-trial/walk-through-section1";
import PricingSection from "@/components/start-free-trial/pricing-section";
import WalkThroughSection2 from "@/components/start-free-trial/walk-through-section2";
import HighlightSection from "@/components/start-free-trial/highlight-section";
import ContactCTA from "@/components/ContactCTA";
import { Metadata } from "next";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("CodCRM Free Trial", "Try CodCRM"),
  description:
    "Start a CodCRM free trial to explore customer management, workflow automation, and business operations in one platform.",
  openGraph: {
    title: formatMetaTitle("CodCRM Free Trial", "Try CodCRM"),
    description:
      "Start a CodCRM free trial to explore customer management, workflow automation, and business operations in one platform.",
    url: "https://codsphere.com/start-free-trial",
    images: [
      {
        url: "https://codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: formatMetaTitle("CodCRM Free Trial", "Try CodCRM"),
    description:
      "Start a CodCRM free trial to explore customer management, workflow automation, and business operations in one platform.",
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
  },
  alternates: {
    canonical: "https://codsphere.com/start-free-trial",
  },
};

export default function StartFreeTrialPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar2 /> */}
      <HeroSection />
      <FeaturesSection />
      <WalkThroughSection1 />
      <PricingSection />
      <WalkThroughSection2 />
      <HighlightSection />
      <ContactCTA />
    </div>
  );
}
