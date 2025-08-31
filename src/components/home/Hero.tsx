'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { ChevronRight, Play } from 'lucide-react';

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative bg-white min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[90px] py-6 md:py-8 lg:py-[40px]">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[60px] items-start">
          
          {/* Left Content */}
          <div className="flex-1 w-full lg:max-w-[500px] flex flex-col">
            {/* Info Card */}
            <div className="bg-[#F1F2F6] rounded-[20px] md:rounded-[32px] p-3 md:p-4 mb-4 md:mb-6 w-full max-w-[349px]">
              <div className="flex gap-3">
                {/* Thumbnail */}
                <div className="relative w-[120px] md:w-[151px] h-[123px] md:h-[154px] bg-white rounded-[15px] md:rounded-[21px] overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/home/ai-hand.jpg"
                    alt="AI robotic hand"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 120px, 151px"
                    priority
                  />
                </div>
                
                {/* Text and buttons */}
                <div className="flex flex-col justify-between py-2">
                  <p className="text-[10px] md:text-[12px] leading-[12px] md:leading-[14px] text-black font-sequel">
                    AI-powered ERP & CRM for smarter business. Automate tasks, predict trends, and boost productivity. Work faster, grow smarter.
                  </p>
                  
                  {/* Explore more button with chevrons in single container */}
                  <div className="flex items-center bg-white rounded-[15px] md:rounded-[21px] h-[35px] md:h-[40px] overflow-hidden">
                    <button className="bg-black text-white h-full px-3 md:px-4 text-[10px] md:text-[12px] font-sequel hover:bg-gray-900 transition-colors">
                      <span className="hidden sm:inline">Explore more</span>
                      <span className="sm:hidden">More</span>
                    </button>
                    <div className="flex items-center px-2 md:px-3 gap-0">
                      <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3 -mr-1" />
                      <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3 -mr-1" />
                      <ChevronRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
           {/* Pills - two rows with aligned edges */}
            <div className="mb-4 md:mb-6">
              {/* First row */}
              <div className="flex">
                <span className="px-6 md:px-8 lg:px-[42.5px] py-1.5 md:py-2 border border-black rounded-[15px] md:rounded-[18.5px] text-[13px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Automate
                </span>
                <span className="px-6 md:px-8 lg:px-[42.5px] py-1.5 md:py-2 border border-black rounded-[15px] md:rounded-[18.5px] text-[13px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white -ml-[1px]">
                  Optimize
                </span>
              </div>
              
              {/* Second row - same total width as first row */}
              <div className="flex -mt-[1px]">
                <span className="px-3 md:px-4 xl:px-[16px] py-1.5 md:py-2 border border-black rounded-[15px] md:rounded-[18.5px] text-[13px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
                  Scale
                </span>
                <span className="px-4 md:px-6 xl:px-[27px] py-1.5 md:py-2 border border-black rounded-[15px] md:rounded-[18.5px] text-[13px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white -ml-[1px]">
                  Accelerate
                </span>
                <span className="px-4 md:px-5 xl:px-[20px] py-1.5 md:py-2 border border-black rounded-[15px] md:rounded-[18.5px] text-[13px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white -ml-[1px]">
                  Integrate
                </span>
              </div>
            </div>


            
            {/* Subtitle */}
            <p className="text-[13px] md:text-[15px] leading-[16px] md:leading-[18px] text-black font-sequel mb-auto max-w-full md:max-w-[366px]">
              At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart 
              invoicing tools, and full-funnel digital strategies so your business runs 
              smarter, not harder.
            </p>
            
            {/* Main Headline - aligned with bottom of container */}
            <h1 className="text-[28px] md:text-[40px] xl:text-[50px] leading-[34px] md:leading-[48px] xl:leading-[58px] font-medium text-black font-sequel mt-6 md:mt-8">
              AI ERP, CRM & Automation Experts <br className="hidden md:block" />
              <span className="md:hidden"> </span>Driving Smarter Business Efficiency
            </h1>
          </div>

          {/* Right Content - Video Container */}
          <div className="relative flex-1 w-full max-w-[656px] h-[250px] sm:h-[300px] md:h-[400px] xl:h-[474px] order-first lg:order-last">
            {/* CodSphere Logo Icon */}
            <div className="absolute -top-1 md:-top-2 right-4 sm:right-6 md:right-12 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[58px] md:h-[58px] bg-black rounded-full flex items-center justify-center z-20">
              <Image
                src="/logo-icon-white.svg"
                alt="CodSphere"
                width={25}
                height={25}
                className="object-contain sm:w-[30px] sm:h-[30px] md:w-[38px] md:h-[38px]"
              />
            </div>

            {/* Video Container with SVG shape */}
            <svg 
              width="656" 
              height="474" 
              viewBox="0 0 656 474" 
              fill="none"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <clipPath id="videoClip">
                  <path 
                    d="
                      M 100,0 
                      L 500,0
                      C 530,0 560,0 580,5
                      C 590,8 600,15 610,15
                      C 620,15 630,8 640,5
                      C 650,2 656,0 656,0
                      L 656,390
                      C 656,440 616,474 566,474
                      L 180,474
                      C 130,474 90,460 60,420
                      C 30,380 10,340 5,290
                      C 0,240 5,210 20,180
                      C 35,150 40,120 30,90
                      C 20,60 5,30 20,15
                      C 35,0 70,0 100,0
                      Z
                    " 
                  />
                </clipPath>
              </defs>
              
              {/* Video container */}
              <foreignObject 
                width="656" 
                height="474" 
                clipPath="url(#videoClip)"
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover bg-gray-200"
                  poster="/images/home/video-poster.jpg"
                  onClick={togglePlay}
                  playsInline
                  muted
                  loop
                >
                  <source src="/videos/hero-video.mp4" type="video/mp4" />
                </video>
              </foreignObject>
              
              {/* Border */}
              <path 
                d="
                  M 100,0 
                  L 500,0
                  C 530,0 560,0 580,5
                  C 590,8 600,15 610,15
                  C 620,15 630,8 640,5
                  C 650,2 656,0 656,0
                  L 656,390
                  C 656,440 616,474 566,474
                  L 180,474
                  C 130,474 90,460 60,420
                  C 30,380 10,340 5,290
                  C 0,240 5,210 20,180
                  C 35,150 40,120 30,90
                  C 20,60 5,30 20,15
                  C 35,0 70,0 100,0
                  Z
                " 
                fill="none" 
                stroke="black" 
                strokeWidth="1"
              />
            </svg>
            
            {/* Play button */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                aria-label="Play video"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[85px] md:h-[85px] xl:w-[100px] xl:h-[100px] rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
              >
                <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 xl:w-10 xl:h-10 ml-1 md:ml-1.5 xl:ml-2" fill="black" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}