import React from 'react';
import ProgressBar from './components/ProgressBar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhiteLabelSection from './components/WhiteLabelSection';
import GameFlowSection from './components/GameFlowSection';
import AdminPanelSection from './components/AdminPanelSection';
import AIRevenueSection from './components/AIRevenueSection';
/* import TestimonialsSection from './components/TestimonialsSection'; */
import PricingSection from './components/PricingSection';
/* import FinalCTASection from './components/FinalCTASection'; */
import FloatingFAQ from './components/FloatingFAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ProgressBar />
      <Header />
      <main>
        <HeroSection />
        <WhiteLabelSection />
        <GameFlowSection />
        <AdminPanelSection />
        <AIRevenueSection />
        {/*<TestimonialsSection />*/}
        <PricingSection />
       {/* <FinalCTASection /> */}
      </main>
      <FloatingFAQ />
      <Footer />
    </div>
  );
}

export default App;