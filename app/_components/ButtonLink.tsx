import Link from "next/link";
import ExternalLink from "./ExternalLink";

export default function ButtonLink({
  href,
  text = "Click me",
  icon,
  className = "",
}: {
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  const clsName = `inline-flex items-center gap-2.5 px-4.5 h-11 rounded-full font-accent font-bold text-base text-nowrap text-neutral-000 bg-blue hover:bg-blue-600 ${className}`;
  return href.startsWith("http") ? (
    // meaning it is an external link
    <ExternalLink href={href} className={clsName}>
      {text}
    </ExternalLink>
  ) : (
    <Link href={href} className={clsName}>
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </Link>
  );
}
