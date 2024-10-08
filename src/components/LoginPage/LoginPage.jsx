import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Signup/firebase";
import bcg from "./bcg.avif";
import "./Login.css";

const auth = getAuth(app);

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Username validation
    if (!formData.username) {
      formErrors.username = "Username is required";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!formData.email.match(emailPattern)) {
      formErrors.email = "Invalid email format";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then(() => {
          setMessage("Login Successful!");
          navigate("/");
        })
        .catch((error) => {
          setMessage(error.message); // Display error when credentials are incorrect
        });
    } else {
      setMessage("Invalid input");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: `url(${bcg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Success/Error Message */}
        {message && (
          <Alert
            variant={message === "Login Successful!" ? "success" : "danger"}
            className="text-center"
          >
            {message}
          </Alert>
        )}

        <h2 className="text-center mb-4">Login Form</h2>

        <Form onSubmit={handleSubmit}>
          {/* Username Field */}
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

          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>

          <p
            style={{
              marginTop: "15px",
              textAlign: "center",
              color: "white",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{ color: "#007bff", textDecoration: "none" }}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              Register
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
