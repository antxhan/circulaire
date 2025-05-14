import Link from "next/link";
import ExternalLink from "./ExternalLink";
import OnPageLink from "./OnPageLink";

export default function A({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  return href.startsWith("http") ? (
    <ExternalLink href={href} className={className} onClick={onClick}>
      {children}
    </ExternalLink>
  ) : href.startsWith("#") ? (
    <OnPageLink key={href} href={href} className={className} onClick={onClick}>
      {children}
    </OnPageLink>
  ) : (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
