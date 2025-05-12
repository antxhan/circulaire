import Link from "next/link";
import { headerLinks } from "../_constants/navLinks";
import ButtonLink from "./ButtonLink";
import ExternalLink from "./ExternalLink";
import { links } from "../_constants/links";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between w-full font-bold text-nowrap gap-12">
      <div className="flex items-center gap-12">
        {headerLinks.map(({ label, href }) =>
          href.startsWith("http") ? (
            // meaning it is an external link
            <ExternalLink key={href} href={href}>
              {label}
            </ExternalLink>
          ) : (
            <Link key={href} href={href}>
              {label}
            </Link>
          )
        )}
      </div>
      <div className="flex items-center gap-8">
        <ExternalLink href={links.signIn}>Sign in</ExternalLink>
        <ButtonLink href={links.booking} text="Book a demo" className="px-8" />
      </div>
    </nav>
  );
}
