'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="max-w-[1320px] mx-auto fixed top-[15px] left-0 right-0 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full z-50">
      <div className="px-4">
        <div className="flex items-center justify-between h-[92px]">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Logo" width={218} height={63} />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-[#4F584E] transition-colors font-medium">
                About the Company
            </a>
            <a href="#catalog" className="text-gray-600 hover:text-[#4F584E] transition-colors font-medium">
                Catalog
            </a>
            <a href="#bulletin-board" className="text-gray-600 hover:text-[#4F584E] transition-colors font-medium">
                Bulletin Board
            </a>
            <a href="#company-news" className="text-gray-600 hover:text-[#4F584E] transition-colors font-medium">
              News
            </a>
            <a href="#contacts" className="text-gray-600 hover:text-[#4F584E] transition-colors font-medium">
              Contacts
            </a>
          </nav>

          {/* Login/Register Button */}
          <button className="bg-[#2F3F2D] text-white px-12.5 py-4.5 rounded-full font-medium hover:bg-[#43764C] transition-colors">
          Request a call
          </button>
        </div>
      </div>
    </header>
  );
}
