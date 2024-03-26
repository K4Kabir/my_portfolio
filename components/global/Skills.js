"use client";

import { motion } from "framer-motion";
const Skills = () => {
  const arr = [
    {
      name: "ReactJs",
    },
    {
      name: "ReactJs",
    },
    {
      name: "ReactJs",
    },
    {
      name: "ReactJs",
    },
    {
      name: "ReactJs",
    },
    {
      name: "ReactJs",
    },
    {
      name: "ReactJs",
    },
    {
      name: "ReactJs",
    },
    {
      name: "ReactJs",
    },
    {
      name: "ReactJs",
    },
  ];
  return (
    <motion.div className="flex gap-4 overflow-hidden">
      {arr.map((el, i) => {
        return (
          <h1
            key={i}
            className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl"
          >
            {el?.name}
          </h1>
        );
      })}
    </motion.div>
  );
};

export default Skills;
