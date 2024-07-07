import React from "react";
import { GoArrowRight } from "react-icons/go";

const Frame16 = () => {
  return (
    <div>
      <div className="p-10 flex flex-col justify-center items-center">
        <h1 className="text-5xl max-w-[40%] text-center leading-tight mb-10 text-gray-700 font-bold">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className="flex items-center gap-2 bg-green-700 text-white px-10 py-4 rounded font-semibold">
          Get a Demo <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Frame16;
