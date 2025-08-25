'use client';

import { useState, useEffect, useCallback } from 'react';

interface PaginationProps {
  sections: string[];
  onSectionChange: (section: string) => void;
}

export default function Pagination({ sections, onSectionChange }: PaginationProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // 📌 Обновляем активную секцию
  const updateActiveSection = useCallback(
      (index: number) => {
        setActiveSection(index);
        onSectionChange(sections[index]);
      },
      [sections, onSectionChange]
  );

  // 📌 Поэкранный скролл (только desktop)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1024) return; // отключаем на мобилках
      e.preventDefault();

      if (isScrolling) return;

      if (e.deltaY > 0 && activeSection < sections.length - 1) {
        updateActiveSection(activeSection + 1);
        setIsScrolling(true);
      } else if (e.deltaY < 0 && activeSection > 0) {
        updateActiveSection(activeSection - 1);
        setIsScrolling(true);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSection, isScrolling, sections, updateActiveSection]);

  // 📌 Прокручиваем к активной секции
  useEffect(() => {
    const el = document.getElementById(sections[activeSection]);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setIsScrolling(false), 800); // время блокировки = длительность анимации
    }
  }, [activeSection, sections]);

  // 📌 Прокрутка при клике на кнопку
  const scrollToSection = (sectionId: string, index: number) => {
    updateActiveSection(index);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div
          className="
        fixed
        right-[40px] sm:right-[80px]
        md:right-[160px]
        lg:right-[240px]
        xl:right-[340px]
        top-1/2 transform -translate-y-1/2
        z-40 hidden lg:block
      "
      >
        <div className="flex flex-col items-center space-y-2">
          {sections.map((sectionId, index) => (
              <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId, index)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                      sections[activeSection] === 'catalog' ||
                      sections[activeSection] === 'bulletin-board' ||
                      sections[activeSection] === 'contacts' ||
                      sections[activeSection] === 'company-news'
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
