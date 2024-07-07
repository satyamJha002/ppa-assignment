import React from "react";
import Image from "next/image";

import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { CgBrowse } from "react-icons/cg";

import logo from "../../../public/images/Logo.png";

const FooterBig = () => {
  const company = [
    { id: 1, text: "About Us" },
    { id: 2, text: "Blog" },
    { id: 3, text: "Contact Us" },
    { id: 4, text: "Pricing" },
    { id: 5, text: "Testimonials" },
  ];

  const support = [
    { id: 1, text: "Help Center" },
    { id: 2, text: "Terms of services" },
    { id: 3, text: "Legal" },
    { id: 4, text: "Privacy policy" },
    { id: 5, text: "Status" },
  ];
  return (
    <div>
      <div className="bg-[#263238] p-20 flex justify-between">
        <div className="">
          <div className="flex gap-3">
            <Image src={logo} width={44} height={24} alt="logo" />
            <h1 className="text-2xl text-white font-semibold">Nexcent</h1>
          </div>
          <div className="flex flex-col mt-10 text-white text-sm gap-4">
            <span>Copyright © 2020 Landify UI Kit.</span>

            <span>All rights reserved</span>
          </div>

          <div className="flex mt-4 gap-4 text-white">
            <BsInstagram />
            <CgBrowse />
            <BsTwitter />
            <BsYoutube />
          </div>
        </div>
        <div className="flex gap-20">
          <div className="">
            <h4 className="text-white font-semibold text-xl mb-2">Company</h4>
            <ul>
              {company.map((item) => (
                <li key={item.id} className="my-4 text-white">
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h4 className="text-white font-semibold text-xl mb-2">Support</h4>
            <ul>
              {support.map((item) => (
                <li key={item.id} className="my-4 text-white">
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h4 className="text-white font-semibold text-xl mb-2">
              Stay up to date
            </h4>
            <input
              type="email"
              placeholder="Your email address"
              className="p-4 rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBig;
