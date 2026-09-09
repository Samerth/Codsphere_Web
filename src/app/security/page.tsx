import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Shield, FileText, Database, Download, Users, Bot, Lock, Server, Key } from "lucide-react";

export const metadata: Metadata = {
  title: "Security — How We Protect Your Data | CodSphere",
  description: "Data handling practices, security measures, and compliance information for CodSphere customers.",
  alternates: {
    canonical: "https://codsphere.com/security",
  },
};

const practices = [
  {
    icon: Eye,
    title: "Read-only first",
    description: "When we connect to your existing systems, we start read-only. We see data before we write to it, so you can verify what we're doing.",
  },
  {
    icon: Shield,
    title: "Role-based access",
    description: "Control who sees what. Staff, managers, and customers each get the view they need — nothing more. You manage permissions.",
  },
  {
    icon: FileText,
    title: "Audit trail",
    description: "Every change is logged. Know who did what, when, and why. Useful for compliance requirements and troubleshooting.",
  },
  {
    icon: Database,
    title: "Regular backups",
    description: "Your data is backed up regularly to multiple locations. If something goes wrong, we can restore to a known good state.",
  },
  {
    icon: Download,
    title: "Data export & deletion",
    description: "Your data stays yours. Export it anytime in standard formats. Request deletion and we'll confirm when it's complete.",
  },
  {
    icon: Users,
    title: "Subprocessor transparency",
    description: "We use trusted infrastructure partners for hosting and services. Our subprocessor list is available on request.",
  },
  {
    icon: Bot,
    title: "AI disclosure",
    description: "When we use AI to help with intake categorization or text extraction, we tell you. No hidden automation on your data.",
  },
  {
    icon: Lock,
    title: "Encryption",
    description: "Data is encrypted in transit (TLS) and at rest. Your customer information never travels unprotected.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Hosted on AWS infrastructure in Canadian regions where available. Benefit from enterprise-grade physical security.",
  },
  {
    icon: Key,
    title: "Authentication",
    description: "Strong password requirements, session management, and optional two-factor authentication for admin accounts.",
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-black py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Security & Data Handling
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              We handle order data carefully. Here's how we keep it safe and give you control.
            </p>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              How we protect your data
            </h2>
            <p className="text-black/60 text-lg max-w-2xl mx-auto">
              Practical security measures for real business data. Not security theater — 
              actual practices that protect your customers' information.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {practices.map((practice) => {
              const Icon = practice.icon;
              return (
                <div
                  key={practice.title}
                  className="bg-[#f5f5f5] rounded-xl p-6 border border-black/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#33fcfe]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#010b66]" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">{practice.title}</h3>
                  <p className="text-black/60 text-sm">{practice.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance note */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-black mb-4">
              Compliance & certifications
            </h2>
            <div className="bg-white rounded-xl p-6 border border-black/10">
              <p className="text-black/60 mb-4">
                We follow security best practices appropriate for handling business order data. 
                For specific compliance requirements (SOC 2, industry-specific regulations), 
                please contact us to discuss your needs.
              </p>
              <p className="text-black/50 text-sm">
                {/* VERIFY: Add specific certifications when obtained */}
                [VERIFY: Specific certifications and compliance status to be updated as obtained]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Questions about security?
          </h2>
          <p className="text-black/60 text-lg mb-8 max-w-xl mx-auto">
            We're happy to answer specific questions about how we handle data, 
            discuss your compliance requirements, or provide additional documentation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#010b66] to-[#33fcfe] text-white text-lg font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Contact us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
