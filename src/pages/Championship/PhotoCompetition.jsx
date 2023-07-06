import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import SubTitleExtra from "../../components/SubTitleExtra";
import OverviewIC from "../../components/championship/OverviewIC";

const PhotoCompetition = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="Photography Competition" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36">
        <SubTitleExtra title="Overview" sub="Photography Competition" />
        <OverviewIC
          desc="Lorem ipsum dolor sit amet consectetur. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Lorem ipsum dolor sit amet consectetur. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Magna ultrices tortor diam eget nibh tempus cursus volutpat."
          kategori="Mahasiswa"
          biaya="Free Pendaftaran"
          tingkat="Nasional"
        />
        <SubTitleExtra title="Timeline" sub="Photography Competition" />
      </div>
    </div>
  );
};

export default PhotoCompetition;
