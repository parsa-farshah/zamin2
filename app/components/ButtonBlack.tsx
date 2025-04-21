import Image from "next/image";
import React from "react";
import { Ttitle } from "./ButtonMain";

function ButtonBlack({ text }: Ttitle) {
  return (
    <div>
      <button className="w-auto flex justify-center  items-center h-9 text-white bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 hover:bg-gradient-to-br shadow-md shadow-gray-100/20 dark:shadow-md dark:shadow-gray-300/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
        {text}
      </button>
    </div>
  );
}

export default ButtonBlack;
