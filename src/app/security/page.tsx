import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Eye, Lock, Database, Download, Users, FileText, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Security — Your Data, Your Control | CodSphere",
  description: "How we handle order data, integrations, access control, and compliance. Read-only-first integrations, RBAC, audit trails, and data portability.",
  alternates: {
    canonical: "https://codsphere.com/security",
  },
};

const securityPractices = [
  {
    icon: Eye,
    title: "Read-only-first integrations",
    description: "Integrations start read-only. We connect to your existing systems to see data before we write to them. This lets you verify everything works correctly before enabling two-way sync.",
  },
  {
    icon: Users,
    title: "Role-based access control (RBAC)",
    description: "Control who sees what. Staff, managers, and customers each get the view they need — nothing more. You define the roles, we enforce them.",
  },
  {
    icon: FileText,
    title: "Audit trail",
    description: "Every change is logged with who did what, when, and why. Useful for compliance, troubleshooting, and understanding how orders moved through your system.",
  },
  {
    icon: Database,
    title: "Regular backups",
    description: "Your data is backed up regularly to geographically distributed storage. If something goes wrong, we can restore to a known good state.",
  },
  {
    icon: Download,
    title: "Export & deletion",
    description: "Your data stays yours. Export it anytime in standard formats. Request deletion and we'll confirm when it's done and provide proof.",
  },
  {
    icon: Lock,
    title: "Encryption",
    description: "Data encrypted in transit (TLS 1.3) and at rest. Sensitive fields like payment information receive additional encryption layers.",
  },
];

const verifyItems = [
  {
    title: "Subprocessors",
    description: "We use trusted infrastructure partners for hosting, databases, and communications. Our subprocessor list is available on request.",
    verifyNote: "VERIFY: Complete subprocessor list and update cadence",
  },
  {
    title: "AI disclosure",
    description: "When we use AI to help with intake categorization or data extraction, we disclose it. No hidden automation making decisions about your orders.",
    verifyNote: "VERIFY: Specific AI disclosure policy and opt-out mechanisms",
  },
  {
    title: "Compliance certifications",
    description: "Current compliance status and certifications available on request.",
    verifyNote: "VERIFY: SOC 2, GDPR compliance status and certification timeline",
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0a1628] py-20 -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-32 sm:pt-36 lg:pt-40">
        <div className="container-wrapper">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/20 px-4 py-1.5 text-[#14b8a6] text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Security & Trust
            </div>
            <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Your data, your control
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              We handle order data carefully. Here's how we keep it safe and give you control.
            </p>
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
              How we protect your data
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Security practices built for businesses that handle customer orders and sensitive information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {securityPractices.map((practice) => {
              const Icon = practice.icon;
              return (
                <div
                  key={practice.title}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0a1628]/5 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#0a1628]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0a1628] mb-2">
                    {practice.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{practice.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Items requiring verification */}
      <section className="py-16 bg-gray-50">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0a1628] mb-6">
              Details available on request
            </h2>
            <div className="space-y-6">
              {verifyItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <h3 className="font-semibold text-[#0a1628] mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <p className="text-yellow-600 text-sm bg-yellow-50 px-3 py-1 rounded inline-block">
                    {item.verifyNote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact for security */}
      <section className="py-20 bg-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-4">
            Security questions?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            If you have specific security requirements or need documentation for your compliance process, 
            get in touch and we'll provide what you need.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#0a1628] text-white text-lg font-medium px-8 py-4 rounded-full hover:bg-[#0a1628]/90 transition-opacity"
          >
            Contact us about security
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
