import React from "react";

const OverviewTS = ({ desc }) => {
  return (
    <div className="w-full h-full px-6 lg:px-[8.2rem] text-white text-lg lg:text-2xl font-inter pb-36 relative z-20">
      <div className="border-2 w-full border-white bg-gradient-to-r from-blue-600/30 via-white/[0.03] to-blue-400/30 backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] mb-8">
        <p className="text-center py-6 px-8">{desc}</p>
      </div>
    </div>
  );
};

export default OverviewTS;
