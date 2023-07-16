import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import AboutAbout from "../../components/about/AboutAbout";

const TechSymphony = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="Techno Symphony" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36">
        <AboutAbout />
      </div>
    </div>
  );
};

export default TechSymphony;
