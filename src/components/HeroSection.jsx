import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("hero");
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);

      const sections = ["hero", "benefits", "faq", "footer"];
      let found = false;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(section);
            found = true;
            break;
          }
        }
      }

      if (!found) setActiveTab("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="hero-container">
      {/* Sticky Rounded Navigation Bar */}
      <div id="hero-nav" className={`hero-nav ${isSticky ? "sticky" : ""}`}>
        {[
          { name: "Refer", id: "hero" },
          { name: "Benefits", id: "benefits" },
          { name: "FAQs", id: "faq" },
        ].map((tab, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(tab.id)}
            className={activeTab === tab.id ? "active" : ""}
          >
            {tab.name}
            {activeTab === tab.id && <span className="dot"></span>}
          </button>
        ))}
      </div>

      {/* Card Containing Image and Text */}
      <div className="hero-card">
        <div className="hero-text">
          <h1>Refer & Earn Rewards</h1>
          <p>Invite your friends and earn exciting bonuses when they enroll in our courses.</p>
          <button className="hero-btn" onClick={() => navigate("/refer-earn")}>Refer Now</button>
        </div>
        <div className="hero-image">
          <img src="/rne1.png" alt="Refer and Earn" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
