import { Button } from "@base-ui/react";
import { barlow, poppins500 } from "../../fonts";
import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
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
      className="min-h-dvh flex items-center flex-col leading-44 justify-center"
    >
      <div>
        <motion.h1
          variants={itemVariants}
          className={`${barlow.className} uppercase flex flex-col text-center`}
        >
          <span className="text-[275px]">caio lucas</span>
          <span className="text-[111px]">
            desenvolvedor
            <span className="ml-5 text-violet-600">front-end</span>
          </span>
        </motion.h1>
      </div>
      <div>
        <a
          href=""
          className={`${poppins500.className} text-sm border-2 rounded-full py-3 px-4 border-zinc-200`}
        >
          Linkedin
        </a>
      </div>
      {/* <div className="p-14">
        <div>
          <div>
            <h2 className={`${poppins500.className}`}>
              desenvolvedor front-end
            </h2>
            <p className={`${poppins300.className}`}>
              Meu texto massa que eu ainda não decidi
            </p>
          </div>
          <Button
            className={`${poppins500.className} flex items-center justify-between mt-6 gap-1.5  rounded-full bg-black px-6 py-3.75 text-sm font-medium text-white shadow-[0_8px_20px_rgba(15,15,19,0.18)] hover:opacity-80 active:opacity-60 hover:-translate-y-1.5 active:translate-y-1.5 transition-all cursor-pointer duration-300`}
          >
            Vamos colaborar
            <ArrowUpRight size={20} />
          </Button>
        </div>
      </div> */}
    </motion.section>
  );
}
