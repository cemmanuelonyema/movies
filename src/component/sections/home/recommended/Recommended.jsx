import React from "react";
import { Link } from "react-router-dom";
import "./recommended.scss";

export const Recommended = () => {
  return (
    <section className="recommended">
      <h4 className="recommended__heading">Recommended for you</h4>
      <div className="recommended__content">
        <div className="recommended__box">
          <Link className="recommended__link">
            <img
              src="/img/viewers-marvel.png"
              className="recommended__img"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="recommended__box">
          <Link className="recommended__link">
            <img
              src="/img/viewers-marvel.png"
              className="recommended__img"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="recommended__box">
          <Link className="recommended__link">
            <img
              src="/img/viewers-marvel.png"
              className="recommended__img"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="recommended__box">
          <Link className="recommended__link">
            <img
              src="/img/viewers-marvel.png"
              className="recommended__img"
              alt="thumbnail"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
