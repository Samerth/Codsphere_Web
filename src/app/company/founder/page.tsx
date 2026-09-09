import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Samerth Pathak — Founder & CEO — CodSphere",
  description:
    "Samerth Pathak is the Founder & CEO of CodSphere, building commerce and order operations software for custom-order businesses. Based in Vancouver, BC.",
  alternates: {
    canonical: "https://codsphere.com/company/founder",
  },
  openGraph: {
    title: "Samerth Pathak — Founder & CEO — CodSphere",
    description:
      "Building commerce and order operations software for custom-order businesses.",
    url: "https://codsphere.com/company/founder",
  },
};

export default function FounderPage() {
  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1: HERO — Split layout with large portrait + identity + CTAs
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-black py-24 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-36 sm:pt-40 lg:pt-48">
        <div className="container-wrapper">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Large Portrait */}
            <div className="shrink-0 lg:w-1/2">
              <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] lg:w-full lg:h-[520px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/company/nextgen-hero.jpg"
                  alt="Samerth Pathak at NextGEN Summit"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 320px, 50vw"
                />
              </div>
            </div>

            {/* Identity + CTAs */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Samerth Pathak
              </h1>
              <p className="text-[#33fcfe] text-xl lg:text-2xl font-medium mb-6">
                Founder &amp; CEO
              </p>
              
              <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8 max-w-prose">
                Building commerce and order operations for custom-order shops—print, 
                sign, fabrication. Software that fits how they actually work, 
                not a bolted-on cart.
              </p>

              {/* Location Pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
                <span className="bg-white/10 text-white/90 px-4 py-2 rounded-full text-sm font-medium">
                  Vancouver, BC
                </span>
                <span className="bg-white/10 text-white/90 px-4 py-2 rounded-full text-sm font-medium">
                  Canadian Company
                </span>
              </div>

              {/* Contact CTAs — Icons INSIDE anchors with aria-labels */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="tel:+16049062693"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors"
                  aria-label="Call Samerth Pathak"
                >
                  <Phone className="w-5 h-5" />
                  <span>(604) 906-2693</span>
                </a>
                <a
                  href="mailto:samerth.pathak@codsphere.ca"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors"
                  aria-label="Email Samerth Pathak"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/samerth-pathak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#33fcfe]/20 hover:bg-[#33fcfe]/30 text-[#33fcfe] px-6 py-3 rounded-xl transition-colors"
                  aria-label="Connect with Samerth Pathak on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2: JOURNEY — Timeline beats with photo/text chapters
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container-wrapper">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-16">The Journey</h2>
          
          <div className="space-y-20">
            {/* Beat 1: Arrived in Canada */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#f5f5f5]">
                  <Image
                    src="/images/profile-pic/samerth-headshot.png"
                    alt="Samerth Pathak"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <p className="text-[#33fcfe] font-semibold text-sm uppercase tracking-wider mb-3">
                  January 2023
                </p>
                <h3 className="text-2xl font-bold text-black mb-4">Arrived in Canada</h3>
                <p className="text-black/70 text-lg leading-relaxed max-w-prose">
                  Moved to Vancouver as a student, bringing years of experience building 
                  software in fast-moving environments. The Canadian tech ecosystem offered 
                  a new stage for building something meaningful.
                </p>
              </div>
            </div>

            {/* Beat 2: Started CodSphere */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#010b66] to-[#33fcfe]/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-[#33fcfe] text-6xl font-bold mb-2">Feb</p>
                    <p className="text-white text-2xl font-medium">2024</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <p className="text-[#33fcfe] font-semibold text-sm uppercase tracking-wider mb-3">
                  February 2024
                </p>
                <h3 className="text-2xl font-bold text-black mb-4">Started CodSphere</h3>
                <p className="text-black/70 text-lg leading-relaxed max-w-prose">
                  Launched CodSphere to solve a problem seen firsthand: custom-order shops 
                  struggling with software that didn&apos;t fit their workflow. Started building 
                  tools that connect the sale to production.
                </p>
              </div>
            </div>

            {/* Beat 3: Web Summit Vancouver */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/company/websummit-booth-1.jpg"
                    alt="CodSphere booth at Web Summit Vancouver 2025"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <p className="text-[#33fcfe] font-semibold text-sm uppercase tracking-wider mb-3">
                  May 2025
                </p>
                <h3 className="text-2xl font-bold text-black mb-4">Web Summit Vancouver</h3>
                <p className="text-black/70 text-lg leading-relaxed max-w-prose">
                  CodSphere exhibited at Web Summit Vancouver, demonstrating live demos 
                  of CodCRM and Cod Chat to hundreds of attendees. Direct conversations 
                  with potential users and partners shaped the product roadmap.
                </p>
              </div>
            </div>

            {/* Beat 4: NextGEN Under 30 */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/company/nextgen-award.jpg"
                    alt="NextGEN Under 30 award trophy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <p className="text-[#33fcfe] font-semibold text-sm uppercase tracking-wider mb-3">
                  July 2026
                </p>
                <h3 className="text-2xl font-bold text-black mb-4">NextGEN Under 30 Class of 2026</h3>
                <p className="text-black/70 text-lg leading-relaxed max-w-prose">
                  Named to the NextGEN Under 30 Class of 2026, recognizing young 
                  entrepreneurs building the next generation of technology companies 
                  in Canada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3: VISION & MISSION — Two cards/split layout
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
              <p className="text-[#010b66] font-semibold text-sm uppercase tracking-wider mb-4">
                Vision
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6 leading-snug">
                Software that fits custom-order work—not a bolted-on cart
              </h3>
              <p className="text-black/70 text-lg leading-relaxed">
                Generic e-commerce wasn&apos;t built for jobs where every order is different. 
                Enterprise tools are too heavy for growing shops. There&apos;s a gap—software 
                that actually matches how custom-order businesses sell and produce.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-black rounded-2xl p-8 lg:p-10">
              <p className="text-[#33fcfe] font-semibold text-sm uppercase tracking-wider mb-4">
                Mission
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-snug">
                Sell custom online. Keep every order moving.
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Starting with print and sign—where the pattern is clearest. Every job 
                is different, multiple people touch each order, customers need visibility. 
                If we solve it here, it works across custom manufacturing.
              </p>
            </div>
          </div>

          {/* Pull Quote */}
          <div className="mt-16 text-center">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight max-w-4xl mx-auto">
              &ldquo;Sell custom work online. Keep every order moving.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4: WHO HE IS — Editorial + side gallery
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container-wrapper">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Editorial Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">Who He Is</h2>
              
              <div className="space-y-6 text-black/70 text-lg leading-relaxed max-w-prose">
                <p>
                  Samerth builds CodCRM and Cod Chat—tools that help custom-order 
                  shops manage their entire workflow from first enquiry to completed job. 
                  Not another generic CRM. Software designed for how these businesses 
                  actually operate.
                </p>
                <p>
                  He works directly with print shops, sign companies, and fabricators 
                  to understand where orders get stuck. The insights come from real 
                  conversations, not assumptions. Every feature ships because a shop 
                  needed it.
                </p>
                <p>
                  Honest measurement matters. Labels like &ldquo;concurrent users&rdquo; or 
                  &ldquo;calculations per minute&rdquo; only appear when they can be verified. 
                  No invented metrics, no inflated claims—just clear communication 
                  about what the software does.
                </p>
              </div>
            </div>

            {/* Side Gallery */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/images/company/nextgen-candid-1.jpg"
                    alt="Samerth at NextGEN Summit"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="/images/company/websummit-demo-1.jpg"
                    alt="CodSphere demo at Web Summit"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] col-span-2 rounded-xl overflow-hidden">
                  <Image
                    src="/images/company/websummit-team.jpg"
                    alt="CodSphere team at Web Summit Vancouver"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5A: IN THE ROOM — Web Summit Gallery
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="container-wrapper">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Web Summit Vancouver 2025
          </h2>
          <p className="text-black/60 text-lg mb-12 max-w-2xl">
            CodSphere at Web Summit Vancouver 2025—booth conversations and live demos.
          </p>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden col-span-2 row-span-2">
              <Image
                src="/images/company/websummit-booth-1.jpg"
                alt="CodSphere booth at Web Summit Vancouver"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/company/websummit-team-1.jpg"
                alt="CodSphere team member at booth"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/company/websummit-demo-2.jpg"
                alt="Live demo at Web Summit"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/company/websummit-crowd.jpg"
                alt="Crowd at CodSphere booth"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/company/websummit-selfie.jpg"
                alt="Team selfie at Web Summit"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden col-span-2">
              <Image
                src="/images/company/websummit-venue.jpg"
                alt="Web Summit Vancouver venue"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5B: IN THE ROOM — NextGEN Gallery
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container-wrapper">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            NextGEN Under 30 Class of 2026
          </h2>
          <p className="text-black/60 text-lg mb-12 max-w-2xl">
            NextGEN Under 30 Class of 2026.
          </p>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden row-span-2">
              <Image
                src="/images/company/nextgen-hero.jpg"
                alt="Samerth Pathak at NextGEN Summit"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden col-span-2">
              <Image
                src="/images/company/nextgen-stage.jpg"
                alt="NextGEN Summit stage"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/company/nextgen-candid-2.jpg"
                alt="Candid moment at NextGEN"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/company/nextgen-award.jpg"
                alt="NextGEN award trophy"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden col-span-2 md:col-span-1">
              <Image
                src="/images/company/nextgen-networking.jpg"
                alt="Networking at NextGEN Summit"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden col-span-2">
              <Image
                src="/images/company/nextgen-group.jpg"
                alt="NextGEN Summit group photo"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6: RECOGNITION — Honouree image + link
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="container-wrapper">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Honouree Card Image */}
            <div className="lg:w-1/2">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/company/nextgen-honouree-card.jpg"
                  alt="Samerth Pathak - NextGEN Under 30 Honouree 2026"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Recognition Text + Link */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-[#010b66] font-semibold text-sm uppercase tracking-wider mb-4">
                Recognition
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                NextGEN Under 30<br />Class of 2026
              </h2>
              <p className="text-black/70 text-lg leading-relaxed mb-8 max-w-prose">
                Recognized alongside exceptional young entrepreneurs building the future 
                of technology in Canada. The NextGEN Summit celebrates those who are 
                creating meaningful impact through innovation.
              </p>
              <a
                href="https://nextgensummit.co/30-under-30"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[#010b66] hover:text-[#33fcfe] font-semibold text-lg transition-colors"
              >
                View the full honouree list
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7: FINAL CTA — Gradient CTA with ArrowRight
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-black">
        <div className="container-wrapper">
          <div className="bg-gradient-to-r from-[#33fcfe] to-[#010b66] rounded-2xl p-10 sm:p-14 lg:p-20 text-center">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Show us your order flow
            </h2>
            <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
              Let&apos;s talk about where orders get stuck in your shop—no pitch, 
              just a conversation about how work moves.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#010b66] text-lg font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors"
            >
              Show us your order flow
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Company */}
      <section className="py-12 bg-black border-t border-white/10">
        <div className="container-wrapper text-center">
          <p className="text-white/60 text-base mb-4">
            Canadian company · Designed in Vancouver
          </p>
          <Link
            href="/company"
            className="text-[#33fcfe] hover:text-white transition-colors text-lg font-medium"
          >
            ← Back to Company
          </Link>
        </div>
      </section>
    </div>
  );
}
