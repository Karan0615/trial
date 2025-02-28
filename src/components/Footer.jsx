import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">Accredian</h2>
          <p className="tagline">Credentials that matter</p>
        </div>

        <div className="footer-section">
          <h3>Programs</h3>
          <ul>
            <li>Data Science & AI</li>
            <li>Product Management</li>
            <li>Business Analytics</li>
            <li>Digital Transformation</li>
            <li>Business Management</li>
            <li>Project Management</li>
            <li>Strategy & Leadership</li>
            <li>Senior Management</li>
            <li>Fintech</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email (Data Science): <a href="mailto:admissions@accredian.com">admissions@accredian.com</a></p>
          <p>Email (Product Management): <a href="mailto:pm@accredian.com">pm@accredian.com</a></p>
          <p>Data Science Helpline: +91 9079653292</p>
          <p>Product Management Helpline: +91 9625811095</p>
          <p>Student Helpline: +91 7969232507</p>
          <p>Office: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
        </div>

        <div className="footer-section">
          <h3>Accredian</h3>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Admission Policy</li>
            <li>Referral Policy</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Master FAQs</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Accredian, A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
