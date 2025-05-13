import Link from "next/link";
import ExternalLink from "../_components/ExternalLink";
import OnPageLink from "./OnPageLink";

type Link = {
  href: string;
  label: string;
};

export default function FooterNavSection({
  heading,
  links,
}: {
  heading: string;
  links: Link[];
}) {
  return (
    <div className="flex flex-col gap-2 max-sm:text-center">
      <h4 className="font-bold font-accent text-xl">{heading}</h4>
      <ul>
        <li className="flex flex-col gap-2">
          {links.map((link) =>
            link.href.startsWith("http") ? (
              // meaning it is an external link
              <ExternalLink key={link.href} href={link.href}>
                {link.label}
              </ExternalLink>
            ) : link.href.startsWith("#") ? (
              <OnPageLink key={link.href} href={link.href}>
                {link.label}
              </OnPageLink>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </li>
      </ul>
    </div>
  );
}
