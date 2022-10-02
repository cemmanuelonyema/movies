import React from "react";
import "./login.scss";
import heroLogos from "/svg/cta-logo-one.svg";
import logo from "/svg/logo.svg";

export const Login = () => {
  return (
    <section className="login">
      <nav className="login__nav">
        <div className="login__nav--container container">
          <div className="logo-con">
            <img src={logo} alt="logo" />
          </div>
          <a href="/" className="btn">
            Login
          </a>
        </div>
      </nav>

      <div className="container content">
        <div className="hero-img">
          <img src={heroLogos} alt="logo-image" />
        </div>
        <a href="/" className="btn">
          Get Started
        </a>
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
