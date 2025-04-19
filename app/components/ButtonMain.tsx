import Image, { StaticImageData } from "next/image";
import React from "react";
type Ttitle = {
  text: string;
  image?: string | StaticImageData;
};

function ButtonMain({ image, text }: Ttitle) {
  return (
    <div>
      <button className="w-auto flex justify-center  items-center h-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 border-1 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
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
