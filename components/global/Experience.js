"use client";

import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

let experience = [
  {
    companyName: "Velocis Systems Pvt Ltd.",
    work: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nostrum pariatur facilis, iure earum repellat, quis inventore repellendus asperiores consectetur, eius maxime ipsam corporis ea autem cumque. Necessitatibus, sequi possimus!",
    img: "https://assets-global.website-files.com/640619d3c4f54e148c383b6c/644760343150f0432756da96_Velocis%20Logo.svg",
    period: "Jan 2023 - Present",
    post: "Software Developer",
  },
  {
    companyName: "Silicon Tech Lab Pvt Ltd",
    work: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate nostrum pariatur facilis, iure earum repellat, quis inventore repellendus asperiores consectetur, eius maxime ipsam corporis ea autem cumque. Necessitatibus, sequi possimus!",
    img: "https://media.glassdoor.com/sql/503743/silicon-techlab-squarelogo-1643983959442.png",
    period: "May 2022 - Jan 2023",
    post: "Software Engineer",
  },
];

const Experience = () => {
  return (
    <div className="px-[7rem]">
      <h1 className="scroll-m-20 py-7 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Experience
      </h1>
      <div className="flex items-center gap-6">
        {experience.map((el, index) => {
          return (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
            >
              {/* <Image
                src={el.img}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              /> */}
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {el.companyName}
              </p>
              <p>{el.post}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {el.work}
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Working Period</span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  {el.period}
                </span>
              </button>
            </BackgroundGradient>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
