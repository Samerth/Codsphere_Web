'use client';

import Image from 'next/image';

export default function ERPProcess() {
  const steps = [
    {
      title: "Discovery & AI Opportunity Mapping",
      description: "We audit workflows and data flows to identify high-impact AI and ERP use cases.",
      position: "right"
    },
    {
      title: "Module Planning & Blueprinting",
      description: "Architect AI-ready ERP modules tailored to your business logic, infrastructure, and compliance needs.",
      position: "left"
    },
    {
      title: "UI/UX & AI Interface Design",
      description: "Prototype intuitive screens and AI-driven dashboards before development.",
      position: "right"
    },
    {
      title: "Development & Integration",
      description: "Build using AI tools, microservices, middleware, and APIs for ERP, CRM, and third-party systems.",
      position: "left"
    },
    {
      title: "Testing & Performance Tuning",
      description: "Test for usability, latency, accuracy of AI predictions, and integration robustness.",
      position: "right"
    },
    {
      title: "Deployment & Migration",
      description: "Seamless rollout with data integrity and minimal disruption.",
      position: "left"
    },
    {
      title: "Training & Governance",
      description: "Train your teams, set AI governance protocols, and tune predictive models over time.",
      position: "right"
    },
    {
      title: "Maintenance & AI Model Updates",
      description: "Continuous system support, AI re-training, and feature expansion.",
      position: "left"
    }
  ];

  return (
    <section className="pt-[40px] pb-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[65px]">
        <h2 
          className="text-[40px] leading-[52px] text-center mb-16" 
          style={{ 
            fontFamily: 'Sequel Sans',
            fontWeight: 415
          }}
        >
          Our ERP + AI Development Process
        </h2>
        
        {/* Wrapper container that maintains aspect ratio */}
        <div className="relative w-full" style={{ maxWidth: '1310px', margin: '0 auto' }}>
          {/* Timeline Curve SVG container with fixed center position */}
          <div 
            className="absolute hidden lg:block pointer-events-none"
            style={{ 
              top: '46px',
              left: 'calc(50% - 60px)', // Center the 120px wide SVG
              width: '120px',
              height: 'calc(100% - 46px)',
              zIndex: 10 // Higher z-index to ensure it's always on top
            }}
          >
            <Image 
              src="/images/ERP/SVG/string.svg"
              alt="Process Timeline"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          
          {/* Process steps container */}
          <div className="relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative"
                style={{ 
                  minHeight: '92px',
                  marginBottom: index < steps.length - 1 ? '48px' : '0'
                }}
              >
                {/* Flex container for proper alignment */}
                <div className="flex items-center" style={{ minHeight: '92px' }}>
                  {step.position === 'left' ? (
                    <>
                      {/* Left card */}
                      <div style={{ width: 'calc(50% - 80px)' }}>
                        <div className="flex justify-end">
                          <div className="relative" style={{ width: '100%', maxWidth: '580px' }}>
                            {/* Blue side accent */}
                            <div 
                              className="absolute bg-[#608BF3] rounded-[5px]"
                              style={{
                                width: '6px',
                                height: '92px',
                                right: '-6px',
                                top: '0',
                                zIndex: 5
                              }}
                            />
                            
                            {/* Main card */}
                            <div 
                              className="relative bg-[#F1F5FD] rounded-[5px] p-5"
                              style={{
                                minHeight: '92px',
                                position: 'relative',
                                zIndex: 1
                              }}
                            >
                              <h3 
                                className="text-[20px] leading-[24px] mb-1"
                                style={{ 
                                  fontFamily: 'Sequel Sans',
                                  fontWeight: 415
                                }}
                              >
                                {step.title}
                              </h3>
                              <p 
                                className="text-[14px] leading-[17px] text-gray-700"
                                style={{ 
                                  fontFamily: 'Sequel Sans',
                                  fontWeight: 405
                                }}
                              >
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Center spacer */}
                      <div style={{ width: '160px' }}></div>
                      {/* Right empty */}
                      <div style={{ width: 'calc(50% - 80px)' }}></div>
                    </>
                  ) : (
                    <>
                      {/* Left empty */}
                      <div style={{ width: 'calc(50% - 80px)' }}></div>
                      {/* Center spacer */}
                      <div style={{ width: '160px' }}></div>
                      {/* Right card */}
                      <div style={{ width: 'calc(50% - 80px)' }}>
                        <div className="flex justify-start">
                          <div className="relative" style={{ width: '100%', maxWidth: '580px' }}>
                            {/* Blue side accent */}
                            <div 
                              className="absolute bg-[#608BF3] rounded-[5px]"
                              style={{
                                width: '6px',
                                height: '92px',
                                left: '-6px',
                                top: '0',
                                zIndex: 5
                              }}
                            />
                            
                            {/* Main card */}
                            <div 
                              className="relative bg-[#F1F5FD] rounded-[5px] p-5"
                              style={{
                                minHeight: '92px',
                                position: 'relative',
                                zIndex: 1
                              }}
                            >
                              <h3 
                                className="text-[20px] leading-[24px] mb-1"
                                style={{ 
                                  fontFamily: 'Sequel Sans',
                                  fontWeight: 415
                                }}
                              >
                                {step.title}
                              </h3>
                              <p 
                                className="text-[14px] leading-[17px] text-gray-700"
                                style={{ 
                                  fontFamily: 'Sequel Sans',
                                  fontWeight: 405
                                }}
                              >
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}