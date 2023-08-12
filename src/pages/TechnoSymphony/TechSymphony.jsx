import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import Footer from "../../components/Footer";
import Background from "../../components/Background";
import OverviewTS from "../../components/techsymphony/OverviewTS";
import SubTitleExtra from "../../components/SubTitleExtra";
import Guest from "../../components/techsymphony/Guest";
import TimelineLeft from "../../components/TimelineLeft";
import TimelineRight from "../../components/TimelineRight";
import { guestPhoto1 } from "../../assets";
import SubTitle from "../../components/SubTitle";
import Venue from "../../components/techsymphony/Venue";

const TechSymphony = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="Techno Symphony" link="#about-ts" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36" id="about-ts">
        <SubTitleExtra title="Overview" sub="Techno Symphony" />
        <OverviewTS desc="Lorem ipsum dolor sit amet consectetur. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Lorem ipsum dolor sit amet consectetur. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Magna ultrices tortor diam eget nibh tempus cursus volutpat." />
        <SubTitleExtra title="Guest Star" sub="After Party" />
        <Guest img={guestPhoto1} guest="Denny Caknan" />
        <SubTitleExtra title="Timeline" sub="Techno Symphony" />
        <div className="pb-36">
          <TimelineLeft nama="Informatic Expo, KWU" tanggal="16 Desember 2023" />
          <TimelineRight nama="Informatic Show Off, After Party" tanggal="17 Desember 2023" />
        </div>
        <SubTitle title="Venue" />
        <Venue venue1="Gedung A10 Teknik Informatika" venue2="Lapangan Gedung Fakultas Teknik" />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default TechSymphony;
