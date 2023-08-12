import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import SubTitleExtra from "../../components/SubTitleExtra";
import OverviewIC from "../../components/championship/OverviewIC";
import TimelineLeft from "../../components/TimelineLeft";
import TimelineRight from "../../components/TimelineRight";
import SubTitle from "../../components/SubTitle";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import Prizes from "../../components/Prizes";
import ContactPerson from "../../components/ContactPerson";
import Registration from "../../components/Registration";

const BmcCompetition = () => {
  return (
    <div>
      <Navbar />
      <HeroTitle title="BMC Competition" link="#about-bmccomp" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400 pt-36" id="about-bmccomp">
        <SubTitleExtra title="Overview" sub="BMC Competition" />
        <OverviewIC
          desc="Lorem ipsum dolor sit amet consectetur. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Lorem ipsum dolor sit amet consectetur. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Magna ultrices tortor diam eget nibh tempus cursus volutpat. Magna ultrices tortor diam eget nibh tempus cursus volutpat."
          kategori="Mahasiswa"
          biaya="Free Pendaftaran"
          tingkat="Nasional"
        />
        <SubTitleExtra title="Timeline" sub="BMC Competition" />
        <div className="pb-36">
          <TimelineLeft nama="Registrasi dan Pengumpulan" tanggal="25 Oktober - 27 Oktober 2023" />
          <TimelineRight nama="Registrasi dan Pengumpulan" tanggal="29 Oktober - 31 Oktober 2023" />
          <TimelineLeft nama="Registrasi dan Pengumpulan" tanggal="25 Oktober - 27 Oktober 2023" />
        </div>
        <SubTitleExtra title="The Champion Prizes" sub="BMC Competition" />
        <Prizes first="Rp 700.000" second="Rp 500.000" third="Rp 300.000" />
        <SubTitle title="Contact Person" />
        <ContactPerson firstlink="wa.me/" firstcp="Rizal Ramadhan" firstno="0858 0489 8461" secondlink="wa.me/" secondcp="Rizal Ramadhan" secondno="0858 0489 8461" />
        <Registration link="google.com" />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default BmcCompetition;
