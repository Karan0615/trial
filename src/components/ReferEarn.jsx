import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "../styles/ReferEarn.css";

const ReferEarn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    friendEmail: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation Function
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.friendEmail) {
      setStatus("Please fill all required fields.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email) || !/\S+@\S+\.\S+/.test(formData.friendEmail)) {
      setStatus("Please enter valid email addresses.");
      return false;
    }
    return true;
  };

  /*Submit form data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setStatus("");

    try {
      const response = await axios.post("https://accredian-backend-task-c3p1.onrender.com", formData);
      if (response.status === 201) {
        setStatus("Referral submitted successfully! 🎉");
        setFormData({ name: "", email: "", friendEmail: "", message: "" }); // Reset form
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
      setStatus("Failed to submit referral. Please try again.");
    } finally {
      setLoading(false);
    }
  };*/



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    setLoading(true);
    setStatus("");
  
    try {
      const response = await axios.post(
        "https://accredian-backend-task-c3p1.onrender.com/api/referrals",
        formData
      );
  
      if (response.status === 201) {
        setStatus("Referral submitted successfully! 🎉");
        setFormData({ name: "", email: "", friendEmail: "", message: "" }); // Reset form
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
      setStatus("Failed to submit referral. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="refer-container">
      <h2>Refer & Earn</h2>
      <p>Invite your friends and earn rewards!</p>

      <form onSubmit={handleSubmit}>
        <label>Your Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Your Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Friend's Email:</label>
        <input type="email" name="friendEmail" value={formData.friendEmail} onChange={handleChange} required />

        <label>Message (Optional):</label>
        <textarea name="message" value={formData.message} onChange={handleChange} />

        <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Referral"}</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default ReferEarn;
