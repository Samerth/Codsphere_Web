'use client';

import Image from 'next/image';

export default function ERPWhyIntegrate() {
  return (
    <section className="py-12 md:py-16 lg:py-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[65px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Image */}
          <div className="relative">
            <div className="w-full h-[250px] md:h-[350px] lg:h-[408px] rounded-[20px] md:rounded-[28px] lg:rounded-[34px] overflow-hidden">
              <Image 
                src="/images/ERP/PNG/why integrate AI.png" 
                alt="AI ERP Integration"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div>
            <h2 
              className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] mb-6 md:mb-7 lg:mb-8" 
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 415
              }}
            >
              Why Integrate AI with Your ERP System?
            </h2>
            <div 
              className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-black" 
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 400
              }}
            >
              <p className="mb-4 md:mb-5 lg:mb-6">
                AI turns ERP from static software into a proactive intelligence engine:
              </p>
              <div className="space-y-3 md:space-y-3 lg:space-y-4">
                <p>
                  <span style={{ fontWeight: 415 }}>Enhanced Decision Making:</span> Automated trend detection, 
                  predictive forecasts, strategic dashboards
                </p>
                <p>
                  <span style={{ fontWeight: 415 }}>Operational Automation:</span> RPA + AI handles data entry, 
                  approvals, scheduling and reporting
                </p>
                <p>
                  <span style={{ fontWeight: 415 }}>Demand Forecasting & Inventory Optimisation:</span> Reduced 
                  overstocking and stockouts, smarter procurement planning
                </p>
                <p>
                  <span style={{ fontWeight: 415 }}>Personalised User Experience:</span> Role-based dashboards 
                  and AI suggestions tailored to managers and teams
                </p>
                <p>
                  <span style={{ fontWeight: 415 }}>Security & Risk Monitoring:</span> Detect anomalies, prevent 
                  fraud, and uphold GDPR/HIPAA compliance in real time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}