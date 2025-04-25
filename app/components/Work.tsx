import Image from "next/image";
import React from "react";
import dotWork from "../../public/images/dotsWork.svg";
import imageWork from "../../public/images/imageWork2.svg";
import dotBlu from "../../public/images/dotBlu.svg";
import younes from "../../public/images/younesImage.png";
function Work() {
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
        <h1 className="font-inter font-medium text-2xl text-black">
          Our Latest Masterpieces
        </h1>
        <p className="font-inter font-light text-[14px] text-[#727272] text-center pt-3">
          Discover the magic we’ve crafted lately- wher <br /> creativiti meets
          impact see what we;wve been <br /> up to and get inspired
        </p>
        {/* image section */}
        <div className="pt-11">
          <div className="pt-11">
            <Image className="object-cover" src={imageWork} alt="image work" />
            {/* under image text */}
            <div className="flex justify-between sm:justify-around items-center w-full h-[57px]">
              <div>
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4">
                  PROJECT NAME
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4">
                  Bluegen v1.2
                </p>
              </div>
              <div className="hidden sm:block">
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4">
                  Budget
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4">
                  800$ - 1200$
                </p>
              </div>
              <div className="hidden sm:block">
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4">
                  Technology
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4">
                  Figma - next js
                </p>
              </div>
              <div className="pt-5 flex flex-col justify-end items-end">
                <div className="pr-[50px]">
                  <h3 className="font-inter font-bold text-[10px]  text-[#C3C3C3]">
                    Members
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1">
                  <div className="z-30 bg-amber-800 relative right-[-45px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      alt="imageYounes"
                      src={younes}
                      layout="responsive"
                    />
                  </div>
                  <div className="z-20 relative right-[-30px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-10 relative right-[-15px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-0 relative left-[0px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* end under image */}
          </div>
          {/* image 2 */}
          <div className="pt-11">
            <Image className="object-cover" src={imageWork} alt="image work" />
            {/* under image text */}
            <div className="flex justify-between sm:justify-around items-center w-full h-[57px]">
              <div>
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4">
                  PROJECT NAME
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4">
                  Bluegen v1.2
                </p>
              </div>
              <div className="hidden sm:block">
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4">
                  Budget
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4">
                  800$ - 1200$
                </p>
              </div>
              <div className="hidden sm:block">
                <h3 className="font-inter font-bold text-[10px] text-[#C3C3C3] pt-4">
                  Technology
                </h3>
                <p className="font-inter font-normal text-[14px] text-[#464646] pt-4">
                  Figma - next js
                </p>
              </div>
              <div className="pt-5 flex flex-col justify-end items-end">
                <div className="pr-[50px]">
                  <h3 className="font-inter font-bold text-[10px]  text-[#C3C3C3]">
                    Members
                  </h3>
                </div>
                {/* 4image  */}
                <div className="flex justify-end items-end pt-1 sm:pt-1">
                  <div className="z-30 bg-amber-800 relative right-[-45px] w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      alt="imageYounes"
                      src={younes}
                      layout="responsive"
                    />
                  </div>
                  <div className="z-20 relative right-[-30px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-10 relative right-[-15px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                  <div className="z-0 relative left-[0px] bg-amber-800 w-[36px] h-[36px] rounded-[24px] border-2 border-[#F5F5F5]">
                    <Image
                      className="rounded-2xl"
                      src={younes}
                      alt="imageYounes"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* end under image */}
          </div>
        </div>
      </div>
      <div className="pt-14">
        <div className="w-full max-w-[1400px] flex items-center justify-between gap-2 sm:pt-4">
          <div className="bg-[#EAEAEA] w-full h-0.5"></div>
          <div className="flex gap-3">
            <div className="w-full flex justify-center">
              <button className="w-[138px] flex justify-start text-sm items-center h-9 text-white bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 hover:bg-gradient-to-br shadow-md shadow-gray-100/20 dark:shadow-md dark:shadow-gray-300/80 font-medium rounded-lg text-center font-inter">
                <Image className="ml-3" src={dotBlu} alt="dot blue" />

                <span className="ml-1.5">See more Works</span>
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
