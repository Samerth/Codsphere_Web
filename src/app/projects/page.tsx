import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Projects — Storefronts and Systems We've Built | CodSphere",
  description: "Real work for real shops. From intake to delivery, see how we've helped custom-order businesses get orders moving.",
  alternates: {
    canonical: "https://codsphere.com/projects",
  },
};

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "LIVE": "bg-[#0E7C86]/10 text-[#0E7C86]",
    "UAT": "bg-[#D96C3F]/10 text-[#D96C3F]",
    "PILOT": "bg-[#16324A]/10 text-[#16324A]",
    "PRODUCT DIRECTION": "bg-[#1D2730]/10 text-[#1D2730]/60",
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${styles[status] || styles["PRODUCT DIRECTION"]}`}>
      {status}
    </span>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#16324A] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Storefronts and systems we've built
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Real work for real shops. From intake to delivery, here's how we've helped 
              custom-order businesses get orders moving.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="space-y-8">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="bg-[#F1F5F7] rounded-2xl p-6 md:p-8 border border-[#1D2730]/5"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Main content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-sm text-[#1D2730]/50">{project.industry}</span>
                      <span className="text-[#1D2730]/30">•</span>
                      <StatusBadge status={project.status} />
                      <span className="text-sm text-[#1D2730]/40">{project.year}</span>
                    </div>

                    <h2 className="text-2xl font-bold text-[#1D2730] mb-4">
                      {project.title}
                    </h2>

                    {/* Details */}
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="text-[#1D2730]/50 text-sm font-medium">Problem: </span>
                        <span className="text-[#1D2730]/70">{project.problem}</span>
                      </div>
                      <div>
                        <span className="text-[#1D2730]/50 text-sm font-medium">System built: </span>
                        <span className="text-[#1D2730]/70">{project.systemBuilt}</span>
                      </div>
                      <div>
                        <span className="text-[#1D2730]/50 text-sm font-medium">Workflow: </span>
                        <span className="text-[#1D2730]/60 text-sm">{project.workflow}</span>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-[#0E7C86] font-medium hover:gap-3 transition-all"
                      >
                        View case study <ArrowRight className="w-4 h-4" />
                      </Link>
                      {project.previewUrl && (
                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#1D2730]/50 text-sm hover:text-[#1D2730]/70 transition-colors"
                        >
                          Preview <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Metric card */}
                  <div className="lg:w-64 shrink-0">
                    <div className="bg-white rounded-xl p-4 border border-[#1D2730]/10">
                      <span className="text-[#1D2730]/50 text-sm">Verified outcome</span>
                      <p className="text-[#1D2730]/60 mt-1 italic">{project.metric}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Note about projects */}
      <section className="py-12 bg-[#F1F5F7]">
        <div className="container-wrapper">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#1D2730]/60">
              Every project includes real UI/environment visuals. We don't publish unverified metrics — 
              when outcome data is available and approved, we'll update these case studies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-[#1D2730] mb-4">
            Want to see work like this for your shop?
          </h2>
          <p className="text-[#1D2730]/60 text-lg mb-8 max-w-xl mx-auto">
            Show us your order flow. We'll show you what's possible.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#0E7C86] text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-[#0E7C86]/90 transition-colors"
          >
            Show us your order flow
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
