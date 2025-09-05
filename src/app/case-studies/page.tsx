import type { Metadata } from "next"
import CaseStudiesContent from "./CaseStudiesContent"

export const metadata: Metadata = {
  title: "Case Studies | CodSphere - Success Stories & Results",
  description: "Explore CodSphere's proven track record. Real client success stories showcasing our CRM, ERP, and digital transformation solutions.",
  openGraph: {
    title: "Case Studies | CodSphere - Success Stories & Results",
    description: "Real client success stories showcasing our CRM, ERP, and digital transformation solutions.",
    type: "website",
  },
  keywords: "case studies, client success stories, CRM implementation case studies, ERP success stories, digital transformation results",
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />
}