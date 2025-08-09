const data = [
    { name: "Annie", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { name: "Martine", text: "We cut scope creep and shipped faster than expected." },
    { name: "Johnson", text: "Their CRM architecture scaled with our growth." },
    { name: "Guerra", text: "Tight collaboration and reliable deliveries." },
    { name: "Lee", text: "Great communication and quality." },
    { name: "Bella", text: "Helpful team that understands business goals." },
    { name: "Luke", text: "Automation reduced manual tasks drastically." },
  ];
  
  export default function Testimonials() {
    return (
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-2 text-center text-sm text-gray-400 italic">Voices</p>
          <h3 className="mb-2 text-center text-2xl font-semibold">Trusted by thousands<br/>of forward thinkers across the globe</h3>
          <p className="mx-auto mb-8 max-w-xl text-center text-sm text-gray-500">
            We’ve received endless love and recognition from founders and entrepreneurs who’ve entrusted us with their most precious thoughts and ideas.
          </p>
  
          <div className="grid gap-6 md:grid-cols-3">
            {data.slice(0,3).map((t, idx) => (
              <figure key={t.name} className={`rounded-2xl border p-6 ${idx===1 ? "bg-blue-50" : "bg-white"}`}>
                <figcaption className="mb-2 text-sm font-medium">{t.name}</figcaption>
                <blockquote className="text-sm text-gray-600">“{t.text}”</blockquote>
              </figure>
            ))}
            {data.slice(3).map((t) => (
              <figure key={t.name} className="rounded-2xl border p-6">
                <figcaption className="mb-2 text-sm font-medium">{t.name}</figcaption>
                <blockquote className="text-sm text-gray-600">“{t.text}”</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }
  