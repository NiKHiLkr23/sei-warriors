import Image from "next/image";
import React from "react";
import VideoCarousel from "./_components/video-carousel";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio",
};

function page() {
  return (
    <section className=" min-h-screen  w-full lg:pt-[56px]    ">
      <div className="flex items-center justify-center w-full xl:max-w-7xl xl:mx-auto">
        <Image
          unoptimized
          src="/images/banner-grey.png"
          width={1000}
          height={1000}
          alt=""
          className="w-full "
        />
      </div>

      <div className="relative  w-full md:max-w-3xl lg:max-w-4xl mx-auto ">
        <div className="absolute -top-[56px] md:-top-28 px-5 ">
          <div className="bg-white rounded-xl p-2 shadow-sm">
            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-6xl pb-2 text-center uppercase font-bold">
              {" "}
              Sentinel Studios
            </h1>

            <div className="md:flex md:flex-row-reverse md:items-center md:justify-center">
              <div className=" flex items-center justify-center ">
                <VideoCarousel />
              </div>
              <p className="md:w-1/2 text-justify p-2 md:px-8 xl:text-lg  ">
                Our team of experienced animators and illustrators specializes
                in creating winning animations for anime, advertisements, and
                promo arts. Proficient in 2D and 3D techniques, we use
                industry-standard software like Adobe Creative Suite, Maya, and
                Blender. With a keen eye for detail and a passion for
                storytelling, we collaborate effectively to meet deadlines and
                deliver high-quality work. Ready to bring our creativity and
                expertise to our dynamic animation studio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
