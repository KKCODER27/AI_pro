import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register-container">

      <div className="register-card">

        <h1>Create Account</h1>
        <p>Join Career Maker</p>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <input
          type="password"
          placeholder="Confirm Password"
        />

        <button>Create Account</button>

        <p className="bottom-text">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;