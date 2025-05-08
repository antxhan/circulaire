import Link from "next/link";

export default function ButtonLink({
  href,
  text = "Click me",
  icon,
  className,
}: {
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-accent font-medium text-base text-white bg-blue hover:bg-blue-600 bg-neutral-000 ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </Link>
  );
}
