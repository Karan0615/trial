import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHomeAndScroll = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 300); // Delay to allow navigation
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      {/* Left Logo - Click to go to home and scroll to top */}
      <div className="logo" onClick={() => goToHomeAndScroll("hero")} style={{ cursor: "pointer" }}>
        <span className="brand">Accredian</span>
        <span className="subtext">credentials that matter</span>
      </div>

      {/* Right Side Elements */}
      <div className="nav-content">
        {/* Center Navigation Links */}
        <ul className="nav-links">
          <li onClick={() => navigate("/refer-earn")}>Refer & Earn</li>
          <li onClick={() => goToHomeAndScroll("benefits")}>Benefits</li>
          <li onClick={() => goToHomeAndScroll("faq")}>FAQs</li>
          <li onClick={() => goToHomeAndScroll("footer")}>About Us</li>
        </ul>

        {/* Right Side Button */}
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
