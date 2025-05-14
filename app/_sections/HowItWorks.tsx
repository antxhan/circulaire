import Section from "../_components/Section";
import H2 from "../_components/H2";
import { StepToggle } from "../_components/Toggle/StepToggle";
import Video from "../_components/Video";
import BookDemoButton from "../_components/BookDemoButton";

export default function HowItWorks() {
  return (
    <Section id="demo">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <H2 className="text-left w-full md:w-auto">How it works</H2>
        <StepToggle />
        <BookDemoButton />
      </div>
      <div>
        <Video />
      </div>
    </Section>
  );
}
