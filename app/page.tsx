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
      
      <HeroSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <AboutSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <ProductsSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <BulletinBoardSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <MobileAppSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <CompanyNewsSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
      <ContactSection sections={sections} setCurrentSection={setCurrentSection} currentSection={currentSection} />
    </main>
  );
}
