import Link from "next/link";
import ExternalLinkIcon from "../_icons/ExternalLinkIcon";

export default function BlogUpdate({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className="bg-neutral-000 border-neutral-300 border-1 flex items-center w-max px-4 py-1 rounded-full gap-2 hover:bg-neutral-200 duration-300"
    >
      <span>✨</span>
      <span>{text}</span>

      <ExternalLinkIcon width={16} height={16} />
    </Link>
  );
}
