import Image, { StaticImageData } from "next/image";
import React from "react";
type Ttitle = {
  text: string;
  image?: string | StaticImageData;
};

function ButtonMain({ image, text }: Ttitle) {
  return (
    <div>
      <button className="w-auto flex justify-center  items-center h-10 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none  shadow-lg shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 duration-600 ">
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
