import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ValueProps from './components/ValueProps';
import FeatureShowcase from './components/FeatureShowcase';
import HowItWorks from './components/HowItWorks';
import MiniGames from './components/MiniGames';
import Analytics from './components/Analytics';
import CTASection from './components/CTASection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body">
      <NavBar />
      <main>
        <Hero />
        <TrustBar />
        <ValueProps />
        <FeatureShowcase />
        <HowItWorks />
        <MiniGames />
        <Analytics />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;