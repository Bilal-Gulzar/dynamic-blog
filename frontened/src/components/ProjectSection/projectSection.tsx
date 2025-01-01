"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import imageUrlBuilder from "@sanity/image-url";
import PortableText from "react-portable-text";
import Client from "@/app/santiyclient";

type blogDetail = {
  title: string;
  des: string;
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
  }>;
};

type state = {
  setPopUp: (value: boolean) => void;
  popUp: boolean;
  blogDetail: blogDetail | undefined;
};

export default function ProjectSection({ popUp, setPopUp , blogDetail}: state) {
  const path = usePathname();

  const scrollableContentRef = useRef<HTMLDivElement | null>(null);
  const topPosition = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollableContentRef.current) {
      if (!popUp) {
        enableBodyScroll(scrollableContentRef.current);
      } else {
        disableBodyScroll(scrollableContentRef.current);
      }
    }

    return () => {
      if (scrollableContentRef.current) {
        enableBodyScroll(scrollableContentRef.current);
      }
    };
  }, [popUp]);

  

  const builder = imageUrlBuilder(Client);
  function urlFor(source: any) {
    return builder.image(source);
  }


  const scrollToTop = ()=>{
   topPosition.current?.scrollIntoView({behavior:"smooth"})

  }
  return (
    <section
      onClick={() => {
        setPopUp(false), scrollToTop();
      }}
      className={`${
        popUp ? "" : "translate-y-full"
      } fixed h-screen bg-black/80 w-full p-5 flex justify-center items-center shadow-2xl top-0 z-50 bottom-0 left-0 right-0 `}
      ref={scrollableContentRef}
    >
      <div
        className={`bg-white dark:bg-[#090d1f] shadow-inner  w-[400px] flex flex-col overflow-y-auto hide-scrollbar gap-4 p-3 max-h-[80vh] rounded-md duration-300 transition-all ease-in-out  ${
          popUp ? "" : "translate-y-full"
        } `}
      >
        <div id="top" ref={topPosition}>
          {blogDetail?.image?.asset?._ref ? (
            <Image
              src={urlFor(blogDetail.image).url()}
              alt="ProjectImg"
              width={600}
              height={600}
              className="h-[230px] rounded-md"
            />
          ) : (
            <div className="h-[230px] w-full bg-gray-100"></div>
          )}
        </div>
        <div className="customP min-h-[100px]">
          <PortableText
            className="flex flex-col pb-4 w-full gap-4 customP"
            // Pass in block content straight from Sanity.io
            content={blogDetail?.blog || []}
            projectId={process.env.NEXT_PUBLIC_SANITY_KEY}
            dataset={process.env.NEXT_PUBLIC_DATABASE}
            serializers={{
              h1: (props: any) => <h1 className="customh" {...props} />,
              strong: ({ children }: { children: React.ReactNode }) => (
                <strong className="customh3">{children}</strong>
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
}
