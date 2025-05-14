import Link from "next/link";
import Nav from "../_components/Nav";
import Wrapper from "../_components/Wrapper";
import WordMarkLogo from "../_icons/WordMarkLogo";
import { links } from "../_constants/links";

export default function Header() {
  return (
    <header className="bg-neutral-100/80 dark:bg-black/80 backdrop-blur-md sticky w-full top-0 z-9998">
      <Wrapper className="flex items-center gap-12 font-accent h-24 max-md:h-16 font-bold">
        <Link
          href={links.home}
          className="hover:!text-black dark:hover:!text-white"
        >
          <WordMarkLogo />
        </Link>
        <Nav />
      </Wrapper>
    </header>
  );
}
