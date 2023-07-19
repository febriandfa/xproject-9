import React from "react";

const ButtonPrimary = ({ text, link }) => {
  return (
    <div className="w-fit relative z-20">
      <a className="text-lg lg:text-2xl text-white py-2 lg:py-3 px-5 lg:px-8 bg-blue-600 border-2 border-blue-300 w-fit rounded hover:bg-blue-700" href={link}>
        {text}
      </a>
    </div>
  );
};

export default ButtonPrimary;
