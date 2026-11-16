"use client";

import { motion } from "motion/react";
import { containerVariants, itemVariants } from "../../animations/variants";
import { barlow } from "../../fonts";
import SocialContainer from "./components/SocialContainer";

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
