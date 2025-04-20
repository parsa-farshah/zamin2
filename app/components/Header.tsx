import Image from "next/image";
import React from "react";
import headerXl from "../../public/images/headerImageXl.svg";

function Header() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex justify-center">
        <Image
          className="bg-auto pt-[120px]"
          src={headerXl}
          alt="haeder Image Xl"
        />
      </div>
    </div>
  );
}

export default Header;
