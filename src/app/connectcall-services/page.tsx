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
      <div className="w-full px-[145px] py-10 bg-white">
        <Navbar />
      </div>

      {/* Header section */}
      <CaseStudyDetailHeader 
        title="ConnectCall Services"
        backgroundImage="/images/case-studies/connectcall-detail-hero.jpg"
      />

      {/* Main content */}
      <section className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        <div className="flex gap-[60px] py-[60px]">
          {/* Left content */}
          <div className="flex-1 max-w-[810px]">
            {/* Title */}
            <h1 
              className="text-[40px] leading-[52px] text-black mb-[32px] font-bold"
            >
              Automating Operations for ConnectCall Services
            </h1>

            {/* Industry and Solutions tags */}
            <div className="mb-[50px] max-w-[640px]">
              <div className="flex items-center gap-[20px] pb-[15px] border-b border-black">
                <span className="text-[20px] leading-[24px] text-black font-semibold">
                  Industries
                </span>
                <span className="bg-[#608BF3] text-white px-3 py-1 rounded text-[20px] leading-[24px]">
                  BPO firm
                </span>
              </div>
              <div className="flex items-center gap-[20px] mt-[15px]">
                <span className="text-[20px] leading-[24px] text-black font-semibold">
                  Solutions
                </span>
                <span className="bg-[#608BF3] text-white px-3 py-1 rounded text-[20px] leading-[24px]">
                  Customer relationship management
                </span>
              </div>
            </div>

            {/* Content sections */}
            <div className="space-y-[35px]">
              <section>
                <h2 className="text-[25px] leading-[29px] text-black mb-[15px] font-bold">
                  About the Client
                </h2>
                <p className="text-[25px] leading-[29px] text-black">
                  ConnectCall Services is a growing BPO firm based in Calgary, offering inbound and outbound 
                  call centre support for industries like telecom, retail, and insurance. With over 150 agents and 
                  multiple time zones, they faced challenges in scaling operations without losing quality.
                </p>
              </section>

              <section>
                <h2 className="text-[25px] leading-[29px] text-black mb-[15px] font-bold">
                  The Challenge
                </h2>
                <ul className="space-y-[8px]">
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>High call volumes and inconsistent call routing logic.</span>
                  </li>
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Limited visibility into real-time call status and team performance.</span>
                  </li>
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Manual lead updates and call logs led to frequent data errors.</span>
                  </li>
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Client SLAs were hard to track, and escalations were increasing.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-[25px] leading-[29px] text-black mb-[15px] font-bold">
                  Our Solution
                </h2>
                <p className="text-[25px] leading-[29px] text-black mb-[15px]">
                  CodSphere built a fully custom Call Centre Automation Suite integrated with their VOIP 
                  provider and CRM. Key modules included:
                </p>
                <ul className="space-y-[8px]">
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Smart call routing engine with skill-based assignment and fallback logic.</span>
                  </li>
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Real-time dashboards showing queue volume, wait time, dropped calls, and agent status.</span>
                  </li>
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Integrated auto-dialer for outbound teams, syncing leads from CRM.</span>
                  </li>
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Visual reporting tools for supervisors: daily summaries, call recordings, feedback loop.</span>
                  </li>
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Agent analytics: talk-time, idle-time, average handling time (AHT), and resolution rate.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-[25px] leading-[29px] text-black mb-[15px] font-bold">
                  Key Implementation Steps
                </h2>
                <ul className="space-y-[8px]">
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Conducted process-mapping workshops with ConnectCall's operations team.</span>
                  </li>
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Created wireframes and UI prototypes for agent and supervisor portals.</span>
                  </li>
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Built with Node.js + WebSocket for real-time updates, PostgreSQL for secure storage.</span>
                  </li>
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Deployed using Docker containers on AWS EC2 for high availability.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-[25px] leading-[29px] text-black mb-[15px] font-bold">
                  Results & Impact
                </h2>
                <ul className="space-y-[8px]">
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>37% increase in agent efficiency within 2 months.</span>
                  </li>
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>60% reduction in manual reporting tasks.</span>
                  </li>
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Call routing accuracy improved drastically - leading to 15% higher first-contact resolution (FCR).</span>
                  </li>
                  <li className="text-[25px] leading-[29px] text-black flex">
                    <span className="mr-2">•</span>
                    <span>Managers could now track live KPIs from any device, aiding quicker decisions and escalations.</span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Testimonial Section */}
            <div className="mt-[60px]">
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
          <div className="flex-shrink-0">
            <GotProjectForm />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}