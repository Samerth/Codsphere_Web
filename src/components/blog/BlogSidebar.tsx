'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function BlogSidebar() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });

  return (
    <div className="w-[405px] min-h-[730px] bg-black rounded-[13px] relative">
      {/* Optional background image with dots pattern */}
      <div className="absolute inset-0 opacity-10 rounded-[13px] overflow-hidden">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col p-[20px]">
        {/* Header */}
        <div className="text-center mb-[40px]">
          <h3 className="text-[40px] leading-[52px] font-normal text-white mb-[5px]">Need Help?</h3>
          <p className="text-[20px] leading-[24px] text-white">Ask us and get the solution</p>
        </div>
        
        {/* Form Fields */}
        <div className="space-y-[20px]">
          {/* Name Field */}
          <div>
            <label className="text-[20px] leading-[24px] text-white mb-[8px] block">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full h-[46px] px-4 rounded-[13px] bg-white text-[15px] leading-[18px] text-black placeholder-[#9A9A9A] focus:outline-none"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          {/* Email Field */}
          <div>
            <label className="text-[20px] leading-[24px] text-white mb-[8px] block">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-[45px] px-4 rounded-[13px] bg-white text-[15px] leading-[18px] text-black placeholder-[#9A9A9A] focus:outline-none"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          {/* Purpose Field */}
          <div>
            <label className="text-[20px] leading-[24px] text-white mb-[8px] block">Purpose</label>
            <div className="relative">
              <select
                className="w-full h-[46px] px-4 rounded-[13px] bg-white text-[15px] leading-[18px] text-[#9A9A9A] appearance-none pr-10 focus:outline-none cursor-pointer focus:text-black"
                value={formData.purpose}
                onChange={(e) => setFormData({...formData, purpose: e.target.value})}
              >
                <option value="">Select..</option>
                <option value="inquiry" className="text-black">General Inquiry</option>
                <option value="support" className="text-black">Support</option>
                <option value="business" className="text-black">Business</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-2 pointer-events-none" viewBox="0 0 8 5" fill="none">
                <path d="M1 1L4 4L7 1" stroke="#9A9A9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          {/* Message Field */}
          <div>
            <label className="text-[20px] leading-[24px] text-white mb-[8px] block">Message</label>
            <textarea
              placeholder="Enter your message"
              className="w-full h-[90px] px-4 py-3 rounded-[13px] bg-white text-[15px] leading-[18px] text-black placeholder-[#9A9A9A] resize-none focus:outline-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          
          {/* Attach File */}
          <div className="flex items-center gap-[10px] pt-[5px]">
            <svg className="w-[24px] h-[24px] text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" transform="rotate(-45 12 12)"/>
            </svg>
            <span className="text-[20px] leading-[24px] text-white">Attach file</span>
          </div>
          
          {/* Agreement Text */}
          <p className="text-[20px] leading-[24px] text-[#C0C0C0]">
            I agree to personal data processing*
          </p>
        </div>
        
        {/* Submit Button - Get a solution */}
        <button className="w-full h-[83px] bg-white rounded-[41.5px] flex items-center justify-center hover:shadow-lg transition-all group relative mt-[25px] mb-[20px]">
          <div className="w-[51px] h-[51px] bg-black rounded-full flex items-center justify-center absolute left-[16px]">
            <svg className="w-[29px] h-[28px]" viewBox="0 0 29 28" fill="none">
              <path d="M7 14H22M22 14L15 7M22 14L15 21" stroke="#608BF3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-[35px] leading-[41px] font-medium text-black">Get a solution</span>
        </button>
      </div>
    </div>
  );
}
