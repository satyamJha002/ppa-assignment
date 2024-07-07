import React from "react";
import Image from "next/image";

import pana from "../../../../public/images/pana.png";

const Calender = () => {
  return (
    <div className="m-20">
      <div className="flex mt-10 justify-center items-center">
        <Image src={pana} alt="" className="m-10" />

        <div className="m-20">
          <h1 className="text-3xl max-w-[70%] mb-6 text-gray-700 font-semibold">
            How to design your site footer like we did
          </h1>
          <p className="text-sm mb-10 text-gray-500">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="bg-green-600 text-white px-4 py-3 flex items-center gap-5 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calender;
