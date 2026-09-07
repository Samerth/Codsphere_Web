import type { Metadata } from "next";
import PageHero from "@/components/revamp/PageHero";
import SectionHeading from "@/components/revamp/SectionHeading";
import StatusBadge, { ProjectStatus } from "@/components/revamp/StatusBadge";
import CtaButton from "@/components/revamp/CtaButton";
import Verify from "@/components/revamp/Verify";

export const metadata: Metadata = {
  title: "Custom Commerce & Operations Projects | CodSphere",
  description:
    "Explore live, UAT and pilot systems CodSphere has designed and built around complex business workflows.",
  alternates: { canonical: "https://codsphere.com/projects" },
};

const projects: {
  name: string;
  status: ProjectStatus;
  industry: string;
  problem: string;
  built: string;
  verify: string;
}[] = [
  {
    name: "Great West / Proof Industries",
    status: "uat",
    industry: "Print, signage, apparel & promo",
    problem: "Custom-order buyers could not easily discover, configure and order across many product families.",
    built: "A guided UAT storefront: needs-based navigation, catalogue and team-store context, product grid/detail and an artwork-led path.",
    verify: "customer naming/permission, exact scope, integrations, launch date and any conversion or order outcomes",
  },
  {
    name: "Voltvera",
    status: "live",
    industry: "Franchise / direct sales",
    problem: "Complex franchise operations needed custom CRM, automation and controls beyond off-the-shelf tools.",
    built: "Custom CRM and automation with a live ecommerce property.",
    verify: "client approval for every claim, CodSphere role, live usage, scale and measured outcomes",
  },
  {
    name: "VoltVera Shop",
    status: "live",
    industry: "Consumer electronics ecommerce",
    problem: "A public catalogue needed a reliable commerce surface.",
    built: "A live public ecommerce catalogue (footer credits CodSphere).",
    verify: "build scope, launch date, traffic/conversion/order data and permission to feature",
  },
  {
    name: "CodCRM",
    status: "direction",
    industry: "Platform foundation",
    problem: "Custom-order teams need one workbench for contacts, communication and order tasks.",
    built: "A customer/order workbench with automations, role access and reporting.",
    verify: "paying accounts, active users, supported integrations, uptime and retention",
  },
  {
    name: "CodChat",
    status: "direction",
    industry: "Platform foundation",
    problem: "Buyers of custom work need guidance before they can complete an order.",
    built: "Website chat and structured intake feeding the order.",
    verify: "production customers, conversation volume, qualification accuracy and corrected packaging",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-cs-mist text-cs-ink">
      <PageHero
        eyebrow="Projects"
        title="Systems built around real operating complexity."
        subhead="A polished UAT build proves delivery capability, not customer impact. Every card carries an honest status; every metric will carry a source and period before it is published."
        actions={[{ label: "Start with a similar problem", href: "/order-flow-review" }]}
      />

      <section className="cs-section">
        <div className="container-wrapper">
          <SectionHeading
            title="Evidence, labelled honestly."
            intro="Live, UAT, Pilot and Product-direction work — shown with the status it has, not the status we wish it had."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {projects.map((p) => (
              <article key={p.name} className="rounded-2xl border border-cs-line bg-white p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <StatusBadge status={p.status} />
                  <span className="text-[13px] text-cs-ink/55">{p.industry}</span>
                </div>
                <h3 className="mt-4 font-sequel text-[20px] font-bold text-cs-ink">{p.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-cs-ink/75">
                  <span className="font-semibold text-cs-ink">Problem. </span>
                  {p.problem}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-cs-ink/75">
                  <span className="font-semibold text-cs-ink">Built. </span>
                  {p.built}
                </p>
                <p className="mt-4 border-t border-cs-line pt-4 text-[13px] leading-relaxed text-cs-ink/55">
                  Before publishing: <Verify>{p.verify}</Verify>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cs-navy text-white">
        <div className="container-wrapper py-16">
          <h2 className="font-sequel text-[26px] sm:text-[32px] font-bold">
            Start with a similar problem.
          </h2>
          <p className="mt-4 max-w-2xl text-[17px] text-white/80">
            Point to the project closest to your operation and we will map your order flow against it.
          </p>
          <div className="mt-8">
            <CtaButton href="/order-flow-review" withArrow>
              Show us your workflow
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
