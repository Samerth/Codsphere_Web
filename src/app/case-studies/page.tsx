"use client"

import Navbar from "@/components/Navbar"
import CaseStudyCard from "@/components/case-studies/CaseStudyCard"
import CaseStudyHeader from "@/components/case-studies/CaseStudyHeader"
import ViewMoreButton from "@/components/case-studies/ViewMoreButton"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"

// Case studies data
const caseStudies = [
  {
    id: 1,
    image: "/images/Case Study page/PNG/Connectcall.png",
    title: "ConnectCall Services",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["BPO", "Lorem Ipsum"],
    tagColors: ["#F7CCA1", "#B1CCA9"],
    iconBg: "#F7CCA1",
    href: "/case-studies/connectcall-services"
  },
  {
    id: 2,
    image: "/images/Case Study page/PNG/EduLeap Learning.png",
    title: "EduLeap Learning",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["SEO optimization", "UX/UI design"],
    tagColors: ["#F7CCA1", "#B1CCA9"],
    iconBg: "#AFCDA7",
    href: "/case-studies/eduleap-learning"
  },
  {
    id: 3,
    image: "/images/Case Study page/PNG/S&S West Contracting.png",
    title: "S&S West Contracting",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["SEO optimization", "Google Ads"],
    tagColors: ["#F7CCA1", "#B1CCA9"],
    iconBg: "#B6B0D4",
    href: "/case-studies/ss-west-contracting"
  },
  {
    id: 4,
    image: "/images/Case Study page/PNG/Pharmacy cloud.png",
    title: "Pharmacy.Cloud",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["SEO optimization", "E-Commerce"],
    tagColors: ["#F7CCA1", "#EEDFFF"],
    iconBg: "#EEDFFF",
    href: "/case-studies/pharmacy-cloud"
  },
  {
    id: 5,
    image: "/images/Case Study page/PNG/University Canada West.png",
    title: "University Canada West",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["AI-Powered Syllabus Tool"],
    tagColors: ["#8ED5BC"],
    iconBg: "#8ED5BC",
    href: "/case-studies/university-canada-west"
  },
  {
    id: 6,
    image: "/images/Case Study page/PNG/Invoice Sync.png",
    title: "InvoiceSync",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["Custom SaaS Development"],
    tagColors: ["#FFCFCF"],
    iconBg: "#FFCFCF",
    href: "/case-studies/invoicesync"
  }
]

export default function CaseStudiesPage() {
  const handleViewMore = () => {
    // Handle view more functionality
    console.log("Load more case studies")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* navbar */}
      <Navbar />

      {/* header section with background */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <CaseStudyHeader backgroundImage="/images/case-studies/hero-bg.jpg" />
      </section>

      {/* case studies grid section */}
      <section className="mx-auto w-[1440px] bg-white py-[60px]">
        <div className="mx-auto w-[1350px]">
          {/* grid with exact spacing from design */}
          <div 
            className="grid grid-cols-3"
            style={{
              gap: '81px 33px', // gap-y: 81px, gap-x: 33px
              gridTemplateColumns: 'repeat(3, 398px)',
              justifyContent: 'center'
            }}
          >
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>

          {/* view more button centered */}
          <div className="mt-[60px] flex justify-center">
            <ViewMoreButton onClick={handleViewMore} />
          </div>
        </div>
      </section>

      {/* contact form section */}
      <ContactCTA />

      {/* footer */}
      <Footer />
    </div>
  )
}