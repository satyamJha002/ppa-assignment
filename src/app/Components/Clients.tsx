import React from "react";
import Image from "next/image";

import firstLogo from "../../../public/logos/Logo.png";
import secondLogo from "../../../public/logos/Logo (1).png";
import thirdLogo from "../../../public/logos/Logo (2).png";
import fourthLogo from "../../../public/logos/Logo (3).png";
import fifthLogo from "../../../public/logos/Logo (4).png";
import sixthLogo from "../../../public/logos/Logo (5).png";

const Clients = () => {
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
    <div>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="mb-10">
          <h1 className="text-center text-gray-600 text-4xl font-semibold mb-3">
            Our Clients
          </h1>
          <p className="text-gray-600 text-md">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="flex gap-20 justify-center">
          {logos.map((logo) => (
            <div key={logo.id}>
              <Image
                key={logo.id}
                src={logo.src}
                width={30}
                height={24}
                alt="logos"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
