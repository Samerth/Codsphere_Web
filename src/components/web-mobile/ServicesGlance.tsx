// components/services/web-mobile/ServicesGlance.tsx
"use client";

const services = [
  {
    id: 1,
    title: "Custom Web Development",
    description: "From dynamic websites to complex web platforms, we develop secure, scalable, and SEO-optimised web solutions.",
    details: [
      "Frontend: HTML5, CSS3, React, Angular",
      "Backend: Node.js, PHP, Laravel, Python", 
      "CMS: WordPress, Shopify, Webflow, Headless CMS"
    ],
    style: { backgroundColor: '#EEDFFF' }
  },
  {
    id: 2,
    title: "Mobile App Development", 
    description: "We create sleek, intuitive, and high-performing mobile apps for iOS and Android — built to engage and scale.",
    details: [
      "Native (Swift, Kotlin) & Cross-Platform (Flutter, React Native)",
      "Play Store & App Store Deployment",
      "Feature-Rich Apps with Modern UI/UX"
    ],
    style: { backgroundColor: '#FFF4D5' }
  },
  {
    id: 3,
    title: "eCommerce Development",
    description: "Launch your online store with rich features, fast performance, and seamless checkout experiences.",
    details: [
      "Shopify, WooCommerce, Magento, BigCommerce",
      "Payment Gateway Integration",
      "Cart Optimisation & Analytics"
    ],
    style: { backgroundColor: '#FFE7D5' }
  },
  {
    id: 4,
    title: "Web App & SaaS Platforms",
    description: "Have a SaaS idea or need a robust internal platform? We engineer enterprise-grade web applications with full backend architecture.",
    details: [
      "Custom SaaS solutions for diverse industries",
      "Scalable web apps with secure user data management",
      "Integration with third-party APIs and services"
    ],
    style: { backgroundColor: '#CFFFEE' }
  },
  {
    id: 5,
    title: "UI/UX Design & Prototyping",
    description: "User experience isn't an option—it's essential. We wireframe, prototype, and design user-centric interfaces that convert.",
    details: [
      "In-depth user research and persona development",
      "Interactive wireframes and high-fidelity prototypes",
      "Mobile-first and responsive design"
    ],
    style: { backgroundColor: '#BCCFFF' }
  }
];

export default function ServicesGlance() {
  return (
    <section className="py-[80px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[65px]">
        {/* First Row - Title + 2 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Title and Description */}
          <div className="lg:col-span-1">
            <h2 
              className="text-[40px] leading-[52px] mb-6"
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 415
              }}
            >
              Our Services at a Glance
            </h2>
            <p 
              className="text-[20px] leading-[24px]"
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 400,
                color: '#000000'
              }}
            >
              Explore Our Comprehensive Range of Digital Solutions — Tailored to 
              Elevate Your Business with Cutting-Edge Technology and Design.
            </p>
          </div>
          
          {/* First two service cards */}
          {services.slice(0, 2).map((service) => (
            <div key={service.id} className="lg:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        
        {/* Second Row - 3 cards spanning full width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(2, 5).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <div 
      className="rounded-[20px] hover:shadow-lg transition-shadow h-full flex flex-col"
      style={{ 
        ...service.style,
        boxShadow: '2px 5px 10.5px 1px rgba(0, 0, 0, 0.25)',
        minHeight: '288px',
        padding: '30px'
      }}
    >
      <h3 
        className="text-[25px] leading-[29px] mb-4"
        style={{ 
          fontFamily: 'Sequel Sans',
          fontWeight: 415
        }}
      >
        {service.title}
      </h3>
      <p 
        className="text-[14px] leading-[17px] mb-6"
        style={{ 
          fontFamily: 'Sequel Sans',
          fontWeight: 405,
          color: '#000000'
        }}
      >
        {service.description}
      </p>
      <div className="mt-auto">
        {service.details.map((detail, index) => (
          <p 
            key={index} 
            className="text-[14px] leading-[17px] mb-2"
            style={{ 
              fontFamily: 'Sequel Sans',
              fontWeight: 405,
              color: '#000000'
            }}
          >
            • {detail}
          </p>
        ))}
      </div>
    </div>
  );
} 