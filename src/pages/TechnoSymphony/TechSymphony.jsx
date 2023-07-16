import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import AboutAbout from "../../components/about/AboutAbout";
import Footer from "../../components/Footer";
import Background from "../../components/Background";

const TechSymphony = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="Techno Symphony" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36">
        <AboutAbout />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default TechSymphony;
