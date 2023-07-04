import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import SubTitleExtra from "../../components/SubTitleExtra";

const EssayCompetition = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title={"Essay Competition"} />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36">
        <SubTitleExtra title="Overview" sub="Essay Competition" />
      </div>
    </div>
  );
};

export default EssayCompetition;
