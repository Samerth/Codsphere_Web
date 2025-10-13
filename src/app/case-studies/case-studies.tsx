"use client";

import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import ViewMoreButton from "@/components/case-studies/ViewMoreButton";

// Case studies data
const caseStudies = [
  {
    id: 1,
    image: "/images/Case Study page/PNG/Connectcall.png",
    title: "ConnectCall Services",
    description: "Comprehensive BPO solution with customer management system",
    tags: ["BPO", "Customer Management"],
    tagColors: ["#F7CCA1", "#B1CCA9"],
    iconBg: "#F7CCA1",
    href: "/connectcall-services",
  },
  {
    id: 2,
    image: "/images/Case Study page/PNG/EduLeap Learning.png",
    title: "EduLeap Learning",
    description: "SEO optimization and UX/UI design for educational platform",
    tags: ["SEO optimization", "UX/UI design"],
    tagColors: ["#F7CCA1", "#B1CCA9"],
    iconBg: "#AFCDA7",
    //href: "/eduleap-learning"
  },
  {
    id: 3,
    image: "/images/Case Study page/PNG/S&S West Contracting.png",
    title: "S&S West Contracting",
    description: "SEO optimization and Google Ads campaign management",
    tags: ["SEO optimization", "Google Ads"],
    tagColors: ["#F7CCA1", "#B1CCA9"],
    iconBg: "#B6B0D4",
    //href: "/ss-west-contracting"
  },
  {
    id: 4,
    image: "/images/Case Study page/PNG/Pharmacy cloud.png",
    title: "Pharmacy.Cloud",
    description: "E-commerce platform with SEO optimization for pharmacy services",
    tags: ["SEO optimization", "E-Commerce"],
    tagColors: ["#F7CCA1", "#EEDFFF"],
    iconBg: "#EEDFFF",
    //href: "/pharmacy-cloud"
  },
  {
    id: 5,
    image: "/images/Case Study page/PNG/University Canada West.png",
    title: "University Canada West",
    description: "AI-powered syllabus management tool for university",
    tags: ["AI-Powered Syllabus Tool"],
    tagColors: ["#8ED5BC"],
    iconBg: "#8ED5BC",
    //href: "/university-canada-west"
  },
  {
    id: 6,
    image: "/images/Case Study page/PNG/Invoice Sync.png",
    title: "InvoiceSync",
    description: "Custom SaaS development for invoice management",
    tags: ["Custom SaaS Development"],
    tagColors: ["#FFCFCF"],
    iconBg: "#FFCFCF",
    //href: "/invoicesync"
  },
];

export default function CaseStudies() {
  const handleViewMore = () => {
    // Handle view more functionality
    console.log("Load more case studies");
  };

  return (
    <section className="bg-white">
      <div className="container-wrapper pt-more">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <ViewMoreButton onClick={handleViewMore} />
        </div>
      </div>
    </section>
  );
}
