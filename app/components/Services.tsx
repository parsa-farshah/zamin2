import Image from "next/image";
import React from "react";
import dotWork from "../../public/images/dotsWork.svg";
import servisImage from "../../public/images/servicesImage.svg";

function Services() {
  return (
    <div className="flex flex-col justify-center pt-[100px]">
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 pt-8 sm:pt-4">
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
        <div className="flex gap-3">
          <div className="w-full flex justify-center">
            <button className="w-[131px] flex justify-center rounded-[12px] items-center h-9 bg-[#EBEBEB] font-semibold  text-sm text-center font-inter ">
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
              Work
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
            </button>
          </div>
        </div>
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
      </div>
      <div className="pt-6 flex flex-col items-center justify-center">
        <h1 className="font-inter font-medium text-2xl text-black text-center">
          Tailored solutions for <br /> startups & tech
        </h1>
        <p className="font-inter font-light text-[14px] text-[#727272] text-center pt-3">
          Discover the magic we’ve crafted lately- wher <br /> creativiti meets
          impact see what we;wve been <br /> up to and get inspired
        </p>
      </div>
      {/* all services card */}
      <div className="w-full h-auto flex flex-col pt-11">
        {/* line 1 */}
        <div className="flex justify-between w-full">
          <div className="flex flex-col items-start bg-[#FFFFFF] rounded-3xl w-[100%] sm:w-[45%]">
            <div className="pl-6 py-6">
              <Image src={servisImage} alt="servis image" />
              <h1 className="font-inter font-semibold text-[16px] pt-[13px]">
                Market Research
              </h1>
              <p className="text-[#727272] text-[14px] font-normal font-inter pt-[13px] leading-6">
                On a rush to meet your project's strict <br /> deadline?! Don't
                you worry at all. We're <br /> super fast on design, just start
                now
              </p>
            </div>
          </div>
          <div className="flex-col items-start bg-[#FFFFFF] rounded-3xl w-[45%] hidden sm:flex">
            <div className="pl-6 pt-6">
              <Image src={servisImage} alt="servis image" />
              <h1 className="font-inter font-semibold text-[16px] pt-[13px]">
                UX Research
              </h1>
              <p className="text-[#727272] text-[14px] font-normal font-inter pt-[13px]">
                On a rush to meet your project's strict deadline?! Don't you
                worry at all. We're super fast on design, just start now
              </p>
            </div>
          </div>
        </div>
        {/* line 2 */}
        <div className="flex justify-between w-full pt-[34px]">
          <div className="flex flex-col items-start bg-[#FFFFFF] rounded-3xl w-[100%] sm:w-[45%]">
            <div className="pl-6 py-6">
              <Image src={servisImage} alt="servis image" />
              <h1 className="font-inter font-semibold text-[16px] pt-[13px]">
                Ui Design
              </h1>
              <p className="text-[#727272] text-[14px] font-normal font-inter pt-[13px] leading-6">
                On a rush to meet your project's strict <br /> deadline?! Don't
                you worry at all. We're <br /> super fast on design, just start
                now
              </p>
            </div>
          </div>
          <div className=" flex-col items-start bg-[#FFFFFF] rounded-3xl w-[45%] hidden sm:flex">
            <div className="pl-6 pt-6">
              <Image src={servisImage} alt="servis image" />
              <h1 className="font-inter font-semibold text-[16px] pt-[13px]">
                UX Audit
              </h1>
              <p className="text-[#727272] text-[14px] font-normal font-inter pt-[13px]">
                On a rush to meet your project's strict deadline?! Don't you
                worry at all. We're super fast on design, just start now
              </p>
            </div>
          </div>
        </div>
        {/* line 3 */}
        <div className="flex justify-between w-full pt-[34px]">
          <div className="flex flex-col items-start bg-[#FFFFFF] rounded-3xl w-[100%] sm:w-[45%]">
            <div className="pl-6 py-6">
              <Image src={servisImage} alt="servis image" />
              <h1 className="font-inter font-semibold text-[16px] pt-[13px]">
                Front-end development
              </h1>
              <p className="text-[#727272] text-[14px] font-normal font-inter pt-[13px] leading-6">
                On a rush to meet your project's strict <br /> deadline?! Don't
                you worry at all. We're <br /> super fast on design, just start
                now
              </p>
            </div>
          </div>
          <div className="flex-col items-start bg-[#FFFFFF] rounded-3xl w-[45%] hidden sm:flex">
            <div className="pl-6 pt-6">
              <Image src={servisImage} alt="servis image" />
              <h1 className="font-inter font-semibold text-[16px] pt-[13px]">
                Back-end development
              </h1>
              <p className="text-[#727272] text-[14px] font-normal font-inter pt-[13px]">
                On a rush to meet your project's strict deadline?! Don't you
                worry at all. We're super fast on design, just start now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
