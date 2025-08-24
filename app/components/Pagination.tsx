'use client';

import { useState, useEffect, useCallback } from 'react';

interface PaginationProps {
  sections: string[];
  onSectionChange: (section: string) => void;
}

export default function Pagination({ sections, onSectionChange }: PaginationProps) {
  const [activeSection, setActiveSection] = useState(0);

  // Throttled scroll handler
  const throttledScrollHandler = useCallback(() => {
    const scrollPosition = window.scrollY;

    // Находим section, который находится в центре экрана
    let activeIndex = 0;

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const elementTop = element.offsetTop;

        // Если scrollPosition прошел начало section
        if (scrollPosition >= elementTop - 100) {
          activeIndex = i;
          break;
        }
      }
    }

    // Обновляем активный section
    setActiveSection(activeIndex);
    onSectionChange(sections[activeIndex]);
  }, [sections, onSectionChange]);

  useEffect(() => {
    // Устанавливаем активным первый section (hero) при загрузке
    setActiveSection(0);
    onSectionChange(sections[0]);

    console.log('Pagination initialized with sections:', sections);
    console.log('Initial activeSection set to 0');

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          throttledScrollHandler();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Принудительно вызываем scroll handler при загрузке
    setTimeout(() => {
      throttledScrollHandler();
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, onSectionChange, throttledScrollHandler]);

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
      <div className="flex flex-col items-center space-y-2">
        {sections.map((sectionId, index) => (
          <button
            key={sectionId}
            onClick={() => scrollToSection(sectionId, index)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              sections[activeSection] === 'catalog' 
              || sections[activeSection] === 'bulletin-board' 
              || sections[activeSection] === 'contacts' 
              || sections[activeSection] === 'company-news'
                ? activeSection === index
                  ? 'w-4 h-4 bg-[#FFDA18] border border-[#A79933]'
                  : 'w-2 h-2 bg-[#4F584E]/50'
                : activeSection === index
                ? 'w-4 h-4 bg-[#FFDA18] border border-white'
                : 'w-2 h-2 bg-white'
            }`}
            title={sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
          />
        ))}
      </div>
    </div>
  );
}
