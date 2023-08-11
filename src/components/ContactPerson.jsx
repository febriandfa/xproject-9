import React from "react";
import { whatsapp } from "../assets";

const ContactPerson = ({ firstlink, firstcp, firstno, secondlink, secondcp, secondno }) => {
  return (
    <div className="w-full lg:w-fit h-full px-6 lg:px-[8.2rem] pb-36 lg:pb-56 relative z-20 mx-auto">
      <div className="border-2 border-white py-12 lg:py-16 px-7 lg:px-20 rounded-lg bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]">
        <a className="flex gap-5 w-full mb-8" href={firstlink}>
          <img src={whatsapp} alt="" />
          <div className="text-white">
            <h3 className="text-xl lg:text-[2rem] font-bold -mb-2 lg:mb-0">{firstcp}</h3>
            <p className="text-lg lg:text-2xl">{firstno}</p>
          </div>
        </a>
        <a className="flex gap-5 w-full" href={secondlink}>
          <img src={whatsapp} alt="" />
          <div className="text-white">
            <h3 className="text-xl lg:text-[2rem] font-bold -mb-2 lg:mb-0">{secondcp}</h3>
            <p className="text-lg lg:text-2xl">{secondno}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactPerson;
