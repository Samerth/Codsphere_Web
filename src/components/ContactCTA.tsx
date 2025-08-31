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
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[90px]">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="font-damion text-[35px] text-[#D3D3D3]">We are here to help you</p>
          <h2 className="text-[40px] font-semibold">Ready to start? Contact us today.</h2>
          <p className="mt-2 text-[20px]">
            Tell about your project and ask questions – we'll get back to you
          </p>
        </div>

        {/* Form container - adjusted max width to fit within the new padding */}
        <div className="w-full"> {/* Changed from max-w-[900px] mx-auto to use full width */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* First row: Name, Email, Purpose */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-[20px] text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full h-[46px] bg-[#F3F3F3] rounded-[13px] px-4 text-[15px] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-black/10"
                  required
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-[20px] text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full h-[46px] bg-[#F3F3F3] rounded-[13px] px-4 text-[15px] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-black/10"
                  required
                />
              </div>

              {/* Purpose dropdown */}
              <div>
                <label htmlFor="purpose" className="block text-[20px] text-black mb-2">
                  Purpose
                </label>
                <div className="relative">
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full h-[46px] bg-[#F3F3F3] rounded-[13px] px-4 pr-10 text-[15px] appearance-none focus:outline-none focus:ring-2 focus:ring-black/10 cursor-pointer"
                    required
                  >
                    <option value="">Select...</option>
                    <option value="crm">CRM Development</option>
                    <option value="erp">ERP Implementation</option>
                    <option value="automation">Business Automation</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-[#9A9A9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-[20px] text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={5}
                className="w-full bg-[#F3F3F3] rounded-[13px] px-4 py-3 text-[15px] placeholder:text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-black/10 resize-none"
                required
              />
            </div>

            {/* Bottom section */}
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-3">
                {/* Attach file */}
                <button
                  type="button"
                  className="flex items-center gap-2 text-black text-[20px] hover:opacity-70 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                  <span>Attach file</span>
                </button>

                {/* Privacy checkbox */}
                <label className="flex items-center gap-2 text-[20px] text-black">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span>I agree to personal data processing</span>
                </label>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-[41.5px] text-[20px] font-medium hover:bg-gray-800 transition-colors flex items-center gap-3"
              >
                Get a solution
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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