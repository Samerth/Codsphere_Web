'use client';

import Image from 'next/image';

export default function ERPWhyIntegrate() {
  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[65px]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <div className="relative">
            <div className="w-[621px] h-[408px] rounded-[34px] overflow-hidden">
              {/* Replace with your actual image */}
              <Image 
                src="/images/ERP/PNG/why integrate AI.png" 
                alt="AI ERP Integration"
                width={621}
                height={408}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div>
            <h2 
              className="text-[40px] leading-[52px] mb-8" 
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 415,
                maxWidth: '620px'
              }}
            >
              Why Integrate AI with Your ERP System?
            </h2>
            <div 
              className="text-[20px] leading-[24px] text-black" 
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 400,
                maxWidth: '586px'
              }}
            >
              <p className="mb-6">
                AI turns ERP from static software into a proactive intelligence engine:
              </p>
              <div className="space-y-4">
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