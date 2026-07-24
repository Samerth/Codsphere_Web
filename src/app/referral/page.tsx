import type { Metadata } from "next";
import ReferralProgram from "@/components/home/ReferralProgram";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

const description =
  "Introduce a business to CodSphere for products, custom software, or an AI visibility audit. Referral terms are confirmed for each qualified introduction.";

export const metadata: Metadata = {
  title: formatMetaTitle("Referral Program"),
  description,
  alternates: { canonical: "https://codsphere.com/referral" },
  openGraph: {
    title: formatMetaTitle("Referral Program"),
    description,
    url: "https://codsphere.com/referral",
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
    title: formatMetaTitle("Referral Program"),
    description,
    images: ["https://codsphere.com/og/web-og-1200x630.png"],
  },
};

export default function ReferralPage() {
  return (
    <div className="min-h-screen bg-white">
      <ReferralProgram />
      <ContactCTA />
    </div>
  );
}
