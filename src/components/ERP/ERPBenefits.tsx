'use client';

export default function ERPBenefits() {
  const benefits = [
    {
      feature: "Predictive Forecasting",
      impact: "Boost uptime, reduce costs, improve inventory planning & strategy"
    },
    {
      feature: "Automated Operational Workflows",
      impact: "Free employees from routine tasks and reduce errors"
    },
    {
      feature: "Data Security",
      impact: "Real-time anomaly detection and compliance auditing"
    },
    {
      feature: "Scalability",
      impact: "AI-driven ERP scales with usage and business changes"
    },
    {
      feature: "Unified Analytics",
      impact: "Single source of operational truth—support smarter decisions"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[65px]">
        <h2 
          className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] text-center mb-8 md:mb-12 lg:mb-16" 
          style={{ 
            fontFamily: 'Sequel Sans',
            fontWeight: 415
          }}
        >
          Key Business Benefits
        </h2>
        
        <div className="bg-[#ECF5F7] rounded-[15px] overflow-hidden">
          {/* Header */}
          <div className="bg-black px-6 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6">
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <div 
                className="text-[20px] md:text-[25px] lg:text-[30px] leading-[24px] md:leading-[30px] lg:leading-[35px] text-white"
                style={{ 
                  fontFamily: 'Sequel Sans',
                  fontWeight: 415
                }}
              >
                Feature
              </div>
              <div 
                className="text-[20px] md:text-[25px] lg:text-[30px] leading-[24px] md:leading-[30px] lg:leading-[35px] text-white"
                style={{ 
                  fontFamily: 'Sequel Sans',
                  fontWeight: 415
                }}
              >
                Business Impact
              </div>
            </div>
          </div>
          
          {/* Rows */}
          <div>
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-6 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 ${
                  index !== benefits.length - 1 ? 'border-b border-black' : ''
                }`}
              >
                <div 
                  className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px]"
                  style={{ 
                    fontFamily: 'Sequel Sans',
                    fontWeight: 415
                  }}
                >
                  {benefit.feature}
                </div>
                <div 
                  className="text-[14px] md:text-[18px] lg:text-[20px] leading-[18px] md:leading-[22px] lg:leading-[24px]"
                  style={{ 
                    fontFamily: 'Sequel Sans',
                    fontWeight: 415
                  }}
                >
                  {benefit.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}