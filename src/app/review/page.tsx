import type { Metadata } from "next";
import ReviewHero from "@/components/review/ReviewHero";
import { ReviewForm } from "@/components/review/ReviewForm";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Reviews", "Share Your Experience"),
  description:
    "We value your feedback. Share your experience with CodSphere and help us improve our CRM, ERP, and business automation solutions.",
  keywords:
    "CodSphere reviews, customer feedback, CRM testimonials, ERP reviews, business automation feedback, Vancouver tech reviews",
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
