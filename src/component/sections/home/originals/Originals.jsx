import React from "react";
import { Link } from "react-router-dom";
import "./originals.scss";

export const Originals = () => {
  return (
    <section className="originals">
      <h4 className="originals__heading">Originals</h4>
      <div className="originals__content">
        <div className="originals__box">
          <Link className="box__link">
            <img
              src="/img/viewers-marvel.png"
              className="box__img"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="originals__box">
          <Link className="box__link">
            <img
              src="/img/viewers-marvel.png"
              className="box__img"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="originals__box">
          <Link className="box__link">
            <img
              src="/img/viewers-marvel.png"
              className="box__img"
              alt="thumbnail"
            />
          </Link>
        </div>
        <div className="originals__box">
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
