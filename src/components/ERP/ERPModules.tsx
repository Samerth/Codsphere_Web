'use client';

export default function ERPModules() {
  const modules = [
    {
      title: "Production & Supply Chain Management",
      description: "Real-time inventory monitoring, demand forecasting, and supplier coordination are optimised using machine learning models."
    },
    {
      title: "Finance, Accounting & Budgeting",
      description: "Automate invoicing, expense approvals, and compliance, with AI-based anomaly detection and fraud prevention."
    },
    {
      title: "Human Resources & Workforce Management",
      description: "Use AI to automate onboarding, performance tracking, and predictive attrition alerts."
    },
    {
      title: "Transport, Logistics & Fleet Tracking",
      description: "Route optimisation, delivery prediction, and load planning powered by dynamic AI systems—all integrated into ERP."
    },
    {
      title: "Hospitality & Customer-Facing Operations",
      description: "Reservation, guest services, and inventory modules enhanced with predictive analytics and personalised guest insights."
    },
    {
      title: "Custom AI + ERP Modules",
      description: "From AI chatbots for support automation to intelligent BI dashboards, we tailor AI enhancements to your sector and pain points."
    }
  ];

  return (
    <section className="py-[80px] bg-[#F0F4FA]">
      <div className="max-w-[1440px] mx-auto px-[65px]">
        <h2 
          className="text-[40px] leading-[52px] text-center mb-16" 
          style={{ 
            fontFamily: 'Sequel Sans',
            fontWeight: 415
          }}
        >
          Core Modules & AI Capabilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="relative">
              {/* Blue left border shadow effect */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-[10px] bg-[#608BF3] rounded-l-[8px]"
              />
              
              {/* Main white card */}
              <div 
                className="relative bg-white rounded-[8px] p-6 ml-[10px] min-h-[210px]"
                style={{
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <h3 
                  className="text-[20px] leading-[24px] mb-4"
                  style={{ 
                    fontFamily: 'Sequel Sans',
                    fontWeight: 415
                  }}
                >
                  {module.title}
                </h3>
                <p 
                  className="text-[14px] leading-[17px] text-gray-700"
                  style={{ 
                    fontFamily: 'Sequel Sans',
                    fontWeight: 405
                  }}
                >
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}