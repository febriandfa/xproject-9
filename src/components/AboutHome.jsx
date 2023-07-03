import React from "react";
import { logoXpro9 } from "../assets";

const AboutHome = () => {
  return (
    <div className="w-full h-full px-4 lg:px-[8.2rem] pb-20 lg:pb-60">
      <div className="text-white flex flex-col items-center lg:flex-row justify-between gap-9 py-36">
        <img className="w-52 lg:w-96" src={logoXpro9} alt="" />
        <div className="flex flex-col gap-4">
          <div className="relative font-inter text-[2rem] lg:text-6xl font-extrabold text-center">
            <h2 className="relative font-outline-1 text-transparent">ABOUT X-PROJECT</h2>
            <h2 className="absolute top-[0.15rem] -right-[0.27rem] w-full">ABOUT X-PROJECT</h2>
          </div>
          <p className="text-lg lg:text-2xl">
            X-Project merupakan acara tahunan yang diadakan oleh himti UNESA. X-Project 9.0 memiliki serangkaian acara yang meliputi kegiatan pelatihan, pembelajaran pada bidang keahlian tertentu, perlombaan, IT expo, kewirausahaan dan
            pertunjukan yang bertujuan untuk mengenalkan HIMTI UNESA.
          </p>
          <a className="text-lg lg:text-2xl py-2 lg:py-3 px-5 lg:px-8 bg-blue-600 border-2 border-blue-300 w-fit rounded hover:bg-blue-700" href="">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
