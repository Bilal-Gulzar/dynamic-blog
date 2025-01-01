import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: "About Page",
};


export default function About() {
  return (
    <div className="px-5 sm:px-7 lg:px-16 mb-20 ">
      <div className="mx-5 border-y-2 mt-8 border-gray-300 ">
        <h1 className="lg:block hidden lg:leading-tight dark:text-white text-[15rem] font-semibold text-center">
          John&nbsp;Doe
        </h1>
        <div className="sm:py-10 py-6 px-2 lg:hidden">
          <Image
            src="/John.png"
            width={1600}
            height={1600}
            alt="the blog"
            className="dark:hidden"
          />
          <Image
            src="/JohnDoe-dark.png"
            width={1600}
            height={1600}
            alt="the blog"
            className="dark:block hidden"
          />
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-6">
        <div>
          <Image
            src="/about/aboutImg.png"
            width={1256}
            height={1256}
            alt="John-Doe"
            className='h-[250px] sm:h-auto'
          />
        </div>
        <div className="space-y-2.5">
          <h4 className="customh">About Me</h4>
          <p className="customP">
            As a passionate and experienced UI designer, I am dedicated to
            creating intuitive and engaging user experiences that meet the needs
            of my clients and their users. I have a strong understanding of
            design principles and a proficiency in design tools, and I am
            comfortable working with cross-functional teams to bring projects to
            fruition. I am confident in my ability to create designs that are
            both visually appealing and functional, and I am always looking for
            new challenges and opportunities to grow as a designer.
          </p>
        </div>
        <div className="space-y-2.5">
          <h4 className="customh">Skills:</h4>
          <nav className="customP">
            <li>
              Extensive experience in UI design, with a strong portfolio of
              completed projects
            </li>
            <li>
              Proficiency in design tools such as Adobe Creative Suite and
              Sketch
            </li>
            <li>
              Excellent visual design skills, with a strong understanding of
              layout, color theory, and typography
            </li>
            <li>
              Ability to create wireframes and prototypes to communicate design
              concepts
            </li>
            <li>
              Strong communication and collaboration skills, with the ability to
              work effectively with cross-functional teams
            </li>
            <li>
              Experience conducting user research and gathering insights to
              inform design decisions
            </li>
            <li>Proficiency in HTML, CSS, and JavaScript</li>
          </nav>
        </div>
        <div className="space-y-2.5">
          <h4 className="customh">Experience:</h4>
          <nav className="customP">
            <li>
              5 years of experience as a UI designer, working on a variety of
              projects for clients in the tech and retail industries
            </li>
            <li>
              Led the design of a successful e-commerce website, resulting in a
              25% increase in online sales
            </li>
            <li>
              Created wireframes and prototypes for a mobile banking app,
              leading to a 20% increase in app usage
            </li>
            <li>
              Conducted user research and usability testing to inform the
              redesign of a healthcare provider's website, resulting in a 15%
              increase in website traffic
            </li>
          </nav>
        </div>
        <div className="space-y-2.5">
          <h4 className="customh">Education:</h4>
          <nav className="customP">
            <li>Bachelor's degree in Graphic Design</li>
            <li>Certified User Experience Designer (CUED)</li>
          </nav>
        </div>
      </div>
    </div>
  );
}
