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
      className={className}
    />
  );
}
