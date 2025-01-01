"use client"
import React from 'react'
import Image from 'next/image'
import { usePathname } from "next/navigation";

export default function Herosec() {
  const path = usePathname()
  const url = "/"
  return (
    <section className={`${path === url ? "" : "hidden"}`}>
      <div className="mx-5 border-y-2 mt-8 border-gray-300 ">
        <h1 className="lg:block hidden lg:leading-tight dark:text-white text-[15rem] xl:text-[17rem] font-semibold text-center">
          THE&nbsp;BLOG
        </h1>
        <div className='sm:py-10 py-6 px-2 lg:hidden'>
          <Image
            src="/The-Blog.png"
            width={1600}
            height={1600}
            alt="the blog"
            className='dark:hidden'
          />
          <Image
            src="/The-Blog-dark.png"
            width={1600}
            height={1600}
            alt="the blog"
            className='dark:block hidden'
          />
        </div>
      </div>
    </section>
  );
}
