import React from "react";
import Navbar from "../components/Navbar";
import HeroTitle from "../components/HeroTitle";
import AboutHome from "../components/AboutHome";
import EventCardRight from "../components/EventCardRight";
import EventCardLeft from "../components/EventCardLeft";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <HeroTitle title="X - Project" />
      <div className="bg-gradient-to-b from-blue-1000 to-blue-400">
        <AboutHome />
        <div className="w-fit mx-auto relative font-inter text-[2rem] lg:text-6xl font-extrabold mb-20">
          <h2 className="relative font-outline-1 text-transparent">OUR EVENT</h2>
          <h2 className="absolute top-[0.15rem] -right-[0.27rem] w-full text-white">OUR EVENT</h2>
        </div>
        <EventCardRight
          title="Tech Genius"
          desc="Informatic Championship (IC) adalah sebuah ajang perlombaan atau kompetisi yang  bertujuan untuk mengasah kemampuan dan keterampilan peserta di bidang teknologi, sehingga dapat menciptakan berbagai inovasi baru di masa yang akan datang, yang dikemas dalam berbagai jenis perlombaan"
        />
        <EventCardLeft
          title="Informatic Championship"
          desc="Informatic Championship (IC) adalah sebuah ajang perlombaan atau kompetisi yang  bertujuan untuk mengasah kemampuan dan keterampilan peserta di bidang teknologi, sehingga dapat menciptakan berbagai inovasi baru di masa yang akan datang, yang dikemas dalam berbagai jenis perlombaan"
        />
        <EventCardRight
          title="Techno Symphony"
          desc="Techno Symphony adalah kegiatan akhir dari X-Project 9.0, kegiatan yang bertujuan untuk meningkatkan pengetahuan tentang rumpun teknik informatika bagi mahasiswa TI Unesa dan menjadi wadah kreatifitas seni Mahasiswa"
        />
      </div>
    </div>
  );
};

export default Home;
