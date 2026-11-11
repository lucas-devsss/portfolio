import { barlow } from "../../fonts";

interface MenuLinkProps {
  href: string;
  name: string;
}

export default function MenuLink({ href, name }: MenuLinkProps) {
  return (
    <li>
      <a
        href={href}
        className={`${barlow.className} text-7xl sm:text-8xl uppercase hover:opacity-80 duration-150`}
      >
        {name}
      </a>
    </li>
  );
}
