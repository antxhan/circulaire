export default function OnPageLink({
  href,
  onClick,
  className,
  children,
}: {
  href: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(onClick ? { onClick: onClick } : {})}
      {...(className ? { className: className } : {})}
    >
      {children}
    </a>
  );
}
