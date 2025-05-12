import ButtonLink from "./ButtonLink";
import CalendarIcon from "../_icons/CalendarIcon";
import { links } from "../_constants/links";

export default function BookDemoButton() {
  return (
    <ButtonLink
      href={links.booking}
      text="Book a Demo"
      icon={<CalendarIcon />}
    />
  );
}
