"use client";

type TableRow = {
  credential: string;
  benefit: string;
};

const tableData: TableRow[] = [
  {
    credential: "Product development and custom delivery under one team",
    benefit: "A solution matched to the need",
  },
  {
    credential: "Sortify, CodChat, and CodCRM",
    benefit: "Ready-to-explore product options",
  },
  {
    credential: "Custom CRM, ERP, web, mobile, integration, and automation expertise",
    benefit: "Tailored systems when needed",
  },
  {
    credential: "Agile, transparent development with clear documentation",
    benefit: "Client-friendly approach",
  },
  {
    credential: "Scalable, maintainable delivery",
    benefit: "Technology built to evolve",
  },
  {
    credential: "Vancouver-based, serving globally",
    benefit: "Local insight, global reach",
  },
];

export default function WhyChooseTable() {
  return (
    <section className="bg-white">
      <div className="container-wrapper py-less">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Why Clients Choose CodSphere
          </h2>
          <p className="mt-2 text-[20px] font-light">
            We combine the focus of a product company with the flexibility of a custom software
            partner.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full">
          <div className="overflow-x-auto">
            <table className="w-full rounded-[15px] overflow-hidden">
              {/* Header Row */}
              <thead>
                <tr className="bg-black">
                  <th className="text-left px-6 md:px-10 lg:px-[50px] py-4 md:py-[22px]">
                    <p className="text-white text-[20px] md:text-[26px] lg:text-[30px] leading-[26px] md:leading-[32px] lg:leading-[35px] font-medium font-sequel">
                      Credential
                    </p>
                  </th>
                  <th className="text-left px-6 md:px-10 lg:px-[50px] py-4 md:py-[22px]">
                    <p className="text-white text-[20px] md:text-[26px] lg:text-[30px] leading-[26px] md:leading-[32px] lg:leading-[35px] font-medium font-sequel">
                      Benefit
                    </p>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="bg-[#ECF5F7]">
                {tableData.map((row, index) => (
                  <tr key={index} className={index !== 0 ? "border-t border-black" : ""}>
                    <td className="px-6 md:px-10 lg:px-[50px] py-4 md:py-6 align-top w-[60%]">
                      <div className="text-[14px] md:text-[18px] lg:text-[20px] leading-[18px] md:leading-[22px] lg:leading-[24px] text-black font-medium font-sequel">
                        {row.credential}
                      </div>
                    </td>
                    <td className="px-6 md:px-10 lg:px-[50px] py-4 md:py-6 align-top w-[40%]">
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
