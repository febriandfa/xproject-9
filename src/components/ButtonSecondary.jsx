import React from "react";

const ButtonSecondary = ({ text, link }) => {
  return (
    <div className="w-fit">
      <a className="text-lg lg:text-2xl text-white py-2 lg:py-3 px-5 lg:px-8 bg-blue-1000 border-2 border-white w-fit rounded hover:bg-blue-800" href={link}>
        {text}
      </a>
    </div>
  );
};

export default ButtonSecondary;
