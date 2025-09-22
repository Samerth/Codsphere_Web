// components/services/web-mobile/TechStackSection.tsx
"use client";

import Image from "next/image";

const techCategories = [
  {
    title: "Front-End",
    subtitle: "React.js, Vue.js, Next.js, HTML5, Tailwind CSS",
    tools: [
      { name: "React", logo: "/images/web-mobile/SVG/tech-front end-react.svg", bg: "bg-black" },
      { name: "Vue", logo: "/images/web-mobile/SVG/tech-front end-Vue.svg", bg: "bg-white" },
      { name: "Next.js", logo: "/images/web-mobile/SVG/tech-front end-Next.svg", bg: "bg-white" },
      { name: "HTML5", logo: "/images/web-mobile/SVG/tech-front end-HTML.svg", bg: "bg-white" },
      { name: "Tailwind", logo: "/images/web-mobile/SVG/tech-front end-Tailwind Css.svg", bg: "bg-gray" }
    ]
  },
  {
    title: "Back-End",
    subtitle: "Node.js, Laravel, PHP, Django, .NET Core",
    tools: [
      { name: "Node.js", logo: "/images/web-mobile/SVG/tech-Back end-Node js.svg", bg: "bg-white" },
      { name: "Laravel", logo: "/images/web-mobile/SVG/tech-Back end-Laravel.svg", bg: "bg-white" },
      { name: "PHP", logo: "/images/web-mobile/SVG/tech-Back end-PHP.svg", bg: "bg-indigo" },
      { name: "Django", logo: "/images/web-mobile/SVG/tech-Back end-Django.svg", bg: "bg-green" },
      { name: ".NET", logo: "/images/web-mobile/SVG/tech-Back end-Netcore.svg", bg: "bg-purple" }
    ]
  },
  {
    title: "Mobile Apps",
    subtitle: "Flutter, React Native, Kotlin, Swift",
    tools: [
      { name: "Flutter", logo: "/images/web-mobile/SVG/tech-Mobile Apps-Flutter.svg", bg: "bg-white" },
      { name: "React Native", logo: "/images/web-mobile/SVG/tech-Mobile Apps-React.svg", bg: "bg-white" },
      { name: "Swift", logo: "/images/web-mobile/SVG/tech-Mobile Apps-Swift.svg", bg: "bg-white" },
      { name: "Kotlin", logo: "/images/web-mobile/SVG/tech-Mobile Apps-Kotlin.svg", bg: "bg-white" }
    ]
  },
  {
    title: "Databases",
    subtitle: "MySQL, PostgreSQL, Firebase, MongoDB",
    tools: [
      { name: "MySQL", logo: "/images/web-mobile/SVG/tech-Databases-Mysql.svg", bg: "bg-white" },
      { name: "PostgreSQL", logo: "/images/web-mobile/SVG/tech-Databases-postgreSQL.svg", bg: "bg-white" },
      { name: "MongoDB", logo: "/images/web-mobile/SVG/tech-Databases-MongoDB.svg", bg: "bg-white" },
      { name: "Firebase", logo: "/images/web-mobile/SVG/tech-Databases-Firebase.svg", bg: "bg-white" }
    ]
  },
  {
    title: "Hosting & DevOps",
    subtitle: "AWS, Google Cloud, DigitalOcean, Docker, GitHub Actions",
    tools: [
      { name: "AWS", logo: "images/web-mobile/SVG/tech-Hosting-AWS.svg", bg: "bg-white" },
      { name: "Google Cloud", logo: "/images/web-mobile/SVG/tech-Hosting-Cloud.svg", bg: "bg-white" },
      { name: "Docker", logo: "/images/web-mobile/SVG/tech-Hosting-Docker.svg", bg: "bg-white" },
      { name: "DigitalOcean", logo: "/images/web-mobile/SVG/tech-Hosting-Digital Ocean.svg", bg: "bg-white" },
      { name: "GitHub", logo: "/images/web-mobile/SVG/tech-Hosting-Git hub Actions.svg", bg: "bg-black" }
    ]
  },
  {
    title: "CMS & eCom",
    subtitle: "WordPress, Webflow, Shopify, Magento",
    tools: [
      { name: "WordPress", logo:"/images/web-mobile/SVG/tech-CMS-Magento.svg", bg: "bg-white" },
      { name: "Webflow", logo: "/images/web-mobile/SVG/tech-CMS-webflow.svg", bg: "bg-white" },
      { name: "Shopify", logo: "/images/web-mobile/SVG/tech-CMS-Shopify.svg", bg: "bg-white" },
      { name: "Magento", logo: "/images/web-mobile/SVG/tech-CMS-Magento.svg", bg: "bg-white" }
    ]
  }
];

export default function TechStackSection() {
  return (
    <section className="py-8 md:py-12 lg:py-[80px] bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
      </div>
      
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px] relative z-10">
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[52px] text-center mb-8 md:mb-10 lg:mb-12 font-[415] font-sequel">
          Tech Stack Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="relative">
              {/* Blue shadow card */}
              <div className="absolute w-full max-w-full lg:max-w-[382px] h-[180px] md:h-[195px] lg:h-[210px] bg-[#608BF3] rounded-lg shadow-md" />
              
              {/* Main white card - Responsive */}
              <div className="relative w-full max-w-full lg:max-w-[382px] h-[180px] md:h-[195px] lg:h-[210px] bg-white text-black rounded-lg ml-2 md:ml-2.5">
                <div className="p-4 md:p-5 lg:p-6 h-full flex flex-col">
                  <h3 className="text-[22px] md:text-[26px] lg:text-[30px] leading-[26px] md:leading-[30px] lg:leading-[35px] mb-1 font-[415] font-sequel">
                    {category.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[17px] md:leading-[19px] lg:leading-[21px] mb-auto font-[405] font-sequel text-black">
                    {category.subtitle}
                  </p>
                  
                  {/* Tool icons - Responsive */}
                  <div className="flex gap-1.5 md:gap-2 mt-3 md:mt-3.5 lg:mt-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className={`flex items-center justify-center ${tool.bg} w-[45px] h-[38px] md:w-[50px] md:h-[42px] lg:w-[56px] lg:h-[46px] rounded-[5px] md:rounded-[6px]`}
                        style={{ 
                          boxShadow: '2px 3px 2.5px rgba(0, 0, 0, 0.15)',
                        }}
                        title={tool.name}
                      >
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          width={30}
                          height={30}
                          className="w-[24px] h-[24px] md:w-[27px] md:h-[27px] lg:w-[30px] lg:h-[30px] object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}