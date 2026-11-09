import { poppins300 } from "../../fonts";

interface HeaderLinkProps {
  href: string;
  name: string;
}

export default function HeaderLink({ href, name }: HeaderLinkProps) {
  return (
    <li>
      <a
        className={`${poppins300.className} text-sm md:text-lg pb-0.5 px-1 border-b-2 border-transparent hover:border-black duration-200`}
        href={href}
      >
        {name}
      </a>
    </li>
  );
}
