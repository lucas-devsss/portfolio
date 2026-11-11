import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { poppins500 } from "../../fonts";
import MenuLink from "./MenuLink";
import { ArrowUpRight, X } from "lucide-react";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function HamburguerMenu() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="outline">
            <IconMenu2 />
          </Button>
        }
      />
      <SheetContent
        className={"min-h-dvh"}
        side={"top"}
        showCloseButton={false}
      >
        <SheetHeader className="flex flex-row justify-between border-b py-7  px-13">
          <SheetTitle className={`${poppins500.className}`}>CA.</SheetTitle>
          <SheetClose>
            <IconX stroke={2} />
          </SheetClose>
        </SheetHeader>

        <nav>
          <ul className=" mt-10 flex flex-col gap-4 justify-center items-center">
            <MenuLink href="#about-me" name="Sobre" />
            <MenuLink href="#experience" name="Experiência" />
            <MenuLink href="#projects" name="Projetos" />
            <MenuLink href="#contact" name="Contato" />
          </ul>
        </nav>

        <a
          href="#contato"
          className={`${poppins500.className}  mx-auto mt-12 text-[20px]  group flex items-center justify-center gap-2 rounded-full bg-[#0F0F13] px-12 py-6 text-white shadow-[0_8px_20px_rgba(15,15,19,0.18)] transition-all hover:opacity-80 active:opacity-70 active:scale-95 duration-150`}
        >
          Vamos conversar
          <ArrowUpRight
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-150"
            size={28}
            strokeWidth={2.5}
          />
        </a>
      </SheetContent>
    </Sheet>
  );
}
