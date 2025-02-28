import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ReferralBenefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import ReferEarn from "./components/ReferEarn";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <section id="benefits">
              <ReferralBenefits />
            </section>
            <section id="howitworks">
              <HowItWorks />
            </section>
            <section id="faq">
              <FAQ />
            </section>
            <section id="footer">
              <Footer />
            </section>
          </>
        } />
        <Route path="/refer-earn" element={<ReferEarn />} />
      </Routes>
    </Router>
  );
}

export default App;
