import { ArrowUpRight } from "lucide-react";
import HeaderLink from "./components/HeaderLink";
import { poppins500 } from "../fonts";

export default function Header() {
  return (
    <header className="fixed flex justify-between items-center py-5 min-w-full px-10">
      <p>CA.</p>

      <nav>
        <ul className="flex gap-10">
          <HeaderLink href="#about-me" name="Sobre mim" />
          <HeaderLink href="#experience" name="Experiência" />
          <HeaderLink href="#projects" name="Projetos" />
          <HeaderLink href="#contact" name="Contato" />
        </ul>
      </nav>
      <a
        href="#contato"
        className={`${poppins500.className} group flex items-center gap-2 rounded-full bg-[#0F0F13] px-6 py-3 text-sm text-[#F7F7F7] shadow-[0_8px_20px_rgba(15,15,19,0.18)] transition-all hover:opacity-80 active:opacity-70 active:scale-95 duration-150`}
      >
        Vamos conversar
        <ArrowUpRight
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-150"
          size={14}
          strokeWidth={2.5}
        />
      </a>
    </header>
  );
}
