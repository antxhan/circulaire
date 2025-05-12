import ExternalLink from "../_components/ExternalLink";

type Link = {
  href: string;
  label: string;
  className?: string;
};

type FooterNavSectionProps = {
  heading: string;
  links: Link[];
};

export default function FooterNavSection({ heading, links }: FooterNavSectionProps) {
  return (
    <div className="flex flex-col">
      <h4 className="font-bold font-accent">{heading}</h4>
      <nav className="flex flex-col gap-1">
        {links.map((link) => (
          <ExternalLink key={link.href} href={link.href} className={link.className || "text-xs"}>
            {link.label}
          </ExternalLink>
        ))}
      </nav>
    </div>
  );
}
