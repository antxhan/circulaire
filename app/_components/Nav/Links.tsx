import ExternalLink from "../Links/ExternalLink";
import { headerLinks } from "@/app/_constants/navLinks";
import ButtonLink from "../Links/ButtonLink";
import { links } from "@/app/_constants/links";
import A from "../Links/A";

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
            <A href={href} onClick={onLinkClick}>
              {label}
            </A>
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
            className="!bg-blue !border-blue hover:!bg-blue-600 !text-white hover:!text-white"
          />
        </li>
      </ul>
    </nav>
  );
}
