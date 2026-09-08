"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Proof Industries / Great West Graphics",
    industry: "Print & Sign",
    problem: "Manual order intake and disconnected production tracking",
    system: "Digital storefront with order flow integration",
    workflow: "Quote request → Approval → Production timeline → Delivery notification",
    status: "UAT",
    year: "2026",
    metric: "Measurement pending",
    href: "/projects/great-west-graphics",
    previewUrl: "https://d1so4a0f4v7ki5.cloudfront.net/",
    featured: true,
  },
  {
    title: "Voltvera",
    industry: "Commerce & Operations",
    problem: "Multi-party order coordination across partners and channels",
    system: "Commerce platform with partner/payout operations workspace",
    workflow: "Storefront order → Partner assignment → Fulfillment tracking → Settlement",
    status: "LIVE",
    year: "2025",
    metric: "Measurement pending",
    href: "/projects/voltvera",
    previewUrl: "https://voltverashop.com/",
    featured: true,
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "LIVE": "bg-[#0E7C86]/10 text-[#0E7C86]",
    "UAT": "bg-[#D96C3F]/10 text-[#D96C3F]",
    "PILOT": "bg-[#16324A]/10 text-[#16324A]",
    "PRODUCT DIRECTION": "bg-white/10 text-white/60",
  };

  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${styles[status] || styles["PRODUCT DIRECTION"]}`}>
      {status}
    </span>
  );
}

export default function ProjectsPreview() {
  return (
    <section className="py-20 bg-[#16324A]">
      <div className="container-wrapper">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-[#0E7C86] font-medium mb-3">Projects</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Storefronts and systems we've built
            </h2>
            <p className="text-white/60 text-lg max-w-xl">
              Real work for real shops. From intake to delivery, here's how we've helped 
              custom-order businesses get orders moving.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#0E7C86] font-medium hover:gap-3 transition-all shrink-0"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-white/50">{project.industry}</span>
                    <span className="text-white/30">•</span>
                    <StatusBadge status={project.status} />
                    <span className="text-xs text-white/40">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                {project.previewUrl && (
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white/40 hover:text-white transition-colors p-2"
                    title="Preview"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Details */}
              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-white/40 text-sm">Problem: </span>
                  <span className="text-white/70 text-sm">{project.problem}</span>
                </div>
                <div>
                  <span className="text-white/40 text-sm">System: </span>
                  <span className="text-white/70 text-sm">{project.system}</span>
                </div>
                <div>
                  <span className="text-white/40 text-sm">Workflow: </span>
                  <span className="text-white/70 text-sm">{project.workflow}</span>
                </div>
              </div>

              {/* Metric */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-white/40 text-sm">Outcome: </span>
                <span className="text-white/50 text-sm italic">{project.metric}</span>
              </div>

              {/* Link indicator */}
              <div className="flex items-center gap-2 text-[#0E7C86] text-sm font-medium mt-4 group-hover:gap-3 transition-all">
                View case study <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
