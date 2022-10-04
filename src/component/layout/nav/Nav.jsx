import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../utils/Logo";
import { FaUser } from "react-icons/fa";
import "./nav.scss";

const navItems = [
  {
    icon: "H",
    text: "Home",
  },
  {
    icon: "S",
    text: "Search",
  },
  {
    icon: "W",
    text: "WatchList",
  },
  {
    icon: "0",
    text: "Series",
  },
  {
    icon: "M",
    text: "Movies",
  },
];

export const Nav = () => {
  const [ul, setUl] = useState(true);
  return (
    <nav className="nav">
      <Logo />
      {ul && (
        <ul className="nav__list">
          {navItems.map(({ icon, text }) => (
            <li className="nav__item" key={text}>
              <Link className="nav__link" to="/">
                <i className="nav__icon">{icon}</i>
                <span className="nav__text">{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <span className="nav__user">
        <FaUser className="nav__user__link" /> <span>Login</span>
      </span>
    </nav>
  );
};

{
  /* <nav className="login__nav">
        <div className="login__nav__container container">
        
          <Link to="/home">
            <button className="btn">Continue as guest</button>
          </Link>
        </div>
      </nav> */
}
