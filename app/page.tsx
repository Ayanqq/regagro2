'use client';

import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import BulletinBoardSection from './components/BulletinBoardSection';
import MobileAppSection from './components/MobileAppSection';
import CompanyNewsSection from './components/CompanyNewsSection';
import ContactSection from './components/ContactSection';
import Pagination from './components/Pagination';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('hero');
  
  const sections = [
    'hero',
    'about', 
    'catalog',
    'bulletin-board',
    'breed',
    'company-news',
    'contacts'
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <Pagination sections={sections} onSectionChange={setCurrentSection} />
      
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <BulletinBoardSection />
      <MobileAppSection />
      <CompanyNewsSection />
      <ContactSection />
    </main>
  );
}
