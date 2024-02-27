"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MobileSidebar } from "./mobile-sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div
      className="fixed top-0 left-0 right-0 
      bg-transparent z-20 "
    >
      <nav className="h-14 flex items-center justify-between lg:justify-start px-4 max-w-7xl mx-auto">
        <div className="mt-7 md:mt-10">
          <Link href="/" prefetch={false} className="mt-10">
            <span className="sr-only">Sei Warriors</span>
            <Image
              src="/images/warriors-logo.png"
              width={100}
              height={100}
              alt=""
              className=" w-10 md:w-12"
            />
          </Link>
        </div>

        <div className="hidden lg:flex lg:glex-1 lg:grow items-center justify-center gap-2  ">
          <div className="bg-white p-2 rounded-xl space-x-2">
            <Link
              href="/"
              prefetch={false}
              className={` ${
                pathname === "/" ? "bg-red-500 text-white" : ""
              } rounded-xl p-2`}
            >
              <span className="text-lg font-semibold tracking-tight">Home</span>
            </Link>
            <Link
              href="/studio"
              prefetch={false}
              className={` ${
                pathname === "/studio" ? "bg-red-500 text-white" : ""
              } rounded-xl p-2`}
            >
              <span className="text-lg font-semibold tracking-tight">
                Studio
              </span>
            </Link>
            <Link
              href="/collection"
              prefetch={false}
              className={` ${
                pathname === "/collection" ? "bg-red-500 text-white" : ""
              } rounded-xl p-2`}
            >
              <span className="text-lg font-semibold tracking-tight">
                Collection
              </span>
            </Link>
          </div>
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>
      </nav>
    </div>
  );
}
