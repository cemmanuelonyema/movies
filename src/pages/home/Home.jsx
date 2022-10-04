import React, { Fragment } from "react";
import { NewToDisney } from "../../component/sections/home/new_disney/NewToDisney";
import { Originals } from "../../component/sections/home/originals/Originals";
import { Programs } from "../../component/sections/home/programs/Programs";
import { Recommended } from "../../component/sections/home/recommended/Recommended";
import { Trending } from "../../component/sections/home/trending/Trending";
import { Slider } from "../../component/ui/slider/Slider";
import "./home.scss";

export const Home = () => {
  return (
    <section className="home">
      <div className="container home__container">
        <Slider />
        <Programs />
        <NewToDisney />
        <Recommended />
        <Trending />
        <Originals />
      </div>
    </section>
  );
};
