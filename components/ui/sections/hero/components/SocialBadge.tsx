import type { ReactNode } from "react";
import { poppins500 } from "../../../fonts";

interface SocialBadgeProps {
  name: string;
  icon: ReactNode;
  href: string;
}

export default function SocialBadge({ name, icon, href }: SocialBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={`${poppins500.className} inline-flex items-center gap-2 text-sm border-2 rounded-full py-3 px-4 border-zinc-200 hover:-translate-y-2 duration-300 hover:bg-black hover:text-white active:translate-y-1 active:opacity-70`}
    >
      {icon}
      {name}
    </a>
  );
}
