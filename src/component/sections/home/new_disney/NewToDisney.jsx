import React from "react";
import { Link } from "react-router-dom";
import "./newToDisney.scss";

export const NewToDisney = () => {
  return (
    <section className="disney">
      <h4 className="disney__heading">New to Disney</h4>
      <div className="disney__content">
        <div className="disney__box">
          <Link className="box__link">
            <img
              src="/img/viewers-marvel.png"
              className="box__img"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="disney__box">
          <Link className="box__link">
            <img
              src="/img/viewers-marvel.png"
              className="box__img"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="disney__box">
          <Link className="box__link">
            <img
              src="/img/viewers-marvel.png"
              className="box__img"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="disney__box">
          <Link className="box__link">
            <img
              src="/img/viewers-marvel.png"
              className="box__img"
              alt="thumbnail"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
