import React from "react";
import "../styles/howItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How Do I Refer?</h2>
      <div className="steps">
        <div className="step">
          <span>1</span>
          <p>Share referral details with your network.</p>
        </div>
        <div className="step">
          <span>2</span>
          <p>Earn rewards as your referrals join the program.</p>
        </div>
        <div className="step">
          <span>3</span>
          <p>Bonuses are released after verification.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
