import Image from "next/image";
import React from "react";

import image9 from "../../../../public/images/image 9.png";

import firstLogo from "../../../../public/logos/Logo.png";
import secondLogo from "../../../../public/logos/Logo (1).png";
import thirdLogo from "../../../../public/logos/Logo (2).png";
import fourthLogo from "../../../../public/logos/Logo (3).png";
import fifthLogo from "../../../../public/logos/Logo (4).png";
import sixthLogo from "../../../../public/logos/Logo (5).png";
import { GoArrowRight } from "react-icons/go";

const Customers = () => {
  const logos = [
    {
      id: 1,
      src: firstLogo,
    },
    {
      id: 2,
      src: secondLogo,
    },
    {
      id: 3,
      src: thirdLogo,
    },
    {
      id: 4,
      src: fourthLogo,
    },
    {
      id: 5,
      src: fifthLogo,
    },
    {
      id: 6,
      src: sixthLogo,
    },
    {
      id: 7,
      src: thirdLogo,
    },
  ];

  return (
    <div className="p-5 bg-[#f5f7fa]">
      <div className="flex justify-between items-center p-10">
        <Image
          src={image9}
          width={300}
          height={226}
          alt="tesla image"
          className="mx-10"
        />
        <div className="mx-4 max-w-[60%]">
          <p className="text-gray-500 text-md mb-10">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h3 className="text-green-500 font-semibold mb-2">Tim Smith</h3>

          <p className="text-gray-500 font-normal">
            British Dragon Boat Racing Association
          </p>

          <div className="flex gap-6 mt-10">
            {logos.map((logo) => (
              <div>
                <Image src={logo.src} width={40} height={24} alt="logos" />
              </div>
            ))}

            <button className="flex items-center gap-1 text-green-500 font-semibold">
              meet all the customers <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
