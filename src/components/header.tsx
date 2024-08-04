"use client";

import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { getURL } from "next/dist/shared/lib/utils";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <header className={`${pathName === "/" ? "" : "m-2 overflow-hidden rounded-lg"}`}>
      <div
        className={`${
          pathName === "/"
            ? "absolute content md:flex items-center gap-4 p-6 w-full justify-between z-10 top-0 max-md:hidden"
            : "content bg-black md:flex items-center gap-4 p-4 w-full justify-between z-10 top-0 max-md:hidden"
        }`}
      >
        <div className="logo">
          <Link href={"/"}>
            <h2 className="font-bold text-xl text-white">Horizone</h2>
          </Link>
        </div>
        <div className="md:flex justify-between items-center gap-6 hidden">
          <div className="navigation">
            <nav>
              <ul className="flex gap-2 text-white">
                <Link href="/">
                  <li>Hotel</li>
                </Link>
                <Link href="/blogs">
                  <li>Flight</li>
                </Link>
                <Link href="/blogs">
                  <li>Train</li>
                </Link>
                <Link href="/blogs">
                  <li>Travel</li>
                </Link>
                <Link href="/blogs">
                  <li>Car Rental</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
        <SearchBar />
        <LoginBtn />
      </div>
      <div className={`${pathName === "/" ? "mobile-menu md:hidden z-10 absolute p-6 flex w-full justify-between" : "mobile-menu md:hidden z-10 bg-black p-6 flex w-full justify-between"}`}>
        <div className="logo">
          <Link href={"/"}>
            <h2 className="font-bold text-xl text-white">Horizone</h2>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </SheetTrigger>
          <SheetContent className="flex justify-center items-center">
            <div className="navigation">
              <nav>
                <ul className="text-2xl gap-4 flex items-center flex-col">
                  <Link href="/">
                    <li>Hotel</li>
                  </Link>
                  <Link href="/blogs">
                    <li>Flight</li>
                  </Link>
                  <Link href="/blogs">
                    <li>Train</li>
                  </Link>
                  <Link href="/blogs">
                    <li>Travel</li>
                  </Link>
                  <Link href="/blogs">
                    <li>Car Rental</li>
                  </Link>
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

function SearchBar() {
  return (
    <div className="relative flex">
      <Input className="md:w-80 px-4 text-white bg-opacity-25 backdrop-blur-lg shadow-sm placeholder:text-white  focus-visible:ring-0 focus-visible:ring-white" placeholder="Search Destination..." />
      <div className="icon  absolute top-[10px] right-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="size-5">
          <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function LoginBtn() {
  return (
    <div>
      <Button className="text-white mr-4 rounded-lg" variant={"ghost"}>
        Log In
      </Button>
      <Button className="rounded-lg p-5" variant={"outline"}>
        Sign Up
      </Button>
    </div>
  );
}

export default Header;
