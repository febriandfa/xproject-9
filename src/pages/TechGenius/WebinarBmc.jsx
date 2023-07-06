import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import SubTitleExtra from "../../components/SubTitleExtra";
import OverviewTG from "../../components/techgenius/OverviewTG";

const WebinarBmc = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="Webinar BMC" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36">
        <SubTitleExtra title="Overview" sub="Webinar Business Model Canvas" />
        <OverviewTG
          desc="Lorem ipsum dolor sit amet consectetur. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Lorem ipsum dolor sit amet consectetur. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Magna ultrices tortor diam eget nibh tempus cursus volutpat."
          tempat="Online"
          jam="19.00-20.00"
          biaya="Free Pendaftaran"
          waktu="4,5,6, dan 7 Agustus 2023"
        />
        <SubTitleExtra title="Timeline" sub="Webinar Business Model Canvas" />
      </div>
    </div>
  );
};

export default WebinarBmc;
