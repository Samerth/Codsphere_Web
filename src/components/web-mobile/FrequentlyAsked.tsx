// components/services/web-mobile/FrequentlyAsked.tsx
"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How long does it take to build a website or app?",
    answer: "Basic websites: 1–2 weeks\nCustom platforms/apps: 4–12 weeks based on scope"
  },
  {
    id: 2,
    question: "Will my site or app be mobile-friendly?",
    answer: "Absolutely. Every project is responsive across devices by default."
  },
  {
    id: 3,
    question: "Do you offer maintenance?",
    answer: "Yes — we provide optional monthly support, upgrades, and performance monitoring."
  },
  {
    id: 4,
    question: "Can I see progress during development?",
    answer: "Yes, we provide live staging links and weekly updates via Notion or Trello."
  }
];

export default function FrequentlyAsked() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([]); // Empty array - all collapsed by default

  const toggleFaq = (id: number) => {
    setOpenFaqs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px]">
        <h2 className="text-center mb-8 md:mb-10 lg:mb-12 text-[28px] md:text-[36px] lg:text-[40px] leading-[36px] md:leading-[46px] lg:leading-[52px] font-[415] font-sequel">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 md:space-y-5 lg:space-y-6">
          {faqs.map((faq) => {
            const isOpen = openFaqs.includes(faq.id);
            
            return (
              <div key={faq.id} className="relative mx-auto max-w-full lg:max-w-[1136px] px-0 md:px-2">
                {/* Blue shadow card behind - responsive */}
                <div 
                  className="hidden md:block absolute rounded-[14px] md:rounded-[16px] lg:rounded-[17px] transition-all duration-300 bg-[#608BF3]"
                  style={{ 
                    width: 'calc(100% - 5px)',
                    height: isOpen ? 'calc(100% + 0px)' : '65px',
                    left: '0px',
                    top: '0px'
                  }} 
                />
                
                {/* Main card - responsive */}
                <div 
                  className="relative rounded-[14px] md:rounded-[16px] lg:rounded-[17px] cursor-pointer transition-all duration-300 bg-[#F5F6FA] min-h-[60px] md:min-h-[65px] lg:min-h-[72px] md:ml-[6px]"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="p-4 md:p-5 lg:p-6 pr-[60px] md:pr-[70px] lg:pr-20">
                    <h3 className="text-[18px] md:text-[20px] lg:text-[22px] leading-[22px] md:leading-[24px] lg:leading-[26px] font-[415] font-sequel pr-2 md:pr-4 lg:pr-8">
                      {faq.question}
                    </h3>
                    
                    {/* Animated answer section - responsive */}
                    <div 
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: isOpen ? '200px' : '0px',
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <div className="mt-3 md:mt-3.5 lg:mt-4">
                        {faq.answer.split('\n').map((line, index) => (
                          <p 
                            key={index}
                            className="text-[14px] md:text-[15px] lg:text-[16px] leading-[18px] md:leading-[20px] lg:leading-[22px] text-[#515151] font-[405] font-sequel"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow button - responsive */}
                  <div 
                    className="absolute top-4 md:top-1/2 md:-translate-y-1/2 right-4 md:right-5 lg:right-6 rounded-full flex items-center justify-center transition-all duration-300 w-9 h-9 md:w-10 md:h-10 lg:w-[42px] lg:h-[42px] bg-[#608BF3]"
                  >
                    <svg 
                      className="w-5 h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      style={{
                        transition: 'transform 300ms',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    >
                      <path 
                        d="M7 10L12 15L17 10" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}