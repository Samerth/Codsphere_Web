"use client";

import * as React from "react";

const faqs = [
  {
    q: "What makes CodSphere's CRM different from off-the-shelf tools like HubSpot or Zoho?",
    a: "Unlike generic platforms, our CRM is built custom for your workflow. Whether you're managing sales pipelines, onboarding clients, or automating reminders, we tailor the logic, UI, and integrations to your exact business model — no unnecessary features, no workarounds.",
  },
  {
    q: "Can you integrate your ERP system with my existing tools and software?",
    a: "Absolutely. Our ERP development focuses on modular and API-first architecture, meaning we can integrate with your accounting tools, inventory apps, HR systems, or any third-party software — from QuickBooks to SAP.",
  },
  {
    q: "How long does it take to build a custom CRM or ERP?",
    a: "Typical projects take 4 to 12 weeks, depending on complexity. We follow agile methodology, so you'll see progress in sprints and can start using core features while we continue building enhancements.",
  },
  {
    q: "Do you offer mobile apps with your web solutions?",
    a: "Yes — all our platforms are mobile-optimised by default, and we offer dedicated iOS and Android apps if your team needs native functionality (like offline access, push notifications, or camera-based features).",
  },
  {
    q: "How secure are your invoicing and automation tools?",
    a: "We prioritise security from day one — using bank-grade encryption, secure login protocols, and GDPR-compliant architecture. Whether you're handling financial data or customer records, your system is protected end-to-end.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-[70px]">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[152px]">
        {/* Header */}
        <h2 className="text-center text-[40px] leading-[52px] font-[415] font-sequel text-black mb-[43px]">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items - spacing of 30px between items (173px spacing - 143px height = 30px) */}
        <div className="space-y-[30px]">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="relative">
                {/* Blue shadow background - positioned 6px to the left */}
                <div 
                  className="absolute bg-[#608BF3] rounded-[17px]"
                  style={{ 
                    width: '1129px',
                    height: isOpen ? 'calc(100% + 6px)' : '143px',
                    left: '-6px',
                    top: '0'
                  }}
                  aria-hidden="true"
                />
                
                {/* Main FAQ container - 1130px width */}
                <div 
                  className={`relative bg-[#F5F6FA] rounded-[17px] transition-all duration-300`}
                  style={{ 
                    width: '1130px',
                    minHeight: '143px'
                  }}
                >
                  <div className={`p-[30px] pr-[80px] ${!isOpen ? 'h-[143px] flex items-center' : ''}`}>
                    <h3 className="text-[22px] leading-[26px] font-[415] font-sequel text-black">
                      {item.q}
                    </h3>
                    
                    {/* Answer - only visible when open */}
                    {isOpen && (
                      <p className="mt-[20px] text-[16px] leading-[19px] font-[405] font-sequel text-black max-w-[836px] animate-fadeIn">
                        {item.a}
                      </p>
                    )}
                  </div>
                  
                  {/* Arrow button - positioned from right edge */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`absolute w-[42px] h-[42px] rounded-full bg-[#608BF3] flex items-center justify-center transition-transform duration-300 hover:scale-110`}
                    style={{
                      right: '60px',
                      top: isOpen ? '20px' : '50px'
                    }}
                    aria-label={isOpen ? 'Collapse' : 'Expand'}
                    aria-expanded={isOpen}
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    >
                      <path 
                        d="M7 10l5 5 5-5" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Add animation keyframe */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}