"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ArrowSvg from "@/components/svg/arrowSvg";
import ProjectSection from "@/components/ProjectSection/projectSection";
import imageUrlBuilder from "@sanity/image-url";
import Loading from "../loading";
import Client from "../santiyclient";
type obj = {
  title: string;
  des:string;
  image: { _type: string; asset: { _ref: string } };
  slug: { current: string; _type: string };
  _id: string;
   blog: Array<{
    _key: string;
    _type: string; 
    children: Array<{
      _key: string;
      _type: string;
      text: string; 
      marks: string[]; 
    }>;
    style?: string; 
}>
};
function Projects() {
   const [popUp,setPopUp] = useState<boolean>(false)
   const [twoProject,setTwoProjects] = useState<obj[]>([])
   const [remianBlog, setRemianBlog] = useState<obj[]>([]);
   const [oneBlog, setOneBLog] = useState<obj[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [blogDetail,setBLogDetail] = useState<obj| undefined>(undefined);
   useEffect(()=>{
   fetcData()

},[])


  let data:obj[] = []
  async function fetcData (){
    const query = `*[_type == "author"]`;
     data = await Client.fetch(query);
    setTwoProjects(data.slice(0, 2));
    console.log(data.length, "projects");

    const blogsAfterfilter = data.slice(3);
    setRemianBlog(blogsAfterfilter);
    const blog = data.filter(
      (v: obj, index: number) => index == 2
    );
    setOneBLog(blog);
    setLoading(false)
  }

const builder = imageUrlBuilder(Client);
function urlFor(source:any) {
  return builder.image(source);
}

const handlePost = (blg:any) =>{
setBLogDetail(blg)
setPopUp(true)

}
  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="lg:px-14 max-w-[1200px] mx-auto sm:px-7 px-5 flex flex-col gap-6 pb-14 ">
          <div className="border-y-2 mt-8 border-gray-300 ">
            <h1 className="lg:block hidden lg:leading-tight dark:text-white text-[15rem]  font-semibold text-center">
              PROJECTS
            </h1>
            <div className="sm:py-10 py-6 px-2 lg:hidden">
              <Image
                src="/project-light.png"
                width={1600}
                height={1600}
                alt="the blog"
                className="dark:hidden"
              />
              <Image
                src="/Project.png"
                width={1600}
                height={1600}
                alt="the blog"
                className="dark:block hidden"
              />
            </div>
          </div>
          <h3 className="customh">List Project</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {twoProject.map((v: obj) => (
              <div key={v._id} className="gap-6 flex flex-col">
                {v?.image?.asset?._ref ? (
                  <div className="cursor-pointer" onClick={() => handlePost(v)}>
                    <Image
                      src={urlFor(v.image).url()}
                      width={780}
                      height={780}
                      alt={v.title || "Image"}
                      className="h-[250px] sm:h-[450px] md:h-[330px]"
                    />
                  </div>
                ) : (
                  <div className="h-[250px] sm:h-[330px] w-full bg-gray-100"></div>
                )}
                <div className="flex flex-col gap-5 ">
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="customh3 line-clamp-2">{v.title}</h3>
                    <span>
                      <ArrowSvg />
                    </span>
                  </div>
                  <p className="customP line-clamp-3 sm:line-clamp-2 pe-5">
                    {v.des}
                  </p>
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
            ))}
          </div>
          {oneBlog.length > 0 &&
            oneBlog.map((v: obj) => (
              <div key={v._id} className="gap-6 flex flex-col">
                {v?.image?.asset?._ref ? (
                  <div className="cursor-pointer" onClick={() => handlePost(v)}>
                    <Image
                      src={urlFor(v.image).url()}
                      width={1280}
                      height={1280}
                      alt={v?.title || "Iamge"}
                      className="h-[250px] sm:h-[450px] md:h-[556px]"
                    />
                  </div>
                ) : (
                  <div className="h-[250px] sm:h-[330px] w-full bg-gray-100"></div>
                )}
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="customh3 line-clamp-2">{v.title}</h3>
                    <span>{v.title && <ArrowSvg />}</span>
                  </div>
                  <p className="customP pe-5 line-clamp-3 sm:line-clamp-2 ">
                    {v.des}
                  </p>
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
                    <div className=" text-[#3538CD] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#EEF4FF]">
                      Collaboration
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="grid grid-cols-1 line-clamp-2  md:grid-cols-2 gap-8 mt-8">
            {remianBlog.length > 0 &&
              remianBlog.map((v: obj) => (
                <div key={v._id} className="gap-6 flex flex-col">
                  {v?.image?.asset?._ref ? (
                    <div
                      className="cursor-pointer"
                      onClick={() => handlePost(v)}
                    >
                      <Image
                        src={urlFor(v.image).url()}
                        width={780}
                        height={780}
                        alt={v.title || "Image"}
                        className="h-[250px] sm:h-[450px] md:h-[330px]"
                      />
                    </div>
                  ) : (
                    <div className="h-[250px] sm:h-[330px] w-full bg-gray-100"></div>
                  )}
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="customh3 line-clamp-2">{v.title}</h3>
                      <span>
                        <ArrowSvg />
                      </span>
                    </div>
                    <p className="customP pe-5 line-clamp-3 sm:line-clamp-2 ">
                      {v.des}
                    </p>
                    <div className="flex items-center customxs  gap-2  overflow-x-auto hide-scrollbar w-full">
                      <div className=" text-[#6941C6] shrink-0 px-3 font-medium py-1 rounded-[16px]  bg-[#F9F5FF]">
                        Design
                      </div>
                      <div className=" text-[#3538CD] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#EEF4FF]">
                        Branding
                      </div>
                      <div className=" text-[#C11574] shrink-0 px-3 font-medium py-1 rounded-[16px] bg-[#FDF2FA]">
                        Identity
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <ProjectSection
            popUp={popUp}
            setPopUp={setPopUp}
            blogDetail={blogDetail}
          />
        </div>
      )}
    </div>
  );
}

export default Projects;
