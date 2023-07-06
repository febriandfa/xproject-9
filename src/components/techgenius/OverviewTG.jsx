import React from "react";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";

const OverviewTG = ({ desc, tempat, jam, biaya, waktu }) => {
  return (
    <div className="w-full h-full px-6 lg:px-[8.2rem] text-white text-lg lg:text-2xl font-inter pb-36">
      <div className="border-2 w-full border-white bg-gradient-to-r from-blue-600/30 via-white/3 to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] mb-8">
        <p className="text-center py-6 px-8">{desc}</p>
      </div>
      <ul className="flex flex-col lg:flex-row gap-8 justify-around font-extrabold text-center mb-16">
        <li>
          Pelaksanaan
          <p className="font-normal w-48">
            {tempat}
            <br />
            {jam}
          </p>
        </li>
        <li>
          Biaya
          <p className="font-normal">{biaya}</p>
        </li>
        <li>
          Waktu
          <p className="font-normal w-48">{waktu}</p>
        </li>
      </ul>
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:justify-center">
        <ButtonPrimary text="Daftar" link="" />
        <ButtonSecondary text="Guidebook" link="" />
      </div>
    </div>
  );
};

export default OverviewTG;
