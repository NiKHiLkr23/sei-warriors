import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections",
};
function page() {
  return (
    <section className=" min-h-screen  w-full pt-[56px]    ">
      <div className="flex items-center justify-start w-full xl:max-w-5xl xl:mx-auto">
        <span
          className="animate-fade-up custom-gradient  text-center font-display text-2xl font-bold tracking-[-0.02em] text-transparent  drop-shadow-sm [text-wrap:balance] md:text-4xl md:leading-[5rem] p-5"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Comming Soon!
        </span>
      </div>
    </section>
  );
}

export default page;
