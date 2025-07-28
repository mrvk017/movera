import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WellnessSection from './components/WellnessSection';
import TreatmentsSection from './components/TreatmentsSection';
import OfferSection from './components/OfferSection';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ServicesSection />
              <WellnessSection />
              <TreatmentsSection />
              <OfferSection />
              <ProductsSection />
            </>
          } />
          <Route path="/home" element={
            <>
              <HeroSection />
              <ServicesSection />
              <WellnessSection />
              <TreatmentsSection />
              <OfferSection />
              <ProductsSection />
            </>
          } />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;