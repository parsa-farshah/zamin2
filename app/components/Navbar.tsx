import Image from "next/image";
import React from "react";
import logoZamin from "../../public/images/logoZamin.svg";
import ButtonMain from "./ButtonMain";

function Navbar() {
  return (
    <div className="bg-white w-[361px] md:w-[537px] h-[56px] fixed top-[38px] rounded-[19px] shadow flex justify-between px-[12px] py-8 items-center  z-20">
      <div className="flex items-center gap-3 ">
        <Image src={logoZamin} alt="" />
        <h1 className="text-black font-bold font-inter">Zamin</h1>
      </div>
      <div className="text-gray-500 hidden md:flex">
        <ul className="flex justify-between gap-[16px] text-sm font-inter cursor-pointer">
          <li className="hover:text-black">Work</li>
          <li className="hover:text-black">Services</li>
          <li className="hover:text-black">Pricing</li>
          <li className="hover:text-black">FAQs</li>
        </ul>
      </div>
      <div>
        <ButtonMain text="Have an idea?" />
      </div>
    </div>
  );
}

export default Navbar;
