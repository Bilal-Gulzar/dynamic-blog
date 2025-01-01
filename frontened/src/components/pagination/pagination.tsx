import React from 'react'
import { GoArrowLeft,GoArrowRight} from "react-icons/go";
function Pagination() {
  return (
    <section className="flex justify-between sm:flex-row flex-col gap-6 sm:gap-2 mt-12 pb-20 items-center">
      <div className="customP dark:text-gray-100 flex items-center gap-2">
        <span>
          <GoArrowLeft />
        </span>
        Previous
      </div>
      <div className=" flex gap-3 items-center">
        <div className="sm:w-[40px] w-[25px] customP flex justify-center items-center h-[25px] sm:h-[40px] dark:text-black text-[#7F56D9] rounded-[8px]  bg-[#F9F5FF] py-2.5">
          1
        </div>
        <div className="sm:w-[40px] dark:text-gray-100 w-[25px] flex customP justify-center items-center h-[25px] sm:h-[40px] ">
          2
        </div>
        <div className="sm:w-[40px] dark:text-gray-100 flex customP justify-center items-center w-[25px] h-[25px] sm:h-[40px]">
          3
        </div>
        <div className="sm:w-[40px] dark:text-gray-100 w-[25px] flex customP justify-center items-center h-[25px] sm:h-[40px]">
          ...
        </div>
        <div className="sm:w-[40px] dark:text-gray-100 flex customP justify-center items-center w-[25px] h-[25px] sm:h-[40px]">
          8
        </div>
        <div className="sm:w-[40px] dark:text-gray-100 w-[25px] flex customP justify-center items-center h-[25px] sm:h-[40px]">
          9
        </div>
        <div className="sm:w-[40px] dark:text-gray-100 w-[25px] flex customP justify-center items-center h-[25px] sm:h-[40px]">
          10
        </div>
      </div>
      <div className="customP dark:text-gray-100 flex items-center gap-2">
        Next
        <span>
          <GoArrowRight />
        </span>
      </div>
    </section>
  );
}

export default Pagination
