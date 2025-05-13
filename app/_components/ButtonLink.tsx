import Link from "next/link";
import ExternalLink from "./ExternalLink";

export default function ButtonLink({
  href,
  text = "Click me",
  icon,
  onClick,
  className = "",
}: {
  href: string;
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const clsName = `inline-flex items-center gap-2.5 px-4.5 h-11 rounded-full font-accent font-bold text-base text-nowrap text-white bg-blue hover:bg-blue-600 hover:!text-white ${className}`;
  return href.startsWith("http") ? (
    <ExternalLink href={href} className={clsName} onClick={onClick}>
      {text}
    </ExternalLink>
  ) : (
    <Link href={href} className={clsName} onClick={onClick}>
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </Link>
  );
}
