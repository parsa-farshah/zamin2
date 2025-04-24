import Image from "next/image";
import React from "react";
import dotWork from "../../public/images/dotsWork.svg";
import imageWork from "../../public/images/ImageWork.svg";
import dotBlu from "../../public/images/dotBlu.svg";
function Work() {
  return (
    <div className="flex flex-col justify-center pt-[100px]">
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 pt-8 sm:pt-4">
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
        <div className="flex gap-3">
          <div className="w-full flex justify-center">
            <button className="w-[131px] flex justify-around items-center h-9 bg-[#EBEBEB] font-semibold rounded-lg text-sm text-center font-inter">
              <Image src={dotWork} alt="" />
              Work
              <Image src={dotWork} alt="" />
            </button>
          </div>
        </div>
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
      </div>
      <div className="pt-6 flex flex-col items-center justify-center">
        <h1 className="font-inter font-medium text-2xl text-black">
          Our Latest Masterpieces
        </h1>
        <p className="font-inter font-light text-[14px] text-[#727272] text-center pt-3">
          Discover the magic we’ve crafted lately- wher <br /> creativiti meets
          impact see what we;wve been <br /> up to and get inspired
        </p>
        <div className="pt-11">
          <Image className="object-cover" src={imageWork} alt="image work" />
          <Image
            className="object-cover pt-11"
            src={imageWork}
            alt="image work"
          />
        </div>
      </div>
      <div className="pt-14">
        <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 sm:pt-4">
          <div className="bg-[#EAEAEA] w-full h-0.5"></div>
          <div className="flex gap-3">
            <div className="w-full flex justify-center">
              <button className="w-[138px] flex justify-around text-sm items-center h-9 text-white bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 hover:bg-gradient-to-br shadow-md shadow-gray-100/20 dark:shadow-md dark:shadow-gray-300/80 font-medium rounded-lg text-center font-inter ">
                <Image src={dotBlu} alt="dot blue" />
                See more Works
              </button>
            </div>
          </div>
          <div className="bg-[#EAEAEA] w-full h-0.5"></div>
        </div>
      </div>
    </div>
  );
}

export default Work;
