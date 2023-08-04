import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import MenuSection from './MenuSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default MainLayout;
