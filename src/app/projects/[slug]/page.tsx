import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data";
import { notFound } from "next/navigation";

type PageParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: "Project Not Found | CodSphere",
    };
  }

  return {
    title: `${project.title} — Project | CodSphere`,
    description: project.description,
    alternates: {
      canonical: `https://codsphere.com/projects/${slug}`,
    },
  };
}

export default async function ProjectPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[#14b8a6] text-sm">{project.industry}</span>
              <span className="text-white/30">•</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  project.status === "Live"
                    ? "bg-green-500/20 text-green-400"
                    : project.status === "UAT"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-white/10 text-white/60"
                }`}
              >
                {project.status}
              </span>
              <span className="text-white/40 text-sm">{project.year}</span>
            </div>

            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              {project.title}
            </h1>

            <p className="text-white/70 text-xl leading-relaxed">
              {project.description}
            </p>

            {project.previewUrl && (
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#14b8a6] mt-6 hover:underline"
              >
                View preview <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container-wrapper">
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl">
            <div>
              <span className="text-gray-500 text-sm">Problem</span>
              <p className="text-[#0a1628] mt-1">{project.problem}</p>
            </div>
            <div>
              <span className="text-gray-500 text-sm">System built</span>
              <p className="text-[#0a1628] mt-1">{project.systemBuilt}</p>
            </div>
            <div>
              <span className="text-gray-500 text-sm">Key workflow</span>
              <p className="text-gray-600 text-sm mt-1">{project.workflow}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {project.content.overview}
              </p>

              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">The Challenge</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {project.content.challenge}
              </p>

              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">The Solution</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {project.content.solution}
              </p>

              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">Outcomes</h2>
              <ul className="space-y-3">
                {project.content.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#14b8a6] shrink-0 mt-0.5" />
                    <span className="text-gray-600">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metric disclaimer */}
      <section className="py-8 bg-gray-50">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-500 text-sm">
              <strong>Verified outcome:</strong> {project.metric}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
            Want to see work like this for your shop?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Show us your order flow. We'll show you what's possible.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#14b8a6] to-[#0891b2] text-white text-lg font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Show Us Your Order Flow
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
