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
    answer: "Yes – we provide optional monthly support, upgrades, and performance monitoring."
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
    <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6">
        <h2 
          className="text-center mb-12"
          style={{ 
            fontFamily: 'Sequel Sans',
            fontWeight: 415,
            fontSize: '40px', 
            lineHeight: '52px'
          }}
        >
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          {faqs.map((faq) => {
            const isOpen = openFaqs.includes(faq.id);
            
            return (
              <div key={faq.id} className="relative mx-auto" style={{ maxWidth: '1136px' }}>
                {/* Blue shadow card behind */}
                <div 
                  className="absolute rounded-2xl transition-all duration-300"
                  style={{ 
                    width: 'calc(100% - 7px)',
                    height: isOpen ? 'calc(100% - 0px)' : '72px',
                    background: '#608BF3',
                    borderRadius: '17px',
                    left: '0px',
                    top: '0px'
                  }} 
                />
                
                {/* Main card */}
                <div 
                  className="relative rounded-2xl cursor-pointer transition-all duration-300"
                  style={{ 
                    backgroundColor: '#F5F6FA',
                    borderRadius: '17px',
                    minHeight: '72px',
                    marginLeft: '6px'
                  }}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="p-6 pr-20">
                    <h3 
                      className="pr-8"
                      style={{ 
                        fontFamily: 'Sequel Sans',
                        fontWeight: 415,
                        fontSize: '22px', 
                        lineHeight: '26px'
                      }}
                    >
                      {faq.question}
                    </h3>
                    
                    {/* Animated answer section */}
                    <div 
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: isOpen ? '200px' : '0px',
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <div className="mt-4">
                        {faq.answer.split('\n').map((line, index) => (
                          <p 
                            key={index}
                            style={{ 
                              fontFamily: 'Sequel Sans',
                              fontWeight: 405,
                              fontSize: '16px', 
                              lineHeight: '22px',
                              color: '#515151'
                            }}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow button */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 right-6 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ 
                      width: '42px',
                      height: '42px',
                      backgroundColor: '#608BF3'
                    }}
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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