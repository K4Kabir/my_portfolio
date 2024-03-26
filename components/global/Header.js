"use client";
import Link from "next/link";
import { ModeToggle } from "./Theme-Switch";
import { motion } from "framer-motion";
import { Github, Instagram } from "lucide-react";

const Header = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="bg-slate-700">
        <div className="flex items-end justify-between p-5 h-[4rem]">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex items-center h-full gap-3"
          >
            <p className="font-bold text-xl">Kabir.dev</p>
            <Link href={"https://github.com/K4Kabir"}>
              <Github />
            </Link>
            <Link href={"/"}>
              <Instagram />
            </Link>
          </motion.div>

          <div className="flex items-center gap-2 h-full">
            <div className="flex items-center gap-4 mr-10">
              {["About", "Projects", "Experience", "Contact"].map(
                (el, index) => {
                  return (
                    <Link href={el} key={index}>
                      {el}
                    </Link>
                  );
                }
              )}
            </div>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Download Resume
              </span>
            </button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
