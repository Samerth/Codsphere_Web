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
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] leading-[36px] md:leading-[46px] lg:leading-[52px] font-medium text-black font-sequel max-w-[565px] mx-auto">
            Why Clients Choose CodSphere
          </h2>
          <p className="mt-5 md:mt-7 text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-black font-sequel max-w-[933px] mx-auto px-4">
            Our dedication to outcome-based consulting mirrors firms like Webisoft, Gestisoft, 
            and Purely CRM—combining technical prowess with business insight
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full max-w-[1260px] mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full rounded-[15px] overflow-hidden">
              {/* Header Row */}
              <thead>
                <tr className="bg-black">
                  <th className="text-left px-6 md:px-10 lg:px-[50px] py-4 md:py-[22px]">
                    <h3 className="text-white text-[20px] md:text-[26px] lg:text-[30px] leading-[26px] md:leading-[32px] lg:leading-[35px] font-medium font-sequel">
                      Credential
                    </h3>
                  </th>
                  <th className="text-left px-6 md:px-10 lg:px-[50px] py-4 md:py-[22px]">
                    <h3 className="text-white text-[20px] md:text-[26px] lg:text-[30px] leading-[26px] md:leading-[32px] lg:leading-[35px] font-medium font-sequel">
                      Benefit
                    </h3>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-[#ECF5F7]">
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className={index !== 0 ? "border-t border-black" : ""}
                  >
                    <td className="px-6 md:px-10 lg:px-[50px] py-4 md:py-[27px] align-top w-[60%]">
                      <div className="text-[14px] md:text-[18px] lg:text-[20px] leading-[18px] md:leading-[22px] lg:leading-[24px] text-black font-medium font-sequel">
                        {row.credential}
                      </div>
                    </td>
                    <td className="px-6 md:px-10 lg:px-[50px] py-4 md:py-[27px] align-top w-[40%]">
                      <div className="text-[14px] md:text-[18px] lg:text-[20px] leading-[18px] md:leading-[22px] lg:leading-[24px] text-black font-medium font-sequel">
                        {row.benefit}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}