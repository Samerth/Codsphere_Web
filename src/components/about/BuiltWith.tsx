const items = [
    { title: "CRM & ERP", text: "HubSpot, Salesforce, Odoo, custom Node/Next stacks" },
    { title: "Backend & DB", text: "Node, Nest, Postgres, Prisma, Redis" },
    { title: "Frontend", text: "Next.js, React, Tailwind, shadcn/ui" },
    { title: "Cloud & CI", text: "Vercel, AWS, Docker, GitHub Actions" },
  ];
  
  export default function BuiltWith() {
    return (
      <section className="bg-neutral-950 py-10 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="mb-6 text-center text-xl font-semibold">Built With Proven Technologies</h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {items.map((i) => (
              <div key={i.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm font-medium">{i.title}</div>
                <p className="mt-2 text-sm text-white/70">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  