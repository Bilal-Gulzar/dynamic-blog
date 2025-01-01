import HomeSection from "@/components/homeSection/homeSection";
import Image from "next/image";
import Link from "next/link";
import Client from "./santiyclient";
import imageUrlBuilder from "@sanity/image-url";
import ArrowSvg from "@/components/svg/arrowSvg";

type obj = {
  title: string;
  des: string;
  mainImage: { _type: string; asset: { _ref: string } };
  slug: { current: string; _type: string };
  _id: string;
  author: string;
  body: object;
};

export default async function Home() {
  const date = new Date();
  const getDate = {
    day: date.getDate(),
    month: new Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
    year: date.getFullYear(),
  };

  const builder = imageUrlBuilder(Client);

  const query = `*[_type == "post"]`;
  const blogDetail: obj[] = await Client.fetch(query);
  const recentBlog: obj[] = blogDetail.splice(-4);
  // console.log(blogDetail)
  const gridBLog = blogDetail.find(
    (v: obj) =>
      v.slug.current === "grid-system-for-better-design-user-interface"
  );
  function urlFor(source: any) {
    return builder.image(source);
  }

  return (
    <div className=" lg:px-10 sm:px-7 px-5 mt-12">
      <section>
        <h3 className="customh">Recent blog posts</h3>
        <div className="grid pb-20 grid-cols-1  lg:grid-cols-2 gap-8 mt-8 md:mt-12">
          <div>
            <div className="flex flex-col gap-5">
              <Link href={`/blogDetail/${recentBlog[3].slug.current}`}>
                <div className="shrink-0">
                  <Image
                    src={urlFor(recentBlog[3]?.mainImage).url()}
                    alt="blogImg"
                    width={1090}
                    height={1090}
                    className="h-[250px] sm:h-[400px] lg:h-[250px]"
                  />
                </div>
              </Link>
              <div className="text-custom-xs text-[#6941C6] font-medium">
                {recentBlog[3].author} • {getDate.day} {getDate.month}{" "}
                {getDate.year}
              </div>
              <div className="flex justify-between items-center gap-4">
                <h3 className="customh line-clamp-2">{recentBlog[3].title}</h3>
                <span>
                  <ArrowSvg />
                </span>
              </div>
              <p className="customP line-clamp-5">{recentBlog[3].des}</p>
              <div className="flex items-center customxs  gap-2  overflow-x-auto hide-scrollbar w-full">
                <div className=" text-[#6941C6] shrink-0 px-3 font-medium py-1 rounded-[16px]  bg-[#F9F5FF]">
                  Design
                </div>
                <div className=" text-[#3538CD] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#EEF4FF]">
                  Research
                </div>
                <div className=" text-[#C11574] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#FDF2FA]">
                  Presentation
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex sm:grid grid-cols-2 lg:flex gap-6  sm:flex-row flex-col">
              <Link href={`/blogDetail/${recentBlog[1].slug.current}`}>
                <div className="shrink-0 w-full bg-red-400 ">
                  {recentBlog[1]?.mainImage?.asset?._ref ? (
                    <Image
                      src={urlFor(recentBlog[1].mainImage).url()}
                      alt="blogImg"
                      width={1020}
                      height={1020}
                      className="h-[250px]"
                    />
                  ) : (
                    <div className="h-[250px] w-full bg-gray-100"></div>
                  )}
                </div>
              </Link>
              <div className="flex flex-col gap-5 sm:gap-3 ">
                <div className="text-custom-xs text-[#6941C6] font-medium">
                  {recentBlog[1].author} • {getDate.day} {getDate.month}{" "}
                  {getDate.year}{" "}
                </div>
                <div className="flex justify-between items-center gap-4">
                  <h3 className="customh3 line-clamp-2">
                    {recentBlog[1].title}
                  </h3>
                  <span>
                    <ArrowSvg />
                  </span>
                </div>
                <p className="customP line-clamp-5 lg:w-[248px]">
                  {recentBlog[1].des}
                </p>
                <div className="flex items-center customxs  gap-3">
                  <div className=" text-[#027A48] px-3  py-1 font-medium rounded-[16px]  bg-[#ECFDF3]">
                    Design
                  </div>
                  <div className=" text-[#C11574] px-3 font-medium  py-1 rounded-[16px] bg-[#FDF2FA]">
                    Research
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:grid grid-cols-2 lg:flex gap-6  sm:flex-row flex-col">
              <Link href={`/blogDetail/${recentBlog[2].slug.current}`}>
                <div className="shrink-0">
                  {recentBlog[2]?.mainImage?.asset?._ref ? (
                    <Image
                      src={urlFor(recentBlog[2].mainImage).url()}
                      alt="blogImg"
                      width={1020}
                      height={1020}
                      className="h-[250px]"
                    />
                  ) : (
                    <div className="h-[250px] w-full bg-gray-100"></div>
                  )}
                </div>
              </Link>
              <div className="flex flex-col gap-5 sm:gap-3 ">
                <div className="text-custom-xs text-[#6941C6] font-medium">
                  {recentBlog[2].author} • {getDate.day} {getDate.month}{" "}
                  {getDate.year}{" "}
                </div>
                <div className="flex justify-between items-center gap-4">
                  <h3 className="customh3 line-clamp-2">
                    {recentBlog[2].title}
                  </h3>
                  <span>
                    <ArrowSvg />
                  </span>
                </div>
                <p className="customP line-clamp-5 lg:w-[248px]">
                  {recentBlog[2].des}
                </p>
                <div className="flex items-center customxs  gap-3">
                  <div className=" text-[#027A48] px-3  py-1 font-medium rounded-[16px]  bg-[#ECFDF3]">
                    Design
                  </div>
                  <div className=" text-[#C11574] px-3 font-medium  py-1 rounded-[16px] bg-[#FDF2FA]">
                    Research
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10">
          <Link href={`/blogDetail/${gridBLog?.slug.current}`}>
            <div className="shrink-0">
              {gridBLog?.mainImage?.asset?._ref ? (
                <Image
                  src={urlFor(gridBLog?.mainImage).url()}
                  alt="blogImg"
                  width={1092}
                  height={1092}
                  className="h-[250px] sm:h-[400px] lg:h-[250px]"
                />
              ) : (
                <div className="h-[250px] w-full bg-gray-100"></div>
              )}
            </div>
          </Link>
          <div className="flex flex-col gap-5 sm:gap-3">
            <div className="text-custom-xs text-[#6941C6] font-medium">
              {gridBLog?.author} • {getDate.day} {getDate.month} {getDate.year}
            </div>
            <div className="flex justify-between items-center gap-4">
              <h3 className="customh line-clamp-2">
               {gridBLog?.title}
              </h3>
              <span>
                <ArrowSvg />
              </span>
            </div>
            <p className="customP line-clamp-5 lg:line-clamp-none  lg:w-[592px]">
              {gridBLog?.des}
            </p>
            <div className="flex items-center customxs  gap-3">
              <div className=" text-[#6941C6] px-3 font-medium py-1 rounded-[16px]  bg-[#F9F5FF]">
                Design
              </div>

              <div className=" text-[#C11574] px-3 font-medium py-1 rounded-[16px] bg-[#FDF2FA]">
                Interface
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeSection blogs={blogDetail} />
      {/* <Pagination /> */}
    </div>
  );
}
