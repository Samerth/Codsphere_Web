import type { Metadata } from "next";
import PageHero from "@/components/revamp/PageHero";
import Verify from "@/components/revamp/Verify";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign in | CodSphere",
  description: "Sign in to your CodSphere application — CodCRM, CodChat or Sortify.",
  alternates: { canonical: "https://codsphere.com/sign-in" },
  robots: { index: false, follow: true },
};

const apps = [
  {
    name: "CodCRM",
    blurb: "Customer and order workbench.",
    href: "https://codcrm.com/",
  },
  {
    name: "CodChat",
    blurb: "Website chat and guided intake.",
    href: "https://codsphere.chat/",
  },
  {
    name: "Sortify",
    blurb: "Digital mailroom.",
    href: "https://www.codsphere.com/sortify",
  },
];

export default function SignInPage() {
  return (
    <div className="bg-cs-mist text-cs-ink">
      <PageHero
        eyebrow="Existing customers"
        title="Sign in to your CodSphere application."
        subhead="Choose the product you use. New here? Start with an Order Flow Review instead."
      />
      <section className="cs-section">
        <div className="container-wrapper grid gap-5 sm:grid-cols-3">
          {apps.map((a) => (
            <a
              key={a.name}
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-cs-line bg-white p-6 transition-colors hover:border-cs-teal"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-sequel text-[20px] font-bold text-cs-ink">{a.name}</h2>
                <ArrowUpRight size={20} className="text-cs-ink/40 group-hover:text-cs-teal" />
              </div>
              <p className="mt-2 text-[15px] text-cs-ink/70">{a.blurb}</p>
            </a>
          ))}
        </div>
        <div className="container-wrapper">
          <p className="mt-6 text-[13px] text-cs-ink/55">
            Application sign-in URLs <Verify>confirm each product login destination</Verify>
          </p>
        </div>
      </section>
    </div>
  );
}
