import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      <div className="login-container">

        {/* Robot */}

        <div className="login-robot-panel">

          <div className="login-glow"></div>

          <img
            src="/robot.png.png"
            alt="AI Robot"
            className="login-robot"
          />

          <div className="login-message">
            🤖
            <br />
            Welcome back!
            <br />
            Let's continue your journey.
          </div>

        </div>

        {/* Login form */}

        <div className="login-form-panel">

          <div className="login-icon">
            🤖
          </div>

          <h1>
            Welcome Back <span>Buddy!</span>
          </h1>

          <p>
            Login to continue your career journey.
          </p>

          <form>

            <div className="login-input">

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />

            </div>

            <div className="login-input">

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
              />

            </div>

            <div className="remember">

              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#">
                Forgot Password?
              </a>

            </div>

            <button className="login-submit">
              Login
            </button>

          </form>

          <div className="new-account">

            Don't have an account?

            <Link to="/register">
              Register
            </Link>

          </div>

          <div className="login-or">

            <span></span>
            Or continue with
            <span></span>

          </div>

          <div className="login-social">

            <button>
              🌈 Google
            </button>

            <button>
              🔵 Facebook
            </button>

          </div>

          <div className="login-footer">

            <span>Terms of Service</span>

            <span>Privacy Policy</span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;