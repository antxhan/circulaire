export default function OnPageLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <a href={href} {...(onClick ? { onClick: onClick } : {})}>
      {children}
    </a>
  );
}
