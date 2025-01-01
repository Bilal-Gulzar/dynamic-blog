"use client"
import React, { useEffect, useState } from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import Link from 'next/link';
import SectionForMobile from '../sectionForMobile/sectionForMobile';
import { usePathname } from 'next/navigation';

export default function Header() {
   const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);
   const [menu, setMenu] = useState<boolean>(false);
   const path = usePathname()
   

useEffect(() => {
  if (darkMode) {
    localStorage.setItem("darkMode", "true");
    window.document.documentElement.classList.add("dark");
  } else if (darkMode === false) {
    localStorage.setItem("darkMode", "false");
    window.document.documentElement.classList.remove("dark");
  } else {
    setDarkMode(localStorage.getItem("darkMode") === "true");
  }
}, [darkMode]);

  return (
      <header className="flex items-center px-5 py-5 sm:p-7 lg:p-10 justify-between">
        <div className="font-semibold dark:text-white  sm:text-base text-lg">
          John Doe
        </div>
        <div className="sm:flex hidden gap-5 items-center ">
          <Link href="/">
            <div
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
        <div className="sm:hidden">
          <MdMenu
            onClick={() => setMenu(true)}
            className="size-6 dark:text-gray-100"
          />
        </div>
        <SectionForMobile
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          menu={menu}
          setMenu={setMenu}
        />
      </header>
  );
}
