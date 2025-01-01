import React from "react";
import Image from "next/image";
import ArrowSvg from "../svg/arrowSvg";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import Client from "@/app/santiyclient";

type obj = {
  title: string;
  des: string;
  mainImage?: { _type: string; asset?: { _ref: string } };
  slug: { current: string; _type: string };
  _id: string;
  author: string;
  body: object;
};


function HomeSection({blogs}:{blogs:obj[]}) {
  const date = new Date();
  const getDate = {
    day: date.getDate(),
    month: new Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
    year: date.getFullYear(),
  };

    const builder = imageUrlBuilder(Client);

    function urlFor(source:any) {
// /      console.log(source)
      return builder.image(source);
    }
  return (
    <div className="mt-5 pb-20">
      <section>
        <h2 className="customh">All blog posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8  mt-12 ">
          {blogs.length > 0 &&
            blogs.map((v: obj) => (
              <div key={v._id} className="gap-6 flex flex-col">
                <Link href={`blogDetail/${v.slug.current}`}>
                  <div>
                    {v.mainImage?.asset?._ref ? (
                      <Image
                        src={urlFor(v.mainImage).url()}
                        width={580}
                        height={580}
                        alt="blogImg"
                        className="h-[250px]"
                      />
                    ) : (
                      <div className="h-[250px] w-full bg-gray-100"></div>
                    )}
                  </div>
                </Link>
                <div className="flex flex-col gap-5">
                  <div className="text-custom-xs text-[#6941C6] font-medium">
                    {v.author} • {getDate.day} {getDate.month} {getDate.year}{" "}
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="customh3 line-clamp-2">
                      {v.title}
                    </h3>
                    <span>
                      <ArrowSvg />
                    </span>
                  </div>
                  <p className="customP pe-5 line-clamp-3 lg:w-[384px]">
                    {v.des}
                  </p>
                  <div className="flex items-center customxs  gap-3  ">
                    <div className=" text-[#6941C6] px-3  shrink-0 py-1 font-medium rounded-[16px]  bg-[#F0F9FF]">
                      Leadership
                    </div>
                    <div className=" text-[#363F72] shrink-0 px-3 font-medium  py-1 rounded-[16px] bg-[#F8F9FC]">
                      Management
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default HomeSection;
