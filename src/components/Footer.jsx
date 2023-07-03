import React from "react";
import { instagram, linkedin, logoHimti, logoUnesa, logoXpro9, spotify, youtube } from "../assets";

const Footer = () => {
  return (
    <div className="w-full h-full px-4 lg:px-[8.2rem] bg-blue-1000">
      <div className="font-inter text-white flex flex-col lg:flex-row justify-between items-center gap-20 lg:gap-28 py-32 border-b-2 border-white">
        <div className="w-52 flex flex-col gap-8 lg:gap-14 mx-auto">
          <img className="w-44 lg:w-52 mx-auto" src={logoXpro9} alt="" />
          <div className="flex gap-6 justify-center w-full">
            <img className="w-6" src={instagram} alt="" />
            <img className="w-6" src={linkedin} alt="" />
            <img className="w-6" src={youtube} alt="" />
            <img className="w-6" src={spotify} alt="" />
          </div>
        </div>
        <ul className="hidden lg:flex justify-between gap-14 text-base">
          <li className="w-1/4 flex flex-col gap-8">
            <a className="font-bold text-xl" href="">
              <br />
              Tech Genius
            </a>
            <a href="">Bootcamp UI/UX</a>
            <a href="">Webinar BMC</a>
          </li>
          <li className="w-1/4 flex flex-col gap-8">
            <a className="font-bold text-xl" href="">
              Informatics Championship
            </a>
            <a href="">UI/UX Design</a>
            <a href="">Essay</a>
            <a href="">Photography</a>
            <a href="">BMC</a>
          </li>
          <li className="w-1/4 flex flex-col gap-8">
            <a className="font-bold text-xl" href="">
              Techno <br />
              Symphony
            </a>
            <a href="">Expo & KWU</a>
            <a href="">ISO & After Party</a>
          </li>
          <li className="w-1/4 flex flex-col gap-8">
            <p className="font-bold text-xl">
              <br />
              Presented By
            </p>
            <div className="flex gap-2">
              <img className="w-16" src={logoUnesa} alt="" />
              <img className="w-20" src={logoHimti} alt="" />
            </div>
          </li>
        </ul>
        <div className="block lg:hidden">
          <p className="font-bold text-xl text-center mb-8">Presented By</p>
          <div className="flex gap-6">
            <img className="w-16" src={logoUnesa} alt="" />
            <img className="w-20" src={logoHimti} alt="" />
          </div>
        </div>
      </div>
      <p className="text-white text-sm lg:text-base py-6 text-center lg:text-left pl-0 lg:pl-4">Copyright &copy; 2023 | X-PROJECT 9.0 HIMTI UNESA</p>
    </div>
  );
};

export default Footer;
