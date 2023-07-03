import React from "react";

const EventCardRight = ({ title, desc }) => {
  return (
    <div className="w-full h-screen px-4 lg:px-[8.2rem] text-white flex flex-col gap-3">
      <div className="w-fit relative font-inter text-2xl lg:text-4xl font-extrabold">
        <h2 className="relative font-outline-1 text-transparent">{title}</h2>
        <h2 className="absolute top-[0.15rem] -right-[0.27rem] w-full">{title}</h2>
      </div>
      <p className="text-lg lg:text-2xl">{desc}</p>
      <a className="text-lg lg:text-2xl py-2 lg:py-3 px-5 lg:px-8 bg-blue-600 border-2 border-blue-300 w-fit rounded hover:bg-blue-700" href="">
        See More
      </a>
    </div>
  );
};

export default EventCardRight;
