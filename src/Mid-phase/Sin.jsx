import React, { useState } from "react";
import "../Mid-phase/Sin.css";
import { NavLink } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [passwordLengthValid, setPasswordLengthValid] = useState(true);

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Check email validity
    if (/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    } else if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email address is invalid",
      }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    
    setPasswordLengthValid(value.length >= 8);

    
    if (value.length >= 8) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    } else if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters long",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Sign-in successful");
      
    } else if (password.length < 8) {
      alert(
        "Please ensure your password is at least 8 characters long and also valid email ID is required "
      );
    }
  };

  return (
    <div className="sin-body">
    <div className="sign-in-page">
      <div className="sign-in-container">
        <div className="sign-in-header">
          <h1>Welcome Back</h1>
          <p>Sign in to discover and plan your next adventure!</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="button-container">
           <NavLink to="/"> <button type="submit" className="sign-in-button">
              Sign In
            </button></NavLink>
      <NavLink to="/Signup">     <button type="button" className="forgot-password-button">
              create Account
            </button></NavLink> 
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignInPage;
