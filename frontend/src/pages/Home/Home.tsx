import "./Home.css";
import { Link } from "react-router-dom";

import google from "../../assets/logos/google.jpeg";
import deloitte from "../../assets/logos/deloitte.jpeg";
import capgemini from "../../assets/logos/capgemini.jpeg";
import amazon from "../../assets/logos/amazon.jpeg";
import flipkart from "../../assets/logos/filpkart.jpeg";
import infosys from "../../assets/logos/infosys.jpeg";
import tcs from "../../assets/logos/tcs.jpeg";
import meesho from "../../assets/logos/logo8.png";
import swiggy from "../../assets/logos/logo9.png";
function Home() {
  return (
    <div className="home">

      {/* Floating Logos */}

      <img src={google} className="logo logo1" alt="Google" />
      <img src={deloitte} className="logo logo2" alt="Deloitte" />
      <img src={capgemini} className="logo logo3" alt="Capgemini" />
      <img src={amazon} className="logo logo4" alt="Amazon" />
      <img src={flipkart} className="logo logo5" alt="Flipkart" />
      <img src={infosys} className="logo logo6" alt="Infosys" />
      <img src={tcs} className="logo logo7" alt="TCS" />
      <img src={meesho} className="logo logo8" alt="Meesho" />
      <img src={swiggy} className="logo logo9" alt="Swiggy" />
      {/* Website Name */}

      <div className="titleBox">
        <h1>CAREER MAKER</h1>
      </div>

      {/* Login Register */}

      <div className="card">

        <Link to="/login">
          <button>LOGIN</button>
        </Link>

        <Link to="/register">
          <button>REGISTER</button>
        </Link>

      </div>

    </div>
  );
}

export default Home;