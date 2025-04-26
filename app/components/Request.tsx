import Image from "next/image";
import React from "react";
import dotWork from "../../public/images/dotsWork.svg";
function Request() {
  return (
    <div className="flex flex-col justify-center pt-24 max-w-[1400px]">
      <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 pt-8 sm:pt-4">
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
        <div className="flex gap-3 w-auto">
          <div className="w-full flex justify-center">
            <button className="w-[187px] flex justify-center rounded-[12px] items-center h-9 bg-[#EBEBEB] font-semibold  text-sm text-center font-inter ">
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
              Request a Quote
              <Image className="w-[17px] mx-2" src={dotWork} alt="" />
            </button>
          </div>
        </div>
        <div className="bg-[#EAEAEA] w-full h-0.5"></div>
      </div>
      {/* text */}
      <div className="pt-6 flex flex-col items-center justify-center ">
        <pre className="font-inter font-medium text-2xl text-black text-center">
          Request a Quote{" "}
          <span className="text-[16px]">
            (Trying Costs <br /> Nothing 😉)
          </span>
        </pre>
        <p className="font-inter font-light text-[14px] text-[#727272] text-center pt-3">
          Got an idea? Lets test the waters — no risks, no regrets. 🎯 <br />{" "}
          Send us a few details and well hit you back with a cool offer. <br />{" "}
          If it clicks, were ready to roll! 🚀
        </p>
      </div>
      {/* req card */}
      <div className="flex justify-center w-full pt-[42px]">
        <div className="w-[88%] bg-[#FFFFFF] rounded-[20px] h-auto flex flex-col p-6">
          {/* 1*/}
          <h1 className="font-inter font-semibold text-[14px]">
            Contact information
          </h1>
          <div className="flex flex-col sm:flex-row justify-between pt-4">
            <input
              className="bg-[#F6F6F6] rounded-[12px] w-full sm:w-[246px] p-3 text-[#999999]"
              placeholder="Full name"
              type="text"
            />
            <input
              className="bg-[#F6F6F6] rounded-[12px] w-full sm:w-[246px] mt-2 sm:mt-0 p-3 text-[#999999]"
              placeholder="Business email"
              type="text"
            />
          </div>
          {/* 2 */}
          <div className="pt-3">
            <textarea
              className="w-full bg-[#F6F6F6] text-[#999999] rounded-[12px] p-3"
              name=""
              placeholder="Tell us about your project"
              id="#"
              cols={30}
              rows={4}
            ></textarea>
          </div>
          {/* 3 */}
          <div className="pt-6">
            <h1 className="font-inter font-semibold text-[14px]">
              what do you need help with?
            </h1>
            <div className="pt-8">
              <form className="flex flex-wrap gap-6" action="#">
                <div className="flex items-center gap-[15px]">
                  <input
                    className="w-[18px] h-[18px]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <label htmlFor="">Research</label>
                </div>
                <div className="flex items-center gap-[15px]">
                  <input
                    className="w-[18px] h-[18px]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <label htmlFor="">Design</label>
                </div>
                <div className="flex items-center gap-[15px]">
                  <input
                    className="w-[18px] h-[18px]"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <label htmlFor="">Development</label>
                </div>
              </form>
            </div>
          </div>
          {/* 4 */}
          <h1 className="font-inter font-semibold text-[14px] pt-6">Budget</h1>
          <div className="flex flex-col sm:flex-row justify-between pt-4">
            <input
              className="bg-[#F6F6F6] rounded-[12px] w-full sm:w-[246px] p-3 text-[#999999]"
              placeholder="Start"
              type="text"
            />
            <input
              className="bg-[#F6F6F6] rounded-[12px] w-full sm:w-[246px] mt-2 sm:mt-0 p-3 text-[#999999]"
              placeholder="End"
              type="text"
            />
          </div>
          {/* button */}
          <div className="pt-6">
            <button className="w-full flex justify-center  items-center h-9 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-100/20 dark:shadow-md dark:shadow-blue-300/80 font-medium rounded-lg text-sm  text-center font-inter ">
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;
