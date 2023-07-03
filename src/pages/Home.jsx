import React from "react";
import Navbar from "../components/Navbar";
import HeroTitle from "../components/HeroTitle";
import AboutHome from "../components/AboutHome";
import EventCardRight from "../components/EventCardRight";
import EventCardLeft from "../components/EventCardLeft";
import { medpart1, randomGraphic, sponsor1 } from "../assets";
import HomeTitle from "../components/HomeTitle";
import SponsorContainer from "../components/SponsorContainer";
import Background from "../components/Background";
import Footer from "../components/Footer";

const Home = () => {
  const imagesMedpart = [
    { index: 1, src: medpart1, alt: "Logo1", class: "w-32" },
    { index: 2, src: medpart1, alt: "Logo2", class: "w-32" },
    { index: 3, src: medpart1, alt: "Maskot", class: "w-32" },
    { index: 4, src: medpart1, alt: "Maskot", class: "w-32" },
  ];

  const imagesSponsor = [
    { index: 1, src: sponsor1, alt: "Logo1", class: "w-32" },
    { index: 2, src: sponsor1, alt: "Logo2", class: "w-32" },
    { index: 3, src: sponsor1, alt: "Maskot", class: "w-32" },
    { index: 4, src: sponsor1, alt: "Maskot", class: "w-32" },
  ];

  return (
    <div className="font-poppins">
      <Navbar />
      <HeroTitle title="X - Project" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400">
        <AboutHome />
        <HomeTitle title="Our Event" />
        <EventCardRight
          title="Tech Genius"
          desc="Informatic Championship (IC) adalah sebuah ajang perlombaan atau kompetisi yang  bertujuan untuk mengasah kemampuan dan keterampilan peserta di bidang teknologi, sehingga dapat menciptakan berbagai inovasi baru di masa yang akan datang, yang dikemas dalam berbagai jenis perlombaan"
          img={randomGraphic}
          link="https://github.com/"
        />
        <EventCardLeft
          title="Informatic Championship"
          desc="Informatic Championship (IC) adalah sebuah ajang perlombaan atau kompetisi yang  bertujuan untuk mengasah kemampuan dan keterampilan peserta di bidang teknologi, sehingga dapat menciptakan berbagai inovasi baru di masa yang akan datang, yang dikemas dalam berbagai jenis perlombaan"
          img={randomGraphic}
          link="https://www.youtube.com/"
        />
        <EventCardRight
          title="Techno Symphony"
          desc="Techno Symphony adalah kegiatan akhir dari X-Project 9.0, kegiatan yang bertujuan untuk meningkatkan pengetahuan tentang rumpun teknik informatika bagi mahasiswa TI Unesa dan menjadi wadah kreatifitas seni Mahasiswa"
          img={randomGraphic}
          link="https://stackoverflow.com/questions/70504047/how-to-have-a-bordered-text-in-tailwind"
        />
        <HomeTitle title="Sponsored By" />
        <SponsorContainer images={imagesSponsor} />
        <HomeTitle title="Media Partner" />
        <SponsorContainer images={imagesMedpart} />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
