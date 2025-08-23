"use client"

import { useState } from "react"
import { Paperclip } from "lucide-react"

export default function GotProjectForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
    agreeToProcessing: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="relative min-h-[741px] w-[405px] overflow-visible rounded-[13px] bg-black">
      {/* Optional background image with overlay */}
      <div 
        className="absolute inset-0 rounded-[12px]"
        style={{
          backgroundImage: 'url(/images/case-studies/form-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'rotate(-90deg)',
          transformOrigin: 'center',
          opacity: 0.3
        }}
      />
      
      {/* Form container - using relative positioning */}
      <div className="relative w-full px-[20px] pb-[30px] pt-[25px]">
        {/* Header */}
        <div className="text-center">
          <h2 
            className="text-[50px] leading-[65px] text-white"
            style={{ 
              fontFamily: 'Sequel Sans, sans-serif',
              fontWeight: 415
            }}
          >
            Got Project?
          </h2>
          <p 
            className="mt-[5px] text-[20px] leading-[24px] text-white"
            style={{ 
              fontFamily: 'Sequel Sans, sans-serif',
              fontWeight: 405
            }}
          >
            Ask us and get the solution
          </p>
        </div>

        {/* Form fields container */}
        <form onSubmit={handleSubmit} className="mt-[35px]">
          {/* Name field */}
          <div className="mb-[18px]">
            <label 
              className="mb-[7px] block text-[20px] leading-[24px] text-white"
              style={{ 
                fontFamily: 'Sequel Sans, sans-serif',
                fontWeight: 400
              }}
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="h-[46px] w-[366px] rounded-[13px] bg-white px-4 text-[15px] leading-[18px] text-black placeholder-[#9A9A9A] outline-none"
              style={{ 
                fontFamily: 'Sequel Sans, sans-serif',
                fontWeight: 400
              }}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Email field */}
          <div className="mb-[18px]">
            <label 
              className="mb-[7px] block text-[20px] leading-[24px] text-white"
              style={{ 
                fontFamily: 'Sequel Sans, sans-serif',
                fontWeight: 400
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-[45px] w-[366px] rounded-[13px] bg-white px-4 text-[15px] leading-[18px] text-black placeholder-[#9A9A9A] outline-none"
              style={{ 
                fontFamily: 'Sequel Sans, sans-serif',
                fontWeight: 400
              }}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Purpose field */}
          <div className="mb-[18px]">
            <label 
              className="mb-[7px] block text-[20px] leading-[24px] text-white"
              style={{ 
                fontFamily: 'Sequel Sans, sans-serif',
                fontWeight: 400
              }}
            >
              Purpose
            </label>
            <div className="relative">
              <select
                className="h-[46px] w-[366px] appearance-none rounded-[13px] bg-white px-4 pr-10 text-[15px] leading-[18px] text-[#9A9A9A] outline-none"
                style={{ 
                  fontFamily: 'Sequel Sans, sans-serif',
                  fontWeight: 400
                }}
                value={formData.purpose}
                onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
              >
                <option value="">Select..</option>
                <option value="website">Website Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="automation">Automation Solutions</option>
                <option value="other">Other</option>
              </select>
              <svg 
                className="pointer-events-none absolute right-4 top-1/2 h-[12px] w-[24px] -translate-y-1/2"
                viewBox="0 0 24 12" 
                fill="none"
              >
                <path d="M6 9L12 3L18 9" stroke="#9A9A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Message field */}
          <div className="mb-[18px]">
            <label 
              className="mb-[7px] block text-[20px] leading-[24px] text-white"
              style={{ 
                fontFamily: 'Sequel Sans, sans-serif',
                fontWeight: 400
              }}
            >
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              className="h-[90px] w-[366px] resize-none rounded-[13px] bg-white px-4 py-3 text-[15px] leading-[18px] text-black placeholder-[#9A9A9A] outline-none"
              style={{ 
                fontFamily: 'Sequel Sans, sans-serif',
                fontWeight: 400
              }}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {/* Attach file */}
          <button
            type="button"
            className="mb-[16px] flex items-center gap-2 text-[20px] leading-[24px] text-white transition-opacity hover:opacity-80"
            style={{ 
              fontFamily: 'Sequel Sans, sans-serif',
              fontWeight: 400
            }}
          >
            <Paperclip className="h-6 w-6 -rotate-90" />
            Attach file
          </button>

          {/* Agreement checkbox */}
          <label className="mb-[18px] flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 rounded border border-gray-600 bg-transparent"
              checked={formData.agreeToProcessing}
              onChange={(e) => setFormData({ ...formData, agreeToProcessing: e.target.checked })}
            />
            <span 
              className="text-[20px] leading-[24px] text-[#C0C0C0]"
              style={{ 
                fontFamily: 'Sequel Sans, sans-serif',
                fontWeight: 400
              }}
            >
              I agree to personal data processing*
            </span>
          </label>

          {/* Submit button */}
          <button
            type="submit"
            className="mt-[20px] flex h-[83px] w-[366px] items-center justify-between rounded-[41.5px] bg-white px-[12px] transition-all hover:shadow-lg"
          >
            {/* Arrow icon circle - pointing right */}
            <div className="flex h-[51px] w-[51px] flex-shrink-0 items-center justify-center rounded-full bg-black">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 10H16M16 10L10 4M16 10L10 16"
                  stroke="#608BF3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Button text */}
            <span 
              className="flex-1 px-4 text-center text-[30px] font-medium leading-[41px] text-black"
              style={{ 
                fontFamily: 'Sequel Sans, sans-serif'
              }}
            >
              Get a solution
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}