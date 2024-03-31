"use client";

import { Github } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

const projects = [
  {
    name: "Note Keeper",
    img: "/images/Note.png",
    link: "https://github.com/K4Kabir/notekeeper",
  },
  {
    name: "Stopwatch",
    img: "/images/stop.png",
    link: "https://settimerkabir.netlify.app",
  },
  {
    name: "Messaging App (MERN)",
    img: "/images/chat.png",
    link: "https://github.com/K4Kabir/Messaging-App.git",
  },
  {
    name: "Crypto Hunter",
    img: "/images/Hunter.png",
    link: "https://app.netlify.com/sites/unrivaled-brioche-fc80bd/overview",
  },
];

const Project = () => {
  return (
    <div className="p-[7rem]">
      <h1 className="scroll-m-20 py-7 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Projects
      </h1>
      <div className="grid grid-cols-3 justity-center items-center gap-3">
        {projects.map((el, index) => {
          return (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900"
            >
              <div className="flex flex-col gap-3">
                <p className="font-bold py-2">{el.name}</p>
                <Image src={el.img} width={400} height={400} alt="image" />
                <div className="flex justify-between items-center">
                  <p>Check it out</p>
                  <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <Github />
                  </button>
                </div>
              </div>
            </BackgroundGradient>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
