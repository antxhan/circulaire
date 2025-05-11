import Link from "next/link";
import Section from "./_components/Section";

export default function NotFound() {
  return (
    <Section className="flex flex-col items-center justify-center">
      <p
        className="
      text-center"
      >
        Oops! This page doesn{"'"}t exist. <br />
        Go back to the{" "}
        <Link href="/" className="font-bold font-accent text-xl underline">
          home page
        </Link>
        .
      </p>
    </Section>
  );
}
