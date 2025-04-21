import Image, { StaticImageData } from "next/image";
import React from "react";
export type Ttitle = {
  text: string;
};

function ButtonMain({ text }: Ttitle) {
  return (
    <div>
      <button className="w-auto flex justify-center  items-center h-9 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-md shadow-blue-100/20 dark:shadow-md dark:shadow-blue-300/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
        {text}
      </button>
    </div>
  );
}

export default ButtonMain;
