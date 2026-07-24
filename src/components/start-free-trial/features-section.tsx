import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      icon: "/icons/account-cog-outline.svg",
      title: "CRM Automation",
      description: "Automate lead scoring & engagement",
      capabilities: [
        "Lead scoring and engagement workflows",
        "Follow-up reminders",
        "Pipeline visibility",
      ],
    },
    {
      icon: "/icons/people-sync-outline.svg",
      title: "ERP Flexibility",
      description: "Simplify accounting, inventory & projects",
      capabilities: [
        "Connected accounting and inventory records",
        "Project and operational workflows",
        "Shared reporting data",
      ],
    },
    {
      icon: "/icons/workflow-outline.svg",
      title: "Data-Driven Insights",
      description: "Forecast smarter with real-time analytics",
      capabilities: [
        "Real-time operational dashboards",
        "Custom reports",
        "Decision-ready business data",
      ],
    },
  ];

  return (
    <section className=" bg-black bg-dots text-white relative">
      <div className="container-wrapper py-more relative z-10 max-w-7xl mx-auto">
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4 md:pb-12 text-white">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            CodCRM for Connected Customer Operations
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Explore the capabilities available in CodCRM.
            <br />
            Bring customer relationships, workflow automation, operational tools, and analytics
            into one adaptable platform.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="max-w-[350px] border border-[#33FCFE] rounded-2xl p-8 hover:border-cyan-500 transition"
            >
              <div className="w-full flex justify-center pb-5">
                <Image
                  src={feature.icon}
                  alt={`${feature.title}-icon`}
                  width={40}
                  height={40}
                  className="w-[35px] h-[35px] md:w-16 md:h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>

              <div>
                <p className="text-sm text-gray-500 mb-1">Includes:</p>
                <ul className="space-y-2 pl-2">
                  {feature.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2">
                      <span>•</span>
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
