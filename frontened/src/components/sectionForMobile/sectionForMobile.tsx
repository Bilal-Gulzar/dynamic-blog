"use client"
import React, { useEffect } from 'react'
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

type state = {
  darkMode: boolean | undefined;
  setDarkMode: (value: boolean) => void;
  menu: boolean,
  setMenu: (value: boolean) => void;
};
export default function SectionForMobile({ darkMode, setDarkMode, menu, setMenu}:state) {
     const path = usePathname()
   const scrollableContentRef = useRef<HTMLDivElement | null>(null);
   useEffect(() => {
     if (scrollableContentRef.current) {
       if (!menu){
         enableBodyScroll(scrollableContentRef.current);
       } else {
         disableBodyScroll(scrollableContentRef.current);
       }
     }

     return () => {
       if (scrollableContentRef.current) {
         enableBodyScroll(scrollableContentRef.current); 
       }
     }
   }, [menu]);

  return (
    <section
      className={`w-screen h-screen sm:hidden z-50 bg-white dark:bg-[#090d1f] fixed top-0 bgwhite  right-0 left-0 flex items-center justify-center  ${
        menu ? "" : "translate-x-full"
      } duration-300`}
        ref={scrollableContentRef}
    >
      <div className=" flex flex-col gap-8">
        <h2 className="text-lg dark:text-white">John Doe</h2>
        <div className="flex text-lg flex-col gap-6 items-center">
          <Link href="/">
            <div
              onClick={() => setMenu(false)}
              className={`${
                path == "/"
                  ? "dark:underline decoration-gray-400 underline-offset-8   dark:text-white"
                  : ""
              }`}
            >
              Blog
            </div>
          </Link>
          <Link href="/projects">
            <div
              onClick={() => setMenu(false)}
              className={`${
                path.includes("/projects")
                  ? "dark:underline decoration-gray-400 underline-offset-8   dark:text-white"
                  : ""
              }`}
            >
              Projects
            </div>
          </Link>
          <Link href="/about">
            <div
              onClick={() => setMenu(false)}
              className={`${
                path.includes("/about")
                  ? "dark:underline decoration-gray-400 underline-offset-8   dark:text-white"
                  : ""
              }`}
            >
              About
            </div>
          </Link>

          <Link href="/newsLetter">
            <div
              onClick={() => setMenu(false)}
              className={`${
                path.includes("/newsLetter")
                  ? "dark:underline decoration-gray-400 underline-offset-8  dark:text-white"
                  : ""
              }`}
            >
              Newsletter
            </div>
          </Link>
          <div className="flex justify-between transition-all ease-linear items-center gap-5 rounded-full py-2 w-[75px] px-3 dark:bg-white bg-[#090d1f]">
            {!darkMode && <MdOutlineLightMode className="text-white" />}
            <div
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              className="cursor-pointer w-4 h-4 transition-all  duration-200 ease-in 
                       rounded-full dark:bg-[#090d1f] bg-white"
            ></div>
            {darkMode && <FaRegMoon className="dark:text-black" />}
          </div>
        </div>
      </div>
      <div className="absolute bottom-5">
        <GrClose
          onClick={() => setMenu(false)}
          className="dark:text-white size-6"
        />
      </div>
    </section>
  );
}
