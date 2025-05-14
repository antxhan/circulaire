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
      className={`hover:!text-black dark:hover:!text-white bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 inline-flex items-center gap-2.5 px-4.5 h-11 rounded-full font-accent font-bold text-base text-nowrap border border-neutral-300 dark:border-neutral-800 transition-all ${className}`}
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
