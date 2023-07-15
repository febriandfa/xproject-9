import React from "react";

const TimelineRight = ({ nama, tanggal }) => {
  return (
    <div class="flex items-center justify-center w-full h-full px-6 lg:px-[8.2rem]">
      <div class="grid w-full max-w-6xl grid-cols-9 mx-auto">
        <div class="w-full h-full col-span-4"></div>
        <div class="relative flex items-center justify-center w-full h-full col-span-1">
          <div class="w-1 h-full bg-indigo-300"></div>
        </div>
        <div class="w-full h-full col-span-4">
          <div class="w-full h-full px-2 py-6 bg-white rounded bg-opacity-20 backdrop-blur-sm ring-inset drop-shadow-lg ring-[0.8px] ring-[#F8F9FA] md:pl-4 text-center">
            <h1 class="lg:text-2xl  font-bold text-[#F8F9FA] text-lg leading-tight">Registrasi dan Pengumpulan</h1>
            <p class="lg:text-xl text-sm font-base text-white mt-2">25 September - 30 Oktober 2022</p>
          </div>
        </div>

        <div class="relative flex items-center justify-center w-full h-full col-span-1">
          <div class="w-1 h-full bg-white"></div>
        </div>
        <div class="w-full h-full col-span-4"></div>
      </div>
    </div>
  );
};

export default TimelineRight;