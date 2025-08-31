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
    <div 
      className="flex-shrink-0"
      style={{
        width: '405px',
        minHeight: '730px',
        background: '#000000',
        borderRadius: '13px',
        padding: '20px',
        position: 'relative'
      }}
    >
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
        <div className="text-center mb-[40px]">
          <h3 
            className="mb-[5px]"
            style={{
              fontFamily: 'Sequel Sans',
              fontWeight: 415,
              fontSize: '40px',
              lineHeight: '52px',
              color: '#FFFFFF'
            }}
          >
            Need Help?
          </h3>
          <p 
            style={{
              fontFamily: 'Sequel Sans',
              fontWeight: 405,
              fontSize: '20px',
              lineHeight: '24px',
              color: '#FFFFFF'
            }}
          >
            Ask us and get the solution
          </p>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-[24px]">
          {/* Name Field */}
          <div>
            <label 
              className="block mb-[8px]"
              style={{
                fontFamily: 'Sequel Sans',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#FFFFFF'
              }}
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 focus:outline-none"
              style={{
                height: '46px',
                background: '#FFFFFF',
                borderRadius: '13px',
                fontFamily: 'Sequel Sans',
                fontSize: '15px',
                lineHeight: '18px',
                color: '#000000'
              }}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          
          {/* Email Field */}
          <div>
            <label 
              className="block mb-[8px]"
              style={{
                fontFamily: 'Sequel Sans',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#FFFFFF'
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 focus:outline-none"
              style={{
                height: '45px',
                background: '#FFFFFF',
                borderRadius: '13px',
                fontFamily: 'Sequel Sans',
                fontSize: '15px',
                lineHeight: '18px',
                color: '#000000'
              }}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          {/* Purpose Field */}
          <div>
            <label 
              className="block mb-[8px]"
              style={{
                fontFamily: 'Sequel Sans',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#FFFFFF'
              }}
            >
              Purpose
            </label>
            <div className="relative">
              <select
                className="w-full px-4 appearance-none focus:outline-none cursor-pointer"
                style={{
                  height: '46px',
                  background: '#FFFFFF',
                  borderRadius: '13px',
                  fontFamily: 'Sequel Sans',
                  fontSize: '15px',
                  lineHeight: '18px',
                  color: formData.purpose ? '#000000' : '#9A9A9A',
                  paddingRight: '40px'
                }}
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
            <label 
              className="block mb-[8px]"
              style={{
                fontFamily: 'Sequel Sans',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#FFFFFF'
              }}
            >
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              className="w-full px-4 py-3 resize-none focus:outline-none"
              style={{
                height: '90px',
                background: '#FFFFFF',
                borderRadius: '13px',
                fontFamily: 'Sequel Sans',
                fontSize: '15px',
                lineHeight: '18px',
                color: '#000000'
              }}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            />
          </div>
          
          {/* Attach File */}
          <div className="flex items-center gap-[10px] cursor-pointer hover:opacity-80">
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
            <span 
              style={{ 
                fontFamily: 'Sequel Sans',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '24px',
                color: '#FFFFFF' 
              }}
            >
              Attach file
            </span>
          </div>
          
          {/* Agreement Text */}
          <p 
            style={{
              fontFamily: 'Sequel Sans',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '24px',
              color: '#C0C0C0'
            }}
          >
            I agree to personal data processing*
          </p>
        
          {/* Submit Button - Get a solution */}
          <button 
            type="submit"
            className="w-full flex items-center justify-center relative hover:shadow-lg transition-all group"
            style={{
              height: '83px',
              background: '#FFFFFF',
              borderRadius: '41.5px',
              marginTop: '32px'
            }}
          >
            <div 
              className="absolute left-[16px]"
              style={{
                width: '51px',
                height: '51px',
                background: '#000000',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="29" height="28" viewBox="0 0 29 28" fill="none">
                <path d="M7 14H22M22 14L15 7M22 14L15 21" stroke="#608BF3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span 
              style={{
                fontFamily: 'Sequel Sans',
                fontWeight: 415,
                fontSize: '35px',
                lineHeight: '41px',
                color: '#000000'
              }}
            >
              Get a solution
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}