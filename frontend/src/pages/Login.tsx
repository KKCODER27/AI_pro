import React, { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      {/* Login Card */}
      <div className="login-card">

        {/* Robot Icon */}
        <div className="login-robot-circle">
          <img src="/robot.png" alt="Robot" />
        </div>

        {/* Heading */}
        <h2>
          Hello!
          <br />
          <span>
            Welcome <b>Back</b>
          </span>
        </h2>

        <div className="title-line"></div>


        {/* Email */}
        <div className="login-input-group">

          <label>Email</label>

          <div className="login-input-box">

            <span className="input-icon">
              ✉
            </span>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>

        </div>


        {/* Password */}
        <div className="login-input-group">

          <label>Password</label>

          <div className="login-input-box">

            <span className="input-icon">
              🔒
            </span>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />

            <button
              type="button"
              className="eye-button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? "◉" : "◌"}
            </button>

          </div>

        </div>


        {/* Remember / Forgot */}
        <div className="login-options">

          <label className="remember">

            <input type="checkbox" />

            <span>
              Remember me
            </span>

          </label>

          <a href="#" className="forgot">
            Forgot Password?
          </a>

        </div>


        {/* Sign In */}
        <button className="main-login-button">

          Sign In

          <span>→</span>

        </button>


        {/* Divider */}
        <div className="or-divider">

          <span></span>

          <p>
            Or continue with
          </p>

          <span></span>

        </div>


        {/* Social Buttons */}
        <div className="social-buttons">

          <button>
            <span className="facebook-icon">
              f
            </span>
            Facebook
          </button>

          <button>
            <span className="apple-icon">
              ●
            </span>
            Apple
          </button>

          <button>
            <span className="google-icon">
              G
            </span>
            Google
          </button>

        </div>


        {/* Register */}
        <div className="register-text">

          Don't have an account?

          <a href="/register">
            {" "}Register
          </a>

        </div>

      </div>

    </div>
  );
};

export default Login;