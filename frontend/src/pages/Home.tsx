import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* Background circles */}
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>

      {/* Navbar */}
      <nav className="navbar">

        <div className="brand">
          <span>CAREER</span> MAKER
        </div>

        <div className="nav-buttons">

          <Link to="/login">
            <button className="nav-login">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="nav-register">
              Register
            </button>
          </Link>

        </div>

      </nav>

      {/* Main content */}
      <div className="hero">

        {/* Left side */}
        <div className="hero-text">

          <p className="small-title">
            YOUR CAREER STARTS HERE
          </p>

          <h1>
            Build Your
            <br />
            <span>Dream Career</span>
          </h1>

          <p className="description">
            Discover opportunities, improve your skills and
            take the next step towards your dream career.
          </p>

          <div className="hero-buttons">

            <Link to="/register">
              <button className="start-button">
                Get Started →
              </button>
            </Link>

            <Link to="/login">
              <button className="login-button">
                Login
              </button>
            </Link>

          </div>

        </div>

        {/* Right side robot */}
        <div className="robot-section">

          <div className="glow"></div>

          <img
            src="/robot.png"
            alt="Career Maker AI Robot"
            className="home-robot"
          />

          <div className="robot-message">
            <span>🤖</span>
            Hi! I'm Buddy.
            <br />
            Let's build your career!
          </div>

        </div>

      </div>

      {/* Bottom features */}
      <div className="features">

        <div className="feature">
          <div>🎯</div>
          <p>Find Opportunities</p>
        </div>

        <div className="feature">
          <div>💡</div>
          <p>Build Skills</p>
        </div>

        <div className="feature">
          <div>🚀</div>
          <p>Grow Your Career</p>
        </div>

      </div>

    </div>
  );
}

export default Home;