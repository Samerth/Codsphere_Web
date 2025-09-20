// components/ContactCTA.tsx
'use client'

import React, { useState } from "react";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[90px]">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="font-damion text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] text-[#D3D3D3]">We are here to help you</p>
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold leading-tight">Ready to start? Contact us today.</h2>
          <p className="mt-2 text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed">
            Tell about your project and ask questions – we'll get back to you
          </p>
        </div>

        {/* Form container - adjusted max width to fit within the new padding */}
        <div className="w-full"> {/* Changed from max-w-[900px] mx-auto to use full width */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First row: Name, Email, Purpose */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-[16px] sm:text-[18px] lg:text-[20px] text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full h-[44px] sm:h-[46px] bg-[#F3F3F3] rounded-[10px] sm:rounded-[13px] px-3 sm:px-4 text-[14px] sm:text-[15px] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-black/10"
                  required
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-[16px] sm:text-[18px] lg:text-[20px] text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full h-[44px] sm:h-[46px] bg-[#F3F3F3] rounded-[10px] sm:rounded-[13px] px-3 sm:px-4 text-[14px] sm:text-[15px] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-black/10"
                  required
                />
              </div>

              {/* Purpose dropdown */}
              <div className="sm:col-span-2 lg:col-span-1">
                <label htmlFor="purpose" className="block text-[16px] sm:text-[18px] lg:text-[20px] text-black mb-2">
                  Purpose
                </label>
                <div className="relative">
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full h-[44px] sm:h-[46px] bg-[#F3F3F3] rounded-[10px] sm:rounded-[13px] px-3 sm:px-4 pr-10 text-[14px] sm:text-[15px] appearance-none focus:outline-none focus:ring-2 focus:ring-black/10 cursor-pointer"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="crm">CRM Development</option>
                    <option value="erp">ERP Implementation</option>
                    <option value="automation">Business Automation</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#9A9A9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-[16px] sm:text-[18px] lg:text-[20px] text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={4}
                className="w-full bg-[#F3F3F3] rounded-[10px] sm:rounded-[13px] px-3 sm:px-4 py-2.5 sm:py-3 text-[14px] sm:text-[15px] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
                required
              />
            </div>

            {/* Bottom section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6">
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                {/* Attach file */}
                <button
                  type="button"
                  className="flex items-center gap-2 text-black text-[16px] sm:text-[18px] lg:text-[20px] hover:opacity-70 transition-opacity"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  <span>Attach file</span>
                </button>

                {/* Privacy checkbox */}
                <label className="flex items-start gap-2 text-[14px] sm:text-[16px] lg:text-[18px] text-black">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 rounded border-gray-300 mt-0.5 flex-shrink-0"
                  />
                  <span>I agree to personal data processing</span>
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[32px] sm:rounded-[41.5px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-h-[48px]"
              >
                Get a solution
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}