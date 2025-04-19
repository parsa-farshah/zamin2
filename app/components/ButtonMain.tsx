import Image, { StaticImageData } from "next/image";
import React from "react";
type Ttitle = {
  text: string;
  image?: string | StaticImageData;
};

function ButtonMain({ image, text }: Ttitle) {
  return (
    <div>
      <button className="w-auto flex justify-center text-white items-center h-5 border-1  border-transparent border-t-[#1B5AC2] border-b-[#174BD2] border-x-[#174BD2] bg-gradient-to-b from-[#2B7AFB] via-[#2174FD] to-[#213BFD] rounded-xl  font-inter  text-sm shadow-inner shadow-white/40 shadow-2xl cursor-pointer gap-2 py-5 px-2">
        {image && (
          <Image
            src={image}
            alt={text}
            className="w-[24px] h-[24px] rounded-2xl"
            width={24}
            height={24}
          />
        )}
        {text}
      </button>
    </div>
  );
}

export default ButtonMain;
