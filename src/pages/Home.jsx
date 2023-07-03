import React from "react";
import Navbar from "../components/Navbar";
import HeroTitle from "../components/HeroTitle";
import AboutHome from "../components/AboutHome";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <HeroTitle title={"X - Project"} />
      <AboutHome />
    </div>
  );
};

export default Home;
