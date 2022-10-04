import React from "react";
import { Link } from "react-router-dom";

import "./login.scss";
import heroLogos from "/svg/cta-logo-one.svg";

export const Login = () => {
  return (
    <section className="login">
      <div className="login__content">
        <div className="hero-img">
          <img src={heroLogos} alt="logo-image" />
        </div>

        <Link to="/home">
          <button className="login__btn">Get Started</button>
        </Link>
        <p>
          Get Premier access to raya and the last Dragon for an additional fee
          with a Disney+ subscription.{" "}
        </p>
        <div className="hero-img">
          <img src="/img/cta-logo-two.png" alt="" />
        </div>
      </div>
    </section>
  );
};
