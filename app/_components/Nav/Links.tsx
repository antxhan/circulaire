import ExternalLink from "../ExternalLink";
import Link from "next/link";
import { headerLinks } from "@/app/_constants/navLinks";
import ButtonLink from "../ButtonLink";
import { links } from "@/app/_constants/links";
import OnPageLink from "../OnPageLink";

export default function Links({
  className = "",
  ariaLabel,
  onLinkClick,
}: {
  className?: string;
  ariaLabel?: string;
  onLinkClick?: () => void;
}) {
  return (
    <nav
      className={`flex w-full flex-grow h-full justify-center ${className}`}
      {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
    >
      <ul className="flex flex-col items-center gap-12 md:flex-row w-full">
        {headerLinks.map(({ label, href }) => (
          <li key={href}>
            {href.startsWith("http") ? (
              <ExternalLink href={href} onClick={onLinkClick}>
                {label}
              </ExternalLink>
            ) : href.startsWith("#") ? (
              <OnPageLink href={href} onClick={onLinkClick}>
                {label}
              </OnPageLink>
            ) : (
              <Link href={href} onClick={onLinkClick}>
                {label}
              </Link>
            )}
          </li>
        ))}
        <li className="max-md:mt-auto md:ml-auto">
          <ExternalLink href={links.signIn} onClick={onLinkClick}>
            Sign in
          </ExternalLink>
        </li>
        <li>
          <ButtonLink
            href={links.booking}
            text="Book a demo"
            onClick={onLinkClick}
          />
        </li>
      </ul>
    </nav>
  );
}
