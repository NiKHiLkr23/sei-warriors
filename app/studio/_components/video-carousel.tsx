"use client";
import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const videoItems = [
  "https://sei-warriors.s3.amazonaws.com/animations/animation-1.mp4",
  "https://sei-warriors.s3.amazonaws.com/animations/animation-2.mp4",
];

export default function VideoCarousel() {
  return (
    <Carousel className="w-full max-w-xs ">
      <CarouselContent>
        {videoItems.map((item: string, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <video
                src={item}
                autoPlay
                muted
                loop
                className=" md:h-80  object-center rounded-xl"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
