import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Captcha from "./Captcha";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { app } from "./firebase";
import bcg from "./bcg.avif";
import "./SignUp.css";

const auth = getAuth(app);

const Signup = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.username) {
      formErrors.username = "Username is required";
      isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!formData.email.match(emailPattern)) {
      formErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password) {
      formErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (!isCaptchaValid) {
      formErrors.captcha = "CAPTCHA is incorrect";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage(""); // Clear previous messages
    if (validateForm()) {
      try {
        const userCred = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await sendEmailVerification(userCred.user);
        setMessage("Signup successful! Verification email sent.");
        console.log("success");
       navigate("/");
       
      } catch (error) {
        let errorMsg = "An error occurred. Please try again.";
        if (error.code === "auth/email-already-in-use") {
          errorMsg = "Email is already registered. Please log in.";
        } else if (error.code === "auth/invalid-email") {
          errorMsg = "Invalid email address.";
        } else if (error.code === "auth/weak-password") {
          errorMsg = "Password is too weak. It must be at least 6 characters.";
        }
        setMessage(errorMsg);
      }
    } else {
      setMessage("Please correct the errors and try again.");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundImage: `url(${bcg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div
        className="form-container"
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
          backgroundImage: `url(${bcg})`, // Inner container background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {message && (
          <Alert
            variant={message.includes("successful") ? "success" : "danger"}
            className="text-center"
          >
            {message}
          </Alert>
        )}

        <h2 className="text-center mb-4">Signup Form</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Captcha onChange={(isValid) => setIsCaptchaValid(isValid)} />
          {errors.captcha && (
            <div className="text-danger mb-3">{errors.captcha}</div>
          )}

          <Button variant="primary" type="submit" className="w-100">
           Sign Up
          </Button>

          <p style={{ marginTop: "15px", textAlign: "center", color: "white" }}>
            Already Registered?{" "}
            <Link
              to="/loginpage"
              style={{ color: "#007bff", textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
