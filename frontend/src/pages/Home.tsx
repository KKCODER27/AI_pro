import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="hero">

      {/* Navigation */}
      <nav className="navbar">

        <div className="logo">
          <span>◆</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

      </nav>

      {/* Content on top of background */}
      <div className="hero-content">

        <div className="hero-text">
          <p className="small-title">BUILD YOUR</p>

          <h1>
            DREAM <span>CAREER</span>
          </h1>

          <p className="description">
            Discover opportunities, build skills
            <br />
            and grow your career.
          </p>

          <div className="buttons">

            <Link to="/register">
              <button className="get-started">
                Get Started →
              </button>
            </Link>

            <Link to="/login">
              <button className="login-btn">
                Login
              </button>
            </Link>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;