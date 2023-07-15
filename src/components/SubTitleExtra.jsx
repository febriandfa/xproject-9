import React from "react";

const SubTitleExtra = ({ title, sub }) => {
  return (
    <div className="w-4/5 lg:w-fit mx-auto relative font-inter text-[2rem] lg:text-6xl font-extrabold mb-8 lg:mb-14 uppercase text-center z-20">
      <h2 className="relative font-outline-1 text-transparent">{title}</h2>
      <h2 className="absolute top-[0.15rem] -right-[0.27rem] w-full text-white">{title}</h2>
      <h3 className="text-2xl lg:text-4xl text-white capitalize">{sub}</h3>
    </div>
  );
};

export default SubTitleExtra;
