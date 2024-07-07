import React from "react";
import frame from "../../../../public/images/Frame 35.png";
import Image from "next/image";

const Unlock = () => {
  return (
    <div className="m-20">
      <div className="flex mt-10 justify-center items-center">
        <Image src={frame} alt="" className="m-10" />

        <div className="m-20">
          <h1 className="text-3xl max-w-[70%] mb-6 text-gray-700 font-semibold">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-sm mb-10 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <button className="bg-green-600 text-white px-4 py-3 flex items-center gap-5 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
