import React from "react";
import Navbar from "../components/Navbar";
import AboutAbout from "../components/about/AboutAbout";
import Theme from "../components/about/Theme";
import Background from "../components/Background";
import Footer from "../components/Footer";
import HeroTitle from "../components/HeroTitle";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="X-Project 9.0" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36">
        <AboutAbout />
        <Theme />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default About;
