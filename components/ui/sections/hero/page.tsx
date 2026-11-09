"use client";

import { motion, Variants } from "motion/react";
import { barlow } from "../../fonts";
import SocialContainer from "./components/SocialContainer";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-dvh flex items-center flex-col leading-44 justify-center px-2 gap-10"
    >
      <div>
        <motion.h1
          variants={itemVariants}
          className={`${barlow.className} uppercase flex flex-col text-center gap-5`}
        >
          <span className="flex flex-col sm:flex-row items-center justify-center gap-x-[0.25em] text-[clamp(10rem,15vw,17.1875rem)] leading-[0.85]">
            <span>Caio</span>
            <span>Lucas</span>
          </span>

          <span className="flex flex-wrap justify-center items-center gap-x-[0.25em] text-[clamp(4rem,6.1vw,6.9375rem)] leading-[0.95] text-zinc-800">
            <span>Desenvolvedor</span>
            <span className="text-violet-600">Front-end</span>
          </span>
        </motion.h1>
      </div>
      <SocialContainer />
    </motion.section>
  );
}
