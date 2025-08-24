'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Header() {
  const [activeHash, setActiveHash] = useState<string>("");

  const navItems = [
    { href: "#about", label: "About the Company" },
    { href: "#catalog", label: "Catalog" },
    { href: "#bulletin-board", label: "Bulletin Board" },
    { href: "#company-news", label: "News" },
    { href: "#contacts", label: "Contacts" },
  ];

  useEffect(() => {
    const sections = navItems.map((item) =>
        document.querySelector(item.href)
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const newHash = `#${entry.target.id}`;
              setActiveHash(newHash);
              history.replaceState(null, "", newHash); // меняем URL без перезагрузки
            }
          });
        },
        { threshold: 0.5 } // 50% секции в видимости
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
      <header className="max-w-[1320px] mx-auto fixed top-[15px] left-0 right-0 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full z-50">
        <div className="px-7.5">
          <div className="flex items-center justify-between h-[92px]">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image src="/images/logo.png" alt="Logo" width={218} height={63} />
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-[40px]">
              {navItems.map((item) => (
                  <a
                      key={item.href}
                      href={item.href}
                      className={`transition-colors font-medium text-[17px] leading-[120%] tracking-[-2%] ${
                          activeHash === item.href
                              ? "text-[#2F3F2D] font-bold underline decoration-dotted underline-offset-[6px]"
                              : "text-gray-600 hover:text-[#4F584E]"
                      }`}
                  >
                    {item.label}
                  </a>
              ))}
            </nav>

            {/* Button */}
            <button className="bg-[#2F3F2D] text-white px-12.5 py-4.5 rounded-full leading-[120%] tracking-[-2%] font-normal hover:bg-[#43764C] transition-colors cursor-pointer">
              Request a call
            </button>
          </div>
        </div>
      </header>
  );
}
