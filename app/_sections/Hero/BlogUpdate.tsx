import ExternalLink from "@/app/_components/Links/ExternalLink";
import ExternalLinkIcon from "@/app/_icons/ExternalLinkIcon";

export default function BlogUpdate({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <ExternalLink
      href={link}
      className="bg-white hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:hover:!text-white  border-neutral-300 dark:border-neutral-800 border-1 flex items-center w-max px-4 py-1 rounded-full gap-2 transition-all"
    >
      <span>✨</span>
      <span>{text}</span>

      <ExternalLinkIcon width={16} height={16} />
    </ExternalLink>
  );
}
