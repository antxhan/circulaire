import ButtonLink from "./ButtonLink";
import CalendarIcon from "../_icons/CalendarIcon";

export default function BookDemoButton() {
    return (
        <ButtonLink
        href="/book-demo"
        text="Book a Demo"
        icon={CalendarIcon}
        className="bg-#1a58bb text-white"
        />
    )
}