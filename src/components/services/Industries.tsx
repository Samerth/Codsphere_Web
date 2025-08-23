import Image from "next/image";

const items = [
  { label: "SaaS & Tech Startups", tone: "bg-[#EEDFFF]" },
  { label: "Retail & eCommerce", tone: "bg-[#FFF4D5]" },
  { label: "Healthcare & Clinics", tone: "bg-[#FFE7D5]" },
  { label: "Education & Training", tone: "bg-[#CFFFEE]" },
  { label: "Manufacturing & Logistics", tone: "bg-[#FFCFCF]" },
  { label: "Digital Agencies & Consultants", tone: "bg-[#BCCFFF]" },
];

export default function IndustriesBand() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative bg-black py-10">
        <div className="absolute inset-0">
          <Image
            src="/images/services/band-texture-2.jpg"
            alt=""
            fill
            className="-rotate-90 object-cover opacity-30"
          />
        </div>
        <div className="container relative z-10 mx-auto max-w-[1440px] px-4 text-center text-white">
          <h2 className="text-[40px] leading-[1.296] font-[415]">Industries We Serve</h2>
          <p className="mx-auto mt-2 max-w-[521px] text-[20px] leading-[24px]">
            Our flexible architecture suits any industry, but we specialise in:
          </p>

          <ul className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {items.map((it) => (
              <li key={it.label} className="rounded-[22px] border border-white/10 bg-white/5 p-4 text-white">
                <div className={`mx-auto grid size-[122px] place-content-center rounded-[22px] ${it.tone}`} />
                <p className="mt-3 text-center text-[20px] leading-[24px] font-[420]">{it.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
