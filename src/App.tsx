import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WellnessSection from './components/WellnessSection';
import TreatmentsSection from './components/TreatmentsSection';
import OfferSection from './components/OfferSection';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <ServicesSection />
      <WellnessSection />
      <TreatmentsSection />
      <OfferSection />
      <ProductsSection />
      <Footer />
    </div>
  );
}

export default App;