"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export function MobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon className=" w-10 h-10 " />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <h2 className="mb-2 px-4 text-3xl font-semibold tracking-tight">
            Sei Warriors
          </h2>
          <div className="flex flex-col p-4 gap-2">
            <Link
              href={"/"}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-xl px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === "/" ? "bg-red-500 text-white" : ""
                )}
              >
                Home
              </span>
            </Link>
            <Link
              href={"/studio"}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-xl px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === "/studio" ? "bg-red-500 text-white" : ""
                )}
              >
                Studio
              </span>
            </Link>
            <Link
              href={"/collection"}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-xl px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === "/collection" ? "bg-red-500 text-white" : ""
                )}
              >
                Collection
              </span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
