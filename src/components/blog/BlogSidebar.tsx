// components/blog/BlogSidebar.tsx
'use client';

import { useState } from 'react';

export function BlogSidebar() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full lg:w-[405px] min-h-[500px] lg:min-h-[730px] bg-black rounded-[13px] p-4 md:p-5 lg:p-[20px] relative flex-shrink-0">
      {/* Optional background pattern */}
      <div 
        className="absolute inset-0 opacity-10 rounded-[13px] overflow-hidden pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-[40px]">
          <h3 className="text-white font-sequel text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[52px] font-[415] mb-1 lg:mb-[5px]">
            Need Help?
          </h3>
          <p className="text-white font-sequel text-base md:text-lg lg:text-[20px] leading-tight lg:leading-[24px] font-[405]">
            Ask us and get the solution
          </p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-[24px]">
          {/* Name Field */}
          <div>
            <label className="block mb-2 lg:mb-[8px] text-white font-sequel text-sm md:text-base lg:text-[20px] leading-tight lg:leading-[24px] font-normal">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full h-[46px] px-4 bg-white rounded-[13px] font-sequel text-[15px] leading-[18px] text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          {/* Email Field */}
          <div>
            <label className="block mb-2 lg:mb-[8px] text-white font-sequel text-sm md:text-base lg:text-[20px] leading-tight lg:leading-[24px] font-normal">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-[46px] px-4 bg-white rounded-[13px] font-sequel text-[15px] leading-[18px] text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          {/* Purpose Field */}
          <div>
            <label className="block mb-2 lg:mb-[8px] text-white font-sequel text-sm md:text-base lg:text-[20px] leading-tight lg:leading-[24px] font-normal">
              Purpose
            </label>
            <div className="relative">
              <select
                className="w-full h-[46px] px-4 pr-10 bg-white rounded-[13px] font-sequel text-[15px] leading-[18px] text-black appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                style={{ color: formData.purpose ? '#000000' : '#9A9A9A' }}
                value={formData.purpose}
                onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                required
              >
                <option value="">Select..</option>
                <option value="inquiry">General Inquiry</option>
                <option value="support">Support</option>
                <option value="business">Business</option>
              </select>
              <svg 
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" 
                width="12" 
                height="8" 
                viewBox="0 0 12 8" 
                fill="none"
              >
                <path d="M1 1L6 6L11 1" stroke="#9A9A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          {/* Message Field */}
          <div>
            <label className="block mb-2 lg:mb-[8px] text-white font-sequel text-sm md:text-base lg:text-[20px] leading-tight lg:leading-[24px] font-normal">
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              className="w-full h-[90px] px-4 py-3 bg-white rounded-[13px] font-sequel text-[15px] leading-[18px] text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          
          {/* Attach File */}
          <div className="flex items-center gap-2 lg:gap-[10px] cursor-pointer hover:opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M21.44 11.05L12.25 20.24C11.12 21.37 9.58 22 8 22C6.42 22 4.88 21.37 3.75 20.24C2.62 19.11 2 17.57 2 16C2 14.43 2.62 12.89 3.75 11.76L12.94 2.57C13.75 1.76 14.83 1.3 15.96 1.3C17.09 1.3 18.17 1.76 18.98 2.57C19.79 3.38 20.25 4.46 20.25 5.59C20.25 6.72 19.79 7.8 18.98 8.61L9.79 17.8C9.38 18.21 8.83 18.44 8.26 18.44C7.69 18.44 7.14 18.21 6.73 17.8C6.32 17.39 6.09 16.84 6.09 16.27C6.09 15.7 6.32 15.15 6.73 14.74L15.27 6.2" 
                stroke="#FFFFFF" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                transform="rotate(-45 12 12)"
              />
            </svg>
            <span className="text-white font-sequel text-sm md:text-base lg:text-[20px] leading-tight lg:leading-[24px] font-normal">
              Attach file
            </span>
          </div>
          
          {/* Agreement Text */}
          <p className="text-gray-300 font-sequel text-sm md:text-base lg:text-[20px] leading-tight lg:leading-[24px] font-normal">
            I agree to personal data processing*
          </p>
        
          {/* Submit Button - Get a solution */}
          <button 
            type="submit"
            className="w-full h-[60px] md:h-[70px] lg:h-[83px] bg-white rounded-full mt-6 lg:mt-8 flex items-center justify-center relative hover:shadow-lg transition-all group"
          >
            <div className="absolute left-3 md:left-4 lg:left-[16px] w-10 h-10 md:w-12 md:h-12 lg:w-[51px] lg:h-[51px] bg-black rounded-full flex items-center justify-center">
              <svg width="29" height="28" viewBox="0 0 29 28" fill="none" className="w-5 h-5 md:w-6 md:h-6 lg:w-[29px] lg:h-[28px]">
                <path d="M7 14H22M22 14L15 7M22 14L15 21" stroke="#608BF3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-black font-sequel text-lg md:text-2xl lg:text-[35px] leading-tight lg:leading-[41px] font-[415]">
              Get a solution
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}