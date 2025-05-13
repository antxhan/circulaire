import A from "./A";

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
  return (
    <A
      className={`inline-flex items-center gap-2.5 px-4.5 h-11 rounded-full font-accent font-bold text-base text-nowrap text-white bg-blue hover:bg-blue-600 hover:!text-white transition-all ${className}`}
      href={href}
      onClick={onClick}
    >
      {icon ? (
        <>
          {icon}
          <span>{text}</span>
        </>
      ) : (
        <>{text}</>
      )}
    </A>
  );
}
