import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/benefits.css";

const Benefits = () => {
  const navigate = useNavigate();

  const benefitsData = [
    { program: "Professional Certificate Program in Product Management", referrerBonus: "₹7,000", refereeBonus: "₹9,000" },
    { program: "PG Certificate Program in Strategic Product Management", referrerBonus: "₹9,000", refereeBonus: "₹11,000" },
    { program: "Executive Program in Data Driven Product Management", referrerBonus: "₹10,000", refereeBonus: "₹10,000" },
    { program: "Executive Program in Product Management and Digital Transformation", referrerBonus: "₹10,000", refereeBonus: "₹10,000" },
    { program: "Advanced Certification in Product Management", referrerBonus: "₹10,000", refereeBonus: "₹10,000" },
    { program: "Executive Program in Product Management and Project Management", referrerBonus: "₹10,000", refereeBonus: "₹10,000" },
  ];

  return (
    <section className="benefits-section">
      <h2 className="benefits-title">Referral <span>Benefits</span></h2>
      <div className="benefits-table">
        <table>
          <thead>
            <tr>
              <th>Programs</th>
              <th>Referrer Bonus</th>
              <th>Referee Bonus</th>
            </tr>
          </thead>
          <tbody>
            {benefitsData.map((benefit, index) => (
              <tr key={index}>
                <td>{benefit.program}</td>
                <td>{benefit.referrerBonus}</td>
                <td>{benefit.refereeBonus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="refer-now-btn" onClick={() => navigate("/refer-earn")}>Refer Now</button>
    </section>
  );
};

export default Benefits;
