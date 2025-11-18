import CaseStudyDetailHeader from "@/components/case-studies/connectcall-services/CaseStudyDetailHeader";
import Navbar from "@/components/Navbar";
import case_studies_banner_bg from "@/assets/images/banners/case-studies-banner-bg.jpg";
import HighlightSection from "@/components/case-studies/sortify/highlight-section";
import ContactCTA from "@/components/ContactCTA";
import ContentSection from "@/components/case-studies/sortify/content-section";

export default function SortifyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CaseStudyDetailHeader
        title="Sortify Case Study — Building a Cloud-Native Digital Mailroom Automation Platform"
        backgroundImage={case_studies_banner_bg.src}
      />
      <ContentSection />
      <HighlightSection />
      <ContactCTA />
    </div>
  );
}
