import React from "react";
import { Link } from "react-router-dom";
import "./programs.scss";

export const Programs = () => {
  return (
    <section className="programs">
      <h4 className="programs__heading">programs</h4>
      <div className="programs__content">
        <div className="programs__box">
          <Link className="programs__link">
            <img
              src="/img/viewers-marvel.png"
              className="programs__img"
              alt="thumbnail"
            />

            <video
              className="programs__video"
              autoPlay={true}
              loop={true}
              playsInline={true}
            >
              <source src="/videos/marvel.mp4" type="video/mp4" />
            </video>
          </Link>
        </div>
        <div className="programs__box">
          <Link className="programs__link">
            <img
              src="/img/viewers-disney.png"
              className="programs__img"
              alt="thumbnail"
            />
          </Link>
          <video
            className="programs__video"
            autoPlay={true}
            loop={true}
            playsInline={true}
          >
            <source src="/videos/disney.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="programs__box">
          <Link className="programs__link">
            <img
              src="/img/viewers-national.png"
              className="programs__img"
              alt="thumbnail"
            />

            <video
              className="programs__video"
              autoPlay={true}
              loop={true}
              playsInline={true}
            >
              <source src="/videos/national-geographic.mp4" type="video/mp4" />
            </video>
          </Link>
        </div>
        <div className="programs__box">
          <Link className="programs__link">
            <img
              src="/img/viewers-pixar.png"
              className="programs__img"
              alt="thumbnail"
            />
            <video
              className="programs__video"
              autoPlay={true}
              loop={true}
              playsInline={true}
            >
              <source src="/videos/pixar.mp4" type="video/mp4" />
            </video>
          </Link>
        </div>
        <div className="programs__box">
          <Link className="programs__link">
            <img
              src="/img/viewers-starwars.png"
              className="programs__img"
              alt="thumbnail"
            />
            <video
              className="programs__video"
              autoPlay={true}
              loop={true}
              playsInline={true}
            >
              <source src="/videos/star-wars.mp4" type="video/mp4" />
            </video>
          </Link>
        </div>
      </div>
    </section>
  );
};
