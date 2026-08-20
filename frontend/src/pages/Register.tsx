import React, { useState } from "react";
import "./Register.css";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="register-page">

      {/* Background decoration */}
      <div className="register-glow glow-one"></div>
      <div className="register-glow glow-two"></div>

      {/* NAVBAR */}
      <nav className="register-navbar">

        <div className="register-logo">
          <div className="logo-symbol">C</div>
          <div className="logo-text">
            <span>CAREER</span>
            <span>MAKER</span>
          </div>
        </div>

        <div className="register-nav-links">
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        <div className="register-nav-buttons">
          <a href="/login" className="nav-login">
            Login
          </a>

          <a href="/register" className="nav-register">
            Register
          </a>
        </div>

      </nav>

      {/* MAIN CONTENT */}
      <main className="register-content">

        {/* LEFT SIDE */}
        <section className="register-left">

          <div className="small-heading">
            <span></span>
            BUILD YOUR
            <span></span>
          </div>

          <h1>
            <span className="dream-text">DREAM</span>
            <span className="career-text">CAREER</span>
          </h1>

          <p>
            Modern platform to discover opportunities,
            <br />
            build skills and grow your career.
          </p>

          <div className="blue-line">
            <span></span>
          </div>

        </section>

        {/* RIGHT REGISTER CARD */}
        <section className="register-card">

          {/* ICON */}
          <div className="register-icon">
            <span>♙</span>
          </div>

          <h2>
            Hello!
          </h2>

          <h3>
            Create Your <span>Account</span>
          </h3>

          <div className="heading-line">
            <span></span>
            <b></b>
            <span></span>
          </div>

          {/* FULL NAME */}
          <div className="input-box">
            <span className="input-icon">♙</span>

            <input
              type="text"
              placeholder="Full Name"
            />
          </div>

          {/* EMAIL */}
          <div className="input-box">
            <span className="input-icon">✉</span>

            <input
              type="email"
              placeholder="Email Address"
            />
          </div>

          {/* PASSWORD */}
          <div className="input-box">
            <span className="input-icon">♧</span>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />

            <button
              type="button"
              className="eye-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "◉" : "◌"}
            </button>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="input-box">
            <span className="input-icon">♧</span>

            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
            />

            <button
              type="button"
              className="eye-button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? "◉" : "◌"}
            </button>
          </div>

          {/* TERMS */}
          <div className="terms">
            <input type="checkbox" id="terms" />

            <label htmlFor="terms">
              I agree to the{" "}
              <span>Terms of Service</span>{" "}
              and{" "}
              <span>Privacy Policy</span>
            </label>
          </div>

          {/* CREATE ACCOUNT */}
          <button className="create-account">
            Create Account
            <span>→</span>
          </button>

          {/* DIVIDER */}
          <div className="continue-line">
            <span></span>
            <p>Or continue with</p>
            <span></span>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="social-buttons">

            <button>
              <b className="google">G</b>
              Google
            </button>

            <button>
              <b className="apple">●</b>
              Apple
            </button>

            <button>
              <b className="facebook">f</b>
              Facebook
            </button>

          </div>

          {/* LOGIN LINK */}
          <p className="already-account">
            Already have an account?
            <a href="/login"> Login</a>
          </p>

        </section>

      </main>

    </div>
  );
};

export default Register;