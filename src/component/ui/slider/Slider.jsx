import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.scss";
import { Link } from "react-router-dom";

export const ImgSlider = () => {
  let settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="slider">
      {/* <div className="slider__contents"> */}
      <div className="slider__box">
        <Link>
          <img src="/img/slider-badag.jpg" alt="" />
        </Link>
      </div>
      <div className="slider__box">
        <Link>
          <img src="/img/slider-badging.jpg" alt="" />
        </Link>
      </div>
      <div className="slider__box">
        <Link>
          <img src="/img/slider-scale.jpg" alt="" />
        </Link>
      </div>
      <div className="slider__box">
        <Link>
          <img src="/img/slider-scales.jpg" alt="" />
        </Link>
      </div>
      {/* </div> */}
    </Slider>
  );
};
