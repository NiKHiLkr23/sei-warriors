import Image from "next/image";
import React from "react";

function page() {
  return (
    <section className=" min-h-screen  w-full pt-[50px]   ">
      <div className="flex items-center justify-center w-full xl:max-w-7xl xl:mx-auto">
        <Image
          src="https://sei-warriors.s3.amazonaws.com/banner-grey.png"
          width={1000}
          height={1000}
          alt=""
          className="w-full "
        />
      </div>

      <div className="relative  w-full max-w-5xl mx-auto bg-green-200">
        <div className="absolute -top-10 px-5 ">
          <div className="bg-white rounded-xl p-2 shadow-sm">
            <h1 className="text-2xl md:text-3xl lg:text-4xl  text-center uppercase font-semibold">
              {" "}
              Sentinel Studios
            </h1>
            <p className=" text-justify py-2 md:px-10">
              Our team of experienced animators and illustrators specializes in
              creating winning animations for anime, advertisements, and promo
              arts. Proficient in 2D and 3D techniques, we use industry-standard
              software like Adobe Creative Suite, Maya, and Blender. With a keen
              eye for detail and a passion for storytelling, we collaborate
              effectively to meet deadlines and deliver high-quality work. Ready
              to bring our creativity and expertise to our dynamic animation
              studio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
