// components/services/CRM/CRMProcess.tsx
import Image from "next/image";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  position: 'top' | 'bottom';
  iconWidth: number;
  iconHeight: number;
}

export default function CRMProcess() {
  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Requirements Gathering",
      description: "Deep dive into your process, roles, tools, and bottlenecks.",
      icon: "/images/crm/icons/requirements.svg",
      position: 'top',
      iconWidth: 66,
      iconHeight: 66
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Wireframe your CRM screens and user journeys.",
      icon: "/images/crm/icons/design.svg",
      position: 'bottom',
      iconWidth: 70,
      iconHeight: 70
    },
    {
      number: "03",
      title: "Development & Integration",
      description: "Custom module coding + integration with third-party APIs.",
      icon: "/images/crm/icons/development.svg",
      position: 'top',
      iconWidth: 84,
      iconHeight: 103
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Functional, usability, and performance testing.",
      icon: "/images/crm/icons/testing.svg",
      position: 'bottom',
      iconWidth: 68,
      iconHeight: 85
    },
    {
      number: "05",
      title: "Launch & Training",
      description: "Staff onboarding, admin setup, and real-time usage support.",
      icon: "/images/crm/icons/launch.svg",
      position: 'top',
      iconWidth: 80,
      iconHeight: 99
    },
    {
      number: "06",
      title: "Support & Optimization",
      description: "Monthly maintenance, analytics, and iterative improvements.",
      icon: "/images/crm/icons/support.svg",
      position: 'bottom',
      iconWidth: 88,
      iconHeight: 107
    }
  ];

  return (
    <section aria-labelledby="crm-process" className="bg-white overflow-x-auto">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 xl:px-[68px] py-12 md:py-16">
        
        {/* Title */}
        <h2 
          id="crm-process"
          className="text-[40px] leading-[52px] font-[415] text-black text-center mb-[30px] max-w-[561px] mx-auto"
          style={{ fontFamily: 'Sequel Sans' }}
        >
          Our CRM Development Process
        </h2>

        {/* Process Timeline Container */}
        <div className="relative mx-auto" style={{ width: '1306px', height: '650px' }}>
          
          {/* Horizontal Timeline Line */}
          <div 
            className="absolute bg-black"
            style={{
              width: '100%',
              height: '3px',
              left: '0',
              top: '309px'
            }}
          />

          {/* Process Steps */}
          {processSteps.map((step, index) => {
            // Calculate horizontal position for each step
            const leftPosition = (index * 217) + 30;
            
            return (
              <div key={index}>
                
                {/* Icon Circle */}
                <div 
                  className="absolute bg-black rounded-full flex items-center justify-center z-10"
                  style={{
                    width: '124px',
                    height: '124px',
                    left: `${leftPosition}px`,
                    top: step.position === 'top' ? '0' : '494px'
                  }}
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={step.iconWidth}
                    height={step.iconHeight}
                    className="filter invert"
                  />
                </div>

                {/* Vertical Line */}
                <div 
                  className="absolute bg-black"
                  style={{
                    width: '3px',
                    height: step.position === 'top' ? '186px' : '185px',
                    left: `${leftPosition + 60}px`,
                    top: step.position === 'top' ? '124px' : '312px'
                  }}
                />

                {/* Timeline Dot */}
                <div 
                  className="absolute bg-black rounded-full z-20"
                  style={{
                    width: '24px',
                    height: '24px',
                    left: `${leftPosition + 50}px`,
                    top: '297px'
                  }}
                />

                {/* Text Content - Positioned differently for odd/even indices */}
                {step.position === 'top' ? (
                  // Top positioned text - to the right of vertical line
                  <div 
                    className="absolute"
                    style={{
                      left: `${leftPosition + 84}px`,
                      top: '131px',
                      width: '200px'
                    }}
                  >
                    <div 
                      className="text-[20px] leading-[24px] font-[415] text-black mb-2"
                      style={{ fontFamily: 'Sequel Sans' }}
                    >
                      {step.number}.
                    </div>
                    <h3 
                      className="text-[20px] leading-[24px] font-[415] text-black mb-3"
                      style={{ fontFamily: 'Sequel Sans' }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-[14px] leading-[17px] font-[405] text-[#616161]"
                      style={{ fontFamily: 'Sequel Sans' }}
                    >
                      {step.description}
                    </p>
                  </div>
                ) : (
                  // Bottom positioned text - properly positioned for each step
                  <div 
                    className="absolute"
                    style={{
                      // Custom positioning for each bottom step to avoid overlap
                      left: index === 1 ? `${leftPosition - 135}px` :  // Step 2: Further left
                            index === 3 ? `${leftPosition + 84}px` :   // Step 4: To the right of line
                            `${leftPosition + 84}px`,                  // Step 6: To the right of line
                      top: '370px',
                      width: index === 1 ? '176px' : '200px',
                      textAlign: index === 1 ? 'right' : 'left'
                    }}
                  >
                    <div 
                      className={`text-[20px] leading-[24px] font-[415] text-black mb-2 ${index === 1 ? 'text-right' : 'text-left'}`}
                      style={{ fontFamily: 'Sequel Sans' }}
                    >
                      {step.number}.
                    </div>
                    <h3 
                      className={`text-[20px] leading-[24px] font-[415] text-black mb-3 ${index === 1 ? 'text-right' : 'text-left'}`}
                      style={{ fontFamily: 'Sequel Sans' }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className={`text-[14px] leading-[17px] font-[405] text-[#616161] ${index === 1 ? 'text-right' : 'text-left'}`}
                      style={{ fontFamily: 'Sequel Sans' }}
                    >
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}