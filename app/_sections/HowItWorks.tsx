import Section from "../_components/Section";
import H2 from "../_components/H2";
import { StepToggle } from "../_components/Toggle/StepToggle";
import Video from "../_components/Video";
import BookDemoButton from "../_components/BookDemoButton";

export default function HowItWorks() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <H2 className="col-span-1 text-left">How it works</H2>
        <div className="col-span-1 flex justify-center">
          <StepToggle />
        </div>
        <div className="flex justify-end w-full md:w-auto">
          <BookDemoButton />
        </div>
      </div>
      <div>
        <Video />
      </div>
    </Section>
  );
}