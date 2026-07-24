import type { Metadata } from "next";
import ReviewHero from "@/components/review/ReviewHero";
import { ReviewForm } from "@/components/review/ReviewForm";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Reviews", "Share Your Experience"),
  description:
    "Share your experience with CodSphere products or custom software delivery and help our team improve.",
  keywords:
    "CodSphere reviews, product feedback, custom software feedback, CodCRM testimonials, Vancouver tech reviews",
  alternates: {
    canonical: "https://codsphere.com/review",
  },
};

export default function ReviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <ReviewHero />
      <ReviewForm />
    </div>
  );
}
