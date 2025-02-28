import React, { useState } from "react";
import "../styles/faq.css";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("eligibility");
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqs = {
    eligibility: [
      {
        question: "Do I need prior Product Management experience to enroll?",
        answer:
          "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
      {
        question: "What is the minimum system configuration required?",
        answer:
          "A laptop/PC with at least 4GB RAM, a stable internet connection, and access to Zoom or Google Meet for live sessions.",
      },
    ],
    howToUse: [
      {
        question: "How do I refer a friend?",
        answer:
          "Simply click on the 'Refer Now' button, fill in your friend's details, and they will receive an invitation to enroll.",
      },
      {
        question: "Where can I track my referral progress?",
        answer:
          "You can track your referrals and rewards in the dashboard after logging in to your account.",
      },
    ],
    termsAndConditions: [
      {
        question: "When will I receive my referral bonus?",
        answer:
          "Referral bonuses are processed within 30 days after the referee successfully enrolls and completes the first payment.",
      },
      {
        question: "Are there any limits on referrals?",
        answer:
          "No, you can refer as many friends as you like and earn rewards for each successful enrollment.",
      },
    ],
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">
        Frequently Asked <span>Questions</span>
      </h2>
      <div className="faq-container">
        <div className="faq-tabs">
          <button
            className={activeTab === "eligibility" ? "active" : ""}
            onClick={() => setActiveTab("eligibility")}
          >
            Eligibility
          </button>
          <button
            className={activeTab === "howToUse" ? "active" : ""}
            onClick={() => setActiveTab("howToUse")}
          >
            How To Use?
          </button>
          <button
            className={activeTab === "termsAndConditions" ? "active" : ""}
            onClick={() => setActiveTab("termsAndConditions")}
          >
            Terms & Conditions
          </button>
        </div>

        <div className="faq-content">
          {faqs[activeTab].map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                <h3>{faq.question}</h3>
                <span>{openQuestions[index] ? "−" : "+"}</span>
              </div>
              {openQuestions[index] && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
