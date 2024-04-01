"use client";

import Image from "next/image";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Linkedin } from "lucide-react";
import Skills from "./Skills";

const Me = () => {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "Kabir",
    },
    {
      text: "Malviya",
    },
    {
      text: "Frontend",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex justify-around items-center h-[100%] p-28">
      <div className="flex flex-col content-center">
        <TypewriterEffect words={words} />
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-left">
          Proven React.js Developer with total experience in developing and
          standardizing designs aligned with company brand and objectives.Strong
          proficiency in JavaScript, Typescript, HTML, CSS, and modern front-end
          frameworks including MUI and React.js.
        </p>
        <div className="flex gap-3 py-6">
          <Button>Hire Me</Button>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kabir-malviya-7660ab208/"
          >
            <Button className="flex items-center content-center">
              Visit my LinkedIn <Linkedin className="pl-2" size={30} />
            </Button>
          </a>
        </div>
        <Skills />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Image
          src={"/images/me.PNG"}
          className="rounded-[20%]"
          width={500}
          height={500}
          alt="my_image"
        />
      </motion.div>
    </div>
  );
};

export default Me;
