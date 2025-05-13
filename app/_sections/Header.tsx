import Link from "next/link";
import Nav from "../_components/Nav";
import Wrapper from "../_components/Wrapper";
import WordMarkLogo from "../_icons/WordMarkLogo";
import { links } from "../_constants/links";

export default function Header() {
  return (
    <header className="bg-neutral-100/80 backdrop-blur-md sticky top-0">
      <Wrapper className="flex items-center gap-12 font-accent h-24 font-bold">
        <Link href={links.home} className="hover:!text-neutral-900">
          <WordMarkLogo />
        </Link>
        <Nav />
      </Wrapper>
    </header>
  );
}
