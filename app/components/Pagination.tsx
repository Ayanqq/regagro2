'use client';

import { useState, useEffect } from 'react';

interface PaginationProps {
  sections: string[];
  onSectionChange: (section: string) => void;
}

export default function Pagination({ sections, onSectionChange }: PaginationProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((sectionId, index) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string, index: number) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(index);
      onSectionChange(sectionId);
    }
  };

  return (
    <div className="fixed right-[340px] top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        {sections.map((sectionId, index) => (
          <button
            key={sectionId}
            onClick={() => scrollToSection(sectionId, index)}
            className={`rounded-full transition-all duration-300 ${
              activeSection === index
                ? 'w-4 h-4 bg-[#FFDA18] border border-white'
                : 'w-2 h-2  bg-white'
            }`}
            title={sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
          />
        ))}
      </div>
    </div>
  );
}
