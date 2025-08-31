// components/blog/BlogTableOfContents.tsx
'use client';

import { useState } from 'react';

interface TableOfContentsProps {
  sections: string[];
}

export function BlogTableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState(0);

  const handleSectionClick = (index: number) => {
    setActiveSection(index);
  };

  return (
    <div 
      style={{
        background: '#F8F9FA',
        boxShadow: '-4px 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '11px',
        padding: '22px 15px',
        marginBottom: '60px' // Add margin bottom to separate from Recent Posts
      }}
    >
      <h3 
        className="mb-[30px]"
        style={{
          fontFamily: 'Sequel Sans',
          fontWeight: 415,
          fontSize: '25px',
          lineHeight: '32px',
          color: '#000000',
          textAlign: 'center'
        }}
      >
        Table of Contents
      </h3>
      
      <div className="space-y-[12px]">
        {sections.map((section, index) => (
          <div 
            key={index}
            onClick={() => handleSectionClick(index)}
            className="relative cursor-pointer transition-all"
            style={{
              background: activeSection === index ? '#EFF2FF' : '#FFFFFF',
              borderRadius: '12px',
              padding: '16px 20px 16px 16px',
              minHeight: '56px',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #E6E9F4',
              overflow: 'hidden'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '4px',
                background: activeSection === index ? '#608BF3' : '#8BA5FF',
                borderRadius: '12px 0 0 12px'
              }}
            />
            
            <p 
              style={{
                fontFamily: 'Sequel Sans',
                fontWeight: activeSection === index ? 500 : 400,
                fontSize: '14px',
                lineHeight: '18px',
                color: '#000000',
                margin: 0,
                paddingLeft: '12px'
              }}
            >
              {section}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}