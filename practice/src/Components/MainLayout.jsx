import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import MenuSection from './MenuSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import Cards from './Cards';
import Garage from './Cards';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <Garage />
      <Cards />
    </div>
  );
};

export default MainLayout;
