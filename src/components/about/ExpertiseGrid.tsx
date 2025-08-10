const items = [
    { title: "Custom CRM", text: "Lead management, pipelines, service inbox, automation." },
    { title: "AI-Driven ERP", text: "Integrations, inventory, finance, workflows & approvals." },
    { title: "Smart Invoicing", text: "Recurring billing, tax rules, reconciliation & admin." },
    { title: "Data & Analytics", text: "Attribution, dashboards, reporting & insights." },
  ];
  
  export default function ExpertiseGrid() {
    return (
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="mb-6 text-center text-xl font-semibold">Our Expertise — What Sets Us Apart</h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {items.map((i) => (
              <div key={i.title} className="rounded-2xl border p-5">
                <div className="text-sm font-medium">{i.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  