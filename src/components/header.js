import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <div className="bg-black pt-5 pb-20 w-screen">
      <img
        src={logo}
        className="w-screen max-h-[70px] justify-center animate-spin-slow"
        alt="logo"
      />
      <h1 className="text-center font-bold italic text-xs pt-5 text-white font-mono">
        " CAULTCALOR "
      </h1>
      {/* <p className="text-white px-[20%] py-[5%] font-mono text-xs">
        build a calculating app that allows the number to be entered by a click
        of buttons and perform operations like addition, subtraction,
        multiplication, etc to produce results.
      </p> */}
    </div>
  );
};

export default Header;
