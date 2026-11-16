"use client";

import { motion } from "motion/react";
import { containerVariants, itemVariants } from "../../animations/variants";
import { barlow, poppins300, poppins500 } from "../../fonts";
import SkillsList from "./components/SkillsList";

export default function AboutMe() {
  return (
    <section className="min-h-dvh grid md:grid-cols-[0.7fr_1fr] md:grid-rows-2 bg-[#0F0F13] items-center px-[clamp(2.5rem,10vw,10rem)] py-30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="row-span-2 md:self-start md:sticky top-0"
      >
        <motion.h2
          variants={itemVariants}
          className={`${barlow.className} text-8xl uppercase text-white  md:text-9xl lg:text-[156px]`}
        >
          <span className="block">Sobre</span>

          <span className="flex items-end">
            <span>Mim</span>
            <span className="mb-2 ml-2 size-4 bg-purple-700" />
          </span>
        </motion.h2>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className={`text-zinc-200 ${poppins300.className} mt-10 md:mt-0 flex flex-col gap-5 justify-self-start`}
      >
        <motion.h3 variants={itemVariants} className="after:h-px after:content-[''] after:bg-zinc-700 text-zinc-400 text-sm uppercase after:flex-1 flex items-center gap-3">
          Trabalho
        </motion.h3>
        <motion.p variants={itemVariants} className="text-[clamp(1.35rem,2.4vw,1.9rem)]">
          Sou estudante de Engenharia de Software e{" "}
          <strong>desenvolvedor front-end</strong>. Atualmente, trabalho
          principalmente com <strong>React, Next.js e TypeScript</strong>,
          desenvolvendo projetos e aprimorando minhas habilidades na construção
          de aplicações web.
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg">
          Também participo do <strong>Anthem</strong>, um projeto voluntário de
          guia de carreiras, desenvolvido em equipe. Nele, contribuo com o
          desenvolvimento do frontend e tenho tido a oportunidade de trabalhar
          em conjunto com outros desenvolvedores e outras áreas, lidar com
          integrações e acompanhar de perto os desafios que fazem parte da
          construção de um projeto.
        </motion.p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className={`text-zinc-200 ${poppins300.className} mt-10 md:mt-0 text-lg flex flex-col gap-5`}
      >
        <motion.h3 variants={itemVariants} className="after:h-px after:content-[''] after:bg-zinc-700 text-zinc-500 text-sm uppercase after:flex-1 flex items-center gap-3">
          Fora do código
        </motion.h3>
        <motion.p variants={itemVariants} className="text-zinc-400">
          Mas, fora do código, também existe bastante coisa acontecendo! Adoro
          desenhar, acompanhar animes, jogar e ouvir músicas internacionais.
          Também tenho um lado bastante criativo: gosto de reimaginar histórias
          que acompanho e até criar minhas próprias.
        </motion.p>
        <motion.p variants={itemVariants} className="text-zinc-400">
          A fé cristã também faz parte de quem sou e da maneira como enxergo a
          vida. Além disso, estudo inglês, treino na academia e, de vez em
          quando, acabo inventando algum projeto novo para ocupar a cabeça.
          Basicamente, estou sempre tentando aprender alguma coisa ou encontrar
          um novo interesse pelo caminho.
        </motion.p>
      </motion.div>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="col-span-2 flex flex-col gap-8"
      >
        <motion.h3
          variants={itemVariants}
          className={`${poppins500.className} after:h-px after:content-[''] after:bg-zinc-700 text-zinc-400 text-lg uppercase after:flex-1 flex items-center gap-3`}
        >
          skills
        </motion.h3>
        <SkillsList />
      </motion.section>
    </section>
  );
}
