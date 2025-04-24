"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import logoZamin from "../../public/images/logoZamin.svg";
import AOS from "aos";
declare module "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      className="flex justify-center"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="400"
    >
      <div
        className="bg-white w-[361px] md:w-[537px] h-[56px] fixed top-[16px] rounded-[19px] shadow flex justify-between px-[12px] py-5 items-center  z-20
    "
      >
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
          <button className="w-[113px] flex justify-center  items-center h-9 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-100/20 dark:shadow-md dark:shadow-blue-300/80 font-medium rounded-lg text-sm  text-center font-inter ">
            Have an idea?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
