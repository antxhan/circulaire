import React from "react";
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  text = "Click me",
  icon,
  className = "bg-[#1A58BB] text-white px-4 py-2 rounded-3xl font-accent font-medium text-base hover:bg-blue-600",
}) => {
  return (
    <Link href={href} className={`inline-flex items-center gap-2 ${className}`}>
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </Link>
  );
};

export default ButtonLink;
