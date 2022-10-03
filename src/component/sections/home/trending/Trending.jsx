import React from "react";
import { Link } from "react-router-dom";
import "./trending.scss";

export const Trending = () => {
  return (
    <section className="trending">
      <h4 className="trending__heading">Trending</h4>
      <div className="trending__content">
        <div className="trending__box">
          <Link className="trending__link">
            <img
              src="/img/viewers-marvel.png"
              className="trending__img"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="trending__box">
          <Link className="trending__link">
            <img
              src="/img/viewers-marvel.png"
              className="trending__img"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="trending__box">
          <Link className="trending__link">
            <img
              src="/img/viewers-marvel.png"
              className="trending__img"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="trending__box">
          <Link className="trending__link">
            <img
              src="/img/viewers-marvel.png"
              className="trending__img"
              alt="thumbnail"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
