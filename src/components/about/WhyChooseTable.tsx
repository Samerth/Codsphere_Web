const rows = [
    ["20+ years combined ERP/CRM delivery", "Proven alignment"],
    ["Clear discovery & roadmapping", "Predictable sprints"],
    ["Data, automation & CX-first thinking", "Reliable outcomes"],
    ["Design systems + component handoff", "Faster product velocity"],
    ["Tight QA and performance guardrails", "Fewer regressions"],
  ];
  
  export default function WhyChooseTable() {
    return (
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="mb-4 text-center text-xl font-semibold">Why Clients Choose CodSphere</h3>
          <div className="overflow-hidden rounded-2xl border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Credentials</th>
                  <th className="px-4 py-3 text-left font-medium">Benefit</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([a, b]) => (
                  <tr key={a} className="odd:bg-white even:bg-muted/30">
                    <td className="px-4 py-3">{a}</td>
                    <td className="px-4 py-3 text-muted-foreground">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
  