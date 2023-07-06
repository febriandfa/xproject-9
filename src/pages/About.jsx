import React from "react";
import Navbar from "../components/Navbar";
import AboutAbout from "../components/about/AboutAbout";
import Theme from "../components/about/Theme";
import Background from "../components/Background";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-1000">
      <Navbar />
      <AboutAbout />
      <Theme />
      <Background />
      <Footer />
    </div>
  );
};

export default About;
