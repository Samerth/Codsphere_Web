// components/services/CRM/CRMProcess.tsx
import Image from "next/image";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  position: 'top' | 'bottom';
}

export default function CRMProcess() {
  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Requirements Gathering",
      description: "Deep dive into your process, roles, tools, and bottlenecks.",
      icon: "/images/CRM Page/Svg/requirements gathering.svg",
      position: 'top'
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Wireframe your CRM screens and user journeys.",
      icon: "/images/CRM Page/Svg/Design & Prototyping.svg",
      position: 'bottom'
    },
    {
      number: "03",
      title: "Development & Integration",
      description: "Custom module coding + integration with third-party APIs.",
      icon: "/images/CRM Page/Svg/Development & Integration.svg",
      position: 'top'
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Functional, usability, and performance testing.",
      icon: "/images/CRM Page/Svg/Testing & QA.svg",
      position: 'bottom'
    },
    {
      number: "05",
      title: "Launch & Training",
      description: "Staff onboarding, admin setup, and real-time usage support.",
      icon: "/images/CRM Page/Svg/Launch & Training.svg",
      position: 'top'
    },
    {
      number: "06",
      title: "Support & Optimization",
      description: "Monthly maintenance, analytics, and iterative improvements.",
      icon: "/images/CRM Page/Svg/Support & Optimization.svg",
      position: 'bottom'
    }
  ];

  return (
    <section aria-labelledby="crm-process" className="bg-white mt-[-60px]">
      <div className="max-w-[1440px] mx-auto px-[90px] py-[80px]">
        
        {/* Title */}
        <h2 
          id="crm-process"
          className="text-[40px] leading-[52px] font-[415] text-[#000000] text-center max-w-[561px] mx-auto mb-[80px]"
          style={{ fontFamily: 'Sequel Sans' }}
        >
          Our CRM Development Process
        </h2>

        {/* Process Timeline Container */}
        <div className="relative w-full max-w-[1300px] mx-auto overflow-visible">
          
          {/* Timeline Container */}
          <div className="relative" style={{ minHeight: '650px' }}>
            
            {/* Horizontal Timeline Line */}
            <div 
              className="absolute w-full bg-black"
              style={{
                height: '3px',
                top: '310px',
                left: '0',
                right: '0',
                zIndex: 1
              }}
            />
            
            {/* Steps Container */}
            <div className="relative">
              {processSteps.map((step, index) => {
                const isTop = step.position === 'top';
                const leftPosition = `${(index * 100) / 5}%`;
                
                return (
                  <div 
                    key={index}
                    className="absolute flex flex-col items-center"
                    style={{
                      left: leftPosition,
                      transform: 'translateX(-50%)',
                      width: '300px'
                    }}
                  >
                    {isTop ? (
                      // Top positioned steps
                      <>
                        {/* Icon Circle */}
                        <div className="w-[124px] h-[124px] bg-black rounded-full flex items-center justify-center relative z-10">
                          <Image
                            src={step.icon}
                            alt={step.title}
                            width={60}
                            height={60}
                            className="filter invert"
                          />
                        </div>
                        
                        {/* Vertical Line */}
                        <div 
                          className="bg-black"
                          style={{
                            width: '3px',
                            height: '186px',
                            marginTop: '0'
                          }}
                        />
                        
                        {/* Timeline Dot */}
                        <div 
                          className="bg-black rounded-full relative z-10"
                          style={{
                            width: '24px',
                            height: '24px',
                            marginTop: '-12px'
                          }}
                        />
                        
                        {/* Text Content - Positioned to the right of line */}
                        <div className="absolute" style={{
                          top: '140px',
                          left: '165px',
                          width: '200px'
                        }}>
                          <div className="text-[20px] font-[415] text-black" style={{ fontFamily: 'Sequel Sans' }}>
                            {step.number}.
                          </div>
                          <h3 className="text-[20px] font-[415] text-black mt-1" style={{ fontFamily: 'Sequel Sans' }}>
                            {step.title}
                          </h3>
                          <p className="text-[14px] leading-[17px] font-[405] text-[#616161] mt-2" style={{ fontFamily: 'Sequel Sans' }}>
                            {step.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      // Bottom positioned steps
                      <>
                        {/* Spacer */}
                        <div style={{ height: '310px' }}></div>
                        
                        {/* Timeline Dot */}
                        <div 
                          className="bg-black rounded-full relative z-10"
                          style={{
                            width: '24px',
                            height: '24px',
                            marginTop: '-12px',
                            marginBottom: '-12px'
                          }}
                        />
                        
                        {/* Vertical Line */}
                        <div 
                          className="bg-black"
                          style={{
                            width: '3px',
                            height: '186px'
                          }}
                        />
                        
                        {/* Icon Circle */}
                        <div className="w-[124px] h-[124px] bg-black rounded-full flex items-center justify-center relative z-10">
                          <Image
                            src={step.icon}
                            alt={step.title}
                            width={60}
                            height={60}
                            className="filter invert"
                          />
                        </div>
                        
                        {/* Text Content - Positioned to the left of line */}
                        <div className="absolute" style={{
                          top: '340px',
                          right: '165px',
                          width: '200px',
                          textAlign: 'right'
                        }}>
                          <div className="text-[20px] font-[415] text-black" style={{ fontFamily: 'Sequel Sans' }}>
                            {step.number}.
                          </div>
                          <h3 className="text-[20px] font-[415] text-black mt-1" style={{ fontFamily: 'Sequel Sans' }}>
                            {step.title}
                          </h3>
                          <p className="text-[14px] leading-[17px] font-[405] text-[#616161] mt-2" style={{ fontFamily: 'Sequel Sans' }}>
                            {step.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}