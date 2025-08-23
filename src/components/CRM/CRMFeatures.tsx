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
      <div className="mx-auto max-w-[1440px] px-[90px] py-16">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Title */}
          <h2 
            id="crm-features"
            className="text-[40px] leading-[52px] font-[415] text-black mx-auto max-w-[529px] mb-6"
            style={{ fontFamily: 'Sequel Sans' }}
          >
            Key CRM Features at a Glance
          </h2>

          {/* Description */}
          <p 
            className="text-[20px] leading-[24px] font-[405] text-black mx-auto max-w-[933px]"
            style={{ fontFamily: 'Sequel Sans' }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley.
          </p>
        </div>

        {/* Features Table */}
        <div className="w-full bg-[#ECF5F7] rounded-[15px] overflow-hidden">
          
          {/* Table Header */}
          <div className="bg-black h-[79px] px-8 flex items-center">
            <div className="flex-1">
              <h3 
                className="text-[30px] leading-[35px] font-[415] text-white"
                style={{ fontFamily: 'Sequel Sans' }}
              >
                Feature
              </h3>
            </div>
            <div className="flex-1">
              <h3 
                className="text-[30px] leading-[35px] font-[415] text-white"
                style={{ fontFamily: 'Sequel Sans' }}
              >
                Description
              </h3>
            </div>
          </div>

          {/* Table Rows */}
          <div>
            {features.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center px-8 h-[54px] ${
                  index < features.length - 1 ? 'border-b border-black' : ''
                }`}
              >
                <div className="flex-1">
                  <p 
                    className="text-[20px] leading-[24px] font-[415] text-black"
                    style={{ fontFamily: 'Sequel Sans' }}
                  >
                    {item.feature}
                  </p>
                </div>
                <div className="flex-1">
                  <p 
                    className="text-[20px] leading-[24px] font-[415] text-black"
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