import Image from "next/image";

const team = [
  { name: "Kevin Nicholson", role: "Lead Architect (CRM & ERP)", img: "/images/team-1.jpg" },
  { name: "Robert Peppers", role: "UX Engineer", img: "/images/team-2.jpg" },
  { name: "Wayne Gagnon", role: "Mobile & Web Tech Lead", img: "/images/team-3.jpg" },
  { name: "Kimberly Branch", role: "Digital Strategy & Growth Expert", img: "/images/team-4.jpg" },
];

export default function Team() {
  return (
    <section id="team" className="py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-center text-sm text-gray-400 italic">Experts Team</p>
        <h3 className="mb-8 text-center text-2xl font-semibold">Team Perfection At It’s Finest</h3>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {team.map((p) => (
            <div key={p.name} className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="relative mx-auto mb-4 h-36 w-36 overflow-hidden rounded-full ring-4 ring-gray-100">
                <Image src={p.img} alt={p.name} fill className="object-cover" />
                <div className="absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-black/80 text-white">▶</div>
              </div>
              <div className="text-center text-sm font-medium">{p.name}</div>
              <div className="text-center text-xs text-gray-500">{p.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
