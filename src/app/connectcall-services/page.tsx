"use client"
import Navbar from "@/components/Navbar"
import CaseStudyDetailHeader from "@/components/connectcall-services/CaseStudyDetailHeader"
import GotProjectForm from "@/components/connectcall-services/GotProjectForm"
import TestimonialCard from "@/components/connectcall-services/TestimonialCard"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"

export default function ConnectCallServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Header section */}
      <section className="mt-[151px]">
        <CaseStudyDetailHeader 
          title="ConnectCall Services"
          backgroundImage="/images/case-studies/connectcall-detail-hero.jpg"
        />
      </section>

      {/* Main content */}
      <section className="relative mx-auto w-[1440px]">
        <div className="flex px-[90px] py-[60px]">
          {/* Left content */}
          <div className="w-[855px] pr-[60px]">
            {/* Title */}
            <h1 
              className="w-[702px] text-[40px] leading-[52px]"
              style={{ 
                fontFamily: 'Sequel Sans, sans-serif',
                fontWeight: 415
              }}
            >
              Automating Operations for ConnectCall Services
            </h1>

            {/* Industry and Solutions tags */}
            <div className="mt-[32px] w-[640px]">
              <div className="flex items-center border-b border-black pb-[15px]">
                <span 
                  className="mr-[20px] text-[20px] leading-[24px] text-black"
                  style={{ fontFamily: 'Sequel Sans, sans-serif', fontWeight: 415 }}
                >
                  Industries
                </span>
                <span 
                  className="rounded bg-[#608BF3] px-3 py-1 text-[20px] leading-[24px] text-white"
                  style={{ fontFamily: 'Sequel Sans, sans-serif', fontWeight: 405 }}
                >
                  BPO firm
                </span>
              </div>
              <div className="mt-[15px] flex items-center">
                <span 
                  className="mr-[20px] text-[20px] leading-[24px] text-black"
                  style={{ fontFamily: 'Sequel Sans, sans-serif', fontWeight: 415 }}
                >
                  Solutions
                </span>
                <span 
                  className="rounded bg-[#608BF3] px-3 py-1 text-[20px] leading-[24px] text-white"
                  style={{ fontFamily: 'Sequel Sans, sans-serif', fontWeight: 405 }}
                >
                  Customer relationship management
                </span>
              </div>
            </div>

            {/* Content sections */}
            <div 
              className="mt-[50px] w-[810px] space-y-[35px] text-[25px] leading-[29px] text-black"
              style={{ fontFamily: 'Sequel Sans, sans-serif', fontWeight: 415 }}
            >
              <section>
                <h2 className="mb-[15px]">About the Client</h2>
                <p style={{ fontWeight: 405 }}>
                  ConnectCall Services is a growing BPO firm based in Calgary, offering inbound and outbound 
                  call centre support for industries like telecom, retail, and insurance. With over 150 agents and 
                  multiple time zones, they faced challenges in scaling operations without losing quality.
                </p>
              </section>

              <section>
                <h2 className="mb-[15px]">The Challenge</h2>
                <ul className="space-y-[8px]" style={{ fontWeight: 405 }}>
                  <li>• High call volumes and inconsistent call routing logic.</li>
                  <li>• Limited visibility into real-time call status and team performance.</li>
                  <li>• Manual lead updates and call logs led to frequent data errors.</li>
                  <li>• Client SLAs were hard to track, and escalations were increasing.</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-[15px]">Our Solution</h2>
                <p className="mb-[15px]" style={{ fontWeight: 405 }}>
                  CodSphere built a fully custom Call Centre Automation Suite integrated with their VOIP 
                  provider and CRM. Key modules included:
                </p>
                <ul className="space-y-[8px]" style={{ fontWeight: 405 }}>
                  <li>• Smart call routing engine with skill-based assignment and fallback logic.</li>
                  <li>• Real-time dashboards showing queue volume, wait time, dropped calls, and agent status.</li>
                  <li>• Integrated auto-dialer for outbound teams, syncing leads from CRM.</li>
                  <li>• Visual reporting tools for supervisors: daily summaries, call recordings, feedback loop.</li>
                  <li>• Agent analytics: talk-time, idle-time, average handling time (AHT), and resolution rate.</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-[15px]">Key Implementation Steps</h2>
                <ul className="space-y-[8px]" style={{ fontWeight: 405 }}>
                  <li>• Conducted process-mapping workshops with ConnectCall's operations team.</li>
                  <li>• Created wireframes and UI prototypes for agent and supervisor portals.</li>
                  <li>• Built with Node.js + WebSocket for real-time updates, PostgreSQL for secure storage.</li>
                  <li>• Deployed using Docker containers on AWS EC2 for high availability.</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-[15px]">Results & Impact</h2>
                <ul className="space-y-[8px]" style={{ fontWeight: 405 }}>
                  <li>• 37% increase in agent efficiency within 2 months.</li>
                  <li>• 60% reduction in manual reporting tasks.</li>
                  <li>• Call routing accuracy improved drastically - leading to 15% higher first-contact resolution (FCR).</li>
                  <li>• Managers could now track live KPIs from any device, aiding quicker decisions and escalations.</li>
                </ul>
              </section>
            </div>

            {/* Testimonial Section */}
            <div className="mt-[40px] w-[795px]">
              <TestimonialCard
                name="Amit Goyal"
                role="Operations Head"
                company="ConnectCall Services"
                testimonial="We didn't just get a dashboard; we got clarity. CodSphere helped us see our operations like never before."
                image="/images/testimonials/amit-goyal.jpg"
              />
            </div>
          </div>

          {/* Right sidebar - Got Project Form */}
          <div className="h-auto w-[405px] flex-shrink-0">
            <GotProjectForm />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}