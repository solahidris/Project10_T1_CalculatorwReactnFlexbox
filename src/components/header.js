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
      <a href="https://toyyibpay.com/Kasutkicks-Offline" className="text-center flex justify-center font-bold italic text-xs pt-5 text-white font-mono">
        " CAULTCALOR "
      </a>
      <a href="https://toyyibpay.com/Kasutkicks-Offline" className="text-center flex justify-center font-bold italic text-[5px] pt-2 text-white font-mono">
        by solah
      </a>
      {/* <p className="text-white px-[20%] py-[5%] font-mono text-xs">
        build a calculating app that allows the number to be entered by a click
        of buttons and perform operations like addition, subtraction,
        multiplication, etc to produce results.
      </p> */}
    </div>
  );
};

export default Header;
