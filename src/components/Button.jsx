import React from "react";

const Button = ({ link }) => {
  return (
    <div className="w-fit">
      <a className="text-lg lg:text-2xl py-2 lg:py-3 px-5 lg:px-8 bg-blue-600 border-2 border-blue-300 w-fit rounded hover:bg-blue-700" href={link}>
        See More
      </a>
    </div>
  );
};

export default Button;
