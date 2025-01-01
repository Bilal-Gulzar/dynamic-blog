// import React, { ReactPortal } from 'react'
import ArrowSvg from '@/components/svg/arrowSvg';
import Image from 'next/image';
import PortableText from "react-portable-text";
import Client from '@/app/santiyclient';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';
import Loading from '@/app/loading';
import SubSection from '@/components/subSection/subSection';
type obj = {
  title: string;
  des: string;
  mainImage?: { _type: string; asset?: { _ref: string } };
  slug: { current: string; _type: string };
  _id: string;
  author: string;
  body: Array<{
    _type:string;
    _key:string;
    [key:string]:any
  }>;
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const slug = (await params).slug; 
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const blogDetail:obj = await Client.fetch(query);
  return {
    title: blogDetail?.title,
    description: blogDetail?.des,
  };
}


export default  async function BlogDetail({ params }: Props) {
  const slug = (await params).slug;
  const year = new Date().getFullYear();
  const date = new Date();
  const getDate = {
    day: date.getDate(),
    month: new Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
    year: date.getFullYear(),
    dayName: date.toLocaleString("en-US", { weekday: "long" }),
  };

  const builder = imageUrlBuilder(Client);

  const blogPost: obj[] = await Client.fetch(`*[_type == "post"]`);
  const query = `*[_type == "post" && slug.current == "${slug}"]`;
  const blogDetail: obj[] = await Client.fetch(query);

  function urlFor(source: any) {
    return builder.image(source);
  }
  return (
    <div className="lg:px-14 sm:px-7  h-screen mt-10  max-w-[1200px] mx-auto px-5">
      <div className="grid h-[40px] gap-6 pb-20 grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-4 pb-8 md:order-1 order-2">
          <h3 className="customh pb-6 md:mt-0 mt-5">Recent blog posts</h3>
          <div className="grid grid-cols-1 gap-8 ">
            {blogPost.length > 0 &&
              blogPost.map((v: obj) => (
                <div key={v._id} className="gap-6 flex flex-col">
                  <Link href={`/blogDetail/${v.slug.current}`}>
                    {v?.mainImage?.asset?._ref ? (
                      <Image
                        src={urlFor(v.mainImage).url()}
                        width={780}
                        height={780}
                        alt="blogImg"
                        className="h-[280px] sm:h-[450px] md:h-[280px]"
                      />
                    ) : (
                      <div className="h-[250px] w-full bg-gray-100"></div>
                    )}
                  </Link>
                  <div className="flex flex-col gap-5">
                    <div className="text-custom-xs text-[#6941C6] font-medium">
                      {v.author} • {getDate.day} {getDate.month} {getDate.year}
                    </div>
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="customh3 line-clamp-2">
                      {v.title}
                    </h3>
                      <span>
                        <ArrowSvg />
                      </span>
                    </div>
                    <p className="customP line-clamp-2 pe-5 lg:w-[384px]">
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
          <div className="md:hidden">
            <SubSection />
          </div>
        </div>

        <div className="md:col-span-8 md:order-2 order-1 ">
          {blogDetail?.length > 0 ? (
            <div className="flex flex-col gap-4">
              <div className="text-custom-xs text-[#6941C6] font-medium">
                {getDate.dayName} {getDate.day} {getDate.month} {getDate.year}
              </div>
              <div className="customh">{blogDetail[0]?.title}</div>

              <div className=" pb-5 flex">
                <PortableText
                  className="flex flex-col w-full gap-4 customP"
                  // Pass in block content straight from Sanity.io
                  content={blogDetail[0]?.body || []}
                  projectId={process.env.NEXT_PUBLIC_SANITY_KEY}
                  dataset={process.env.NEXT_PUBLIC_DATABASE}
                  serializers={{
                    h1: (props: any) => <h1 className="customh" {...props} />,
                    strong: ({ children }: { children: React.ReactNode }) => (
                      <strong className="customh3">{children}</strong>
                    ),

                    image: (props: any) => {
                      const imageUrl = props?.asset ? urlFor(props).url() : "";
                      if (!imageUrl) {
                        return null;
                      }
                      return (
                        <Image
                          src={imageUrl}
                          alt={props || "Image"}
                          width={708}
                          height={708}
                          className="h-[280px] sm:h-[450px]"
                        />
                      );
                    },

                    // li: ({ children }: ReactPortal) => (
                    //   <li className="special-list-item">{children}</li>
                    // ),
                  }}
                />
              </div>
              <div className="flex items-center customxs sm:mt-0  -mt-2 gap-3">
                <div className=" text-[#6941C6] px-3 font-medium py-1 rounded-[16px]  bg-[#F9F5FF]">
                  Design
                </div>

                <div className=" text-[#C11574] px-3 font-medium py-1 rounded-[16px] bg-[#FDF2FA]">
                  Interface
                </div>
              </div>
              <div className="md:block hidden">
                <SubSection />
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}
