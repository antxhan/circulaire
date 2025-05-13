import Link from "next/link";
import A from "./Links/A";

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
          {links.map((link) => (
            <A key={link.href} href={link.href}>
              {link.label}
            </A>
          ))}
        </li>
      </ul>
    </div>
  );
}
