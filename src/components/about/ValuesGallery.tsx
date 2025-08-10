import Image from "next/image";

const tiles = [
  { title: "Clear Communication", img: "/images/about/value-1.jpg" },
  { title: "Velocity with Quality", img: "/images/about/value-2.jpg" },
  { title: "Design that Performs", img: "/images/about/value-3.jpg" },
  { title: "Owners, not Vendors", img: "/images/about/value-4.jpg" },
];

export default function ValuesGallery() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="mb-6 text-center text-xl font-semibold">Our Values: Where Vision Meets Execution</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {tiles.map((t) => (
            <figure key={t.title} className="rounded-2xl border">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                <Image src={t.img} alt={t.title} fill className="object-cover" />
              </div>
              <figcaption className="p-3 text-sm font-medium">{t.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
