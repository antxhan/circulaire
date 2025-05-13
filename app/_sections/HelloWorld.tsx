import H2 from "../_components/H2";
import Section from "../_components/Section";

export default function HelloWorld() {
  return (
    <Section
      fullWidthComponent={
        <p>
          This is a full width component. It will take up the full width of the
          screen on mobile. 0 inline padding.
        </p>
      }
    >
      <H2>Hello World</H2>
      <p>This is a Section. It has some inline padding.</p>
    </Section>
  );
}
