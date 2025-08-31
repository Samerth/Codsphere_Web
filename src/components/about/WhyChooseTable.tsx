"use client";

type TableRow = { 
  credential: string; 
  benefit: string; 
};

const tableData: TableRow[] = [
  {
    credential: "4+ years delivering CRM & ERP systems across Canada",
    benefit: "Proven track record",
  },
  {
    credential: "Over 150+ deployments in startups to scale-ups",
    benefit: "Reliable experience",
  },
  {
    credential: "Deep specialisation in CRM, ERP, invoicing, & marketing",
    benefit: "Focused solutions",
  },
  {
    credential: "Agile, transparent development with clear documentation",
    benefit: "Client-friendly approach",
  },
  {
    credential: "Mobile-first, SEO-ready, performance-optimised builds",
    benefit: "Future-proof platforms",
  },
  {
    credential: "Toronto-based with global clients",
    benefit: "Local insight, global reach",
  },
];

export default function WhyChooseTable() {
  return (
    <section className="bg-white py-10 md:py-12">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-[40px] leading-[52px] font-medium text-black font-sequel max-w-[565px] mx-auto">
            Why Clients Choose CodSphere
          </h2>
          <p className="mt-7 text-[20px] leading-[24px] text-black font-sequel max-w-[933px] mx-auto">
            Our dedication to outcome-based consulting mirrors firms like Webisoft, Gestisoft, 
            and Purely CRM—combining technical prowess with business insight
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full max-w-[1260px] mx-auto">
          <div className="overflow-hidden rounded-[15px]">
            {/* Header Row */}
            <div className="bg-black px-[50px] py-[22px] flex justify-between rounded-t-[15px]">
              <h3 className="text-white text-[30px] leading-[35px] font-medium font-sequel">
                Credential
              </h3>
              <h3 className="text-white text-[30px] leading-[35px] font-medium font-sequel">
                Benefit
              </h3>
            </div>

            {/* Table Body */}
            <div className="bg-[#ECF5F7]">
              {tableData.map((row, index) => (
                <div
                  key={index}
                  className={`flex justify-between px-[50px] py-[27px] ${
                    index !== 0 ? "border-t border-black" : ""
                  }`}
                >
                  <div className="text-[20px] leading-[24px] text-black font-medium font-sequel max-w-[550px]">
                    {row.credential}
                  </div>
                  <div className="text-[20px] leading-[24px] text-black font-medium font-sequel min-w-[250px] text-left">
                    {row.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}