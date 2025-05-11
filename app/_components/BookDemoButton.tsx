import ButtonLink from "./ButtonLink";
import CalendarIcon from "../_icons/CalendarIcon";

export default function BookDemoButton() {
    return (
        <ButtonLink
        href="https://calendar.app.google/wtUEmDXJM6m6hm4bA"
        text="Book a Demo"
        icon={<CalendarIcon />}
        />
    )
}