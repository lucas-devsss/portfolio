"use client";

import { motion } from "motion/react";
import { containerVariants, itemVariants } from "../../../animations/variants";
import { poppins400, poppins500 } from "../../../fonts";

const skillGroups = [
  {
    label: "Linguagens",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    label: "Bibliotecas",
    skills: ["React", "React Hook Form", "Zod", "shadcn/ui"],
  },
  {
    label: "Frameworks",
    skills: ["Next.js", "Tailwind CSS"],
  },
  {
    label: "Ferramentas",
    skills: ["Git", "GitHub", "Figma"],
  },
];

export default function SkillsList() {
  return (
    <motion.ul
      variants={containerVariants}
      className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4"
    >
      {skillGroups.map(({ label, skills }) => (
        <motion.li key={label} variants={itemVariants} className="flex flex-col gap-4">
          <motion.h4
            variants={itemVariants}
            className={` ${poppins500.className} text-zinc-500 text-sm uppercase after:flex-1 flex items-center gap-3`}
          >
            {label}
          </motion.h4>
          <motion.ul
            variants={containerVariants}
            className={`${poppins400.className} flex flex-col gap-3 text-lg text-zinc-200`}
          >
            {skills.map((skill) => (
              <motion.li key={skill} variants={itemVariants}>
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.li>
      ))}
    </motion.ul>
  );
}
