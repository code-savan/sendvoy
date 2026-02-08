import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { TrackingSection } from './components/TrackingSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { WarehousingSection } from './components/WarehousingSection';
import { WhiteLabelSection } from './components/WhiteLabelSection';
import { PricingSection } from './components/PricingSection';
import { TrustedBySection } from './components/TrustedBySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CalculatorSection } from './components/CalculatorSection';
import { BlogSection } from './components/BlogSection';
import { CTASection } from './components/CTASection';
import { GetInTouchSection } from './components/GetInTouchSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <TrackingSection />
        <ServicesSection />
        <WhyChooseSection />
        <WarehousingSection />
        <WhiteLabelSection />
        <PricingSection />
        <TrustedBySection />
        <TestimonialsSection />
        <CalculatorSection />
        <BlogSection />
        <CTASection />
        <GetInTouchSection />
      </main>
      <Footer />
    </div>);

}
