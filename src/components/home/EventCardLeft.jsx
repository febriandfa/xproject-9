import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import { batuBesar } from "../../assets";

const EventCardLeft = ({ title, desc, img, link }) => {
  return (
    <div className="w-full h-screen px-4 lg:px-[8.2rem] z-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-14">
        <div className="w-full flex flex-col items-center order-1">
          <img className="w-36 lg:w-80" src={img} alt="" />
          <img className="w-48 lg:w-[26rem]" src={batuBesar} alt="" />
        </div>
        <div className="text-white flex flex-col gap-3 w-full order-2">
          <div className="w-fit relative font-inter text-2xl lg:text-4xl font-extrabold">
            <h2 className="relative font-outline-1 text-transparent">{title}</h2>
            <h2 className="absolute top-[0.15rem] -right-[0.27rem] w-full">{title}</h2>
          </div>
          <p className="text-lg lg:text-2xl mb-3">{desc}</p>
          <ButtonPrimary text="See More" link={link} />
        </div>
      </div>
    </div>
  );
};

export default EventCardLeft;
