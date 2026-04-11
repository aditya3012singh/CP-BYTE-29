import React from 'react';
import HeroSection from '../components/layout/HeroSection';
import CoreFounders from '../components/layout/CoreFounders';
import StarField from '../components/common/StarField';

function HomePage() {
  return (
    <main className="relative bg-brand-dark min-h-screen overflow-hidden">
      <StarField />
      <div className="relative z-10 flex flex-col">
        <HeroSection />
        <CoreFounders />
      </div>
    </main>
  );
}

export default HomePage;
