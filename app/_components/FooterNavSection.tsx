import ExternalLink from "../_components/ExternalLink";

type Link = {
  href: string;
  label: string;
  className?: string;
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
            <ExternalLink
              key={link.href}
              href={link.href}
              className={link.className}
            >
              {link.label}
            </ExternalLink>
          ))}
        </li>
      </ul>
    </div>
  );
}
