import React from "react";
import logo from "../logo.svg";

const Header = () => {
  return (
    <div className="bg-slate-500 p-5 w-screen">
      <img
        src={logo}
        className="w-screen max-h-[80px] justify-center animate-spin-slow"
        alt="logo"
      />
      <h1 className="text-center text-xl pt-5 text-white font-mono">
        CAULTCALOR App
      </h1>
      <p className="text-white px-[20%] py-[5%] font-mono text-xs">
        build a calculating app that allows the number to be entered by a click
        of buttons and perform operations like addition, subtraction,
        multiplication, etc to produce results.
      </p>
    </div>
  );
};

export default Header;
