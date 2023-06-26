import React, { useState } from "react";
import { arrowDown, logoXpro } from "../assets";

const Navbar = () => {
  const [openOne, setOpenOne] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

  const handleOpenMenuOne = () => {
    setOpenOne(!openOne);
  };

  const handleOpenMenuTwo = () => {
    setOpenTwo(!openTwo);
  };

  return (
    <div className="w-full py-[1.4rem] px-[8.2rem] bg-gradient-to-b from-blue-500/80 from-0% via-white/10 via-[99%] to-gray-700/80 to-100% backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-start gap-[8.25rem]">
        <img src={logoXpro} alt="Logo X-Project" />
        <ul className="flex gap-[3rem] text-white font-inter font-medium">
          <li className="hover:text-blue-900">
            <a href="">Home</a>
          </li>
          <li className="relative hover:text-blue-900">
            <button className="flex items-center gap-[0.6rem]" onClick={handleOpenMenuOne}>
              Tech Genius
              <img className="w-5 h-5" src={arrowDown} alt="Arrow Down" />
            </button>
            {openOne ? (
              <ul className="absolute bg-gray-100/40 border border-blue-300 text-blue-900 p-[0.9rem] top-12 rounded backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]">
                <li className="py-[0.9rem] px-[0.6rem] w-[15rem] hover:bg-gray-50/5 hover:backdrop-blur rounded">
                  <button>Bootcamp UI/UX Design</button>
                </li>
                <li className="py-[0.9rem] px-[0.6rem] w-[15rem] hover:bg-gray-50/5 hover:backdrop-blur rounded">
                  <button>Webinar BMC</button>
                </li>
              </ul>
            ) : null}
          </li>
          <li className="relative hover:text-blue-900">
            <button className="flex items-center gap-[0.6rem]" onClick={handleOpenMenuTwo}>
              Championship
              <img className="w-5 h-5" src={arrowDown} alt="Arrow Down" />
            </button>
            {openTwo ? (
              <ul className="absolute bg-gray-100/40 border border-blue-300 text-blue-900 p-[0.9rem] top-12 rounded backdrop-blur shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]">
                <li className="py-[0.9rem] px-[0.6rem] w-[15rem] hover:bg-gray-50/5 hover:backdrop-blur rounded">
                  <button>UI/UX Design</button>
                </li>
                <li className="py-[0.9rem] px-[0.6rem] w-[15rem] hover:bg-gray-50/5 hover:backdrop-blur rounded">
                  <button>Essay</button>
                </li>
                <li className="py-[0.9rem] px-[0.6rem] w-[15rem] hover:bg-gray-50/5 hover:backdrop-blur rounded">
                  <button>Photography</button>
                </li>
                <li className="py-[0.9rem] px-[0.6rem] w-[15rem] hover:bg-gray-50/5 hover:backdrop-blur rounded">
                  <button>Business Model Canvas</button>
                </li>
              </ul>
            ) : null}
          </li>
          <li className="hover:text-blue-900">
            <a href="">Techno Symphony</a>
          </li>
          <li className="hover:text-blue-900">
            <a href="">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
