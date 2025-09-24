// components/services/CRM/CRMFeatures.tsx
export default function CRMFeatures() {
  const features = [
    {
      feature: "Custom Roles & Permissions",
      description: "Role-based data access to keep your operations secure"
    },
    {
      feature: "Task & Activity Management",
      description: "Assign calls, emails, demos, or onboarding steps"
    },
    {
      feature: "Workflow Automation",
      description: "Let your CRM handle follow-ups, task triggers, and deal assignments"
    },
    {
      feature: "Calendar & Email Sync",
      description: "Full sync with Outlook, Gmail, and your preferred calendar app"
    },
    {
      feature: "Data Import & Migration",
      description: "Bring in your spreadsheets or migrate from old CRMs safely"
    },
    {
      feature: "Mobile-Friendly UI",
      description: "Access your CRM anytime, anywhere with responsive design"
    }
  ];

  return (
    <section aria-labelledby="crm-features" className="bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[90px] py-12 md:py-16 lg:py-[80px]">
        
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 lg:mb-[60px]">
          {/* Title */}
          <h2 
            id="crm-features"
            className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] font-[415] text-black max-w-[529px] mx-auto mb-4 lg:mb-[20px]"
            style={{ fontFamily: 'Sequel Sans' }}
          >
            Key CRM Features at a Glance
          </h2>

          {/* Description */}
          <p 
            className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-[405] text-black max-w-[933px] mx-auto px-4 md:px-0"
            style={{ fontFamily: 'Sequel Sans' }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley.
          </p>
        </div>

        {/* Features Table - responsive version */}
        <div className="w-full bg-[#ECF5F7] rounded-[15px] overflow-hidden">
          
          {/* Table Header - always visible */}
          <div className="flex bg-black h-[50px] md:h-[70px] lg:h-[79px] px-6 md:px-8 lg:px-[40px] items-center">
            <div className="flex-1">
              <h3 
                className="text-[20px] md:text-[26px] lg:text-[30px] leading-[24px] md:leading-[30px] lg:leading-[35px] font-[415] text-white"
                style={{ fontFamily: 'Sequel Sans' }}
              >
                Feature
              </h3>
            </div>
            <div className="flex-1">
              <h3 
                className="text-[20px] md:text-[26px] lg:text-[30px] leading-[24px] md:leading-[30px] lg:leading-[35px] font-[415] text-white"
                style={{ fontFamily: 'Sequel Sans' }}
              >
                Description
              </h3>
            </div>
          </div>

          {/* Table Rows - responsive layout */}
          <div>
            {features.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-start px-6 md:px-8 lg:px-[40px] py-4 md:py-0 md:h-[60px] md:items-center ${
                  index < features.length - 1 ? 'border-b border-black' : ''
                }`}
              >
                <div className="flex-1 pr-2">
                  <p 
                    className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-[415] text-black"
                    style={{ fontFamily: 'Sequel Sans' }}
                  >
                    {item.feature}
                  </p>
                </div>
                <div className="flex-1">
                  <p 
                    className="text-[14px] md:text-[18px] lg:text-[20px] leading-[18px] md:leading-[22px] lg:leading-[24px] font-[415] text-black"
                    style={{ fontFamily: 'Sequel Sans' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}