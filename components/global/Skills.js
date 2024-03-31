"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const Skills = () => {
  const arr = [
    {
      name: "ReactJs",
      img: "/images/react.png",
    },
    {
      name: "Javascript",
      img: "/images/js.png",
    },
    {
      name: "Tailwind",
      img: "/images/tail.svg",
    },
    {
      name: "HTML",
      img: "/images/html.png",
    },
    {
      name: "Node",
      img: "/images/node.png",
    },
  ];
  return (
    <>
      <motion.div className="flex justify-start align-center gap-[3rem] py-3">
        {arr.map((el, index) => {
          return (
            <div
              className="flex flex-col justify-center items-center gap-4"
              key={index}
            >
              <Image src={el.img} width={70} height={70} />
              <p className="font-bold text-2xl mt-auto">{el.name}</p>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Skills;
