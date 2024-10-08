import React, { useState, useEffect } from "react";

const Captcha = ({ onChange }) => {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");

  const generateCaptcha = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captchaCode = "";
    for (let i = 0; i < 6; i++) {
      captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(captchaCode);
    onChange(false); // Reset CAPTCHA validation in the parent component
  };

  useEffect(() => {
    generateCaptcha();
  },[]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    onChange(value === captcha); // Validate if input matches the CAPTCHA
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <div
        style={{
          marginBottom: "10px",
          padding: "10px",
          border: "1px solid #ddd",
          display: "inline-block",
          fontWeight: "bold",
          fontSize: "24px",
          letterSpacing: "2px",
          backgroundColor: "#f9f9f9",
          userSelect: "none",
        }}
      >
        {captcha}
      </div>
      <input
        type="text"
        placeholder="Enter the CAPTCHA"
        value={userInput}
        onChange={handleInputChange}
        style={{
          marginRight: "10px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          width: "100%",
        }}
      />
    </div>
  );
};

export default Captcha;
