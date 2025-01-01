"use client"
import React, { useRef } from 'react'
import toast, { Toaster } from "react-hot-toast";

function SubSection() {
   const ref = useRef<HTMLFormElement>(null);
   function submitComment(evt: any) {
     evt.preventDefault();
     ref.current?.reset();
     toast.success(
       "Thank you for subscribing! Stay tuned for updates in your inbox."
     );
   }
  return (
    <section className="py-14">
      <div className="flex flex-col gap-6 items-center">
        <div className="font-medium text-[16px] text-[#7F56D9]">Newlatters</div>
        <h2 className="text-black dark:text-gray-100 text-center  leading-[60px]  text-[48px]">
          Stories and interviews
        </h2>
        <div className="customP max-w-[568px] text-center mx-auto">
          Subscribe to learn about new product features, the latest in
          technology, solutions, and updates.
        </div>
        <form ref={ref} onSubmit={submitComment} className="flex gap-3 sm:gap-5 relative mt-4">
          <input
            autoComplete='off'
            required
            type="email"
            className="w-[85vw] sm:w-[360px]  h-[48px] px-5 border-[1.5px] dark:placeholder:text-slate-500  dark:text-slate-500 rounded-[8px] outline-none text-sm sm:text-base "
            placeholder="Enter your email"
          />
          <button  className=" right-0 w-[25vw] sm:static absolute px-4 flex justify-center items-center text-sm sm:text-base sm:w-[118px] text-white  h-[48px] rounded-[8px] bg-[#7f56d9]">
            Subscribe
          </button>
          <div className="customxs sm:block hidden absolute -bottom-6 left-1">
            We care about your data in our{" "}
            <span className="underline">privacy policy</span>
          </div>
        </form>
      </div>
       <Toaster />
      
    </section>
  );
}

export default SubSection