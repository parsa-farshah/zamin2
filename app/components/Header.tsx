import Image from "next/image";
import React from "react";
import headerXl from "../../public/images/headerImageXl.svg";

function Header() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-center">
        <Image
          className="bg-auto w-full h-full pt-[120px]"
          src={headerXl}
          alt="haeder Image Xl"
        />
      </div>
      <div className="pt-8">
        <h1 className="text-center text-[#282828] text-[32px] sm:text-[58px] font-medium">
          Idea to MVP, without <br className="md:hidden block" /> the{" "}
          <br className="lg:block hidden" /> overhead
        </h1>
        <p className="pt-4 text-[16px] sm:text-lg font-normal text-[#717171] text-center">
          We’re a design and development team in <br className="md:hidden" />{" "}
          the Middle East <br className="hidden md:block lg:hidden" /> helping
          startups build <br className="md:hidden lg:block" />
          testable products quickly and{" "}
          <br className="hidden md:block lg:hidden" />
          affordably <br className="md:hidden" /> from first sketch to launch
        </p>
      </div>
    </div>
  );
}

export default Header;
