import ButtonLink from "./Links/ButtonLink";
import CalendarIcon from "../_icons/CalendarIcon";
import { links } from "../_constants/links";

export default function BookDemoButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <ButtonLink
      href={links.booking}
      text="Book a Demo"
      icon={<CalendarIcon />}
      className={`text-white !bg-blue hover:!bg-blue-600 hover:!text-white !border-blue hover:!border-blue-600 transition-all ${className}`}
    />
  );
}
