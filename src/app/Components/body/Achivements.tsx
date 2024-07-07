import React from "react";
import fourthIcon from "../../../../public/images/icon(3).png";
import fifthIcon from "../../../../public/images/icon(4).png";
import sixthIcon from "../../../../public/images/icon(5).png";
import seventhIcon from "../../../../public/images/icon(6).png";
import Image from "next/image";

const Achivements = () => {
  const icons = [
    {
      id: 1,
      src: fourthIcon,
      number: "2,245,341",
      text: "Members",
    },
    {
      id: 2,
      src: fifthIcon,
      number: "828,867",
      text: "Event Bookings",
    },
    {
      id: 3,
      src: seventhIcon,
      number: "46,328",
      text: "Clubs",
    },
    {
      id: 4,
      src: sixthIcon,
      number: "1,926,436",
      text: "Payments",
    },
  ];
  return (
    <div className="flex justify-evenly items-center p-10 bg-[#f5f7fa]">
      <div className="">
        <h1 className="text-3xl font-semibold text-gray-900 sm:text-5xl md:text-4xl">
          Helping a local
        </h1>
        <h2 className="text-3xl font-semibold text-green-500 sm:text-4xl md:text-4xl">
          business reinvent itself
        </h2>

        <p className="mt-2">We reached here with our hardwork and dedication</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {icons.map((icon) => (
          <div key={icon.id} className="flex gap-4">
            <Image src={icon.src} width={40} height={21} alt="icon" />
            <div>
              <h3 className="text-xl text-gray-700 font-semibold">
                {icon.number}
              </h3>
              <span className="text-sm text-gray-500">{icon.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achivements;
