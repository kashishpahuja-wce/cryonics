import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Challenges from './Challenges';
import AssetManagement from './AssetManagement';
import Features from './Features';
import Parameters from './Parameters';
import SmartSolutions from './SmartSolutions';
import UseCases from './UseCases';
import FAQ from './FAQ';
import CTA from './CTA';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Header />
      <main>
        <Hero />
        <Challenges />
        <AssetManagement />
        <Features />
        <Parameters />
        <SmartSolutions />
        <UseCases />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
