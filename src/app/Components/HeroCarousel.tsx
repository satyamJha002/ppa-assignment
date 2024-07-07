import Image from "next/image";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

import illustration from "../../../public/images/Illustration.png";

const HeroCarousel = () => {
  return (
    <>
      <section className="p-28 md:p-40 m-auto bg-[#e0e0e0] min-w-full">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="flex flex-col justify-center items-center gap-10 md:flex md:flex-row">
              <div className="md:text-center lg:text-left">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-5xl">
                  Lessons and Insights
                </h1>
                <h2 className="text-3xl font-bold text-green-500 sm:text-4xl md:text-5xl">
                  from 8 years
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <div className="mt-8">
                  <button className="bg-green-600 text-white px-3 py-4 flex items-center gap-5 rounded-md">
                    Register
                  </button>
                </div>
              </div>
              <div className="md:text-center lg:text-right">
                <Image
                  src={illustration}
                  alt="Image of a developer"
                  className="w-full md:w-auto h-auto"
                  width={200}
                  height={100}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col justify-center items-center gap-10 md:flex md:flex-row">
              <div className="md:text-center lg:text-left">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-5xl">
                  Lessons and Insights
                </h1>
                <h2 className="text-3xl font-bold text-green-500 sm:text-4xl md:text-5xl">
                  from 8 years
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <div className="mt-8">
                  <button className="bg-green-600 text-white px-3 py-4 flex items-center gap-5 rounded-md">
                    Register
                  </button>
                </div>
              </div>
              <div className="md:text-center lg:text-right">
                <Image
                  src={illustration}
                  alt="Image of a developer"
                  className="w-full md:w-auto h-auto"
                  width={200}
                  height={100}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="flex flex-col justify-center items-center gap-10 md:flex md:flex-row">
              <div className="md:text-center lg:text-left">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-5xl">
                  Lessons and Insights
                </h1>
                <h2 className="text-3xl font-bold text-green-500 sm:text-4xl md:text-5xl">
                  from 8 years
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <div className="mt-8">
                  <button className="bg-green-600 text-white px-3 py-4 flex items-center gap-5 rounded-md">
                    Register
                  </button>
                </div>
              </div>
              <div className="md:text-center lg:text-right">
                <Image
                  src={illustration}
                  alt="Image of a developer"
                  className="w-full md:w-auto h-auto"
                  width={200}
                  height={100}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
};

export default HeroCarousel;
