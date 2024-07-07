import React from "react";
import Image from "next/image";

import firstIcon from "../../../public/images/Icon.png";
import secondIcon from "../../../public/images/Icon(1).png";
import thirdIcon from "../../../public/images/Icon(2).png";

const Community = () => {
  const icons = [
    {
      id: 1,
      src: firstIcon,
      title: "Membership Organisations",
      text: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 2,
      src: secondIcon,
      title: "National Associations",
      text: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 3,
      src: thirdIcon,
      title: "Clubs And Groups",
      text: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center mt-16">
          <h1 className="text-center text-gray-600 text-4xl max-w-[41%] font-semibold mb-3">
            Manage your entire community in a single system
          </h1>
          <p className="text-gray-600 text-xl mt-3">
            Who is Nextcent suitable for?
          </p>
        </div>

        <div className="flex mt-10 ">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="flex flex-col justify-center items-center"
            >
              <Image src={icon.src} width={40} height={22} alt="icons" />
              <h2 className="text-3xl  mt-3 font-bold text-gray-500">
                {icon.title}
              </h2>
              <p className="text-center mt-3 max-w-[60%]">{icon.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
