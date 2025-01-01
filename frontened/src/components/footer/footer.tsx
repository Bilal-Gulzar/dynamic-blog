"use client"
import React, {useState } from 'react'
import { IoIosSend } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear()
   const path = usePathname()
   const [text,setText] = useState<string>('')
   const Url:string[] = ["/","/newsLetter","/about","/projects"]
    function submitComment(evt:any) {
      evt.preventDefault();
      toast.success("Your comment has been submitted!");
    }
     
  return (
    <div className={`flex flex-col ${Url.includes(path) ? "" : "hidden"}`}>
      <footer className="flex gap-5 text-[20px] dark:text-gray-100 sm:flex-row flex-col items-center text-[#1A1A1A] pb-8 sm:px-7 px-5 lg:px-10 sm:order-1 order-2 ">
        <div className="sm:block hidden ">©{year}</div>
      <Link href="#"><div>Twitter</div></Link>
      <Link href="#"><div>LinkedIn</div></Link>
      <Link href="#"><div>Email</div></Link>
      <Link href="#"><div>RSS feed</div></Link>
      <Link href="#"><div>Add to Feedly</div></Link>
      <div className="sm:hidden">©{year}</div>
      </footer>
       <form onSubmit={submitComment} className="sm:order-2 order-1">
        <div className="customP dark:text-[#7F56D9] font-medium max-w-[568px] text-center mx-auto">
          Share Your comments
        </div>
        <div className="flex gap-3 pb-10 w-full justify-center sm:gap-5 mt-4">
          <div className="flex gap-3 flex-col items-end">
            <textarea
              onChange={(e)=>setText(e.target.value)}
              autoComplete="off"
              required
              value={text}
              className="w-[85vw] py-2 dark:text-slate-500 sm:w-[560px] h-[88px] px-5  border-[1.5px]  dark:placeholder:text-slate-500 rounded-[8px] outline-none text-sm sm:text-base "
              placeholder="Comments"
            />
            <button
              type='submit'
              disabled={text ?  false : true }
              onClick={(evt)=>{submitComment(evt),setText('')}}
              className=" w-[25vw] gap-1  px-10 flex justify-center items-center text-sm sm:text-base sm:w-[100px] text-white  h-[45px] rounded-[8px] bg-[#7f56d9]"
            >
              <IoIosSend className="shrink-0 " /> Submit
            </button>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
