import Link from "next/link";

export default function ButtonLink({
  href,
  text = "Click me",
  icon,
  className,
  target,
}: {
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
  target?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-accent font-bold text-base text-neutral-000 bg-blue hover:bg-blue-600 ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </Link>
  );
}
