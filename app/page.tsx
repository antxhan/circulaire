import HeroAnimation from "./_components/HeroAnimation/HeroAnimation";
import Section from "./_components/Section";
import HelloWorld from "./_sections/HelloWorld";

export default function Home() {
  return (
    <div>
      <HelloWorld />
      <Section title="Hello World">
        <HeroAnimation />
      </Section>
    </div>
  );
}
