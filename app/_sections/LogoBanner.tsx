import Section from "../_components/Section";
import H2 from "../_components/H2";
import LogoBannerScroll from "../_components/LogoBannerScroll";

export default function LogoBannerSection() {
  return (
    <Section fullWidthComponent={<LogoBannerScroll />}>
      <H2 className="mb-12 md:ml-6 text-center md:text-left text-3xl md:text-5xl">
        Integrate with
      </H2>
    </Section>
  );
}
