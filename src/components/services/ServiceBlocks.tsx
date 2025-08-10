import Image from "next/image";
import Link from "next/link";

type Block = {
  k: string;
  title: string;
  bullets: string[];
  img: string;
  cta?: string;
};

const blocks: Block[] = [
  {
    k: "CRM",
    title: "Custom CRM Development",
    bullets: [
      "Lead & pipeline workflows",
      "Omnichannel inbox & SLAs",
      "Automation, scoring & analytics",
      "Role-based permissions",
    ],
    img: "/images/services/crm.jpg",
    cta: "See more",
  },
  {
    k: "ERP",
    title: "AI-Powered ERP Solutions",
    bullets: [
      "Inventory & finance modules",
      "Approvals & automations",
      "3rd-party integrations (HubSpot, Stripe, Xero)",
      "Data pipelines & reporting",
    ],
    img: "/images/services/erp.jpg",
    cta: "View ERP",
  },
  {
    k: "Billing",
    title: "Smart Invoicing & Billing Software",
    bullets: [
      "Subscriptions & taxation rules",
      "Reconciliation & audit tools",
      "Payment gateways and fraud checks",
      "Admin & compliance",
    ],
    img: "/images/services/billing.jpg",
    cta: "Learn more",
  },
  {
    k: "Growth",
    title: "Digital Marketing Services",
    bullets: [
      "Attribution & analytics",
      "Data-driven campaigns",
      "Marketing automations",
      "SEO/SEM & CRO",
    ],
    img: "/images/services/marketing.jpg",
    cta: "Work with us",
  },
  {
    k: "Apps",
    title: "Web & Mobile App Development",
    bullets: [
      "Pixel-perfect UI with design systems",
      "Secure API & integrations",
      "Performance budgets & testing",
      "DevOps & CI/CD",
    ],
    img: "/images/services/app-dev.jpg",
    cta: "Explore",
  },
];

export default function ServiceBlocks() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-8">
          {blocks.map((b, idx) => (
            <div key={b.k} className="grid gap-5 md:grid-cols-2">
              {/* image left / right alternating */}
              {idx % 2 === 0 ? (
                <>
                  <Image
                    src={b.img}
                    alt={b.title}
                    width={640}
                    height={400}
                    className="h-56 w-full rounded-2xl border object-cover md:h-64"
                  />
                  <div className="rounded-2xl border p-5">
                    <h3 className="text-lg font-semibold">{b.title}</h3>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      {b.bullets.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                    {b.cta && (
                      <Link href="/contact" className="mt-4 inline-block rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
                        {b.cta}
                      </Link>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-2xl border p-5">
                    <h3 className="text-lg font-semibold">{b.title}</h3>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                      {b.bullets.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                    {b.cta && (
                      <Link href="/contact" className="mt-4 inline-block rounded-full bg-black px-4 py-2 text-xs font-medium text-white">
                        {b.cta}
                      </Link>
                    )}
                  </div>
                  <Image
                    src={b.img}
                    alt={b.title}
                    width={640}
                    height={400}
                    className="h-56 w-full rounded-2xl border object-cover md:h-64"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
