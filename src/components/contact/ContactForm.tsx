'use client'

import React, { useState } from "react";

export const ContactForm = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="w-full max-w-[1260px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[90px]">
        {/* Section heading */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-[#D3D3D3] font-['Damion'] text-[24px] md:text-[30px] lg:text-[35px] italic mb-2">
            We are here to help you
          </p>
          <h2 className="text-black font-['Sequel_Sans'] text-[28px] md:text-[35px] lg:text-[40px] font-normal leading-[36px] md:leading-[42px] lg:leading-[48px] mb-3 md:mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-[#525252] font-['Sequel_Sans'] text-[14px] md:text-[15px] lg:text-[16px] leading-[18px] md:leading-[20px] lg:leading-[21px] max-w-[90%] md:max-w-[620px] mx-auto px-2 md:px-0">
            Whether you have a question, a bold idea, or a detailed brief — we're ready to help.
            From CRM consultations to ERP implementation, we respond fast and get straight to solutions.
          </p>
        </div>

        {/* Form container */}
        <div className="max-w-[900px] mx-auto">
          {/* Vancouver Location Info - Above form */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-black font-['Sequel_Sans'] text-[24px] md:text-[28px] lg:text-[32px] font-normal mb-1">Vancouver</h3>
            <p className="text-black font-['Sequel_Sans'] text-[16px] md:text-[17px] lg:text-[18px] font-normal mb-0">Mon—Fri</p>
            <p className="text-[#9A9A9A] font-['Sequel_Sans'] text-[16px] md:text-[17px] lg:text-[18px] font-light">09:00—21:00</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            {/* Name, Email, Purpose - responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-[14px] md:text-[15px] font-['Sequel_Sans'] text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full h-[44px] md:h-[46px] bg-[#F3F3F3] rounded-[10px] md:rounded-[13px] px-3 md:px-4 font-['Sequel_Sans'] text-[14px] md:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                  required
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-[14px] md:text-[15px] font-['Sequel_Sans'] text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full h-[44px] md:h-[46px] bg-[#F3F3F3] rounded-[10px] md:rounded-[13px] px-3 md:px-4 font-['Sequel_Sans'] text-[14px] md:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                  required
                />
              </div>

              {/* Purpose dropdown */}
              <div>
                <label htmlFor="purpose" className="block text-[14px] md:text-[15px] font-['Sequel_Sans'] text-black mb-2">
                  Purpose
                </label>
                <div className="relative">
                  <select
                    id="purpose"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full h-[44px] md:h-[46px] bg-[#F3F3F3] rounded-[10px] md:rounded-[13px] px-3 md:px-4 pr-10 font-['Sequel_Sans'] text-[14px] md:text-[15px] appearance-none focus:outline-none focus:ring-2 focus:ring-black/10 cursor-pointer text-gray-600 transition-all"
                    required
                  >
                    <option value="" className="text-gray-400">Select...</option>
                    <option value="crm">CRM Development</option>
                    <option value="erp">ERP Implementation</option>
                    <option value="automation">Business Automation</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-[14px] md:text-[15px] font-['Sequel_Sans'] text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={4}
                className="w-full bg-[#F3F3F3] rounded-[10px] md:rounded-[13px] px-3 md:px-4 py-3 font-['Sequel_Sans'] text-[14px] md:text-[15px] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 resize-none transition-all"
                required
              />
            </div>

            {/* Attach file and Submit button - responsive layout */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
              <button
                type="button"
                className="flex items-center gap-2 text-black/60 font-['Sequel_Sans'] text-[13px] md:text-[14px] hover:text-black transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
                <span>Attach file</span>
              </button>

              <button
                type="submit"
                className="bg-black text-white px-5 md:px-6 py-2.5 md:py-3 rounded-[22px] md:rounded-[25px] font-['Sequel_Sans'] text-[14px] md:text-[15px] font-normal hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg sm:w-auto w-full"
              >
                Get a solution
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>

          {/* Privacy note - responsive text */}
          <p className="text-center sm:text-left text-[12px] md:text-[13px] text-gray-500 mt-3 font-['Sequel_Sans']">
            I agree to personal data processing
          </p>
        </div>
      </div>
    </section>
  );
};