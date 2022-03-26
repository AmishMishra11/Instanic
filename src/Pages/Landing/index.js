import React from "react";
import "./styles.css";

import LandingImage from "../../assets/landing.svg";

import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-container">
      <main>
        <h1 className="landing-header">INSTANIC</h1>
        <div className="landing-main-container">
          <h3>
            Meet the <span>fastest </span> note making app
          </h3>

          <div>
            Manage your daily tasks and workflow in a morder way and boost your
            efficiency without any efforts.
          </div>
        </div>

        <div className="landing-links">
          <Link to="/signup" className="landing-signup">
            Join Now
          </Link>
          <Link to="/login" className="landing-login">
            Already have an account?
          </Link>
        </div>
      </main>

      <div className="landing-image-container  ">
        <img className="landing-image" src={LandingImage} alt="home " />
      </div>
    </div>
  );
}

export default Landing;
