import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="auth-page">

      <div className="auth-container">

        {/* Left robot section */}

        <div className="robot-panel">

          <div className="ring ring1"></div>
          <div className="ring ring2"></div>

          <img
            src="/robot.png"
            alt="AI Robot"
            className="auth-robot"
          />

          <div className="chat-one">
            Hello! Can you help me?
          </div>

          <div className="chat-two">
            <strong>Buddy! 🤖</strong>
            <br />
            Sure, I'm ready to help you.
          </div>

        </div>

        {/* Register form */}

        <div className="form-panel">

          <div className="robot-icon">
            🤖
          </div>

          <h1>
            Welcome to Sign Up <span>Buddy!</span>
          </h1>

          <p className="form-subtitle">
            Create your account and start your career journey.
          </p>

          <form>

            <div className="input-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="terms">

              <input
                type="checkbox"
                id="terms"
              />

              <label htmlFor="terms">
                I agree to the{" "}
                <span>Terms of Conditions</span>{" "}
                and <span>Privacy Policy</span>
              </label>

            </div>

            <button
              type="submit"
              className="submit-btn"
            >
              Sign Up
            </button>

          </form>

          <p className="account-text">
            Already have an account?{" "}
            <Link to="/login">
              Sign In
            </Link>
          </p>

          <div className="or">
            <span></span>
            Or continue with
            <span></span>
          </div>

          <div className="social-buttons">

            <button>
              🌈 Google
            </button>

            <button>
              🔵 Facebook
            </button>

          </div>

          <div className="footer-links">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;