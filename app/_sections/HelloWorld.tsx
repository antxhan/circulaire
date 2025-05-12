import Section from "../_components/Section";

export default function HelloWorld() {
  return (
    <Section
      title="Hello World"
      fullWidthComponent={
        <p>
          This is a full width component. It will take up the full width of the
          screen on mobile. 0 inline padding.
        </p>
      }
    >
      <p>This is a Section. It has some inline padding.</p>
    </Section>
  );
}
