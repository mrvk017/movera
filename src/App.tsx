import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WellnessSection from "./components/WellnessSection";
import TreatmentsSection from "./components/TreatmentsSection";
import OfferSection from "./components/OfferSection";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import CustomCursor from "./CustomCursor";
import TeamSection from "./components/TeamSection";
import LandingAnimation from "./components/LandingAnimation";

function App() {
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding)
    return <LandingAnimation onComplete={() => setShowLanding(false)} />;

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <CustomCursor />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ServicesSection />
                <WellnessSection />
                <TreatmentsSection />
                <OfferSection />
                <ProductsSection />
                <TeamSection />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <HeroSection />
                <ServicesSection />
                <WellnessSection />
                <TreatmentsSection />
                <OfferSection />
                <ProductsSection />
                <TeamSection />
              </>
            }
          />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
