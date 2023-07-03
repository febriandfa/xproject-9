import React from "react";
import Button from "./Button";

const EventCardLeft = ({ title, desc, link }) => {
  return (
    <div className="w-full h-screen px-4 lg:px-[8.2rem] text-white flex flex-col gap-3">
      <div className="w-fit relative font-inter text-2xl lg:text-4xl font-extrabold">
        <h2 className="relative font-outline-1 text-transparent">{title}</h2>
        <h2 className="absolute top-[0.15rem] -right-[0.27rem] w-full">{title}</h2>
      </div>
      <p className="text-lg lg:text-2xl mb-3">{desc}</p>
      <Button link={link} />
    </div>
  );
};

export default EventCardLeft;
