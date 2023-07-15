import React from "react";
import Navbar from "../../components/Navbar";
import HeroTitle from "../../components/HeroTitle";
import SubTitleExtra from "../../components/SubTitleExtra";
import OverviewTG from "../../components/techgenius/OverviewTG";
import Speaker from "../../components/techgenius/Speaker";
import { speakerPhoto1 } from "../../assets";
import TimelineLeft from "../../components/TimelineLeft";
import TimelineRight from "../../components/TimelineRight";
import SubTitle from "../../components/SubTitle";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import ContactPerson from "../../components/ContactPerson";
import Registration from "../../components/Registration";

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
        <SubTitleExtra title="Pemateri" sub="Webinar Business Model Canvas" />
        <Speaker img={speakerPhoto1} speaker="Febrian Daffa Eka Putra" position="Front-End Developer at Shopee" />
        <SubTitleExtra title="Timeline" sub="Bootcamp UI/UX Design" />
        <div className="pb-36">
          <TimelineLeft nama="Registrasi dan Pengumpulan" tanggal="25 Oktober - 27 Oktober 2023" />
          <TimelineRight nama="Registrasi dan Pengumpulan" tanggal="29 Oktober - 31 Oktober 2023" />
          <TimelineLeft nama="Registrasi dan Pengumpulan" tanggal="25 Oktober - 27 Oktober 2023" />
        </div>
        <SubTitle title="Contact Person" />
        <ContactPerson firstlink="wa.me/" firstcp="Rizal Ramadhan" firstno="0858 0489 8461" secondlink="wa.me/" secondcp="Rizal Ramadhan" secondno="0858 0489 8461" />
        <Registration link="google.com" />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default WebinarBmc;
